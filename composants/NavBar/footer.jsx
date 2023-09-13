import styles from "./footer.module.css";
export default function Footer({ children }) {
  return (
    <>
      {children}
      <footer className={styles.footer}>
        <div className={styles.bot}>
          <div className={`${styles.unit} ${styles.unit1}`}>
            <p>Company Structure</p>
            <label htmlFor="">Azerty clavier</label>
          </div>
          <div className={styles.unit}>
            <h2>ACTION01</h2>
            <ul>
              <li>Unit001</li>
              <li>Unit002</li>
              <li>Unit003</li>
              <li>Unit004</li>
            </ul>
          </div>
          <div className={styles.unit}>
            <h2>ACTION01</h2>
            <ul>
              <li>Unit001</li>
              <li>Unit002</li>
              <li>Unit003</li>
              <li>Unit004</li>
            </ul>
          </div>
          <div className={styles.unit}>
            <h2>ACTION01</h2>
            <ul>
              <li>Unit001</li>
              <li>Unit002</li>
              <li>Unit003</li>
              <li>Unit004</li>
            </ul>
          </div>
          <div className={styles.unit}>
            <h2>Commentaire</h2>
            <textarea
              style={{ height: "4rem" }}
              id=""
              cols="30"
              rows="6"
              placeholder=" . . . "
            ></textarea>
            <input type="button" value="Envoyer" />
          </div>
        </div>
      </footer>
    </>
  );
}
