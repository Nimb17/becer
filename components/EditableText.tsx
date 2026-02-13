import React, { useEffect, useRef } from 'react';
import { useEditor } from '../context/EditorContext';

type EditableTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'a';

type EditableTextProps = {
  contentKey: string;
  fallback: string;
  as?: EditableTag;
  multiline?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function EditableText({
  contentKey,
  fallback,
  as = 'span',
  multiline = true,
  className,
  style,
}: EditableTextProps) {
  const { getText, isEditing, updateText } = useEditor();
  const resolvedText = getText(contentKey, fallback);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Avoid resetting caret while user is typing.
    if (isEditing && document.activeElement === element) return;

    if (element.innerText !== resolvedText) {
      element.innerText = resolvedText;
    }
  }, [resolvedText, isEditing]);

  const Component = as as any;

  return (
    <Component
      ref={elementRef}
      className={className}
      style={style}
      contentEditable={isEditing}
      suppressContentEditableWarning
      spellCheck={isEditing}
      data-editor-key={contentKey}
      onBlur={(event) => {
        const next = (event.currentTarget as HTMLElement).innerText;
        updateText(contentKey, next);
      }}
      onKeyDown={(event) => {
        if (!multiline && event.key === 'Enter') {
          event.preventDefault();
          (event.currentTarget as HTMLElement).blur();
        }
      }}
    >
      {resolvedText}
    </Component>
  );
}
