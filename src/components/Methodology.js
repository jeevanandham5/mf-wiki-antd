import React, { useState } from "react";
import styles from "./styles/Methodology.module.css";

const Methodology = () => {
  const [phases, setPhases] = useState([
    {
      title: "CONCEPT",
      items: [
        "Market research",
        "Value proposition",
        "Team formation",
        "Initial pitch",
      ],
      label: "PHASE 1",
    },
    {
      title: "BUILD",
      items: [
        "Architecture design",
        "Sprint planning",
        "Code reviews",
        "MVP development",
      ],
      label: "PHASE 2",
    },
    {
      title: "LAUNCH",
      items: [
        "Beta testing",
        "Marketing prep",
        "Pre-orders",
        "Initial release",
      ],
      label: "PHASE 3",
    },
    {
      title: "SCALE",
      items: [
        "Support system",
        "Market expansion",
        "User feedback",
        "Growth planning",
      ],
      label: "PHASE 4",
    },
    {
      title: "INNOVATE",
      items: [
        "Product evolution",
        "New features",
        "Market trends",
        "Tech upgrades",
      ],
      label: "PHASE 5",
    },
  ]);

  const [mainTitle, setMainTitle] = useState("STARTUP ROADMAP");
  const [cycleLabel, setCycleLabel] = useState("6-WEEK PLAN");

  const handleTitleChange = (e) => {
    setMainTitle(e.target.innerText);
  };

  const handleCycleLabelChange = (e) => {
    setCycleLabel(e.target.innerText);
  };

  const handlePhaseHeaderChange = (index, e) => {
    const newPhases = [...phases];
    newPhases[index].title = e.target.innerText;
    setPhases(newPhases);
  };

  const handleItemChange = (phaseIndex, itemIndex, e) => {
    const newPhases = [...phases];
    newPhases[phaseIndex].items[itemIndex] = e.target.innerText;
    setPhases(newPhases);
  };

  const handlePhaseLabelChange = (index, e) => {
    const newPhases = [...phases];
    newPhases[index].label = e.target.innerText;
    setPhases(newPhases);
  };

  return (
    <div className={styles.methodologyContainer}>
      <h2
        className={styles.title}
        contentEditable
        onBlur={handleTitleChange}
        suppressContentEditableWarning
      >
        {mainTitle}
      </h2>
      <div
        className={styles.cycleLabel}
        contentEditable
        onBlur={handleCycleLabelChange}
        suppressContentEditableWarning
      >
        {cycleLabel}
      </div>
      <div className={styles.phases}>
        {phases.map((phase, phaseIndex) => (
          <div key={phaseIndex} className={styles.phase}>
            <h3
              contentEditable
              onBlur={(e) => handlePhaseHeaderChange(phaseIndex, e)}
              suppressContentEditableWarning
            >
              {phase.title}
            </h3>
            <ul>
              {phase.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  contentEditable
                  onBlur={(e) => handleItemChange(phaseIndex, itemIndex, e)}
                  suppressContentEditableWarning
                >
                  {item}
                </li>
              ))}
            </ul>
            <div
              className={styles.phaseLabel}
              contentEditable
              onBlur={(e) => handlePhaseLabelChange(phaseIndex, e)}
              suppressContentEditableWarning
            >
              {phase.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodology;
