import React, { useState, useRef, useEffect } from "react";
import styles from "./styles/Block.module.css"; // Ensure your CSS file uses camelCase
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
} from "@ant-design/icons";
import { ConfigProvider, theme } from "antd";
import EdgelessToolbar from "./EdgelessToolbar"; // Add this import at the top
import AffineEditor from "./AffineEditor";

const Block = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const editorRef = useRef(null);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [editorMode, setEditorMode] = useState("page"); // 'page' or 'edgeless'

  // Define the toggleEditorMode function
  const toggleEditorMode = () => {
    const editor = document.querySelector("affine-editor-container");
    if (editor) {
      const newMode = editorMode === "page" ? "edgeless" : "page";
      setEditorMode(newMode);
      editor.mode = newMode; // Update editor mode if using AFFiNE editor
    }
  };

  // Theme configuration for Ant Design
  const themeConfig = {
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    token: {
      // You can customize these tokens
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

  return (
    <ConfigProvider theme={themeConfig}>
      <div
        id="app"
        className={`${styles.appContainer} ${
          isDarkMode ? styles.darkMode : ""
        }`}
      >
        <div id="inspector"></div>
        <affine-editor-container>
          <div data-theme="light" className={styles.affinePageViewport}>
            <doc-title>
              <div
                data-block-is-title="true"
                className={styles.docTitleContainer}
              >
                <rich-text>
                  <div contentEditable="true" className={styles.inlineEditor}>
                    <v-line>
                      <div className={styles.titleContent}>
                        <v-element>
                          <span>
                            <v-text>
                              <span className={styles.blockTitle}>
                                BlockSuite Playground
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
                  <div className={styles.affinePageRootBlockContainer}>
                    <AffineEditor />
                  </div>
                </affine-page-root>
              </editor-host>
            </div>
          </div>
        </affine-editor-container>

        {/* Debug Menu */}
        <div className={styles.debugToolbar}>
          <button className={styles.toolbarButton} onClick={handleUndo}>
            <UndoOutlined />
          </button>
          <button className={styles.toolbarButton} onClick={handleRedo}>
            <RedoOutlined />
          </button>
          <div className={styles.divider} />

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
                    <button className={styles.menuItem} onClick={item.action}>
                      <span>{item.label}</span>
                      {item.hasSubmenu && (
                        <PlayCircleOutlined className={styles.submenuArrow} />
                      )}
                    </button>
                    {item.hasSubmenu && (
                      <div className={styles.submenu}>
                        {item.submenuItems.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            className={styles.menuItem}
                            onClick={subItem.action}
                          >
                            {subItem.label}
                          </button>
                        ))}
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
            <SyncOutlined />
          </button>
          {/* Show different toolbars based on mode */}
          {editorMode === "edgeless" && <EdgelessToolbar />}
          <affine-editor-container
            data-mode={editorMode}
            className={styles.editorContainer}
          >
            {/* ... your editor content ... */}
          </affine-editor-container>
          <button className={styles.toolbarButton} onClick={handleClear}>
            <DeleteOutlined />
          </button>
          <button className={styles.toolbarButton} onClick={toggleTheme}>
            {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          </button>
          <button className={styles.toolbarButton} onClick={handlePlayground}>
            <PlaySquareOutlined />
          </button>
          <button className={styles.toolbarButton} onClick={handleDocs}>
            Docs
          </button>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Block;
