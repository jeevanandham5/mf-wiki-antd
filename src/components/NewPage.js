import React, { useState } from "react";
import { Button, Dropdown, Tooltip, Menu } from "antd";
import {
  ShareAltOutlined,
  CommentOutlined,
  ClockCircleOutlined,
  StarOutlined,
  MoreOutlined,
  RobotOutlined,
  TableOutlined,
  FormOutlined,
  AppstoreOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import styles from "./styles/NewPage.module.css";
import EditorContainer from "./Blocksuite_editor/EditorContainer";
import { EditorProvider } from "./Blocksuite_editor/EditorProvider";
import { Footer } from "antd/es/layout/layout";

// Export the newPageData array
export const newPageData = [
  {
    key: "empty",
    label: "Empty page",
    icon: <TableOutlined style={{ fontSize: "16px" }} />,
  },
  {
    key: "table",
    label: "Table",
    icon: <TableOutlined style={{ fontSize: "16px" }} />,
  },
  {
    key: "form",
    label: "Form",
    icon: <FormOutlined style={{ fontSize: "16px" }} />,
  },
  {
    key: "template",
    label: "Templates",
    icon: <AppstoreOutlined style={{ fontSize: "16px" }} />,
  },
];

const NewPage = () => {
  const [pageTitle, setPageTitle] = useState("New page");

  // Header actions
  const handleShare = () => {
    // Implement share functionality
  };

  const handleComment = () => {
    // Implement comment functionality
  };

  const handleHistory = () => {
    // Implement history functionality
  };

  const handleFavorite = () => {
    // Implement favorite functionality
  };

  const handleMore = () => {
    const items = [
      {
        key: "duplicate",
        label: "Duplicate page",
      },
      {
        key: "move",
        label: "Move to...",
      },
      {
        key: "export",
        label: "Export as...",
      },
      {
        type: "divider",
      },
      {
        key: "delete",
        label: "Delete page",
        danger: true,
      },
    ];

    return (
      <Menu
        items={items}
        onClick={({ key }) => {
          switch (key) {
            case "duplicate":
              // Handle duplicate
              console.log("Duplicating page...");
              break;
            case "move":
              // Handle move
              console.log("Moving page...");
              break;
            case "export":
              // Handle export
              console.log("Exporting page...");
              break;
            case "delete":
              // Handle delete
              console.log("Deleting page...");
              break;
            default:
              break;
          }
        }}
      />
    );
  };

  // Get started options
  const handleAskAI = () => {
    // Implement AI functionality
  };

  const handleTable = () => {
    // Implement table creation
  };

  const handleForm = () => {
    // Implement form creation
  };

  const handleTemplates = () => {
    // Implement templates functionality
  };

  return (
    <EditorProvider>
      <div className={styles.newPageContainer} style={{ width: "100%" }}>
        {/* Header */}
        <header className={styles.pageHeader}>
          <div className={styles.leftSectionHeader}>
            <div className={styles.leftSection}>
              <Button icon={<ArrowLeftOutlined />} type="text" />

              <div className={styles.addNewPage}>
                <span>Add to</span>
                <Button>New page</Button>
              </div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <Button onClick={handleShare}>Share</Button>
            <Tooltip title="Comments">
              <Button
                icon={<CommentOutlined />}
                type="text"
                onClick={handleComment}
              />
            </Tooltip>
            <Tooltip title="History">
              <Button
                icon={<ClockCircleOutlined />}
                type="text"
                onClick={handleHistory}
              />
            </Tooltip>
            <Tooltip title="Favorite">
              <Button
                icon={<StarOutlined />}
                type="text"
                onClick={handleFavorite}
              />
            </Tooltip>
            <Tooltip title="More">
              <Dropdown overlay={handleMore()} trigger={["click"]}>
                <Button icon={<MoreOutlined />} type="text" />
              </Dropdown>
            </Tooltip>
          </div>
        </header>
        <EditorContainer style={{ height: "100%" }}>
          <div className={styles.editorContent}>
            <p>Start typing here...</p>
            {/* The editor's content will be rendered here */}
          </div>
          <div style={{ padding: "20px", width: "100%" }}>
            {/* Main Content */}
            <main className={styles.mainContent}>
              <input
                type="text"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                style={{
                  fontSize: "40px",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  color: "#999",
                  background: "transparent",
                  marginBottom: "20px",
                }}
              />

              {/* Get Started Section */}
              <Footer>
                <div className={styles.getStarted}>
                  <p className={styles.getStartedText}>Get started with</p>
                  <div className={styles.getStartedButtons}>
                    <Button
                      icon={
                        <RobotOutlined
                          style={{ fontSize: "16px", color: "#666" }}
                        />
                      }
                      onClick={handleAskAI}
                    >
                      Ask AI
                    </Button>
                    <Button
                      icon={
                        <TableOutlined
                          style={{ fontSize: "16px", color: "#666" }}
                        />
                      }
                      onClick={handleTable}
                    >
                      Table
                    </Button>
                    <Button
                      icon={
                        <FormOutlined
                          style={{ fontSize: "16px", color: "#666" }}
                        />
                      }
                      onClick={handleForm}
                    >
                      Form
                    </Button>
                    <Button
                      icon={
                        <AppstoreOutlined
                          style={{ fontSize: "16px", color: "#666" }}
                        />
                      }
                      onClick={handleTemplates}
                    >
                      Templates
                    </Button>
                    <Button
                      icon={
                        <MoreOutlined
                          style={{ fontSize: "16px", color: "#666" }}
                        />
                      }
                    />
                  </div>
                </div>{" "}
              </Footer>
            </main>
          </div>
        </EditorContainer>
      </div>
    </EditorProvider>
  );
};

export default NewPage;
