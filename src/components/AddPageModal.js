// src/components/AddPageModal.js
import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

const AddPageModal = ({ isVisible, onClose, section }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOk = () => {
    console.log("Content submitted:", content);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title="Add Page"
      open={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input.TextArea
        rows={4}
        placeholder="Enter your content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="primary" onClick={handleOk}>
        Add
      </Button>
    </Modal>
  );
};

export default AddPageModal;
