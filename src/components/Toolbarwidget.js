import React from "react"; // Import React
import styles from "./styles/Toolbarwidget.module.css"; // Import CSS module

const Toolbarwidget = () => {
  // Define the functional component
  return (
    <editor-toolbar className={styles.affineFormatBarWidget}>
      {" "}
      {/* Apply styles */}
      <div className={styles.paragraphButton}>
        {" "}
        {/* Changed class to className */}
        <editor-icon-button
          className={styles.paragraphButtonIcon}
          tabindex="0"
          role="button"
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
        <editor-menu-content className={styles.paragraphPanel} data-show="">
          {" "}
          {/* Changed class to className */}
          <div data-orientation="vertical">
            {/* <!--?lit$040396365$--><!----> */}
            <editor-menu-action
              data-testid="affine:paragraph/text"
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
                  d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V4.75h-6.5v14.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V4.75h-6.5v1.917a.75.75 0 0 1-1.5 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Text
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action data-testid="affine:paragraph/h1" role="button">
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
                  d="M17.926 6.578v10.898c0 .602.33.963.862.963.541 0 .862-.351.862-.963V5.726c0-.682-.451-1.153-1.093-1.153-.39 0-.742.15-1.373.622l-2.026 1.504c-.4.29-.591.561-.591.852 0 .38.3.692.672.692.22 0 .43-.08.721-.291l1.885-1.374zM4.42 4.903a.77.77 0 0 1 .77.77v5.35h6.168v-5.35a.77.77 0 1 1 1.54 0v12.242a.77.77 0 1 1-1.54 0v-5.351H5.19v5.351a.77.77 0 0 1-1.54 0V5.673a.77.77 0 0 1 .77-.77"
                  clipRule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Heading 1
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action data-testid="affine:paragraph/h2" role="button">
              {/* <!--?lit$040396365$--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                style="user-select:none;flex-shrink:0;"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14.159 16c-.562.638-.724.905-.724 1.248 0 .553.438.886 1.134.886h6.289c.524 0 .829-.276.829-.724 0-.457-.324-.734-.83-.734H15.57v-.114l3.526-4.031c1.715-1.953 2.201-2.859 2.201-4.098 0-2.096-1.648-3.583-3.992-3.583-2.516 0-4.089 1.697-4.089 3.317 0 .514.305.867.772.867.391 0 .658-.258.791-.763.286-1.238 1.191-1.972 2.42-1.972 1.45 0 2.412.896 2.412 2.24 0 .895-.41 1.696-1.487 2.925zM3.419 5.364c.404 0 .732.327.732.731v5.087h5.862V6.095a.732.732 0 1 1 1.464 0v11.637a.732.732 0 0 1-1.464 0v-5.087H4.151v5.087a.732.732 0 1 1-1.464 0V6.095c0-.404.328-.731.732-.731"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Heading 2
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action data-testid="affine:paragraph/h3" role="button">
              {/* <!--?lit$040396365$--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                style="user-select:none;flex-shrink:0;"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.05 5.856a.75.75 0 1 0-1.5 0v11.922a.75.75 0 1 0 1.5 0v-5.211h6.006v5.21a.75.75 0 0 0 1.5 0V5.857a.75.75 0 0 0-1.5 0v5.21H4.05zm9.479 9.234c-.418 0-.713.304-.713.732 0 1.454 1.796 2.937 4.248 2.937 2.642 0 4.486-1.56 4.486-3.783 0-1.635-1.226-3.041-2.832-3.222v-.095c1.32-.228 2.395-1.596 2.395-3.031 0-1.977-1.692-3.393-4.068-3.393-2.338 0-3.925 1.425-3.925 2.898 0 .476.285.79.723.79.37 0 .608-.2.798-.723.38-.979 1.235-1.54 2.366-1.54 1.454 0 2.433.875 2.433 2.177s-1.007 2.242-2.395 2.242h-1.121c-.456 0-.76.295-.76.713 0 .409.323.723.76.723h1.188c1.653 0 2.765.978 2.765 2.432 0 1.455-1.083 2.386-2.784 2.386-1.293 0-2.281-.57-2.775-1.587-.247-.485-.456-.656-.79-.656"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Heading 3
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action data-testid="affine:paragraph/h4" role="button">
              {/* <!--?lit$040396365$--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                style="user-select:none;flex-shrink:0;"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M18.793 15.755v1.931c0 .552.286.866.79.866.514 0 .8-.314.8-.866v-1.931h.989c.542 0 .847-.267.847-.723 0-.467-.314-.733-.847-.733h-.99V6.696c0-.885-.485-1.38-1.35-1.38-.657 0-1.095.286-1.657 1.114-2.16 3.235-3.016 4.605-4.377 7.013-.333.609-.447.942-.447 1.294 0 .628.495 1.018 1.237 1.018zm0-1.456H14.15v-.095c1.246-2.16 2.94-4.882 4.558-7.27h.085zM2.95 5.705a.73.73 0 0 1 .73.731v5.079h5.855V6.436a.73.73 0 1 1 1.461 0v11.62a.73.73 0 0 1-1.461 0v-5.08H3.68v5.08a.73.73 0 0 1-1.461 0V6.435a.73.73 0 0 1 .73-.73"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Heading 4
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action data-testid="affine:paragraph/h5" role="button">
              {/* <!--?lit$040396365$--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                style="user-select:none;flex-shrink:0;"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13.615 15.053c-.409 0-.678.316-.678.78 0 1.302 1.534 2.799 3.988 2.799 2.593 0 4.443-1.822 4.443-4.388 0-2.408-1.664-4.1-4.025-4.1-1.07 0-2.157.447-2.575 1.07h-.093l.353-4.137h5.01c.55 0 .856-.251.856-.698 0-.455-.316-.725-.855-.725h-5.215c-.8 0-1.2.326-1.255 1.014l-.41 5.205c-.046.716.224 1.135.754 1.135.297 0 .483-.112 1.162-.744a2.77 2.77 0 0 1 1.905-.725c1.609 0 2.752 1.152 2.752 2.789 0 1.71-1.18 2.9-2.872 2.9-1.116 0-1.971-.54-2.482-1.534-.242-.474-.447-.641-.763-.641M3.082 5.903c.394 0 .714.32.714.715v4.962h5.72V6.618a.714.714 0 1 1 1.427 0V17.97a.714.714 0 1 1-1.428 0v-4.962H3.796v4.962a.714.714 0 0 1-1.428 0V6.618c0-.394.32-.714.714-.714"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Heading 5
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action data-testid="affine:paragraph/h6" role="button">
              {/* <!--?lit$040396365$--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                style="user-select:none;flex-shrink:0;"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M17.65 5.517c-3.098 0-4.825 2.492-4.825 6.98 0 1.932.318 3.379.962 4.406.765 1.203 2.025 1.857 3.602 1.857 2.594 0 4.349-1.745 4.349-4.312 0-2.436-1.661-4.144-4.032-4.144-1.456 0-2.79.803-3.22 1.941h-.074c.028-3.49 1.13-5.319 3.21-5.319.83 0 1.53.299 2.203.961.336.327.532.43.793.43.401 0 .69-.3.69-.7 0-.43-.373-.943-.989-1.344-.709-.486-1.67-.756-2.669-.756m-.196 11.843c-1.652 0-2.809-1.185-2.809-2.856 0-1.652 1.13-2.81 2.744-2.81 1.661 0 2.744 1.12 2.744 2.82 0 1.717-1.074 2.846-2.679 2.846m-14-11.369c.396 0 .717.321.717.717v4.981h5.742V6.708a.717.717 0 0 1 1.434 0v11.396a.717.717 0 1 1-1.434 0v-4.981H4.171v4.981a.717.717 0 0 1-1.433 0V6.708c0-.396.32-.717.717-.717"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Heading 6
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action
              data-testid="affine:list/bulleted"
              role="button"
            >
              {/* <!--?lit$040396365$--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                style="user-select:none;flex-shrink:0;"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.3 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4.033-1.75a.75.75 0 0 0 0 1.5l11.917.001a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 1 0 0 1.5l11.917.002a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 1 0 0 1.5l11.917.002a.75.75 0 1 0 0-1.5zM5.3 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Bulleted List
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action
              data-testid="affine:list/numbered"
              role="button"
            >
              {/* <!--?lit$040396365$--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                style="user-select:none;flex-shrink:0;"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.129 5.762a.6.6 0 0 0 .15-.08l.255-.177V7.64c0 .188.063.35.181.466a.66.66 0 0 0 .47.177c.186 0 .35-.061.468-.177a.64.64 0 0 0 .182-.466V4.934a.7.7 0 0 0-.197-.52c-.13-.13-.316-.195-.534-.195-.221 0-.434.022-.675.183l-.677.452a.53.53 0 0 0-.252.46c0 .273.203.472.464.472a.5.5 0 0 0 .165-.024m5.277-.16a.768.768 0 0 0 0 1.536h10.326a.768.768 0 1 0 0-1.536zm0 5.632a.768.768 0 0 0 0 1.536h10.326a.768.768 0 1 0 0-1.535zm0 5.633a.768.768 0 1 0 0 1.536h10.326a.768.768 0 1 0 0-1.536zm-2.782-5.753q.018-.099.018-.21c0-.678-.58-1.136-1.486-1.136-.652 0-1.176.277-1.373.721.197-.444.721-.72 1.373-.72.907 0 1.486.457 1.486 1.134q0 .112-.018.211m-1.5 1.64v.02h1.184c.274 0 .43.163.43.414 0-.25-.156-.414-.43-.414H5.126zm-1.384.237c.035-.14.126-.26.284-.393l1.026-.878c.338-.29.48-.453.523-.622-.042.17-.185.331-.523.622l-1.026.879c-.158.131-.25.253-.284.392m.763-1.81a.8.8 0 0 0 .251-.254.7.7 0 0 1 .184-.193.36.36 0 0 1 .202-.054c.113 0 .199.034.255.085.056.05.09.12.09.21 0 .17-.079.304-.502.667l-1.026.878c-.219.184-.336.365-.336.608 0 .156.045.303.152.412.108.108.265.164.463.164h2.073a.54.54 0 0 0 .389-.145.51.51 0 0 0 .142-.371.5.5 0 0 0-.142-.374.54.54 0 0 0-.39-.142h-.932l.496-.428c.287-.25.506-.447.651-.65.15-.207.221-.419.221-.691 0-.37-.16-.684-.442-.902-.281-.217-.677-.335-1.146-.335-.676 0-1.248.288-1.467.783a.7.7 0 0 0-.057.283c0 .155.05.29.152.387.1.095.24.142.4.142a.6.6 0 0 0 .32-.08m-.832 4.897c.152-.414.67-.853 1.557-.853.457 0 .865.096 1.16.29a1 1 0 0 1 .478.865c0 .483-.308.804-.692.941.234.05.43.143.576.279.184.17.285.404.285.687 0 .405-.174.737-.49.966-.313.228-.762.352-1.311.352-.96 0-1.495-.458-1.641-.868a.7.7 0 0 1-.04-.228.5.5 0 0 1 .155-.387.6.6 0 0 1 .413-.142q.174-.001.305.064.13.066.223.203a.8.8 0 0 0 .236.245c.09.055.206.087.377.087.278 0 .46-.165.46-.379a.33.33 0 0 0-.14-.288c-.096-.066-.242-.104-.444-.104H5.11a.48.48 0 0 1-.35-.122.44.44 0 0 1-.12-.323c0-.124.039-.236.12-.317.082-.08.2-.125.35-.125h.028c.178 0 .311-.038.399-.102a.32.32 0 0 0 .131-.268.32.32 0 0 0-.112-.258.5.5 0 0 0-.322-.098.57.57 0 0 0-.286.068.53.53 0 0 0-.198.207.7.7 0 0 1-.241.27.64.64 0 0 1-.343.082.55.55 0 0 1-.401-.144.5.5 0 0 1-.136-.363c0-.085.012-.153.042-.237"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Numbered List
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action data-testid="affine:list/todo" role="button">
              {/* <!--?lit$040396365$--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                style="user-select:none;flex-shrink:0;"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zM4.75 6c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25zm11.78 3.53a.75.75 0 0 0-1.06-1.06l-4.97 4.97-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}To-do List
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action data-testid="affine:code/" role="button">
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
              {/* <!--?lit$040396365$--> */}Code Block
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action
              data-testid="affine:paragraph/quote"
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
                  d="M5 10.966v4.095c0 .565.458 1.024 1.024 1.024h4.095c.566 0 1.024-.459 1.024-1.024v-4.095c0-.566-.459-1.024-1.024-1.024H6.704A3.35 3.35 0 0 1 9.845 7.75v-1.5A4.845 4.845 0 0 0 5 10.966m8 0v4.095c0 .565.458 1.024 1.024 1.024h4.095c.566 0 1.024-.459 1.024-1.024v-4.095c0-.566-.459-1.024-1.024-1.024h-3.415a3.35 3.35 0 0 1 3.141-2.192v-1.5A4.845 4.845 0 0 0 13 10.966"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <!--?lit$040396365$--> */}Quote
            </editor-menu-action>
            {/* <!---->  */}
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
              {/* <!--?lit$040396365$--> */}
              Red
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
                    d="M2.625 4.58333C2.625 3.50178 3.50178 2.625 4.58333 2.625H15.4167C16.4982 2.625 17.375 3.50178 17.375 4.58333V15.4167C17.375 16.4982 16.4983 17.375 15.4167 17.375H4.58333C3.50178 17.375 2.625 16.4982 2.625 15.4167V4.58333ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
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
            {/* <!----><!----> */}

            {/* <!-- Text Background Highlight --> */}
            <div className={styles.highlighPanelHeading}>Background</div>
            {/* <!--?lit$040396365$--><!----> */}
            <editor-menu-action role="button">
              <span style="display: flex; color: transparent">
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
                    d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50181 17.375 2.62503 16.4983 2.62503 15.4167V4.58336Z"
                    fill="currentColor"
                  ></path>
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
                    fill="var(--affine-text-primary-color)"
                  ></path>
                </svg>
              </span>
              {/* <!--?lit$040396365$--> */}Default Background
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action role="button">
              <span style="display: flex; color: var(--affine-text-highlight-red)">
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
                    d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50178 17.375 2.62503 16.4983 2.62503 15.4167V4.58336Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clip-rule="evenodd"
                    d="M2.625 4.58333C2.625 3.50178 3.50178 2.625 4.58333 2.625H15.4167C16.4982 2.625 17.375 3.50178 17.375 4.58333V15.4167C17.375 16.4982 16.4982 17.375 15.4167 17.375H4.58336C3.50178 17.375 2.62503 16.4983 2.62503 15.4167V4.58333ZM4.58333 3.20833C3.82394 3.20833 3.20833 3.82394 3.20833 4.58333V15.4167C3.20833 16.1761 3.82394 16.7917 4.58333 16.7917H15.4167C16.1761 16.7917 16.7917 16.1761 16.7917 15.4167V4.58333C16.7917 3.82394 16.1761 3.20833 15.4167 3.20833H4.58333Z"
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
              {/* <!--?lit$040396365$--> */}Red Background
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action role="button">
              <span style="display: flex; color: var(--affine-text-highlight-orange)">
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
                    d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50181 17.375 2.62503 16.4983 2.62503 15.4167V4.58336Z"
                    fill="currentColor"
                  ></path>
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
                    fill="var(--affine-text-primary-color)"
                  ></path>
                </svg>
              </span>
              {/* <!--?lit$040396365$--> */}Orange Background
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action role="button">
              <span style="display: flex; color: var(--affine-text-highlight-yellow)">
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
                    d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50178 17.375 2.62503 16.4983 2.62503 15.4167V4.58336Z"
                    fill="currentColor"
                  ></path>
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
                    fill="var(--affine-text-primary-color)"
                  ></path>
                </svg>
              </span>
              {/* <!--?lit$040396365$--> */}Yellow Background
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action role="button">
              <span style="display: flex; color: var(--affine-text-highlight-green)">
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
                    d="M2.62503 4.58336C2.62503 3.50181 3.50181 2.62503 4.58336 2.62503H15.4167C16.4983 2.62503 17.375 3.50181 17.375 4.58336V15.4167C17.375 16.4983 16.4983 17.375 15.4167 17.375H4.58336C3.50178 17.375 2.62503 16.4983 2.62503 15.4167V4.58336Z"
                    fill="currentColor"
                  ></path>
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
                    fill="var(--affine-text-primary-color)"
                  ></path>
                </svg>
              </span>
              {/* <!--?lit$040396365$--> */}Green Background
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action role="button">
              <span style="display: flex; color: var(--affine-text-highlight-teal)">
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
                    fill="currentColor"
                  ></path>
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
                    fill="var(--affine-text-primary-color)"
                  ></path>
                </svg>
              </span>
              {/* <!--?lit$040396365$--> */}Teal Background
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action role="button">
              <span style="display: flex; color: var(--affine-text-highlight-blue)">
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
              {/* <!--?lit$040396365$--> */}Blue Background
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action role="button">
              <span style="display: flex; color: var(--affine-text-highlight-purple)">
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
              {/* <!--?lit$040396365$--> */}Purple Background
            </editor-menu-action>
            {/* <!----><!----> */}
            <editor-menu-action
              data-testid="var(--affine-text-highlight-grey)"
              role="button"
            >
              <span
                style={{
                  display: "flex",
                  color: "var(--affine-text-highlight-grey)",
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
              {/* <!--?lit$040396365$--> */}Grey Background
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
      <editor-menu-button style="--content-padding: 8px;">
        <div data-size="large" data-orientation="vertical">
          <editor-menu-action aria-label="Copy" role="button">
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
                d="M3.25 6A2.75 2.75 0 0 1 6 3.25h8A2.75 2.75 0 0 1 16.75 6v1.25H18A2.75 2.75 0 0 1 20.75 10v8A2.75 2.75 0 0 1 18 20.75h-8A2.75 2.75 0 0 1 7.25 18v-1.25H6A2.75 2.75 0 0 1 3.25 14zm5.5 12c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25h-8c-.69 0-1.25.56-1.25 1.25zm6.5-10.75H10A2.75 2.75 0 0 0 7.25 10v5.25H6c-.69 0-1.25-.56-1.25-1.25V6c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {/* <!--?lit$040396365$--> */}
            <span class="label">{/* <!--?lit$040396365$--> */}Copy</span>
          </editor-menu-action>
          {/* <!----> */}
          <editor-menu-action aria-label="Duplicate" role="button">
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
                d="M6 3.25A2.75 2.75 0 0 0 3.25 6v8A2.75 2.75 0 0 0 6 16.75h1.25V18A2.75 2.75 0 0 0 10 20.75h8A2.75 2.75 0 0 0 20.75 18v-8A2.75 2.75 0 0 0 18 7.25h-1.25V6A2.75 2.75 0 0 0 14 3.25zm4 4h5.25V6c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25h-8a1.25 1.25 0 0 0-1.17.81.75.75 0 0 1-1.405-.528A2.75 2.75 0 0 1 10 7.25m2.887 3.239a.75.75 0 1 0-1.098 1.022l.688.739H7.8a.75.75 0 0 0 0 1.5h4.677l-.688.739a.75.75 0 0 0 1.098 1.022l1.862-2a.75.75 0 0 0 0-1.022z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {/* <!--?lit$040396365$--> */}
            <span class="label">{/* <!--?lit$040396365$--> */}Duplicate</span>
          </editor-menu-action>
          {/* <!----> */}
          <editor-toolbar-separator data-orientation="horizontal"></editor-toolbar-separator>
          {/* <!----> */}
          <editor-menu-action class="delete" aria-label="Delete" role="button">
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
                clip-rule="evenodd"
              ></path>
            </svg>
            {/* <!--?lit$040396365$--> */}
            <span class="label">{/* <!--?lit$040396365$--> */}Delete</span>
          </editor-menu-action>
          {/* <!----> */}
        </div>
      </editor-menu-button>
    </editor-toolbar>
  );
};

export default Toolbarwidget;
