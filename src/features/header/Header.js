import React, { useEffect, useState } from "react";
import logo from "../../media/caddit_logo_text.png";
import search from "../../media/search.png";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../store/redditSlice";

export default function Header() {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (event) => {
    setLocalSearchTerm(event.target.value);
    console.log(localSearchTerm);
  };

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchTerm(localSearchTerm));
  };

  return (
    <header className={styles.app_header}>
      <img
        src={logo}
        className={styles.app_logo}
        alt="logo"
        onClick={() => window.location.reload(false)}
      />
      <div className={styles.search_bar}>
        <form onSubmit={onSearchTermSubmit}>
          <img src={search} alt="search icon" className={styles.search_icon} />

          <input
            type="search"
            value={localSearchTerm}
            onChange={onSearchTermChange}
            placeholder="Search caddit"
            className={styles.search_input}
            onAbort={() => dispatch(setSearchTerm(""))}
          />
        </form>
      </div>
    </header>
  );
}
