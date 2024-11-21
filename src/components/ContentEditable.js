import React, { useRef, useEffect, useState } from "react";
import styles from "../components/styles/ContentEditable.module.css";

const ContentEditable = ({ content, onChange }) => {
  const contentRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (contentRef.current && !isEditing) {
      contentRef.current.innerHTML = content;
    }
  }, [content, isEditing]);

  const handleInput = () => {
    if (contentRef.current) {
      onChange(contentRef.current.innerHTML);
    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case "b":
          e.preventDefault();
          document.execCommand("bold");
          break;
        case "i":
          e.preventDefault();
          document.execCommand("italic");
          break;
        case "u":
          e.preventDefault();
          document.execCommand("underline");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div
      ref={contentRef}
      className={styles.contentEditable}
      contentEditable="true"
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
      suppressContentEditableWarning={true}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default ContentEditable;
