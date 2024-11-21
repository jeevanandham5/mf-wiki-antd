import React, { useState } from "react";
import styles from "./styles/NovelEditor.module.css";
import { DragHandle } from "./icons/DragHandle";

const DraggableContent = ({ children, onDragStart, onDragEnd, onDragOver }) => {
  return (
    <div
      className={styles.dragWrapper}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className={styles.dragHandle}>
        <DragHandle />
      </div>
      <div className={styles.dragContent}>{children}</div>
    </div>
  );
};

const NovelEditor = () => {
  const [dragging, setDragging] = useState(null);
  const [content, setContent] = useState([
    {
      id: "1",
      content: <h2>Welcome to Wiki Editor</h2>,
    },
    {
      id: "2",
      content: <p>Welcome to Wiki</p>,
    },
    {
      id: "3",
      content: <h3>Installation</h3>,
    },
    {
      id: "4",
      content: (
        <pre>
          <code>npm i wiki</code>
        </pre>
      ),
    },
  ]);

  const handleDragStart = (e, index) => {
    setDragging(index);
    e.dataTransfer.effectAllowed = "move";
    e.target.classList.add(styles.dragging);
  };

  const handleDragEnd = (e) => {
    setDragging(null);
    e.target.classList.remove(styles.dragging);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (dragging === null || dragging === index) return;

    setContent((prevContent) => {
      const newContent = [...prevContent];
      const draggedItem = newContent[dragging];
      newContent.splice(dragging, 1);
      newContent.splice(index, 0, draggedItem);
      return newContent;
    });

    setDragging(index);
  };

  const handleContentChange = (index, newContent) => {
    setContent((prevContent) => {
      const newContentArray = [...prevContent];
      newContentArray[index] = {
        ...newContentArray[index],
        content: newContent,
      };
      return newContentArray;
    });
  };

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.mainContainer}>
        <div>
          <div
            className={styles.editor}
            contentEditable="true"
            tabIndex="0"
            translate="no"
          >
            {content.map((item, index) => (
              <DraggableContent
                key={item.id}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleDragOver(e, index)}
              >
                {item.content}
              </DraggableContent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelEditor;
