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
    onClick: () => {
      message.success("Link copied");
    },
    icon: <LinkOutlined />,
  },
  {
    key: "3",
    label: "Duplicate",
    onClick: () => {
      message.success("Page duplicated");
    },
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
