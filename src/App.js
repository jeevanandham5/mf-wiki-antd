//wiki-app
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import styles from "./components/styles/App.module.css";
import NovelEditor from "./components/NovelEditor";
import Editor from "./components/Editor";
import Block from "./components/Block";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/"
);

const App = () => {
  console.log("hello world");

  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.Container}>
          <div className={styles.contentWrapper}>
            {/*<SideNav />*/}
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
};

export default App;
