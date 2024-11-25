import React, { useState, useRef, useEffect } from "react";
import styles from "./styles/AffineEditor.module.css";

const AffineEditor = () => {
  const [content, setContent] = useState(
    "Click the 🔁 button to switch between editors dynamically - they are fully compatible!"
  );
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(false);
  const [showFormatToolbar, setShowFormatToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const [showParagraphPanel, setShowParagraphPanel] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedBlock, setDraggedBlock] = useState(null);
  const [dragIndicator, setDragIndicator] = useState({
    show: false,
    position: 0,
  });
  const editorRef = useRef(null);
  const [blocks, setBlocks] = useState([
    { id: "block-1", content: "" },
    // Add more blocks as needed
  ]);

  const handleContentChange = (e) => {
    const newContent = e.target.textContent;
    setContent(newContent);
    setIsPlaceholderVisible(newContent.length === 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "/" && !e.shiftKey) {
      // Handle slash commands
      console.log("Slash command triggered");
    }
  };

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setToolbarPosition({
        top: rect.top - 50,
        left: rect.left + rect.width / 2,
      });
      setShowFormatToolbar(true);
    } else {
      setShowFormatToolbar(false);
    }
  };

  const handleDragStart = (e, blockId) => {
    setIsDragging(true);
    setDraggedBlock(blockId);

    // Create drag handle widget
    const dragHandle = document.createElement("div");
    dragHandle.className = styles.affineDragHandleWidget;
    document.body.appendChild(dragHandle);

    // Set drag image
    e.dataTransfer.setDragImage(dragHandle, 0, 0);
    e.dataTransfer.effectAllowed = "move";

    // Remove temporary element
    setTimeout(() => dragHandle.remove(), 0);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!isDragging) return;

    const editorRect = editorRef.current.getBoundingClientRect();
    const mouseY = e.clientY - editorRect.top;
    const blocks = editorRef.current.querySelectorAll(`.${styles.affineBlock}`);

    let insertPosition = 0;
    blocks.forEach((block, index) => {
      const rect = block.getBoundingClientRect();
      const blockCenter = rect.top + rect.height / 2 - editorRect.top;
      if (mouseY > blockCenter) {
        insertPosition = index + 1;
      }
    });

    setDragIndicator({
      show: true,
      position: insertPosition,
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!draggedBlock || !dragIndicator.show) return;

    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      const draggedIndex = newBlocks.findIndex((b) => b.id === draggedBlock);
      const block = newBlocks[draggedIndex];
      newBlocks.splice(draggedIndex, 1);
      newBlocks.splice(dragIndicator.position, 0, block);
      return newBlocks;
    });

    setIsDragging(false);
    setDraggedBlock(null);
    setDragIndicator({ show: false, position: 0 });
  };

  return (
    <div className={styles.affinePageRootBlockContainer}>
      <div className={styles.surfaceVoid} data-block-id="surface-1" />

      <div className={styles.affineNote} data-block-id="note-1">
        <div className={styles.affineNoteBlockContainer}>
          <div className={styles.affineBlockChildrenContainer}>
            {/* First Paragraph */}
            <div className={styles.affineParagraph} data-block-id="para-1">
              <div className={`${styles.affineBlockComponent} ${styles.light}`}>
                <div className={styles.affineParagraphBlockContainer}>
                  <div
                    className={`${styles.affineParagraphRichTextWrapper} ${styles.text}`}
                  >
                    <div
                      ref={editorRef}
                      contentEditable="true"
                      className={styles.inlineEditor}
                      data-v-root="true"
                      onInput={handleContentChange}
                      onKeyDown={handleKeyDown}
                      dangerouslySetInnerHTML={{ __html: content }}
                      onMouseUp={handleSelectionChange}
                      onDragStart={(e) => handleDragStart(e, "block-1")}
                    />
                    <div
                      className={`${styles.affineParagraphPlaceholder} ${
                        isPlaceholderVisible ? styles.visible : ""
                      }`}
                    ></div>
                  </div>
                </div>
                <div
                  className={styles.affineBlockSelection}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            {/* Second Paragraph */}
            <div className={styles.affineParagraph} data-block-id="para-2">
              <div className={`${styles.affineBlockComponent} ${styles.light}`}>
                <div className={styles.affineParagraphBlockContainer}>
                  <div
                    className={`${styles.affineParagraphRichTextWrapper} ${styles.text}`}
                  >
                    <div
                      contentEditable="true"
                      className={styles.inlineEditor}
                      data-v-root="true"
                      onInput={(e) =>
                        setIsPlaceholderVisible(
                          e.target.textContent.length === 0
                        )
                      }
                      onKeyDown={handleKeyDown}
                    />
                    <div
                      className={`${styles.affineParagraphPlaceholder} ${styles.visible}`}
                    >
                      Type '/' for commands
                    </div>
                  </div>
                </div>
                <div
                  className={styles.affineBlockSelection}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widgets */}
      <div className={styles.widgetContainer}>
        <div
          className={styles.keyboardToolbar}
          data-widget-id="affine-keyboard-toolbar-widget"
        />
        <div
          className={styles.modalWidget}
          data-widget-id="affine-modal-widget"
        />
        <div
          className={styles.innerModalWidget}
          data-widget-id="affine-inner-modal-widget"
        />
        <div
          className={styles.slashMenuWidget}
          data-widget-id="affine-slash-menu-widget"
        />
        <div
          className={styles.linkedDocWidget}
          data-widget-id="affine-linked-doc-widget"
        />
        <div
          className={styles.dragHandleWidget}
          data-widget-id="affine-drag-handle-widget"
        />
        <div
          className={styles.embedCardToolbar}
          data-widget-id="affine-embed-card-toolbar"
        />
        <div
          className={styles.formatBarWidget}
          data-widget-id="affine-format-bar-widget"
        />
        <div
          className={styles.remoteSelectionWidget}
          data-widget-id="affine-doc-remote-selection-widget"
        />
        <div
          className={styles.draggingAreaWidget}
          data-widget-id="affine-page-dragging-area-widget"
        />
        <div
          className={styles.viewportOverlayWidget}
          data-widget-id="affine-viewport-overlay-widget"
        />
        <div
          className={styles.scrollAnchoringWidget}
          data-widget-id="affine-scroll-anchoring-widget"
        />
      </div>

      {/* Format Toolbar */}
      {showFormatToolbar && (
        <editor-toolbar
          className={styles.affineFormatBarWidget}
          style={{
            display: "flex",
            top: `${toolbarPosition.top}px`,
            left: `${toolbarPosition.left}px`,
          }}
        >
          {/* Paragraph Button with Dropdown */}
          <div className={styles.paragraphButton}>
            <editor-icon-button
              className={styles.paragraphButtonIcon}
              onClick={() => setShowParagraphPanel(!showParagraphPanel)}
              tabIndex="0"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3.25 4A.75.75 0 014 3.25h16a.75.75 0 01.75.75v2.667a.75.75 0 01-1.5 0V4.75h-6.5v14.5H16a.75.75 0 010 1.5H8a.75.75 0 010-1.5h3.25V4.75h-6.5v1.917a.75.75 0 01-1.5 0z"
                />
              </svg>
            </editor-icon-button>
          </div>
        </editor-toolbar>
      )}

      {blocks.map((block) => (
        <affine-block
          key={block.id}
          className={styles.affineBlock}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, block.id)}
        >
          {/* Block content */}
        </affine-block>
      ))}
    </div>
  );
};

export default AffineEditor;
