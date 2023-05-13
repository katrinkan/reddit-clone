import React from "react";
import up from "../../media/arrow_up.png";
import down from "../../media/arrow_down.png";
import bubble from "../../media/bubble.png";
import share from "../../media/share.png";
import save from "../../media/save.png";
import channel_logo from "../../media/caddit_logo.png";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className="card-container">
      <div className={styles.grid_container}>
        <div className={styles.grid_left}>
          <img src={up} alt="arrow up" className={styles.arrows} />
          <p className={styles.likes}>24.5k</p>
          <img src={down} alt="arrow down" className={styles.arrows} />
        </div>
        <div className={styles.grid_right}>
          <div className={styles.card_header}>
            <div className={styles.card_header_left}>
              <img
                src={channel_logo}
                alt="channel logo"
                className={styles.channel_logo}
              />

              <small className={styles.channel}>r/StarWars</small>
              <small>posted by</small>
              <small>u/_RERO_</small>
              <small>2 days ago</small>
            </div>
            <button className={styles.join_btn}>Subscribe</button>
          </div>
          <h3>
            How is it that a throne is not destroyed after such an explosion?
          </h3>
          <img
            src="https://preview.redd.it/1p8hv5hh04za1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=b073f63bd9891b8b6b88e9a4db40518a5d6289ac"
            alt="test"
            className={styles.content_img}
          />
          <div className={styles.card_footer}>
            <img
              src={up}
              alt="arrow up"
              className={`${styles.icons} ${styles.desktop_none}`}
            />
            <small className={styles.desktop_none}>24.5k</small>
            <img
              src={down}
              alt="arrow down"
              className={`${styles.icons} ${styles.desktop_none}`}
            />
            <img
              src={bubble}
              className={styles.icons}
              alt="speechbubble icon"
            />
            <small className={styles.comment_count}>
              2.8k <span className={styles.mobile_none}>Comments</span>
            </small>

            <img src={share} className={styles.icons} alt="share icon" />
            <small className={styles.mobile_none}>Share</small>
            <img src={save} className={styles.icons} alt="save icon" />
            <small className={styles.mobile_none}>Save</small>
          </div>
        </div>
      </div>
    </div>
  );
}
