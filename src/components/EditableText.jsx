import React, { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';

export const EditableText = ({ 
  pageKey, 
  fieldKey, 
  defaultText = '', 
  tag: Tag = 'span', 
  className = '', 
  multiline = false 
}) => {
  const { isEditMode, content, updateContent } = useContent();
  const currentValue = content?.[pageKey]?.[fieldKey] ?? defaultText;
  const [localText, setLocalText] = useState(currentValue);

  useEffect(() => {
    setLocalText(currentValue);
  }, [currentValue]);

  const handleBlur = () => {
    if (localText !== currentValue) {
      updateContent(pageKey, fieldKey, localText);
    }
  };

  if (!isEditMode) {
    return <Tag className={className}>{currentValue}</Tag>;
  }

  return (
    <div className="relative inline-block">
      <Tag 
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          const newText = e.currentTarget.textContent || '';
          setLocalText(newText);
          updateContent(pageKey, fieldKey, newText);
        }}
        className={`${className} outline-none border-2 border-dashed border-accent/60 hover:border-primary bg-accent/10 focus:bg-white rounded p-1 transition-all min-h-[1.5em] cursor-text`}
      >
        {currentValue}
      </Tag>
    </div>
  );
};
