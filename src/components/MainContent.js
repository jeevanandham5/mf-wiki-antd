import React, { useState, useEffect, useRef } from "react";
import styles from "./styles/MainContent.module.css";
import { DragHandle } from "./icons/DragHandle";
import { useParams, useLocation } from "react-router-dom";
import { NavDatatop, NavdataBottom } from "./navdata";

import { IoIosAdd } from "react-icons/io";
import Modal from "react-modal";
import Block from "./Block";
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

Modal.setAppElement("#root");

const customModalStyles = {
  content: {
    top: "auto",
    left: "50%",
    right: "auto",
    bottom: "10%",
    marginRight: "-50%",
    transform: "translateX(-50%)",
    width: "50%",
    height: "70%",
    padding: "20px",
    borderRadius: "12px 12px 0 0",
    overflowY: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
};

const AddContentModal = ({ isOpen, onClose, position }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customModalStyles}
      contentLabel="Add Content Modal"
      closeTimeoutMS={300}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Add Content</h2>
          <button onClick={onClose} className={styles.closeButton}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.contentOptions}>
            <button className={styles.optionButton}>Add Text</button>
            <button className={styles.optionButton}>Add Image</button>
            <button className={styles.optionButton}>Add Video</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const DraggableContent = ({
  children,
  onDragStart,
  onDragEnd,
  onDragOver,
  index,
  onAddClick,
  onEdit,
}) => {
  const handleEdit = (e) => {
    onEdit(index, e.target.innerText);
  };

  return (
    <div
      className={styles.dragWrapper}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className={styles.iconContainer}>
        <div className={styles.addIcon} onClick={(e) => onAddClick(index, e)}>
          <IoIosAdd size={20} color="#B0B0B0" />
        </div>
        <div className={styles.dragHandle}>
          <DragHandle />
        </div>
      </div>
      <div
        className={styles.dragContent}
        contentEditable="true"
        onBlur={handleEdit}
        suppressContentEditableWarning={true}
      >
        {children}
      </div>
    </div>
  );
};

const MainContent = () => {
  const { section, subsection } = useParams();
  const location = useLocation();
  const [dragging, setDragging] = useState(null);
  const [content, setContent] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const editorRef = useRef(null);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [editorMode, setEditorMode] = useState("page");

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkModePreference);
  }, []);

  const getTitle = () => {
    if (subsection) {
      return (
        subsection.replace(/-/g, " ").charAt(0).toUpperCase() +
        subsection.replace(/-/g, " ").slice(1)
      );
    }
    if (section) {
      const allNavData = [...NavDatatop, ...NavdataBottom];
      const sectionData = allNavData.find((s) => s.path === section);
      return sectionData
        ? sectionData.name
        : section.replace(/-/g, " ").charAt(0).toUpperCase() +
            section.replace(/-/g, " ").slice(1);
    }
    return "Welcome to Acme";
  };

  const getCurrentPath = () => {
    if (location.pathname === "/") return "Home";
    return location.pathname
      .slice(1)
      .split("/")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1).replace(/-/g, " ")
      )
      .join(" > ");
  };

  useEffect(() => {
    const title = getTitle();
    const currentPath = getCurrentPath();

    setContent([
      {
        id: "headerImage",
        content: (
          <>
            <div className={styles.headerContainer}>
              <div
                className={styles.headerImage}
                style={{
                  "--bg-image": `url("https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                }}
              >
                <h1>{title}</h1>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "section-title",
        content: `Welcome to ${title}!`,
      },
      {
        id: "section-content",
        content: `This is the content for the ${title} ${
          subsection ? "subsection" : "section"
        }.`,
      },
    ]);
  }, [section, subsection, location.pathname]);

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

  const handleAddClick = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedPosition(index);
    setIsModalOpen(true);
  };

  const handleEdit = (index, newContent) => {
    setContent((prevContent) => {
      const newContentArray = [...prevContent];
      newContentArray[index] = {
        ...newContentArray[index],
        content: newContent,
      };
      return newContentArray;
    });
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

  return (
    <ConfigProvider theme={themeConfig}>
      <div className={styles.editorWrapper}>
        <div className={styles.mainContainer}>
          <div>
            <div className={styles.debugToolbar}>
              <button className={styles.toolbarButton} onClick={handleUndo}>
                <UndoOutlined />
              </button>
              <button className={styles.toolbarButton} onClick={handleRedo}>
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
                🔁
              </button>
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
              <button
                className={styles.toolbarButton}
                onClick={handlePlayground}
              >
                <PlaySquareOutlined />
              </button>
              <button className={styles.toolbarButton} onClick={handleDocs}>
                Docs
              </button>
            </div>
            <div className={styles.editor}>
              {content.map((item, index) => (
                <DraggableContent
                  key={item.id}
                  index={index}
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onAddClick={handleAddClick}
                  onEdit={handleEdit}
                >
                  {item.content}
                </DraggableContent>
              ))}
            </div>
            {/* <Block />*/}
          </div>
        </div>

        <AddContentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          position={selectedPosition}
        />
      </div>
    </ConfigProvider>
  );
};

export default MainContent;
