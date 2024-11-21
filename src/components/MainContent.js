import React, { useState, useEffect } from "react";
import styles from "./styles/MainContent.module.css";
import { DragHandle } from "./icons/DragHandle";
import { useParams, useLocation } from "react-router-dom";
import { NavDatatop, NavdataBottom } from "./navdata";

import { IoIosAdd } from "react-icons/io";
import Modal from "react-modal";

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

  const getTitle = () => {
    if (subsection)
      return (
        subsection.replace(/-/g, " ").charAt(0).toUpperCase() +
        subsection.replace(/-/g, " ").slice(1)
      );
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

  // Update content when route changes
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
  }, [section, subsection, location.pathname]); // Dependencies array

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

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.mainContainer}>
        <div>
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
        </div>
      </div>

      <AddContentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position={selectedPosition}
      />
    </div>
  );
};

export default MainContent;
