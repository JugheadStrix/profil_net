import styles from "../styles/hover.module.css";
export default function Hover({ text }) {
  return (
    <div className={styles.container}>
      <div>{text}</div>
    </div>
  );
}
