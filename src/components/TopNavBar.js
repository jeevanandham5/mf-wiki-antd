import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShareAlt,
  FaCommentDots,
  FaEllipsisH,
} from "react-icons/fa";
import styles from "./styles/TopNavBar.module.css";

const TopNavBar = ({ currentPath }) => {
  return (
    <div className={styles.topNavBar}>
      <div className={styles.navIcons}>
        <FaChevronLeft className={styles.navIcon} />
        <FaChevronRight className={styles.navIcon} />
      </div>
      <div className={styles.currentPath}>
        <span>{currentPath}</span>
      </div>
      <div className={styles.actionIcons}>
        <FaShareAlt className={styles.actionIcon} />
        <FaCommentDots className={styles.actionIcon} />
        <FaEllipsisH className={styles.actionIcon} />
      </div>
    </div>
  );
};

export default TopNavBar;
