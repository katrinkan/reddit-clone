import React from "react";
import styles from "./Comments.module.css";

export default function Comments({ comments }) {
  console.log(comments);
  return (
    <div className={styles.comment_container}>
      {comments.map((comment) => {
        return (
          <section className={styles.comment_section} key={comment.id}>
            <h4 className={styles.comment_author}>{comment.author}</h4>
            <small> 8 hours ago</small>
            <br />
            <p className={styles.comment}>{comment.body}</p>
          </section>
        );
      })}
    </div>
  );
}
