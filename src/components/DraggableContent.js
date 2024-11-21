// src/components/DraggableContent.js
import React, { useState, useRef } from "react";
import { DragHandle } from "./icons/DragHandle";
import styles from "../components/styles/DraggableContent.module.css";

const DraggableContent = ({
  content,
  onDragStart,
  onDragEnd,
  onDragOver,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const contentRef = useRef(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInput = (e) => {
    // Update content without losing cursor position
    if (onEdit) {
      onEdit(e.currentTarget.innerHTML);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      contentRef.current.blur();
    }
  };

  return (
    <div
      draggable={!isEditing}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      className={styles.dragWrapper}
    >
      <div className={styles.dragHandle}>
        <DragHandle />
      </div>
      <div
        ref={contentRef}
        className={`${styles.dragContent} ${styles.editableContent}`}
        contentEditable={true}
        onDoubleClick={handleDoubleClick}
        onInput={handleInput}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{
          __html: typeof content === "string" ? content : "",
        }}
      />
    </div>
  );
};

export default DraggableContent;
