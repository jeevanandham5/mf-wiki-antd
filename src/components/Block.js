import React from "react";
import styles from "./styles/Block.module.css";

const Block = () => {
  return (
    <div className={styles.blockContainer}>
      <div className={styles.childrenContainer}>
        <Paragraph text="Click the 🔁 button to switch between editors dynamically - they are fully compatible!" />
        <Paragraph text="Type '/' for commands" isPlaceholder />
      </div>
    </div>
  );
};

const Paragraph = ({ text, isPlaceholder }) => {
  return (
    <div className={styles.paragraph}>
      <div className={styles.richTextWrapper}>
        {isPlaceholder ? (
          <div className={styles.placeholder}>{text}</div>
        ) : (
          <div contentEditable="true" className={styles.inlineEditor}>
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

const Heading = ({ text }) => {
  return <h3 className={styles.heading}>{text}</h3>;
};

export default Block;
