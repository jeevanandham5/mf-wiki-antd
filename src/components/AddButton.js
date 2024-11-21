import React, { useState } from "react";

const AddButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex="-1"
      aria-label="Click to add below. Alt-click to add a block above"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        userSelect: "none",
        transition: "background 20ms ease-in",
        cursor: "-webkit-grab",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fill: "rgba(55, 53, 47, 0.35)",
        position: "absolute",
        top: "3px",
        left: "-44px",
        width: "24px",
        height: "24px",
        borderRadius: "4px",
        pointerEvents: "auto",
        background: isHovered ? "rgba(55, 53, 47, 0.08)" : "transparent",
      }}
    >
      <svg
        role="graphics-symbol"
        viewBox="0 0 16 16"
        className="plus"
        style={{
          width: "16px",
          height: "100%",
          display: "block",
          fill: "inherit",
          flexShrink: 0,
        }}
      >
        <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z" />
      </svg>
    </div>
  );
};

export default AddButton;
