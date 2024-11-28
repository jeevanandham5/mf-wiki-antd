//wiki-app
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav";
import styles from "./components/styles/App.module.css";

import { EditorProvider } from "./components/Blocksuite editor/EditorProvider";
import EditorContainer from "./components/Blocksuite editor/EditorContainer";

const App = () => {
  console.log("hello world");

  return (
    <EditorProvider>
      <div className={styles.App}>
        <Router>
          <div className={styles.Container}>
            <div className={styles.contentWrapper}>
              <SideNav />
              <Routes>
                <Route path="/" element={<EditorContainer />} />
                <Route path="/:section" element={<EditorContainer />} />
                <Route
                  path="/:section/:subsection"
                  element={<EditorContainer />}
                />
                <Route path="*" element={<EditorContainer />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </EditorProvider>
  );
};

export default App;
