import React, { useState } from "react";
import styles from "./Share.module.css";

export default function Modal({ permalink, shareRef }) {
  const [btnClicked, setBtnClicked] = useState(false);
  return (
    <div className={styles.shareContainer} ref={shareRef}>
      <h4>Share post:</h4>
      <button
        onClick={async () => {
          if ("clipboard" in navigator) {
            await navigator.clipboard.writeText(
              `https://www.reddit.com${permalink}`
            );
          } else {
            Document.execCommand(
              "copy",
              true,
              `https://www.reddit.com${permalink}`
            );
          }
          setBtnClicked(true);
        }}
      >
        {btnClicked ? "Copied to Clipboard" : "Copy Link"}
      </button>
    </div>
  );
}
