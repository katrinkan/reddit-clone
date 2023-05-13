import React from "react";
import styles from "./Trending.module.css";
import channel_logo from "../../media/caddit_logo.png";

export default function TrendingCard({ title, text, channel }) {
  return (
    <div className={styles.grid_item}>
      <h3 className={styles.trending_card_title}>{title}</h3>
      <p className={styles.trending_card_text}>{text}</p>
      <small className={styles.trending_card_channel}>
        <img
          src={channel_logo}
          alt="channel logo"
          className={styles.channel_logo}
        />
        {channel}
      </small>
    </div>
  );
}
