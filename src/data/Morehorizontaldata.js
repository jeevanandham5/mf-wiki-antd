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
      message.success("1st menu ja");
    },
    icon: <StarOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Copy link",
    icon: <LinkOutlined />,
  },
  {
    key: "3",
    label: "Duplicate",
    icon: <CopyOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "4",
    label: "Rename",
    icon: <FormOutlined />,
  },
  {
    key: "5",
    label: "Move to",
    icon: <ArrowRightOutlined />,
  },

  {
    type: "divider",
  },
  {
    key: "7",
    label: "Turn into wiki",
    icon: <SwitcherOutlined />,
  },
  {
    key: "8",
    label: "Open in new tab",
    icon: <PlusOutlined />,
  },
  {
    key: "9",
    label: "Open in side peek",
    icon: <SwitcherOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "10",
    label: "Refresh",
    icon: <ReloadOutlined />,
  },
  {
    key: "11",
    label: "Close",
    icon: <CloseOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "12",
    label: "Delete",
    icon: <DeleteOutlined />,
  },
];
