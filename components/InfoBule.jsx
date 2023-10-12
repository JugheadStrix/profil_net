import React from "react";
import styles from "../styles/profil.module.css";

export default function InfoBule() {
  return (
    <div className={styles.infoBule}>
      <label htmlFor="img">Importer</label>
      <input type="file" name="img" id="img" style={{ display: "none" }} />
      <span>Prendre</span>
    </div>
  );
}
