import styles from "../styles/Test.module.css";
export default function Test({ message, children }) {
  return (
    <>
      {message && (
        <div className={styles.container}>
          <div>
            <label htmlFor="">{message}</label>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
