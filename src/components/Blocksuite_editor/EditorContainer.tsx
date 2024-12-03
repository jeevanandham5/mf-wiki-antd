import React from "react";
import { useEffect, useRef } from "react";
import { useEditor } from "./editor/context";
import styles from "./EditorContainer.module.css";

const EditorContainer: React.FC = () => {
  const { editor } = useEditor()!;

  const editorContainerRef = useRef<HTMLDivElement>(null);

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
