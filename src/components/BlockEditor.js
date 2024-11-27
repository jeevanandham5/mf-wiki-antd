import React, { useState, useRef, useEffect } from "react";
import styles from "./styles/BlockEditor.module.css";
import SlashMenu from "./SlashMenu";
import { DragHandle } from "./icons/DragHandle";
import Toolbarwidget from "./Toolbarwidget";

const BlockEditor = () => {
  const [blocks, setBlocks] = useState([
    {
      id: "fQF03xVj82",
      content:
        "Click the 🔁 button to switch between editors dynamically - they are fully compatible!",
    },
    {
      id: "tgC-QW-AmH",
      content: "This is another draggable block",
    },
  ]);

  const [dragState, setDragState] = useState({
    isDragging: false,
    draggedId: null,
    dropTarget: null,
  });

  const dragHandleRef = useRef(null);

  const handleDragStart = (e, blockId) => {
    e.stopPropagation();
    setDragState({
      isDragging: true,
      draggedId: blockId,
      dropTarget: null,
    });

    // Create a transparent drag preview
    const dragPreview = document.createElement("div");
    dragPreview.style.width = "0px";
    dragPreview.style.height = "0px";
    dragPreview.style.opacity = "0";
    document.body.appendChild(dragPreview);

    // Set drag image to the transparent preview
    e.dataTransfer.setDragImage(dragPreview, 0, 0);
    setTimeout(() => dragPreview.remove(), 0);

    // Add dragging class to source block
    const block = e.currentTarget.closest(`.${styles.affineBlockComponent}`);
    if (block) {
      block.classList.add(styles.dragging);
    }
  };

  const handleDragOver = (e, blockId) => {
    e.preventDefault();
    if (dragState.draggedId === blockId) return;

    const block = e.currentTarget;
    const rect = block.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const dropPosition = e.clientY < midY ? "before" : "after";

    setDragState((prev) => ({
      ...prev,
      dropTarget: { id: blockId, position: dropPosition },
    }));
  };

  const handleDragEnd = (e) => {
    const { draggedId, dropTarget } = dragState;
    if (draggedId && dropTarget) {
      setBlocks((prev) => {
        const newBlocks = [...prev];
        const draggedIndex = newBlocks.findIndex((b) => b.id === draggedId);
        const targetIndex = newBlocks.findIndex((b) => b.id === dropTarget.id);
        const [draggedBlock] = newBlocks.splice(draggedIndex, 1);

        newBlocks.splice(
          dropTarget.position === "before" ? targetIndex : targetIndex + 1,
          0,
          draggedBlock
        );

        return newBlocks;
      });
    }

    // Clean up
    document.querySelectorAll(`.${styles.dragging}`).forEach((el) => {
      el.classList.remove(styles.dragging);
    });
    setDragState({
      isDragging: false,
      draggedId: null,
      dropTarget: null,
    });
  };

  const renderBlock = (block) => (
    <affine-paragraph
      key={block.id}
      data-block-id={block.id}
      className={styles.affineParagraph}
    >
      <div
        className={`${styles.affineBlockComponent} light`}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, block.id)}
        onDragOver={(e) => handleDragOver(e, block.id)}
        onDragEnd={handleDragEnd}
      >
        {/* Drag Handle */}
        <div className={styles.dragHandle} ref={dragHandleRef}>
          <div className={styles.dragHandleIcon}>
            <DragHandle />
          </div>
        </div>

        <div className={styles.affineParagraphBlockContainer}>
          <div className={`${styles.affineParagraphRichTextWrapper} text`}>
            <rich-text>
              <div
                contentEditable="true"
                className={styles.inlineEditor}
                data-v-root="true"
                onKeyDown={(e) => {
                  if (e.key === "/" && !block.content) {
                    e.preventDefault();
                    openSlashMenu();
                  }
                }}
              >
                <v-line style={{ display: "block" }}>
                  <div style={{ padding: "0 0.5px", display: "inline-block" }}>
                    <v-text>
                      <span data-v-text="true">{block.content}</span>
                    </v-text>
                  </div>
                </v-line>
              </div>
            </rich-text>

            {!block.content && (
              <div
                contentEditable="false"
                className={styles.affineParagraphPlaceholder}
                onClick={(e) => {
                  const editableDiv =
                    e.currentTarget.previousElementSibling.querySelector(
                      '[contentEditable="true"]'
                    );
                  if (editableDiv) {
                    editableDiv.focus();
                  }
                }}
              >
                Type '/' for commands
              </div>
            )}
          </div>
        </div>

        {/* Drop indicator */}
        {dragState.dropTarget?.id === block.id && (
          <div
            className={styles.dropIndicator}
            data-position={dragState.dropTarget.position}
          />
        )}
      </div>
    </affine-paragraph>
  );

  const [isSlashMenuOpen, setIsSlashMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const editorRef = useRef(null);

  // Function to calculate and set menu position
  function calculateMenuPosition() {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    setMenuPosition({
      x: rect.left,
      y: rect.bottom + window.scrollY,
    });
  }

  // Function to open the slash menu modal
  function openSlashMenu() {
    calculateMenuPosition();
    setIsSlashMenuOpen(true);
    console.log("Slash menu opened");
  }

  // Function to close the slash menu modal
  function closeSlashMenu() {
    setIsSlashMenuOpen(false);
  }

  // Remove or modify this useEffect if it's no longer needed
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeSlashMenu();
      }
    }

    const editor = editorRef.current;
    if (editor) {
      editor.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (editor) {
        editor.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  // Function to open the modal
  function openBlocksuiteModal(selectedText) {
    // Logic to display the modal with selectedText
    // Example: setModalContent(selectedText);
    // Show modal
  }

  // Event listener for text selection
  document.addEventListener("mouseup", function () {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      openBlocksuiteModal(selectedText);
    }
  });

  return (
    <div data-theme="light" className={styles.affinePageViewport}>
      <Toolbarwidget />

      <doc-title>
        <div data-block-is-title="true" className={styles.docTitleContainer}>
          <rich-text>
            <div
              contentEditable="true"
              className={styles.inlineEditor}
              data-v-root="true"
              style={{ outline: "none" }}
            >
              <v-line style={{ display: "block" }}>
                <div style={{ padding: "0 0.5px", display: "inline-block" }}>
                  <v-element>
                    <span data-v-element="true">
                      <span>
                        <v-text>
                          <span
                            data-v-text="true"
                            style={{
                              wordBreak: "break-word",
                              textWrap: "wrap",
                              whiteSpaceCollapse: "break-spaces",
                            }}
                          >
                            BlockSuite Playground
                          </span>
                        </v-text>
                      </span>
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
            data-block-id="R9BYatPLQ5"
            contentEditable="true"
            style={{ outline: "none" }}
          >
            <div className={styles.affinePageRootBlockContainer}>
              <affine-surface-void data-block-id="AfSoZhqz8x" />

              <affine-note data-block-id="tYQJsidoIN">
                <div className={styles.affineNoteBlockContainer}>
                  <div className={styles.affineBlockChildrenContainer}>
                    {blocks.map(renderBlock)}
                  </div>
                </div>
              </affine-note>

              {/* Widgets */}
              <affine-keyboard-toolbar-widget data-widget-id="affine-keyboard-toolbar-widget" />
              <affine-modal-widget data-widget-id="affine-modal-widget" />
              <affine-inner-modal-widget data-widget-id="affine-inner-modal-widget" />
              <affine-slash-menu-widget data-widget-id="affine-slash-menu-widget" />
              <affine-linked-doc-widget data-widget-id="affine-linked-doc-widget" />
              <affine-drag-handle-widget data-widget-id="affine-drag-handle-widget" />
              <affine-embed-card-toolbar data-widget-id="affine-embed-card-toolbar" />
              <affine-format-bar-widget data-widget-id="affine-format-bar-widget" />
              <affine-doc-remote-selection-widget data-widget-id="affine-doc-remote-selection-widget" />
              <affine-page-dragging-area-widget data-widget-id="affine-page-dragging-area-widget" />
              <affine-viewport-overlay-widget data-widget-id="affine-viewport-overlay-widget" />
              <affine-scroll-anchoring-widget data-widget-id="affine-scroll-anchoring-widget" />
            </div>
          </affine-page-root>
        </editor-host>
      </div>

      {isSlashMenuOpen && (
        <SlashMenu
          position={menuPosition}
          onClose={closeSlashMenu}
          style={{
            position: "absolute",
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`,
          }}
        />
      )}
    </div>
  );
};

export default BlockEditor;
