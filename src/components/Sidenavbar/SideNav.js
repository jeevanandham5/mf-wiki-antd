import React, { useEffect, useState } from "react";
import { Layout, Menu, theme, Input, Dropdown, Button, Space } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { FaEllipsisH } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import styles from "../styles/SideNav.module.css";
import { NavdataBottom, NavDatatop } from "../navdata";
import workspaces from "../../data/workspaces";
import AddPageModal from "../../components/AddPageModal";
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
  const [hoveredSection, setHoveredSection] = useState(null);
  const [clickedSection, setClickedSection] = useState(null);
  const [openKeys, setOpenKeys] = useState([]);

  const handleItemHover = (sectionId) => {
    setHoveredSection(sectionId);
  };

  const handleItemLeave = () => {
    setHoveredSection(null);
  };

  const handleItemClick = (sectionId) => {
    setClickedSection((prev) => (prev === sectionId ? null : sectionId));
  };

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

  const handleToggleSubmenu = (key) => {
    setOpenKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
  };

  const generateMenuItems = (data, prefix) =>
    data.map((item, index) => ({
      key: `${prefix}-${index}`,
      icon: (
        <div
          className={styles.menuIcon}
          onMouseEnter={() => handleItemHover(`${prefix}-${index}`)}
          onMouseLeave={handleItemLeave}
        >
          {hoveredSection === `${prefix}-${index}` ? (
            <span
              role="img"
              aria-label="down"
              className="anticon anticon-down"
              style={{ marginRight: "8px", display: "inline-block" }}
            >
              <DownOutlined
                className={styles.submenuArrow}
                rotate={clickedSection === `${prefix}-${index}` ? 180 : 0}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleSubmenu(`${prefix}-${index}`);
                  handleItemClick(`${prefix}-${index}`);
                }}
              />
            </span>
          ) : (
            <span className={styles.itemIcon}>{item.icon}</span>
          )}
        </div>
      ),
      label: (
        <div
          className={styles.menuItemContainer}
          onMouseEnter={() => handleItemHover(`${prefix}-${index}`)}
          onMouseLeave={handleItemLeave}
          style={{ display: "flex", alignItems: "center" }}
        >
          <span
            className={styles.menuItemText}
            style={{
              display: "flex",
              alignItems: "center",
              color: "inherit",
              textDecoration: "none",
              userSelect: "none",
              transition: "none",
              cursor: "pointer",
              width: "100%",
              borderRadius: "6px",
              marginLeft: "0px",
              fontSize: "14px",
              padding: "8px 0",
            }}
          >
            {item.name}
          </span>
        </div>
      ),
      children: item.submenu?.map((subItem, subIndex) => ({
        key: `${prefix}-${index}-${subIndex}`,
        icon: (
          <div
            onMouseEnter={() =>
              handleItemHover(`${prefix}-${index}-${subIndex}`)
            }
            onMouseLeave={handleItemLeave}
          >
            {hoveredSection === `${prefix}-${index}-${subIndex}` ? (
              <DownOutlined
                className={styles.submenuArrow}
                rotate={
                  clickedSection === `${prefix}-${index}-${subIndex}` ? 180 : 0
                }
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleSubmenu(`${prefix}-${index}-${subIndex}`);
                  handleItemClick(`${prefix}-${index}-${subIndex}`);
                }}
              />
            ) : (
              <span className={styles.submenuIcon}>{subItem.icon}</span>
            )}
          </div>
        ),
        label: (
          <span
            className={styles.menuItemText}
            style={{
              display: "flex",
              alignItems: "center",
              color: "inherit",
              textDecoration: "none",
              userSelect: "none",
              transition: "none",
              cursor: "pointer",
              width: "100%",
              borderRadius: "6px",
              marginLeft: "0px",
              fontSize: "14px",
              padding: "8px 0",
            }}
            onClick={() => navigate(subItem.path)}
          >
            {subItem.name}
          </span>
        ),
      })),
    }));

  const items2 = generateMenuItems(NavdataBottom, "bottom");
  const topItems = generateMenuItems(NavDatatop, "top");

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
            style={{ outline: "none", fontSize: "14px" }}
            prefix={<SearchOutlined />}
            aria-label="Search"
          />
        </div>

        {/* Top Navigation Menu */}
        <Menu mode="inline" className={styles.customMenu} items={topItems} />
        <div className={styles.workspaceHeading}>
          <h4
            style={{
              marginBottom: "0px",
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              fontSize: "12px",
              color: "rgb(145, 145, 142)",
            }}
          >
            Workspace
          </h4>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className={styles.scrollableContent}>
        {/* Workspace Section */}
        <div className={styles.workspaceSection}>
          <div className={styles.workspaceMenu}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
                paddingLeft: "0px",
                ".ant-menu-submenu-arrow": { display: "none" },
              }}
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
