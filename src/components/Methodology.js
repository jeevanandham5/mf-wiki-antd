import React, { useState } from "react";
import styles from "./styles/Methodology.module.css";

const Methodology = () => {
  const [phases, setPhases] = useState([
    {
      title: "CONCEPTUALIZATION",
      items: [
        "Identify market needs",
        "Develop a unique value proposition",
        "+2 Team Brainstorming Sessions",
        "Pitch to potential investors",
        "Formulate initial team (+2 Developers)",
      ],
      label: "PHASE 1",
    },
    {
      title: "DEVELOPMENT",
      items: [
        "Design software architecture",
        "Weekly sprint reviews",
        "+5 Code Reviews; +3 User Testing Sessions",
        "Ensure compliance with industry standards",
        "Develop MVP & Budget Plan",
      ],
      label: "PHASE 2",
    },
    {
      title: "LAUNCH",
      items: [
        "+5 Beta User Feedback Sessions",
        "Refine value proposition",
        "Launch marketing campaign",
        "Generate leads and secure pre-orders",
      ],
      label: "PHASE 3",
    },
    {
      title: "GROWTH",
      items: [
        "Scale operations and support",
        "Expand customer base",
        "Iterate based on user feedback",
        "Explore new market opportunities",
      ],
      label: "PHASE 4",
    },
  ]);

  const [mainTitle, setMainTitle] = useState("SOFTWARE STARTUP METHODOLOGY");
  const [cycleLabel, setCycleLabel] = useState("6-WEEK CYCLE");

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
