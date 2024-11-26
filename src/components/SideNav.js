import React, { useEffect, useState } from "react";
import { Layout, Menu, theme, Input, Dropdown, Button, Space } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { FaEllipsisH } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import styles from "./styles/SideNav.module.css";
import { NavdataBottom, NavDatatop } from "./navdata";
import workspaces from "../data/workspaces";
import AddPageModal from "./AddPageModal";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SideNav = ({ onItemClick, currentPath }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [hoveredButton, setHoveredButton] = useState({
    sectionId: null,
    buttonId: null,
  });
  const [selectedTitle, setSelectedTitle] = useState("");
  const [activeItem, setActiveItem] = useState(null);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  useEffect(() => {
    // Update active item based on current path
    const foundItem = NavdataBottom.find((item) => item.path === currentPath);
    setActiveItem(foundItem);
  }, [currentPath]);

  const handleAddClick = (sectionId, buttonId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSection({ sectionId, buttonId });
    setIsModalOpen(true);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    onItemClick && onItemClick(item);
  };

  // Convert NavDatatop to Ant Design menu items format
  const topItems = NavDatatop.map((item, index) => ({
    key: `top${index}`,
    icon: <>{item.icon}</>,
    label: (
      <div className={styles.menuItemContainer}>
        <span className={styles.menuItemText}>{item.name}</span>
        <div
          onMouseEnter={() =>
            setHoveredButton({ sectionId: "top", buttonId: index })
          }
          onMouseLeave={() =>
            setHoveredButton({ sectionId: null, buttonId: null })
          }
          onClick={(e) => handleAddClick("top", index, e)}
          className={`${styles.addIconContainer} ${
            hoveredButton.sectionId === "top" &&
            hoveredButton.buttonId === index
              ? styles.hovered
              : ""
          }`}
        >
          <IoIosAdd size={20} color="#B0B0B0" />
        </div>
      </div>
    ),
  }));

  // Convert NavdataBottom to Ant Design menu items format

  // ... existing code ...

  const items2 = NavdataBottom.map((item, index) => ({
    key: `sub${index + 1}`,
    icon: item.icon,
    label: (
      <div className={styles.menuItemContainer}>
        <span
          className={styles.menuItemText}
          onClick={() => {
            navigate(item.path);
            handleItemClick(item);
          }}
        >
          {item.name}
        </span>
      </div>
    ),
    children: item.submenu.map((subItem, subIndex) => ({
      key: `${index}-${subIndex}`,
      label: (
        <div className={styles.menuItemContainer}>
          <span
            className={styles.menuItemText}
            onClick={() => {
              navigate(subItem.path);
              handleItemClick(subItem);
            }}
          >
            {subItem.name}
          </span>
          <div
            onMouseEnter={() =>
              setHoveredButton({
                sectionId: `${index}-${subIndex}`,
                buttonId: subIndex,
              })
            }
            onMouseLeave={() =>
              setHoveredButton({ sectionId: null, buttonId: null })
            }
            onClick={(e) => handleAddClick("subItem", subIndex, e)}
            className={`${styles.addIconContainer} ${
              hoveredButton.sectionId === `${index}-${subIndex}`
                ? styles.hovered
                : ""
            }`}
          >
            <IoIosAdd size={20} color="#B0B0B0" />
          </div>
        </div>
      ),
      icon: subItem.icon,
    })),
  }));

  return (
    <Sider
      width={280}
      style={{
        background: colorBgContainer,
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fixed Header */}
      <div className={styles.header}>
        {/* Profile Header */}
        <div className={styles.profileHeader}>
          <div className={styles.titleBar}>
            <div style={{ background: "transparent" }}>
              <div style={{ background: "transparent" }}>
                <Space className={styles.titleText}>
                  <Dropdown
                    menu={{
                      items: workspaces.map((workspace) => ({
                        key: workspace.id,
                        label: workspace.name,
                      })),
                    }}
                  >
                    <Button
                      type="text"
                      style={{
                        padding: "4px",
                        height: "auto",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "0px",
                        width: "240px",
                      }}
                    >
                      <span className={styles.titleText}>Jayalakshmi</span>
                      <DownOutlined style={{ marginLeft: "18px" }} />
                    </Button>
                  </Dropdown>
                </Space>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className={styles.searchContainer}>
          <Input
            placeholder="Search"
            className={styles.searchInput}
            style={{ outline: "none", fontSize: "16px" }}
            prefix={<SearchOutlined />}
            aria-label="Search"
          />
        </div>

        {/* Top Navigation Menu */}
        <Menu mode="inline" style={{ borderRight: 0 }} items={topItems} />
      </div>

      {/* Scrollable Content */}
      <div className={styles.scrollableContent}>
        {/* Workspace Section */}
        <div className={styles.workspaceSection}>
          <div className={styles.workspaceHeading}>
            <h3
              style={{
                marginTop: "38px",
                marginBottom: "0px",
                padding: "7px",
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              Workspace
            </h3>
          </div>
          <div className={styles.workspaceMenu}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={items2}
            />
          </div>
        </div>
      </div>

      {/* Add Page Modal */}
      <AddPageModal
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        section={selectedSection}
      />

      <div className={styles.selectedTitle}>
        <h2>{activeItem ? activeItem.name : "No Active Item"}</h2>
      </div>
    </Sider>
  );
};

export default SideNav;
