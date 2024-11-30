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
    submenu: [],
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
    submenu: [],
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
    submenu: [],
  },
];
