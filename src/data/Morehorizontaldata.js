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

const handleRename = async (oldName, newName) => {
  try {
    // Here you would typically:
    // 1. Validate the new name
    if (!newName || newName.trim() === "") {
      throw new Error("New name cannot be empty");
    }

    // 2. Call your API or state management function to update the name
    // await updatePageName(oldName, newName);

    message.success(`Page renamed from "${oldName}" to "${newName}"`);
    return true;
  } catch (error) {
    message.error(`Failed to rename page: ${error.message}`);
    return false;
  }
};

// Add this function before moreHorizontalData
const handleMoveTo = async () => {
  try {
    // This would typically come from your app's state/backend
    const availableSections = [
      { id: "1", name: "Personal Notes", path: "/personal" },
      { id: "2", name: "Work Projects", path: "/work" },
      { id: "3", name: "Archive", path: "/archive" },
      { id: "4", name: "Shared Documents", path: "/shared" },
    ];

    // In a real implementation, you'd use a proper modal/dropdown component
    // This is just for demonstration
    const selection = window.prompt(
      "Select destination (enter number):\n" +
        availableSections
          .map((section, index) => `${index + 1}. ${section.name}`)
          .join("\n")
    );

    const selectedIndex = parseInt(selection) - 1;
    if (selectedIndex >= 0 && selectedIndex < availableSections.length) {
      const destination = availableSections[selectedIndex];

      // Here you would typically:
      // 1. Call your API to move the page
      // await movePage(currentPageId, destination.path);

      message.success(`Page moved to ${destination.name}`);
      return destination.path;
    } else {
      throw new Error("Invalid selection");
    }
  } catch (error) {
    message.error("Failed to move page");
    console.error("Move error:", error);
  }
};

// Add this function before moreHorizontalData
const handleTurnIntoWiki = async () => {
  try {
    // Get current page data
    const currentPageData = {
      title: document.title,
      content: "", // Get this from your app state
      lastModified: new Date().toISOString(),
    };

    // Here you would typically:
    // 1. Update the page metadata to mark it as a wiki
    // 2. Maybe add additional wiki-specific properties
    const wikiData = {
      ...currentPageData,
      isWiki: true,
      contributors: [], // Array to track wiki contributors
      revisionHistory: [], // Array to track changes
      lastRevision: {
        timestamp: new Date().toISOString(),
        author: "current_user", // Get this from your auth system
        changes: "Converted to wiki",
      },
    };

    // await updatePageToWiki(wikiData);
    message.success("Successfully converted page to wiki");
    return wikiData;
  } catch (error) {
    message.error("Failed to convert page to wiki");
    console.error("Wiki conversion error:", error);
    return null;
  }
};

// Add this function before moreHorizontalData
const openInNewTab = () => {
  try {
    const currentUrl = window.location.href;
    window.open(currentUrl, "_blank");
    message.success("Page opened in new tab");
  } catch (error) {
    message.error("Failed to open page in new tab");
    console.error("Open in new tab error:", error);
  }
};

// Add this function before moreHorizontalData
const handleOpenInSidePeek = async () => {
  try {
    // Create side peek panel
    const sidePeekPanel = document.createElement("div");
    sidePeekPanel.id = "side-peek-panel";
    sidePeekPanel.style.cssText = `
      position: fixed;
      right: 0;
      top: 0;
      width: 400px;
      height: 100%;
      background-color: white;
      box-shadow: -2px 0 8px rgba(0,0,0,0.1);
      z-index: 1000;
      transition: transform 0.3s ease;
    `;

    // Create container for React content
    const editorContainer = document.createElement("div");
    sidePeekPanel.appendChild(editorContainer);
    document.body.appendChild(sidePeekPanel);

    // Create React root and render editor
    const root = createRoot(editorContainer);
    root.render(
      <EditorProvider>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => {
              root.unmount();
              document.getElementById("side-peek-panel").remove();
            }}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              padding: "5px 10px",
              cursor: "pointer",
              zIndex: 1001,
            }}
          >
            ✕
          </button>
          <EditorContainer />
        </div>
      </EditorProvider>
    );

    message.success("Page opened in side peek");
  } catch (error) {
    message.error("Failed to open in side peek");
    console.error("Side peek error:", error);
  }
};

const handleRefresh = async () => {
  try {
    // Reload the current page content
    await window.location.reload();
    message.success("Page refreshed successfully");
  } catch (error) {
    message.error("Failed to refresh page");
    console.error("Refresh error:", error);
  }
};

// Add this function before moreHorizontalData
const handleDeletePage = async () => {
  try {
    // Confirm deletion with the user
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?"
    );
    if (!confirmDelete) return;

    // Here you would typically:
    // 1. Call your API or state management function to delete the page
    // await deletePage(currentPageId);

    message.success("Page deleted successfully");
  } catch (error) {
    message.error("Failed to delete page");
    console.error("Delete error:", error);
  }
};

// Add this function before moreHorizontalData
const handleAddToFavorites = () => {
  try {
    const currentPath = window.location.pathname;
    const currentTitle = document.title;
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const existingIndex = favorites.findIndex((fav) => fav.id === currentPath);

    if (existingIndex >= 0) {
      // Remove from favorites
      favorites.splice(existingIndex, 1);
      message.success("Removed from favorites");
    } else {
      // Add to favorites
      favorites.push({
        id: currentPath,
        title: currentTitle,
        timestamp: new Date().toISOString(),
      });
      message.success("Added to favorites");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    return true;
  } catch (error) {
    message.error("Failed to update favorites");
    console.error("Favorites error:", error);
    return false;
  }
};

// Move this helper function before moreHorizontalData
const isPageFavorited = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites.some((fav) => fav.id === window.location.pathname);
};

export const moreHorizontalData = [
  {
    key: "1",
    label: "Add to favorites",
    onClick: handleAddToFavorites,
    icon: (
      <StarOutlined
        style={{ color: isPageFavorited() ? "#FFD700" : undefined }}
      />
    ),
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
    onClick: () => {
      // You might want to get the current page name from your app state
      const oldName = document.title; // or get it from your app state
      const newName = prompt("Enter new name:", oldName);
      if (newName) {
        handleRename(oldName, newName);
      }
    },
    icon: <FormOutlined />,
  },
  {
    key: "5",
    label: "Move to",
    onClick: handleMoveTo,
    icon: <ArrowRightOutlined />,
  },

  {
    type: "divider",
  },
  {
    key: "6",
    label: "Turn into wiki",
    onClick: handleTurnIntoWiki,
    icon: <SwitcherOutlined />,
  },
  {
    key: "7",
    label: "Open in new tab",
    onClick: openInNewTab,
    icon: <PlusOutlined />,
  },
  {
    key: "8",
    label: "Open in side peek",
    onClick: handleOpenInSidePeek,
    icon: <SwitcherOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "9",
    label: "Refresh",
    onClick: handleRefresh,
    icon: <ReloadOutlined />,
  },

  {
    type: "divider",
  },
  {
    key: "10",
    label: "Delete",
    onClick: handleDeletePage,
    icon: <DeleteOutlined />,
  },
];
