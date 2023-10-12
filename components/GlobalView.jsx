import React from "react";
import styles from "../styles/globale.module.css";
import { useSelector } from "react-redux";

export default function GlobalView() {
  const { name, phoneNumber } = useSelector((state) => state.test);
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>{name}</h1>
        <p>J - Strix</p>
      </div>

      <div className={styles.part}>
        <h3>Coordonnées</h3>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-email-outline"></i>
            E-mail
          </span>
          <span>strix@gmail.com</span>
        </div>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-map-marker-outline"></i>
            Adresse
          </span>
          <span>Louvre, Paris BT 528</span>
        </div>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-phone-outline"></i>
            Téléphone
          </span>
          <span>{phoneNumber}</span>
        </div>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-google-physical-web"></i>
            Réseaux sociaux
          </span>
          <span>
            <i className="mdi mdi-facebook"></i>
            <i className="mdi mdi-twitter"></i>
            <i className="mdi mdi-linkedin"></i>
            <span className={styles.add}>
              <i className="mdi mdi-plus"></i>
            </span>
          </span>
        </div>
      </div>

      <div className={styles.part}>
        <h3>Autres informations</h3>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-gamepad"></i>
            Intérêts
          </span>
          <span>xxxxxxxx</span>
        </div>
      </div>

      <div className={styles.box}>
        <span>
          <i className="mdi mdi-inbox"></i>
          Lorem ipsum
        </span>
        <span>xxxxxxxx</span>
      </div>

      <div className={styles.box}>
        <span>
          <i className="mdi mdi-kodi"></i>
          Competences
        </span>
        <span>xxxxxxxx</span>
      </div>
    </div>
  );
}
