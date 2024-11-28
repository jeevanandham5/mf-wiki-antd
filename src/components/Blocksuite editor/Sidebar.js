import { useEffect, useState } from "react";
import { Doc } from "@blocksuite/store";
import { useEditor } from "../Blocksuite editor/EditorProvider";

const Sidebar = () => {
  const { collection, editor } = useEditor();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    if (!collection || !editor) return;
    const updateDocs = () => {
      const updatedDocs = [...collection.docs.values()].map((blocks) =>
        blocks.getDoc()
      );
      setDocs(updatedDocs);
    };
    updateDocs();

    const disposable = [
      collection.slots.docUpdated.on(updateDocs),
      editor.slots.docLinkClicked.on(updateDocs),
    ];

    return () => disposable.forEach((d) => d.dispose());
  }, [collection, editor]);

  return (
    <div className="sidebar">
      <div className="header">All Docs</div>
      <div className="doc-list">
        {docs.map((doc) => (
          <div
            className={`doc-item ${editor?.doc === doc ? "active" : ""}`}
            key={doc.id}
            onClick={() => {
              if (editor) {
                editor.doc = doc;
                updateDocs();
              }
            }}
          >
            {doc.meta?.title || "Untitled"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
