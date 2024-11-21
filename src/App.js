//wiki-app
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import styles from "./components/styles/App.module.css";
import NovelEditor from "./components/NovelEditor";
import Editor from "./components/Editor";
/* to work with host and local navigation correctly we changed the router to (HashRouter) and u can see this in the import of react-router-dom */
function App() {
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.Container}>
          <div className={styles.contentWrapper}>
            <SideNav />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/:section" element={<MainContent />} />
              <Route path="/:section/:subsection" element={<MainContent />} />
              <Route path="*" element={<MainContent title="Not Found" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
