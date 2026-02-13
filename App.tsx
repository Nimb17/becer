import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import MapSection from './components/MapSection';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import SercotecBanner from './components/SercotecBanner';
import Footer from './components/Footer';
import { EditorProvider, useEditor } from './context/EditorContext';

function EditorPanel() {
  const [password, setPassword] = useState('');
  const {
    isAuthenticated,
    isEditing,
    saveState,
    errorMessage,
    login,
    logout,
    toggleEditing,
    saveContent,
  } = useEditor();

  return (
    <div className="editor-panel">
      {!isAuthenticated ? (
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await login(password);
            setPassword('');
          }}
          className="editor-login-form"
        >
          <p style={{ margin: 0, fontWeight: 700, fontSize: '0.8rem' }}>Editor</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Clave de editor"
            required
            className="editor-input"
          />
          <button type="submit" className="editor-button primary">
            Ingresar
          </button>
        </form>
      ) : (
        <div className="editor-actions">
          <button type="button" className="editor-button" onClick={toggleEditing}>
            {isEditing ? 'Salir edicion' : 'Editar inline'}
          </button>
          <button type="button" className="editor-button primary" onClick={() => void saveContent()}>
            {saveState === 'saving' ? 'Guardando...' : 'Guardar'}
          </button>
          <button type="button" className="editor-button" onClick={logout}>
            Cerrar sesion
          </button>
        </div>
      )}
      {(errorMessage || saveState === 'saved') && (
        <p className={`editor-status ${errorMessage ? 'error' : 'ok'}`}>
          {errorMessage || 'Cambios guardados en content/siteContent.json'}
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [isEditorPanelVisible, setIsEditorPanelVisible] = useState(false);

  useEffect(() => {
    const handleToggleEditor = () => {
      setIsEditorPanelVisible((prev) => !prev);
    };

    window.addEventListener('editor:toggle-visibility', handleToggleEditor);
    return () => window.removeEventListener('editor:toggle-visibility', handleToggleEditor);
  }, []);

  return (
    <EditorProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <PainPoints />
          <Solutions />
          <MapSection />
          <Portfolio />
          <Process />
          {/* <SercotecBanner /> */}
        </main>
        <Footer />
        {isEditorPanelVisible && <EditorPanel />}
      </div>
    </EditorProvider>
  );
}
