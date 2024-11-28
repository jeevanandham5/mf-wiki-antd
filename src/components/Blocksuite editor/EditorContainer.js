import React, { useEffect, useRef } from "react";
import { useEditor } from "../Blocksuite editor/EditorProvider";
import styles from "./EditorContainer.module.css";

const EditorContainer = () => {
  const { editor } = useEditor(); // Removed non-null assertion

  const editorContainerRef = useRef(null); // Changed type annotation to be compatible with JavaScript

  useEffect(() => {
    if (editorContainerRef.current && editor) {
      editorContainerRef.current.innerHTML = "";
      editorContainerRef.current.appendChild(editor);
    }
  }, [editor]);

  return (
    <div className={styles.editorContainer} ref={editorContainerRef}></div>
  );
};

export default EditorContainer;
