import React from "react";
import styles from "./styles/EditorToolbar.module.css";

const EditorToolbar = ({
  position,
  onTypeChange,
  onDuplicate,
  onDelete,
  onUndo,
  onRedo,
}) => {
  return (
    <div
      className={styles.editorToolbar}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className={styles.paragraphButton}>
        <button className={styles.paragraphButtonIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V4.75h-6.5v14.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V4.75h-6.5v1.917a.75.75 0 0 1-1.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* Add dropdown menu here */}
      </div>

      <div className={styles.toolbarSeparator} />

      <button
        className={styles.toolbarButton}
        onClick={() => onTypeChange("bold")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.25 4A.75.75 0 0 1 7 3.25h5.958c2.67 0 4.875 2.105 4.875 4.75 0 1.515-.723 2.853-1.843 3.72 1.626.764 2.76 2.383 2.76 4.28 0 2.645-2.204 4.75-4.875 4.75H7a.75.75 0 0 1-.75-.75zm1.5 8.75v6.5h6.125c1.886 0 3.375-1.477 3.375-3.25s-1.49-3.25-3.375-3.25zm0-1.5h5.208c1.886 0 3.375-1.477 3.375-3.25s-1.489-3.25-3.375-3.25H7.75z"
          />
        </svg>
      </button>

      {/* Add other formatting buttons */}

      <div className={styles.toolbarSeparator} />

      <button className={styles.toolbarButton} onClick={onDuplicate}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6 3.25A2.75 2.75 0 0 0 3.25 6v8A2.75 2.75 0 0 0 6 16.75h1.25V18A2.75 2.75 0 0 0 10 20.75h8A2.75 2.75 0 0 0 20.75 18v-8A2.75 2.75 0 0 0 18 7.25h-1.25V6A2.75 2.75 0 0 0 14 3.25zm4 4h5.25V6c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25h-8a1.25 1.25 0 0 0-1.17.81.75.75 0 0 1-1.405-.528A2.75 2.75 0 0 1 10 7.25"
          />
        </svg>
      </button>

      <button className={styles.toolbarButton} onClick={onDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11 2.25A2.75 2.75 0 0 0 8.25 5v1.15H4a.85.85 0 0 0 0 1.7h.309l.81 11.346a2.75 2.75 0 0 0 2.743 2.554h8.276a2.75 2.75 0 0 0 2.743-2.554l.81-11.346H20a.85.85 0 0 0 0-1.7h-4.25V5A2.75 2.75 0 0 0 13 2.25zm3.25 3.9V5c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v1.15zm3.937 1.7H5.813l.802 11.24a1.25 1.25 0 0 0 1.247 1.16h8.276c.656 0 1.2-.507 1.247-1.16z"
          />
        </svg>
      </button>
    </div>
  );
};

export default EditorToolbar;
