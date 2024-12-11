import React from "react";
import {
  StarOutlined,
  LinkOutlined,
  CopyOutlined,
  FormOutlined,
  ArrowRightOutlined,
  DeleteOutlined,
  RefreshCwOutlined,
  ExternalLinkOutlined,
  CloseOutlined,
  EditOutlined,
  SwitcherOutlined,
  ReloadOutlined,
  PlusOutlined,
} from "@ant-design/icons";

//import { on } from "@blocksuite/blocks";
import { message } from "antd";
// Add this function before moreHorizontalData
const copyLinkToClipboard = async () => {
  try {
    const currentUrl = window.location.href;
    await navigator.clipboard.writeText(currentUrl);
    message.success("Link copied to clipboard");
  } catch (err) {
    message.error("Failed to copy link");
  }
};

// Add this function before moreHorizontalData
const duplicatePage = async () => {
  try {
    // You might want to get the current page data from your app state or context
    const currentPageData = {
      // Add relevant page data here
      title: document.title,
      content: "", // Get this from your app state
      timestamp: new Date().toISOString(),
    };

    // Create a copy with a modified title
    const duplicatedData = {
      ...currentPageData,
      title: `${currentPageData.title} (Copy)`,
    };

    // Here you would typically:
    // 1. Call your API or state management function to save the duplicate
    // await savePage(duplicatedData);

    message.success("Page duplicated successfully");
    return duplicatedData;
  } catch (error) {
    message.error("Failed to duplicate page");
    console.error("Duplication error:", error);
  }
};

export const moreHorizontalData = [
  {
    key: "1",
    label: "Add to favorites",
    onClick: () => {
      message.success("Added to favorites");
    },
    icon: <StarOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Copy link",
    onClick: copyLinkToClipboard,
    icon: <LinkOutlined />,
  },
  {
    key: "3",
    label: "Duplicate",
    onClick: duplicatePage,
    icon: <CopyOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "4",
    label: "Rename",
    onClick: (newName) => {
      message.success(`Page renamed to ${newName}`);
    },
    icon: <FormOutlined />,
  },
  {
    key: "5",
    label: "Move to",
    onClick: (newLocation) => {
      message.success(`Page moved to ${newLocation}`);
    },
    icon: <ArrowRightOutlined />,
  },

  {
    type: "divider",
  },
  {
    key: "7",
    label: "Turn into wiki",
    onClick: () => {
      message.success("Page turned into wiki");
    },
    icon: <SwitcherOutlined />,
  },
  {
    key: "8",
    label: "Open in new tab",
    onClick: () => {
      message.success("Page opened in new tab");
    },
    icon: <PlusOutlined />,
  },
  {
    key: "9",
    label: "Open in side peek",
    onClick: () => {
      message.success("Page opened in side peek");
    },
    icon: <SwitcherOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "10",
    label: "Refresh",
    onClick: () => {
      message.success("Page refreshed");
    },
    icon: <ReloadOutlined />,
  },
  {
    key: "11",
    label: "Close",
    onClick: () => {
      message.success("Page closed");
    },
    icon: <CloseOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "12",
    label: "Delete",
    onClick: () => {
      message.success("Page deleted");
    },
    icon: <DeleteOutlined />,
  },
];
