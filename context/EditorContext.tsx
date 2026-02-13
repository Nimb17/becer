import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type ContentMap = Record<string, string>;

type SaveState = 'idle' | 'saving' | 'saved' | 'error';

type EditorContextValue = {
  content: ContentMap;
  isAuthenticated: boolean;
  isEditing: boolean;
  saveState: SaveState;
  errorMessage: string;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  toggleEditing: () => void;
  updateText: (key: string, value: string) => void;
  getText: (key: string, fallback: string) => string;
  saveContent: () => Promise<void>;
};

const EditorContext = createContext<EditorContextValue | undefined>(undefined);

const TOKEN_STORAGE_KEY = 'editor_session_token';

function sanitizeClientText(value: string): string {
  return value.replace(/\r/g, '').replace(/</g, '').replace(/>/g, '');
}

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentMap>({});
  const [draft, setDraft] = useState<ContentMap>({});
  const [token, setToken] = useState<string>(() => localStorage.getItem(TOKEN_STORAGE_KEY) ?? '');
  const [isEditing, setIsEditing] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const loadContent = useCallback(async () => {
    try {
      const apiResponse = await fetch(`/api/editor/content?t=${Date.now()}`);
      if (apiResponse.ok) {
        const payload = (await apiResponse.json()) as { content?: ContentMap };
        const loaded = payload.content ?? {};
        setContent(loaded);
        setDraft(loaded);
        return;
      }

      const staticResponse = await fetch(`/content/siteContent.json?t=${Date.now()}`);
      if (!staticResponse.ok) {
        throw new Error('No se pudo cargar el contenido editable.');
      }
      const loaded = (await staticResponse.json()) as ContentMap;
      setContent(loaded);
      setDraft(loaded);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Error al cargar contenido.');
    }
  }, []);

  useEffect(() => {
    void loadContent();
  }, [loadContent]);

  const login = useCallback(async (password: string) => {
    setErrorMessage('');
    try {
      const response = await fetch('/api/editor/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const payload = (await response.json()) as { token?: string; error?: string };
      if (!response.ok || !payload.token) {
        setErrorMessage(payload.error ?? 'Credenciales inválidas.');
        return false;
      }

      localStorage.setItem(TOKEN_STORAGE_KEY, payload.token);
      setToken(payload.token);
      return true;
    } catch {
      setErrorMessage('Editor no disponible: inicia la app con vite dev para guardar cambios.');
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setToken('');
    setIsEditing(false);
  }, []);

  const toggleEditing = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  const updateText = useCallback((key: string, value: string) => {
    const safeValue = sanitizeClientText(value);
    setDraft((prev) => ({ ...prev, [key]: safeValue }));
    setContent((prev) => ({ ...prev, [key]: safeValue }));
    setSaveState('idle');
    setErrorMessage('');
  }, []);

  const getText = useCallback(
    (key: string, fallback: string) => content[key] ?? fallback,
    [content]
  );

  const saveContent = useCallback(async () => {
    if (!token) {
      setErrorMessage('Debes iniciar sesión para guardar.');
      return;
    }

    setSaveState('saving');
    setErrorMessage('');

    try {
      const response = await fetch('/api/editor/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: draft }),
      });

      const payload = (await response.json()) as { content?: ContentMap; error?: string };
      if (!response.ok || !payload.content) {
        setSaveState('error');
        setErrorMessage(payload.error ?? 'No se pudo guardar.');
        return;
      }

      setContent(payload.content);
      setDraft(payload.content);
      setSaveState('saved');
    } catch {
      setSaveState('error');
      setErrorMessage('No se pudo guardar por un error de red.');
    }
  }, [draft, token]);

  const value = useMemo<EditorContextValue>(
    () => ({
      content,
      isAuthenticated: Boolean(token),
      isEditing,
      saveState,
      errorMessage,
      login,
      logout,
      toggleEditing,
      updateText,
      getText,
      saveContent,
    }),
    [content, token, isEditing, saveState, errorMessage, login, logout, toggleEditing, updateText, getText, saveContent]
  );

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor debe usarse dentro de EditorProvider');
  }
  return context;
}
