import React from "react";
import moment from "moment";
import styles from "./Comments.module.css";

export default function Comments({ comments }) {
  return (
    <div className={styles.commentContainer}>
      {comments.map((comment) => {
        return (
          <section className={styles.commentSection} key={comment.id}>
            <h4 className={styles.commentAuthor}>{comment.author}</h4>
            <small>{moment.unix(comment.created_utc).fromNow()}</small>
            <br />
            <p>{comment.body}</p>
          </section>
        );
      })}
    </div>
  );
}
