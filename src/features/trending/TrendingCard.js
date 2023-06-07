import React from "react";
import styles from "./Trending.module.css";
import channel_logo from "../../media/caddit_logo.png";

export default function TrendingCard({ title, text, channel }) {
  return (
    <div className={styles.gridItem}>
      <h3 className={styles.trendingCardTitle}>{title}</h3>

      <p className={styles.trendingCardText}>{text}</p>
      <small className={styles.trendingCardChannel}>
        <img
          src={channel_logo}
          alt="channel logo"
          className={styles.channelLogo}
        />
        {channel}
      </small>
    </div>
  );
}
