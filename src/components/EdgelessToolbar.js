import React from "react";
import {
  AimOutlined,
  BorderOutlined,
  LinkOutlined,
  HighlightOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  AppstoreOutlined,
  TableOutlined,
} from "@ant-design/icons";
import styles from "./styles/EdgelessToolbar.module.css";

const EdgelessToolbar = () => {
  const [selectedTool, setSelectedTool] = React.useState("Select");

  const tools = [
    {
      icon: <AimOutlined />,
      label: "Select",
      action: () => console.log("Select tool activated"),
    },
    {
      icon: <BorderOutlined />,
      label: "Frame",
      action: () => console.log("Frame tool activated"),
    },
    {
      icon: <LinkOutlined />,
      label: "Connector",
      action: () => console.log("Connector tool activated"),
    },
    {
      type: "divider",
    },
    {
      icon: <FontSizeOutlined />,
      label: "Text",
      action: () => console.log("Text tool activated"),
    },
    {
      icon: <HighlightOutlined />,
      label: "Pen",
      action: () => console.log("Pen tool activated"),
    },
    {
      icon: <BgColorsOutlined />,
      label: "Highlighter",
      action: () => console.log("Highlighter tool activated"),
    },
    {
      icon: <AppstoreOutlined />,
      label: "Shapes",
      action: () => console.log("Shapes tool activated"),
    },
    {
      icon: <TableOutlined />,
      label: "Elements",
      action: () => console.log("Elements tool activated"),
    },
  ];

  const handleToolClick = (tool) => {
    if (tool.action) {
      tool.action();
      setSelectedTool(tool.label);
    }
  };

  return (
    <div className={styles.edgelessToolbar}>
      {tools.map((tool, index) =>
        tool.type === "divider" ? (
          <div key={`divider-${index}`} className={styles.divider} />
        ) : (
          <button
            key={tool.label}
            className={`${styles.toolButton} ${
              selectedTool === tool.label ? styles.selected : ""
            }`}
            title={tool.label}
            onClick={() => handleToolClick(tool)}
          >
            {tool.icon}
          </button>
        )
      )}
    </div>
  );
};

export default EdgelessToolbar;
