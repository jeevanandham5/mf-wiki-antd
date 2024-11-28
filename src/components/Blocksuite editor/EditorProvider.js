import React from "react";
import { initEditor } from "../Blocksuite editor/editor/editor";
import { EditorContext } from "../Blocksuite editor/editor/context";
import { useContext } from "react";

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
};

export const EditorProvider = ({ children }) => {
  const { editor, collection } = initEditor();

  return (
    <EditorContext.Provider value={{ editor, collection }}>
      {children}
    </EditorContext.Provider>
  );
};
