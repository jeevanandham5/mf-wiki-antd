import React, { useState, useRef, useEffect } from "react";
import styles from "./styles/Block.module.css";
import {
  UndoOutlined,
  RedoOutlined,
  DownOutlined,
  SyncOutlined,
  DeleteOutlined,
  PlaySquareOutlined,
  SunOutlined,
  MoonOutlined,
  PlayCircleOutlined,
  DragOutlined,
} from "@ant-design/icons";
import { ConfigProvider, theme } from "antd";
import EdgelessToolbar from "./EdgelessToolbar";
import AffineEditor from "./AffineEditor";
import { DragHandle } from "./icons/DragHandle";

const Block = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const editorRef = useRef(null);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [editorMode, setEditorMode] = useState("page");

  const [dragging, setDragging] = useState(null);
  const [content, setContent] = useState([
    {
      id: "1",
      content: <h2>BlockSuite Playground</h2>,
    },
    {
      id: "2",
      content: <p>Welcome to Wiki</p>,
    },
    {
      id: "3",
      content: <h3>Instructions to use</h3>,
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

  // Function to generate a unique ID
  const generateId = () => "_" + Math.random().toString(36).substr(2, 9);

  // Function to add new content
  const addContent = () => {
    setContent([...content, { id: generateId(), content: "New Content" }]);
  };

  // Function to handle content change
  const handleContentChange = (id, newContent) => {
    setContent(
      content.map((item) =>
        item.id === id ? { ...item, content: newContent } : item
      )
    );
  };

  // Drag-and-drop handlers
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow a drop
  };

  const handleDragEnd = (e) => {
    // Optional: Add any cleanup logic here if needed
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("text/plain");
    if (dragIndex !== dropIndex) {
      const updatedContent = [...content];
      const [draggedItem] = updatedContent.splice(dragIndex, 1);
      updatedContent.splice(dropIndex, 0, draggedItem);
      setContent(updatedContent);
    }
  };

  const toggleEditorMode = () => {
    const newMode = editorMode === "page" ? "edgeless" : "page";
    setEditorMode(newMode);
  };

  const themeConfig = {
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    token: {
      colorPrimary: "#1890ff",
      borderRadius: 4,
    },
    components: {
      Button: {
        colorPrimary: "#1890ff",
      },
    },
  };

  useEffect(() => {
    const editor = document.querySelector("affine-editor-container");
    if (editor) {
      editorRef.current = editor;

      editor.addEventListener("input", () => {
        const newContent = editor.innerHTML;

        setHistory((prev) => {
          const newHistory = prev.slice(0, currentIndex + 1);
          return [...newHistory, newContent];
        });
        setCurrentIndex((prev) => prev + 1);
      });
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");

    const editor = document.querySelector("affine-editor-container");
    if (editor) {
      const viewport = editor.querySelector(".affinePageViewport");
      if (viewport) {
        viewport.setAttribute("data-theme", isDarkMode ? "dark" : "light");
      }
    }
  }, [isDarkMode]);

  const handleTestOperationClick = () => {
    setShowMenuItems(!showMenuItems);
    setShowSubMenu(false);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setShowSubMenu(!showSubMenu);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);

      if (editorRef.current && history[newIndex]) {
        editorRef.current.innerHTML = history[newIndex];
      }
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);

      if (editorRef.current && history[newIndex]) {
        editorRef.current.innerHTML = history[newIndex];
      }
    }
  };

  const handleSync = () => {
    console.log("Sync action triggered");
  };

  const handleClear = () => {
    console.log("Clear action triggered");
  };

  const handlePlayground = () => {
    console.log("Playground demo triggered");
  };

  const handleDocs = () => {
    window.open("https://your-docs-url.com", "_blank");
  };

  const menuItems = [
    { label: "Print", action: () => console.log("Print clicked") },
    {
      label: "Export",
      hasSubmenu: true,
      submenuItems: [
        { label: "Export as PDF", action: () => console.log("Export PDF") },
        { label: "Export as Markdown", action: () => console.log("Export MD") },
      ],
    },
    {
      label: "Import",
      hasSubmenu: true,
      submenuItems: [
        { label: "Import from File", action: () => console.log("Import file") },
        { label: "Import from URL", action: () => console.log("Import URL") },
      ],
    },
    {
      label: "Toggle CSS Debug Menu",
      action: () => console.log("Toggle CSS Debug"),
    },
    { label: "Toggle Readonly", action: () => console.log("Toggle Readonly") },
    { label: "Share Selection", action: () => console.log("Share Selection") },
    { label: "Switch Offset Mode", action: () => console.log("Switch Offset") },
    {
      label: "Toggle Outline Panel",
      action: () => console.log("Toggle Outline"),
    },
    {
      label: "Enable Outline Viewer",
      action: () => console.log("Enable Outline"),
    },
    { label: "Toggle Frame Panel", action: () => console.log("Toggle Frame") },
    {
      label: "Toggle Comment Panel",
      action: () => console.log("Toggle Comment"),
    },
    { label: "Add Note", action: () => console.log("Add Note") },
    {
      label: "Toggle Multiple Editors",
      action: () => console.log("Toggle Editors"),
    },
  ];

  const DraggableContent = ({
    children,
    onDragStart,
    onDragEnd,
    onDragOver,
  }) => {
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
  return (
    <ConfigProvider theme={themeConfig}>
      <div
        id="app"
        className={`${styles.appContainer} ${
          isDarkMode ? styles.darkMode : ""
        }`}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, null)}
      >
        <div className={styles.editorWrapper}>
          <div className={styles.mainContainer}>
            <div>
              <div
                className={styles.editor}
                contentEditable="true"
                tabIndex="0"
                translate="no"
              >
                <DraggableContent
                  onDragStart={(e) => handleDragStart(e, "debugToolbar")}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                >
                  <div className={styles.debugToolbar}>
                    <button
                      className={styles.toolbarButton}
                      onClick={handleUndo}
                    >
                      <UndoOutlined />
                    </button>
                    <button
                      className={styles.toolbarButton}
                      onClick={handleRedo}
                    >
                      <RedoOutlined />
                    </button>

                    <div className={styles.testOperations}>
                      <button
                        className={styles.toolbarButton}
                        onClick={handleTestOperationClick}
                      >
                        Test Operations <DownOutlined />
                      </button>
                      {showMenuItems && (
                        <div className={styles.menuItems}>
                          {menuItems.map((item, index) => (
                            <div key={index} className={styles.menuItemWrapper}>
                              <button
                                className={styles.menuItem}
                                onClick={item.action}
                              >
                                <span>{item.label}</span>
                                {item.hasSubmenu && (
                                  <PlayCircleOutlined
                                    className={styles.submenuArrow}
                                  />
                                )}
                              </button>
                              {item.hasSubmenu && (
                                <div className={styles.submenu}>
                                  {item.submenuItems.map(
                                    (subItem, subIndex) => (
                                      <button
                                        key={subIndex}
                                        className={styles.menuItem}
                                        onClick={subItem.action}
                                      >
                                        {subItem.label}
                                      </button>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      className={styles.toolbarButton}
                      onClick={toggleEditorMode}
                      title="Switch Editor Mode"
                    >
                      🔁
                    </button>
                    {editorMode === "edgeless" && <EdgelessToolbar />}
                    <affine-editor-container
                      data-mode={editorMode}
                      className={styles.editorContainer}
                    >
                      {/* ... your editor content ... */}
                    </affine-editor-container>
                    <button
                      className={styles.toolbarButton}
                      onClick={handleClear}
                    >
                      <DeleteOutlined />
                    </button>
                    <button
                      className={styles.toolbarButton}
                      onClick={toggleTheme}
                    >
                      {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
                    </button>
                    <button
                      className={styles.toolbarButton}
                      onClick={handlePlayground}
                    >
                      <PlaySquareOutlined />
                    </button>
                    <button
                      className={styles.toolbarButton}
                      onClick={handleDocs}
                    >
                      Docs
                    </button>
                  </div>
                </DraggableContent>
                {/* {content &&
                  content.map((item, index) => (
                    <DraggableContent
                      key={item.id}
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragEnd={handleDragEnd}
                      onDragOver={(e) => handleDragOver(e, index)}
                    >
                      {item.content}
                    </DraggableContent>
                  ))}

                <DraggableContent
                  onDragStart={(e) => handleDragStart(e, "affineEditor")}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                >
                  <affine-editor-container>
                    <div
                      data-theme="light"
                      className={styles.affinePageViewport}
                    >
                      <doc-title>
                        <div
                          data-block-is-title="true"
                          className={styles.docTitleContainer}
                        >
                          <rich-text>
                            <div
                              contentEditable="true"
                              className={styles.inlineEditor}
                            >
                              <v-line>
                                <div className={styles.titleContent}>
                                  <v-element>
                                    <span>
                                      <v-text>
                                        <span className={styles.blockTitle}>
                                          Playground
                                        </span>
                                      </v-text>
                                    </span>
                                  </v-element>
                                </div>
                              </v-line>
                            </div>
                          </rich-text>
                        </div>
                      </doc-title>
                      <div
                        className={`${styles.pageEditor} ${styles.playgroundPageEditorContainer}`}
                      >
                        <editor-host tabIndex="0">
                          <affine-page-root
                            contentEditable="true"
                            className={styles.affinePageRoot}
                          >
                            <div
                              className={styles.affinePageRootBlockContainer}
                            ></div>
                          </affine-page-root>
                        </editor-host>
                      </div>
                    </div>
                  </affine-editor-container>
                </DraggableContent>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Block;
