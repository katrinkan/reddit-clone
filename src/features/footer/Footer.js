import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <small>
        <a href="https://github.com/katrinkan/reddit-clone" target="_blank">
          Coded
        </a>{" "}
        with 🩶 by Katrin Kanape
      </small>
    </div>
  );
}
