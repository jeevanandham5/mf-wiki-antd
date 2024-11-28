import React from "react"; // Import React
import styles from "./styles/Toolbarwidget.module.css"; // Import CSS module
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const Toolbarwidget = () => {
  // Add state to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = React.useState(false);

  // Toggle menu handler
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionsClick = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <editor-toolbar className={styles.affineFormatBarWidget}>
      {" "}
      {/* Apply styles */}
      <div className={styles.toolbarContainer}>
        <div className={styles.paragraphButton}>
          {" "}
          {/* Changed class to className */}
          <editor-icon-button
            className={styles.paragraphButtonIcon}
            tabindex="0"
            role="button"
            onClick={handleMenuClick}
            style={{ display: "flex", alignItems: "center" }}
          >
            {" "}
            {/* Changed class to className */}
            {/* <!--?lit$040396365$-->*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="20"
              height="20"
              style={{ userSelect: "none", flexShrink: 0 }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V4.75h-6.5v14.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V4.75h-6.5v1.917a.75.75 0 0 1-1.5 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {/* <!--?lit$040396365$--> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="20"
              height="20"
              style={{ userSelect: "none", flexShrink: 0 }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17.58 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 0 1 1.06 0"
                clipRule="evenodd"
              ></path>
            </svg>
          </editor-icon-button>
          {/* <!--?lit$040396365$--> */}
          <editor-menu-content
            className={styles.paragraphPanel}
            data-show={isMenuOpen ? "true" : ""}
            style={{ display: isMenuOpen ? "block" : "none" }}
          >
            <div data-orientation="vertical" className={styles.menuList}>
              <editor-menu-action
                data-testid="affine:paragraph/text"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>T</span>
                <span className={styles.menuText}>Text</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:paragraph/h1"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>H1</span>
                <span className={styles.menuText}>Heading 1</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:paragraph/h2"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>H2</span>
                <span className={styles.menuText}>Heading 2</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:paragraph/h3"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>H3</span>
                <span className={styles.menuText}>Heading 3</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:paragraph/h4"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>H4</span>
                <span className={styles.menuText}>Heading 4</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:paragraph/h5"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>H5</span>
                <span className={styles.menuText}>Heading 5</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:paragraph/h6"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>H6</span>
                <span className={styles.menuText}>Heading 6</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:list/bulleted"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>•</span>
                <span className={styles.menuText}>Bulleted List</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:list/numbered"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>1.</span>
                <span className={styles.menuText}>Numbered List</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:list/todo"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>☐</span>
                <span className={styles.menuText}>To-do List</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:code"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>{`</>`}</span>
                <span className={styles.menuText}>Code Block</span>
              </editor-menu-action>

              <editor-menu-action
                data-testid="affine:paragraph/quote"
                role="button"
                className={styles.menuItem}
              >
                <span className={styles.menuIcon}>"</span>
                <span className={styles.menuText}>Quote</span>
              </editor-menu-action>
            </div>
          </editor-menu-content>
          {/* <!---->*/}
        </div>
        {/* <!----><!----> */}
        <editor-toolbar-separator></editor-toolbar-separator>
        {/* <!----><!----> */}
        <editor-icon-button data-testid="bold" tabindex="0" role="button">
          {/* <!--?lit$040396365$--> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            style={{ userSelect: "none", flexShrink: 0 }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M6.25 4A.75.75 0 0 1 7 3.25h5.958c2.67 0 4.875 2.105 4.875 4.75 0 1.515-.723 2.853-1.843 3.72 1.626.764 2.76 2.383 2.76 4.28 0 2.645-2.204 4.75-4.875 4.75H7a.75.75 0 0 1-.75-.75zm1.5 8.75v6.5h6.125c1.886 0 3.375-1.477 3.375-3.25s-1.49-3.25-3.375-3.25zm0-1.5h5.208c1.886 0 3.375-1.477 3.375-3.25s-1.489-3.25-3.375-3.25H7.75z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </editor-icon-button>
        {/* <!----><!----> */}
        <editor-icon-button data-testid="italic" tabindex="0" role="button">
          {/* <!--?lit$040396365$--> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            style={{ userSelect: "none", flexShrink: 0 }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.608 3.25H10.25a.75.75 0 0 0 0 1.5h3.34l-4.758 14.5H5a.75.75 0 1 0 0 1.5h8.75a.75.75 0 0 0 0-1.5h-3.34l4.758-14.5H19a.75.75 0 0 0 0-1.5h-4.392"
              clip-rule="evenodd"
            ></path>
          </svg>
        </editor-icon-button>
        {/* <!----><!----> */}
        <editor-icon-button data-testid="underline" tabindex="0" role="button">
          {/* <!--?lit$040396365$--> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            style={{ userSelect: "none", flexShrink: 0 }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.744 3.968a.808.808 0 1 0-1.616 0v7.003a5.656 5.656 0 0 0 11.313 0V3.968a.808.808 0 1 0-1.616 0v7.003a4.04 4.04 0 1 1-8.08 0zM4.458 19.32a.808.808 0 1 0 0 1.616h15.084a.808.808 0 0 0 0-1.616z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </editor-icon-button>
        {/* <!----><!----> */}
        <editor-icon-button data-testid="strike" tabindex="0" role="button">
          {/* <!--?lit$040396365$--> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            style={{ userSelect: "none", flexShrink: 0 }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M8.406 7.464a3.468 3.468 0 0 1 6.59-1.513.77.77 0 0 0 1.385-.673 5.009 5.009 0 0 0-9.05 4.3h1.793a3.45 3.45 0 0 1-.718-2.114m6.512 8.476c0-.795-.268-1.528-.718-2.113h1.792a5.008 5.008 0 0 1-9.05 4.299.77.77 0 1 1 1.387-.673 3.468 3.468 0 0 0 6.589-1.513M4.297 10.905a.797.797 0 0 0 0 1.594h15.406a.797.797 0 0 0 0-1.594z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </editor-icon-button>
        {/* <!----><!----> */}
        <editor-icon-button data-testid="code" tabindex="0" role="button">
          {/* <!--?lit$040396365$--> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            style={{ userSelect: "none", flexShrink: 0 }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13.982 4.272a.75.75 0 0 1 .546.91l-3.6 14.4a.75.75 0 1 1-1.456-.364l3.6-14.4a.75.75 0 0 1 .91-.546M7.13 8.07a.75.75 0 0 1 0 1.06L4.06 12.2l3.07 3.07a.75.75 0 0 1-1.06 1.06l-3.6-3.6a.75.75 0 0 1 0-1.06l3.6-3.6a.75.75 0 0 1 1.06 0m9.74 0a.75.75 0 0 1 1.06 0l3.6 3.6a.75.75 0 0 1 0 1.06l-3.6 3.6a.75.75 0 1 1-1.06-1.06l3.07-3.07-3.07-3.07a.75.75 0 0 1 0-1.06"
              clip-rule="evenodd"
            ></path>
          </svg>
        </editor-icon-button>
        {/* <!----><!----> */}
        <editor-icon-button data-testid="link" tabindex="0" role="button">
          {/* <!--?lit$040396365$--> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            style={{ userSelect: "none", flexShrink: 0 }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M18.428 5.572a2.806 2.806 0 0 0-3.967 0l-.978.977a.75.75 0 0 1-1.06-1.06l.977-.978a4.305 4.305 0 1 1 6.089 6.089l-3.556 3.556a4.306 4.306 0 0 1-6.089 0 .75.75 0 0 1 1.061-1.061 2.805 2.805 0 0 0 3.968 0l3.555-3.556a2.806 2.806 0 0 0 0-3.967m-5.333 5.333a2.805 2.805 0 0 0-3.968 0l-3.555 3.556a2.806 2.806 0 0 0 3.967 3.967l.98-.979a.75.75 0 0 1 1.06 1.06l-.979.98A4.305 4.305 0 1 1 4.511 13.4l3.556-3.556a4.306 4.306 0 0 1 6.089 0 .75.75 0 0 1-1.061 1.061"
              clip-rule="evenodd"
            ></path>
          </svg>
        </editor-icon-button>
        {/* <!----><!----> */}
        <editor-toolbar-separator></editor-toolbar-separator>
        {/* <!----><!----> */}
        <div className={styles.highlightButton}>
          <editor-icon-button
            className={styles.highlightIcon}
            data-last-used="var(--affine-text-highlight-foreground-grey)"
            tabindex="0"
            role="button"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span
              style={{
                display: "flex",
                color: "var(--affine-text-highlight-foreground-grey)",
              }}
            >
              {/* <!--?lit$040396365$--> */}
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                {/* <!--?lit$040396365$--> */}
                <path
                  d="M5.82912 16.3197L7.91758 18.4082L6.57812 19.7476C6.53121 19.7945 6.46407 19.8151 6.39891 19.8026L3.37038 19.2199C3.21286 19.1896 3.15332 18.9955 3.26674 18.8821L5.82912 16.3197Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M19.0095 3.51624C17.9526 2.45932 16.26 2.39465 15.1255 3.36783L7.3214 10.0624C6.35443 10.8919 6.0528 12.261 6.58168 13.42L6.73506 13.7562L5.67702 14.8142C5.30174 15.1895 5.30174 15.7979 5.67702 16.1732L8.06384 18.56C8.43912 18.9353 9.04757 18.9353 9.42285 18.56L10.4809 17.502L10.8171 17.6555C11.9761 18.1843 13.3453 17.8827 14.1747 16.9157L20.8693 9.11159C21.8425 7.9771 21.7778 6.28452 20.7209 5.22761L19.0095 3.51624ZM16.1022 4.50634C16.6416 4.04362 17.4463 4.07437 17.9489 4.5769L19.6602 6.28827C20.1628 6.79079 20.1935 7.59555 19.7308 8.13496L14.6424 14.0667L10.1705 9.59469L16.1022 4.50634ZM9.02862 10.5742L8.29803 11.2009C7.83827 11.5953 7.69486 12.2462 7.94632 12.7973L8.2979 13.5678C8.43485 13.8679 8.37953 14.233 8.13377 14.4788L7.11884 15.4937L8.74335 17.1182L9.75818 16.1034C10.004 15.8576 10.3692 15.8023 10.6693 15.9392L11.4398 16.2908C11.9909 16.5423 12.6419 16.3989 13.0362 15.9391L13.663 15.2085L9.02862 10.5742Z"
                  fill="#77757D"
                ></path>
              </svg>
            </span>
            {/* <!--?lit$040396365$--> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="20"
              height="20"
              style={{ userSelect: "none", flexShrink: 0 }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17.58 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 0 1 1.06 0"
                clipRule="evenodd"
              ></path>
            </svg>
          </editor-icon-button>
          {/* <!--?lit$040396365$--> */}
          <editor-menu-content
            className={styles.highlightPanel}
            data-show=""
            style={{ display: "none", left: "201.8px", top: "41.8px" }}
          >
            <div data-orientation="vertical">
              {/* Text Color Highlight */}
              <div className={styles.highlighPanelHeading}>Color</div>
              {/* <!--?lit$040396365$--> */}
              <editor-menu-action data-testid="unset" role="button">
                <span style={{ display: "flex", color: "" }}>
                  {/*<!--?lit$040396365$--> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M2.625 4.58333C2.625 3.50178 3.50178 2.625 4.58333 2.625H15.4167C16.4982 2.625 17.375 3.50178 17.375 4.58333V15.4167C17.375 16.4982 16.4982 17.375 15.4167 17.375H4.58333C3.50178 17.375 2.625 16.4982 2.625 15.4167V4.58333ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                {/* <!--?lit$040396365$--> */}Default Color
              </editor-menu-action>
              {/* <!----><!----> */}
              <editor-menu-action
                data-testid="var(--affine-text-highlight-foreground-red)"
                role="button"
              >
                <span
                  style={{
                    display: "flex",
                    color: "var(--affine-text-highlight-foreground-red)",
                  }}
                >
                  {/*<!--?lit$040396365$--> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M2.625 4.58333C2.625 3.50178 3.50178 2.625 4.58333 2.625H15.4167C16.4982 2.625 17.375 3.50178 17.375 4.58333V15.4167C17.375 16.4982 16.4982 17.375 15.4167 17.375H4.58333C3.50178 17.375 2.625 16.4982 2.625 15.4167V4.58333ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                {/* <!--?lit$040396365$--> */}Red
              </editor-menu-action>
              {/* <!----><!----> */}
              <editor-menu-action
                data-testid="var(--affine-text-highlight-foreground-orange)"
                role="button"
              >
                <span
                  style={{
                    display: "flex",
                    color: "var(--affine-text-highlight-foreground-orange)",
                  }}
                >
                  {/*<!--?lit$040396365$-->*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M2.625 4.58333C2.625 3.50178 3.50178 2.625 4.58333 2.625H15.4167C16.4982 2.625 17.375 3.50178 17.375 4.58333V15.4167C17.375 16.4982 16.4982 17.375 15.4167 17.375H4.58333C3.50178 17.375 2.625 16.4982 2.625 15.4167V4.58333ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                {/* <!--?lit$040396365$--> */}Orange
              </editor-menu-action>
              {/* <!----><!----> */}
              <editor-menu-action
                data-testid="var(--affine-text-highlight-foreground-yellow)"
                role="button"
              >
                <span
                  style={{
                    display: "flex",
                    color: "var(--affine-text-highlight-foreground-yellow)",
                  }}
                >
                  {/* <!--?lit$040396365$--> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M2.625 4.58333C2.625 3.50178 3.50178 2.625 4.58333 2.625H15.4167C16.4982 2.625 17.375 3.50178 17.375 4.58333V15.4167C17.375 16.4982 16.4982 17.375 15.4167 17.375H4.58333C3.50178 17.375 2.625 16.4982 2.625 15.4167V4.58333ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                {/* <!--?lit$040396365$--> */}Yellow
              </editor-menu-action>
              {/* <!----><!----> */}
              <editor-menu-action
                data-testid="var(--affine-text-highlight-foreground-green)"
                role="button"
              >
                <span
                  style={{
                    display: "flex",
                    color: "var(--affine-text-highlight-foreground-green)",
                  }}
                >
                  {/* <!--?lit$040396365$--> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50178 17.375 2.62503 16.4983 2.62503 15.4167V4.58336ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                {/* <!--?lit$040396365$--> */}Green
              </editor-menu-action>
              {/* <!----><!----> */}
              <editor-menu-action
                data-testid="var(--affine-text-highlight-foreground-teal)"
                role="button"
              >
                <span
                  style={{
                    display: "flex",
                    color: "var(--affine-text-highlight-foreground-teal)",
                  }}
                >
                  {/* <!--?lit$040396365$--> */}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50178 17.375 2.62503 16.4983 2.62503 15.4167V4.58336ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                {/* <!--?lit$040396365$--> */}Teal
              </editor-menu-action>
              {/* <!----><!----> */}
              <editor-menu-action
                data-testid="var(--affine-text-highlight-foreground-blue)"
                role="button"
              >
                <span
                  style={{
                    display: "flex",
                    color: "var(--affine-text-highlight-foreground-blue)",
                  }}
                >
                  {/* <!--?lit$040396365$--> */}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50178 17.375 2.62503 16.4983 2.62503 15.4167V4.58336ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="var(--affine-text-primary-color)"
                    ></path>
                  </svg>
                </span>
                {/* <!--?lit$040396365$--> */}Blue
              </editor-menu-action>
              {/* <!----><!----> */}
              <editor-menu-action
                data-testid="var(--affine-text-highlight-foreground-purple)"
                role="button"
              >
                <span
                  style={{
                    display: "flex",
                    color: "var(--affine-text-highlight-foreground-purple)",
                  }}
                >
                  {/* <!--?lit$040396365$--> */}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50178 17.375 2.62503 16.4983 2.62503 15.4167V4.58336ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                {/* <!--?lit$040396365$--> */}Purple
              </editor-menu-action>
              {/* <!----><!----> */}
              <editor-menu-action
                data-testid="var(--affine-text-highlight-foreground-grey)"
                role="button"
              >
                <span
                  style={{
                    display: "flex",
                    color: "var(--affine-text-highlight-foreground-grey)",
                  }}
                >
                  {/* <!--?lit$040396365$--> */}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50178 17.375 2.62503 16.4983 2.62503 15.4167V4.58336ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="black"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M8.85183 6.254C9.03131 5.77539 9.48885 5.45831 10 5.45831C10.5112 5.45831 10.9687 5.77539 11.1482 6.254L13.9185 13.6416C14.0397 13.9648 13.876 14.3251 13.5528 14.4463C13.2296 14.5675 12.8693 14.4037 12.7481 14.0805L11.9654 11.9932H8.03465L7.25188 14.0805C7.13068 14.4037 6.77042 14.5675 6.44722 14.4463C6.12402 14.3251 5.96027 13.9648 6.08147 13.6416L8.85183 6.254ZM8.5034 10.7432H11.4966L10 6.7522L8.5034 10.7432Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                {/* <!--?lit$040396365$--> */}Grey
              </editor-menu-action>
              {/* <!----> */}
            </div>
          </editor-menu-content>
        </div>
        {/* <!----><!----> */}
        <editor-toolbar-separator></editor-toolbar-separator>
        {/* <!----><!----> */}
        <editor-icon-button
          data-testid="convert-to-database"
          tabindex="0"
          role="button"
        >
          {/* <!--?lit$040396365$--> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            style={{ userSelect: "none", flexShrink: 0 }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.25 6A2.75 2.75 0 0 1 6 3.25h12A2.75 2.75 0 0 1 20.75 6v12A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18zM6 4.75c-.69 0-1.25.56-1.25 1.25v2.25h14.5V6c0-.69-.56-1.25-1.25-1.25zM4.75 18V9.75h3v9.5H6c-.69 0-1.25-.56-1.25-1.25m4.5 1.25H18c.69 0 1.25-.56 1.25-1.25V9.75h-10z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </editor-icon-button>
        {/* <!----><!----> */}
        <editor-toolbar-separator></editor-toolbar-separator>
        <editor-icon-button
          data-testid="convert-to-linked-doc"
          tabindex="0"
          role="button"
        >
          {/* <!--?lit$040396365$--> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            style={{ userSelect: "none", flexShrink: 0 }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4.25 6A2.75 2.75 0 0 1 7 3.25h10A2.75 2.75 0 0 1 19.75 6v6a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h5a.75.75 0 0 1 0 1.5H7A2.75 2.75 0 0 1 4.25 18zm4 2A.75.75 0 0 1 9 7.25h3a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 8M9 10.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 15a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m7.25-.75a.75.75 0 0 0 0 1.5h2.69l-3.72 3.72a.75.75 0 1 0 1.06 1.06l3.72-3.72v2.69a.75.75 0 0 0 1.5 0V15a.75.75 0 0 0-.75-.75z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </editor-icon-button>
        {/* <!----> */}
        <editor-toolbar-separator></editor-toolbar-separator>
        {/* <!--?lit$040396365$--> */}
        <editor-menu-button
          style={{
            contentPadding: "8px",
            position: "relative",
            display: "inline-block",
          }}
          data-active={isOptionsOpen}
          onClick={handleOptionsClick}
        >
          <div data-size="large" data-orientation="vertical">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="20"
              height="20"
              className={styles.dotIcon}
              style={{ userSelect: "none", flexShrink: 0 }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className={styles.menuContainer}>
              <editor-menu-action
                aria-label="Copy"
                role="button"
                style={{
                  display: "flex",
                  alignItems: "center",

                  gap: "8px",
                  width: "176px",
                  height: "32px",
                  padding: "4px 8px",
                }}
              >
                {/* <!--?lit$040396365$--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  width="20"
                  height="20"
                  style={{ userSelect: "none", flexShrink: 0 }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3.25 6A2.75 2.75 0 0 0 6 3.25h8A2.75 2.75 0 0 0 16.75 6v1.25H18A2.75 2.75 0 0 0 20.75 10v8A2.75 2.75 0 0 0 18 20.75h-8A2.75 2.75 0 0 0 7.25 18v-1.25H6A2.75 2.75 0 0 0 3.25 14zm5.5 12c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25h-8c-.69 0-1.25.56-1.25 1.25zm6.5-10.75H10A2.75 2.75 0 0 0 7.25 10v5.25H6c-.69 0-1.25-.56-1.25-1.25V6c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* <!--?lit$040396365$--> */}
                <span class="label">{/* <!--?lit$040396365$--> */}Copy</span>
              </editor-menu-action>
              {/* <!----> */}
              <editor-menu-action
                aria-label="Duplicate"
                role="button"
                style={{
                  display: "flex",
                  alignItems: "center",

                  gap: "8px",
                  textAlign: "left",
                  width: "176px",
                  height: "32px",
                  padding: "4px 8px",
                }}
              >
                {/* <!--?lit$040396365$--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  width="20"
                  height="20"
                  style={{ userSelect: "none", flexShrink: 0 }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6 3.25A2.75 2.75 0 0 0 3.25 6v8A2.75 2.75 0 0 0 6 16.75h1.25V18A2.75 2.75 0 0 0 10 20.75h8A2.75 2.75 0 0 0 20.75 18v-8A2.75 2.75 0 0 0 18 7.25h-1.25V6A2.75 2.75 0 0 0 14 3.25zm4 4h5.25V6c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v1.15zm3.937 1.7H5.813l.802 11.24a1.25 1.25 0 0 0 1.247 1.16h8.276c.656 0 1.2-.507 1.247-1.16zM10.75 11a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm3.25-.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* <!--?lit$040396365$--> */}
                <span class="label">
                  {/* <!--?lit$040396365$--> */}Duplicate
                </span>
              </editor-menu-action>
              {/* <!----> */}
              <editor-toolbar-separator data-orientation="horizontal"></editor-toolbar-separator>
              {/* <!----> */}
              <editor-menu-action
                class="delete"
                aria-label="Delete"
                role="button"
                style={{
                  display: "flex",
                  alignItems: "center",

                  gap: "8px",
                  width: "176px",
                  height: "32px",
                  padding: "4px 8px",
                }}
              >
                {/* <!--?lit$040396365$--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  width="20"
                  height="20"
                  style={{ userSelect: "none", flexShrink: 0 }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11 2.25A2.75 2.75 0 0 0 8.25 5v1.15H4a.85.85 0 0 0 0 1.7h.309l.81 11.346a2.75 2.75 0 0 0 2.743 2.554h8.276a2.75 2.75 0 0 0 2.743-2.554l.81-11.346H20a.85.85 0 0 0 0-1.7h-4.25V5A2.75 2.75 0 0 0 13 2.25zm3.25 3.9V5c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v1.15zm3.937 1.7H5.813l.802 11.24a1.25 1.25 0 0 0 1.247 1.16h8.276c.656 0 1.2-.507 1.247-1.16zM10.75 11a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm3.25-.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* <!--?lit$040396365$--> */}
                <span class="label">{/* <!--?lit$040396365$--> */}Delete</span>
              </editor-menu-action>
            </div>
            {/* <!----> */}
          </div>
        </editor-menu-button>
      </div>
    </editor-toolbar>
  );
};

export default Toolbarwidget;
