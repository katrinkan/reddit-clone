import React from "react";
import logo from "../../media/caddit_logo_text.png";
import search from "../../media/search.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.app_header}>
      <img src={logo} className={styles.app_logo} alt="logo" />
      <div className={styles.search_bar}>
        <img src={search} alt="search icon" className={styles.search_icon} />
        <input
          type="search"
          placeholder="Search caddit"
          className={styles.search_input}
        />
      </div>
    </header>
  );
}
