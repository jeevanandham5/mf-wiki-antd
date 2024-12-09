import {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import {
  FaHome,
  FaComments,
  FaShareAlt,
  FaLock,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaCogs,
  FaBriefcase,
  FaBullhorn,
  FaBox,
  FaHandshake,
  FaCode,
  FaDatabase,
  FaUserPlus,
  FaGraduationCap,
  FaMedkit,
} from "react-icons/fa";
// Define sizes for the icons
const iconsize = 15; // Default size for main navigation icons
const submenuicon = 15; // Size for submenu icons
// Define styles for submenu items
const submenuStyle = { marginLeft: "0px", paddingLeft: "0px" }; // Dynamic style for submenu items
// Define the top-level navigation items
export const NavDatatop = [
  {
    name: "Home",
    icon: <FaHome size={iconsize} color="#36B37E" />,
    path: "/Home",
  },
  {
    name: "Uni AI",
    icon: <FaComments size={iconsize} color="#00B8D9" />,
    path: "/Uni AI",
  },
  {
    name: "Inbox",
    icon: <FaShareAlt size={iconsize} color="#6554C0" />,
    path: "/inbox",
  },
];
// Define the bottom-level navigation items with potential submenus
export const NavdataBottom = [
  {
    name: "My private channel",
    icon: <FaLock size={iconsize} color="#FFAB00" />,
    path: "/my-private-channel",
    submenu: [
      {
        name: "Company home",
        icon: <FaHome size={submenuicon} color="#FF5630" />,
        path: "/my-private-channel/company-home",
        style: submenuStyle, // Use dynamic style
      },
    ],
  },
  {
    name: "Admin & finance",
    icon: <FaChartLine size={iconsize} color="#FF5630" />,
    path: "/admin-finance",
    submenu: [
      {
        name: "Benefits",
        icon: <FaMedkit size={submenuicon} color="#00B8D9" />,
        path: "/admin-finance/benefits",
        style: submenuStyle, // Use dynamic style
      },
    ],
  },
  {
    name: "Data",
    icon: <FaChartLine size={iconsize} color="#36B37E" />,
    path: "/data",
    submenu: [
      {
        key: "Reports",
        label: "Reports",
        icon: <FaChartLine size={submenuicon} color="#00B8D9" />,
      },
      {
        key: "Analytics",
        label: "Analytics",
        icon: <FaBullhorn size={submenuicon} color="#FFAB00" />,
      },
      {
        key: "Data Management",
        label: "Data Management",
        icon: <FaDatabase size={submenuicon} color="#6554C0" />,
      },
    ],
  },
  {
    name: "Engineering",
    icon: <FaCogs size={iconsize} color="#00B8D9" />,
    path: "/engineering",
    submenu: [
      {
        name: "Frontend",
        icon: <FaCode size={submenuicon} color="#FF5630" />,
        path: "/engineering/frontend",
      },
      {
        name: "Backend",
        icon: <FaDatabase size={submenuicon} color="#36B37E" />,
        path: "/engineering/backend",
      },
    ],
  },
  {
    name: "Human Resources",
    icon: <FaUsers size={iconsize} color="#FF5630" />,
    path: "/human-resources",
    submenu: [
      {
        name: "Recruitment",
        icon: <FaUserPlus size={submenuicon} color="#FF5630" />,
        path: "/human-resources/recruitment",
      },
      {
        name: "Training",
        icon: <FaGraduationCap size={submenuicon} color="#36B37E" />,
        path: "/human-resources/training",
      },
      {
        name: "Benefits",
        icon: <FaMedkit size={submenuicon} color="#00B8D9" />,
        path: "/human-resources/benefits",
      },
    ],
  },
  {
    name: "General",
    icon: <FaBriefcase size={iconsize} color="#6554C0" />,
    path: "/general",
    submenu: [
      {
        name: "Company home",
        icon: <FaHome size={submenuicon} color="#FF5630" />,
        path: "/general/company-home",
      },
      {
        name: "The Handbook",
        icon: <FaComments size={submenuicon} color="#36B37E" />,
        path: "/general/the-handbook",
      },
      {
        name: "People & culture",
        icon: <FaUsers size={submenuicon} color="#00B8D9" />,
        path: "/general/people-culture",
      },
      {
        name: "Strategy",
        icon: <FaChartLine size={submenuicon} color="#6554C0" />,
        path: "/general/strategy",
      },
      {
        name: "Policies",
        icon: <FaLock size={submenuicon} color="#FFAB00" />,
        path: "/general/policies",
      },
    ],
  },
  {
    name: "Marketing",
    icon: <FaBullhorn size={iconsize} color="#36B37E" />,
    path: "/marketing",
    submenu: [],
  },
  {
    name: "Product",
    icon: <FaBox size={iconsize} color="#00B8D9" />,
    path: "/product",
    submenu: [
      {
        key: "Product Overview",
        label: "Product Overview",
        icon: <FaBriefcase size={submenuicon} color="#FF5630" />,
      },
      {
        key: "Product Features",
        label: "Product Features",
        icon: <FaBullhorn size={submenuicon} color="#36B37E" />,
      },
      {
        key: "Product Roadmap",
        label: "Product Roadmap",
        icon: <FaChartLine size={submenuicon} color="#00B8D9" />,
      },
    ],
  },
  {
    name: "Sales & CS",
    icon: <FaHandshake size={iconsize} color="#6554C0" />,
    path: "/sales-cs",
    submenu: [
      {
        name: "Company home",
        icon: <FaHome size={submenuicon} color="#FF5630" />,
        path: "/sales-cs/company-home",
      },
    ],
  },
  {
    name: "Security",
    icon: <FaShieldAlt size={iconsize} color="#FFAB00" />,
    path: "/security",
    submenu: [
      {
        key: "User Permissions",
        label: "User Permissions",
        icon: <FaLock size={submenuicon} color="#FFAB00" />,
      },
      {
        key: "Data Protection",
        label: "Data Protection",
        icon: <FaShieldAlt size={submenuicon} color="#00B8D9" />,
      },
    ],
  },
];

export const newNavData = [
  {
    key: "Home",
    label: "Home",
    icon: <FaHome size={iconsize} color="#36B37E" />,
  },
  {
    key: "Uni AI",
    label: "Uni AI",
    icon: <FaComments size={iconsize} color="#00B8D9" />,
  },

  {
    key: "Inbox",
    label: "Inbox",
    icon: <FaShareAlt size={iconsize} color="#6554C0" />,
  },
  {
    type: "divider",
  },
  {
    key: "Workspace",
    label: "Workspace",
    type: "group",
    style: {
      scrollbarWidth: "thin",
      overflowY: "auto",
      maxHeight: "calc(100vh - 150px)",
    },

    children: [
      {
        key: "My private channel",
        label: "My private channel",
        icon: <FaHome size={iconsize} color="#FF5630" />,
        children: [
          {
            key: "Company home",
            label: "Company home",
            icon: <FaHome size={submenuicon} color="#FF5630" />,
          },
        ],
      },
      {
        key: "Admin & finance",
        label: "Admin & finance",
        icon: <FaChartLine size={iconsize} color="#FF5630" />,
        children: [
          {
            key: "Benefits",
            label: "Benefits",
            icon: <FaMedkit size={submenuicon} color="#00B8D9" />,
          },
        ],
      },
      {
        key: "Data",
        label: "Data",
        icon: <FaChartLine size={iconsize} color="#36B37E" />,
        children: [
          {
            key: "Reports",
            label: "Reports",
            icon: <FaChartLine size={submenuicon} color="#00B8D9" />,
          },
          {
            key: "Analytics",
            label: "Analytics",
            icon: <FaBullhorn size={submenuicon} color="#FFAB00" />,
          },
          {
            key: "Data Management",
            label: "Data Management",
            icon: <FaDatabase size={submenuicon} color="#6554C0" />,
          },
        ],
      },
      {
        key: "Engineering",
        label: "Engineering",
        icon: <FaCogs size={iconsize} color="#00B8D9" />,
        children: [
          {
            key: "Frontend",
            label: "Frontend",
            icon: <FaCode size={submenuicon} color="#FF5630" />,
          },
          {
            key: "Backend",
            label: "Backend",
            icon: <FaDatabase size={submenuicon} color="#36B37E" />,
          },
        ],
      },
      {
        key: "Human Resources",
        label: "Human Resources",
        icon: <FaUsers size={iconsize} color="#FF5630" />,
        children: [
          {
            key: "Recruitment",
            label: "Recruitment",
            icon: <FaUserPlus size={submenuicon} color="#FF5630" />,
          },
          {
            key: "Training",
            label: "Training",
            icon: <FaGraduationCap size={submenuicon} color="#36B37E" />,
          },
          {
            key: "Benefits",
            label: "Benefits",
            icon: <FaMedkit size={submenuicon} color="#00B8D9" />,
          },
        ],
      },
      {
        key: "General",
        label: "General",
        icon: <FaBriefcase size={iconsize} color="#6554C0" />,
        children: [
          {
            key: "Company home",
            label: "Company home",
            icon: <FaHome size={submenuicon} color="#FF5630" />,
          },
          {
            key: "The Handbook",
            label: "The Handbook",
            icon: <FaComments size={submenuicon} color="#36B37E" />,
          },
          {
            key: "People & culture",
            label: "People & culture",
            icon: <FaUsers size={submenuicon} color="#00B8D9" />,
          },
          {
            key: "Strategy",
            label: "Strategy",
            icon: <FaChartLine size={submenuicon} color="#6554C0" />,
          },
          {
            key: "Policies",
            label: "Policies",
            icon: <FaLock size={submenuicon} color="#FFAB00" />,
          },
        ],
      },
      {
        key: "Marketing",
        label: "Marketing",
        icon: <FaBullhorn size={iconsize} color="#36B37E" />,
        children: [
          {
            key: "Policies",
            label: "Policies",
            icon: <FaLock size={submenuicon} color="#FFAB00" />,
          },
        ],
      },
      {
        key: "Product",
        label: "Product",
        icon: <FaBox size={iconsize} color="#00B8D9" />,
        children: [
          {
            key: "Product Overview",
            label: "Product Overview",
            icon: <FaBriefcase size={submenuicon} color="#FF5630" />,
          },
          {
            key: "Product Features",
            label: "Product Features",
            icon: <FaBullhorn size={submenuicon} color="#36B37E" />,
          },
          {
            key: "Product Roadmap",
            label: "Product Roadmap",
            icon: <FaChartLine size={submenuicon} color="#00B8D9" />,
          },
        ],
      },
      {
        key: "Sales & CS",
        label: "Sales & CS",
        icon: <FaHandshake size={iconsize} color="#6554C0" />,
        children: [
          {
            key: "Company home",
            label: "Company home",
            icon: <FaHome size={submenuicon} color="#FF5630" />,
          },
        ],
      },
      {
        key: "Security",
        label: "Security",
        icon: <FaShieldAlt size={iconsize} color="#FFAB00" />,
        children: [
          {
            key: "User Permissions",
            label: "User Permissions",
            icon: <FaLock size={submenuicon} color="#FFAB00" />,
          },
          {
            key: "Data Protection",
            label: "Data Protection",
            icon: <FaShieldAlt size={submenuicon} color="#00B8D9" />,
          },
        ],
      },
    ],
  },
];
