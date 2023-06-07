import React, { useState } from "react";
import up from "../../media/arrow_up.png";
import upActive from "../../media/arrow_up_active.png";
import down from "../../media/arrow_down.png";
import downActive from "../../media/arrow_down_active.png";
import bubble from "../../media/bubble.png";
import bubbleActive from "../../media/bubble_active.png";
import share from "../../media/share.png";
import channel_logo from "../../media/caddit_logo.png";
import moment from "moment";
import styles from "./Card.module.css";
import Comments from "../comments/Comments";
import Share from "../share/Share";

export default function Card(props) {
  const { post, onToggleComments } = props;
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [shareVisible, setShareVisible] = useState(false);
  const [voteValue, setVoteValue] = useState(post.score);
  const [arrowUp, setArrowUp] = useState(up);
  const [arrowDown, setArrowDown] = useState(down);
  const [commentsBubble, setCommentsBubble] = useState(bubble);

  const handleVote = (newValue) => {
    if (voteValue === 0 && newValue === -1) {
      setVoteValue(0);
      setArrowDown(down);
      setArrowUp(up);
    } else if (newValue === 1) {
      setVoteValue((prevValue) => prevValue + 1);
      setArrowUp(upActive);
      setArrowDown(down);
    } else {
      setVoteValue((prevValue) => prevValue - 1);
      setArrowDown(downActive);
      setArrowUp(up);
    }
  };

  const toggleShowComments = (event) => {
    if (!commentsVisible) {
      event.preventDefault();
      setCommentsVisible(true);
      onToggleComments(post.permalink);
      setCommentsBubble(bubbleActive);
    } else {
      event.preventDefault();
      setCommentsVisible(false);
      setCommentsBubble(bubble);
    }
  };

  const toggleShare = (event) => {
    if (!shareVisible) {
      event.preventDefault();
      setShareVisible(true);
    } else {
      event.preventDefault();
      setShareVisible(false);
    }
  };

  return (
    <article key={post.id}>
      <div className="card-container">
        <div className={styles.gridContainer}>
          <div className={styles.gridLeft}>
            <img
              src={arrowUp}
              alt="arrow up"
              className={styles.arrows}
              onClick={() => handleVote(1)}
            />
            <p className={styles.likes}>{voteValue}</p>
            <img
              src={arrowDown}
              alt="arrow down"
              className={styles.arrows}
              onClick={() => handleVote(-1)}
            />
          </div>
          <div className={styles.gridRight}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeadereft}>
                <img
                  src={channel_logo}
                  alt="channel logo"
                  className={styles.channelLogo}
                />

                <small className={styles.channel}>r/{post.subreddit}</small>
                <small>posted by</small>
                <small>u/{post.author}</small>
                <small>{moment.unix(post.created_utc).fromNow()}</small>
              </div>
            </div>
            <h3>{post.title}</h3>

            <div>
              {!post.secure_media ? (
                <img
                  src={post.url}
                  alt={post.selftext}
                  className={styles.contentImg}
                />
              ) : !post.secure_media.reddit_video ? null : (
                <video
                  src={post.secure_media.reddit_video.fallback_url}
                  className={styles.contentVideo}
                  controls
                ></video>
              )}
            </div>

            <div className={styles.cardFooter}>
              <img
                src={arrowUp}
                alt="arrow up"
                className={`${styles.icons} ${styles.desktopNone}`}
                onClick={() => handleVote(1)}
              />
              <small className={styles.desktopNone}>{voteValue}</small>
              <img
                src={arrowDown}
                alt="arrow down"
                className={`${styles.icons} ${styles.desktopNone}`}
                onClick={() => handleVote(-1)}
              />

              <button onClick={toggleShowComments}>
                <img
                  src={commentsBubble}
                  className={styles.icons}
                  alt="speechbubble icon"
                />
                <small className={styles.commentCount}>
                  {post.num_comments}{" "}
                  <span className={styles.mobileNone}>Comments</span>
                </small>
              </button>
              <button onClick={toggleShare}>
                <img src={share} className={styles.icons} alt="share icon" />
                <small className={styles.mobileNone}>Share</small>
              </button>
            </div>
          </div>
        </div>
      </div>
      {commentsVisible ? <Comments comments={post.comments} /> : null}
      {shareVisible ? <Share permalink={post.permalink} /> : null}
    </article>
  );
}
