import React, { useState } from "react";
import styles from "./styles/SlashMenu.module.css";

const MENU_ITEMS = [
  {
    icon: "📝",
    title: "Text",
    description: "Just start writing with plain text",
    command: "text",
  },
  {
    icon: "1️⃣",
    title: "Numbered List",
    description: "Create a numbered list",
    command: "numbered-list",
  },
  {
    icon: "•",
    title: "Bullet List",
    description: "Create a bullet list",
    command: "bullet-list",
  },
  {
    icon: "📌",
    title: "Heading 1",
    description: "Big section heading",
    command: "h1",
  },
  {
    icon: "📎",
    title: "Heading 2",
    description: "Medium section heading",
    command: "h2",
  },
  {
    icon: "📋",
    title: "Heading 3",
    description: "Small section heading",
    command: "h3",
  },
];

const SlashMenu = ({ onSelect, searchTerm = "" }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = MENU_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.slashMenu}>
      {filteredItems.map((item, index) => (
        <div
          key={item.command}
          className={`${styles.menuItem} ${
            index === selectedIndex ? styles.selected : ""
          }`}
          onClick={() => onSelect(item.command)}
          onMouseEnter={() => setSelectedIndex(index)}
        >
          <span className={styles.icon}>{item.icon}</span>
          <div className={styles.content}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlashMenu;
