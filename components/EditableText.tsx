import React, { useEffect, useState } from 'react';
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
  const [localValue, setLocalValue] = useState(resolvedText);

  useEffect(() => {
    setLocalValue(resolvedText);
  }, [resolvedText]);

  const Component = as;

  return (
    <Component
      className={className}
      style={style}
      contentEditable={isEditing}
      suppressContentEditableWarning
      spellCheck={isEditing}
      data-editor-key={contentKey}
      onInput={(event) => {
        const next = (event.currentTarget as HTMLElement).innerText;
        setLocalValue(next);
      }}
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
      {localValue}
    </Component>
  );
}
