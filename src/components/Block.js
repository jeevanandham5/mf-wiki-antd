import React from "react";
import "./styles/Block.module.css"; // Importing the CSS file

const Block = () => {
  return (
    <div id="app" className="app-container">
      <div id="inspector"></div>
      <affine-editor-container>
        <div data-theme="light" className="affine-page-viewport">
          <doc-title>
            <div data-block-is-title="true" className="doc-title-container">
              <rich-text>
                <div contentEditable="true" className="inline-editor">
                  <v-line>
                    <div className="title-content">
                      <v-element>
                        <span>
                          <v-text>
                            <span className="block-title">
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
          <div className="page-editor playground-page-editor-container">
            <editor-host tabIndex="0">
              <affine-page-root
                contentEditable="true"
                className="affine-page-root"
              >
                <div className="affine-page-root-block-container">
                  <affine-note>
                    <div className="affine-note-block-container">
                      <div className="affine-block-children-container">
                        <affine-paragraph>
                          <div className="affine-paragraph-block-container">
                            <div className="affine-paragraph-rich-text-wrapper text">
                              <rich-text>
                                <div
                                  contentEditable="true"
                                  className="inline-editor"
                                >
                                  <v-line>
                                    <div className="paragraph-content">
                                      <v-text>
                                        <span className="paragraph-text">
                                          Click the 🔁 button to switch between
                                          editors dynamically - they are fully
                                          compatible!
                                        </span>
                                      </v-text>
                                    </div>
                                  </v-line>
                                </div>
                              </rich-text>
                              <div
                                contentEditable="false"
                                className="affine-paragraph-placeholder"
                              >
                                Type '/' for commands
                              </div>
                            </div>
                          </div>
                        </affine-paragraph>
                      </div>
                    </div>
                  </affine-note>
                </div>
              </affine-page-root>
            </editor-host>
          </div>
        </div>
      </affine-editor-container>

      {/* Debug Menu */}
      <div className="debug-menu default">
        <div
          className="default-toolbar"
          style={{ display: "flex", gap: "8px", padding: "8px" }}
        >
          {/* Undo/Redo Group - First group with border */}
          <div
            style={{
              display: "flex",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <sl-tooltip content="Undo" placement="bottom" hoist="">
              <sl-button
                size="medium"
                variant="default"
                style={{
                  border: "none",
                  borderRadius: "8px 0 0 8px",
                  padding: "8px 12px",
                  background: "white",
                }}
              >
                <sl-icon
                  name="arrow-counterclockwise"
                  style={{ width: "20px", height: "20px" }}
                ></sl-icon>
              </sl-button>
            </sl-tooltip>
            <sl-tooltip content="Redo" placement="bottom" hoist="">
              <sl-button
                size="medium"
                variant="default"
                disabled
                style={{
                  border: "none",
                  borderRadius: "0 8px 8px 0",
                  padding: "8px 12px",
                  background: "white",
                }}
              >
                <sl-icon
                  name="arrow-clockwise"
                  style={{ width: "20px", height: "20px" }}
                ></sl-icon>
              </sl-button>
            </sl-tooltip>
          </div>

          {/* Test Operations Button */}
          <sl-dropdown placement="bottom" hoist>
            <sl-button
              slot="trigger"
              caret
              variant="default"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "8px 12px",
                background: "white",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Test Operations
            </sl-button>
            {/* Your existing menu items */}
          </sl-dropdown>

          {/* Switch Editor Button */}
          <sl-tooltip content="Switch Editor" placement="bottom" hoist="">
            <sl-button
              variant="default"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "8px 12px",
                background: "white",
              }}
            >
              <sl-icon
                name="repeat"
                style={{ width: "20px", height: "20px" }}
              ></sl-icon>
            </sl-button>
          </sl-tooltip>

          {/* Clear Site Data Button */}
          <sl-tooltip content="Clear Site Data" placement="bottom" hoist="">
            <sl-button
              variant="default"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "8px 12px",
                background: "white",
              }}
            >
              <sl-icon
                name="trash"
                style={{ width: "20px", height: "20px" }}
              ></sl-icon>
            </sl-button>
          </sl-tooltip>

          {/* Toggle Dark Mode Button */}
          <sl-tooltip content="Toggle Dark Mode" placement="bottom" hoist="">
            <sl-button
              variant="default"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "8px 12px",
                background: "white",
              }}
            >
              <sl-icon
                name="brightness-high"
                style={{ width: "20px", height: "20px" }}
              ></sl-icon>
            </sl-button>
          </sl-tooltip>

          {/* Presentation Mode Button */}
          <sl-tooltip
            content="Enter presentation mode"
            placement="bottom"
            hoist=""
          >
            <sl-button
              variant="default"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "8px 12px",
                background: "white",
              }}
            >
              <sl-icon
                name="easel"
                style={{ width: "20px", height: "20px" }}
              ></sl-icon>
            </sl-button>
          </sl-tooltip>

          {/* Docs Button */}
          <sl-button
            variant="default"
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "8px 12px",
              background: "white",
              fontWeight: "normal",
            }}
          >
            Docs
          </sl-button>
        </div>
      </div>
    </div>
  );
};

export default Block;
