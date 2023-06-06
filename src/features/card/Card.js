import React from "react";
import up from "../../media/arrow_up.png";
import down from "../../media/arrow_down.png";
import bubble from "../../media/bubble.png";
import share from "../../media/share.png";
import channel_logo from "../../media/caddit_logo.png";
import moment from "moment";
import styles from "./Card.module.css";

export default function Card(props) {
  const { post } = props;

  return (
    <article key={post.id}>
      <div className="card-container">
        <div className={styles.grid_container}>
          <div className={styles.grid_left}>
            <img src={up} alt="arrow up" className={styles.arrows} />
            <p className={styles.likes}>{post.score}</p>
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

                <small className={styles.channel}>r/{post.subreddit}</small>
                <small>posted by</small>
                <small>u/{post.author}</small>
                <small>{moment.unix(post.created_utc).fromNow()}</small>
              </div>
            </div>
            <h3>{post.title}</h3>
            <div className={styles.content}>
              {console.log(post)}
              {!post.secure_media ? (
                <img
                  src={post.url}
                  alt={post.selftext}
                  className={styles.content_img}
                />
              ) : !post.secure_media.reddit_video ? null : (
                <video
                  src={post.secure_media.reddit_video.fallback_url}
                  className={styles.content_video}
                  controls
                ></video>
              )}
            </div>
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
                {post.num_comments}{" "}
                <span className={styles.mobile_none}>Comments</span>
              </small>

              <img src={share} className={styles.icons} alt="share icon" />
              <small className={styles.mobile_none}>Share</small>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
