import React from "react";
import styles from "./styles/NewPage.module.css";
import {
  ExpandAltOutlined,
  CommentOutlined,
  BellOutlined,
  StarOutlined,
  MoreOutlined,
  RobotOutlined,
  TableOutlined,
  FormOutlined,
  FileTextOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const AddToPageButton = () => (
  <button className={styles.addToPageBtn} aria-label="Add to page">
    <PlusOutlined />
  </button>
);

const NewPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <header className={styles.pageHeader}>
          <div className={styles.headerControls}>
            <div className={styles.leftControls}>
              <button
                className={styles.openPageBtn}
                aria-label="Open in full page"
              >
                <ExpandAltOutlined />
              </button>
              <div className={styles.divider} />
              <AddToPageButton />
            </div>
            <div className={styles.rightControls}>
              <button className={styles.shareBtn}>Share</button>
              <button className={styles.commentsBtn} aria-label="Comments">
                <CommentOutlined />
              </button>
              <button className={styles.updatesBtn} aria-label="Updates">
                <BellOutlined />
              </button>
              <button className={styles.favoriteBtn} aria-label="Favorite">
                <StarOutlined />
              </button>
              <button className={styles.moreBtn} aria-label="Actions">
                <MoreOutlined />
              </button>
            </div>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.pageTitle}>
            <h1 contentEditable="true" placeholder="New page" />
          </div>

          <div className={styles.pageTools}>
            <div className={styles.toolsSection}>
              <h2>Get started with</h2>
              <div className={styles.toolsGrid}>
                <ToolButton icon={<RobotOutlined />} text="Ask AI" />
                <ToolButton icon={<TableOutlined />} text="Table" />
                <ToolButton icon={<FormOutlined />} text="Form" />
                <ToolButton icon={<FileTextOutlined />} text="Templates" />
                <ToolButton icon={<MoreOutlined />} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const ToolButton = ({ icon, text }) => (
  <button className={styles.toolButton}>
    {icon}
    {text && <span>{text}</span>}
  </button>
);

export default NewPage;
