import React, { useState } from "react";
import Block from "./Block";
import { ConfigProvider } from "antd";
import "./styles/MainContent.module.css";

const Home = () => {
  const [dragging, setDragging] = useState(null);
  const [contents, setContents] = useState([
    {
      id: "welcome",
      content: "👋 Welcome to My Interactive Document",
      type: "heading",
    },
    {
      id: "intro",
      content: "This is an interactive document where you can:",
      type: "text",
    },
    {
      id: "list1",
      content: "• Drag and drop blocks to reorganize content",
      type: "list",
    },
    {
      id: "list2",
      content: "• Click the + icon to add new blocks",
      type: "list",
    },
    {
      id: "list3",
      content: "• Type '/' to access the command menu",
      type: "list",
    },
  ]);

  const handleDragStart = (e, index) => {
    setDragging(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = (e) => {
    setDragging(null);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (dragging === null || dragging === index) return;

    setContents((prevContents) => {
      const newContents = [...prevContents];
      const draggedItem = newContents[dragging];
      newContents.splice(dragging, 1);
      newContents.splice(index, 0, draggedItem);
      return newContents;
    });

    setDragging(index);
  };

  const handleAddClick = (index, e) => {
    console.log("Add clicked at index:", index);
  };

  return (
    <ConfigProvider>
      <div className="app-container">
        <div className="editor-container">
          <div className="affine-page-root-block-container">
            <affine-surface-void data-block-id="sA9XTBljxQ"></affine-surface-void>
            <affine-note data-block-id="V3VtRT0QtP">
              <div className="affine-note-block-container">
                <div className="affine-block-children-container">
                  {contents.map((item, index) => (
                    <Block
                      key={item.id}
                      content={item.content}
                      index={index}
                      onAddClick={handleAddClick}
                      handleDragStart={handleDragStart}
                      handleDragEnd={handleDragEnd}
                      handleDragOver={handleDragOver}
                    />
                  ))}
                </div>
              </div>
            </affine-note>

            {/* AFFiNE Widgets */}
            <affine-keyboard-toolbar-widget data-widget-id="affine-keyboard-toolbar-widget"></affine-keyboard-toolbar-widget>
            <affine-modal-widget data-widget-id="affine-modal-widget"></affine-modal-widget>
            <affine-inner-modal-widget data-widget-id="affine-inner-modal-widget"></affine-inner-modal-widget>
            <affine-slash-menu-widget data-widget-id="affine-slash-menu-widget"></affine-slash-menu-widget>
            <affine-linked-doc-widget data-widget-id="affine-linked-doc-widget"></affine-linked-doc-widget>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Home;
