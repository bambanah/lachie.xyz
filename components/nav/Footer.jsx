import styles from "../styles/nav.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="https://github.com/Bambanah">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/lachlan-underhill-7476681a0/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/Bambanah">HackerRank</a>
        </li>
      </ul>
    </footer>
  );
}
