"use client";
import React, { useContext } from "react";
import styles from "../styles/apropos.module.css";
import { TestContext } from "@/lib/context/TestContext";

export default function Apropos() {
  const { name, phoneNumber } = useContext(TestContext);
  return (
    <div className={styles.container}>
      <div className={styles.part}>
        <h3>Informations de base</h3>
        <div className={styles.box}>
          <span>
            <i className="mdi mdi-account-outline"></i>
            Nom et prénom
          </span>
          <span>{name}</span>
          <i className="mdi mdi-pencil-box-outline"></i>
        </div>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-gender-male-female"></i>
            Genre
          </span>
          <span>Homme</span>
          <i className="mdi mdi-pencil-box-outline"></i>
        </div>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-calendar"></i>
            Date de naissance
          </span>
          <span>15 Avril 2005</span>
          <i className="mdi mdi-pencil-box-outline"></i>
        </div>
      </div>

      <div className={styles.part}>
        <h3>Informations des contacts</h3>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-email-outline"></i>
            E-mail
          </span>
          <span>strix@gmail.com</span>
          <i className="mdi mdi-pencil-box-outline"></i>
        </div>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-map-marker-outline"></i>
            Adresse
          </span>
          <span>Louvre, Paris BT 528</span>
          <i className="mdi mdi-pencil-box-outline"></i>
        </div>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-phone-outline"></i>
            Téléphone
          </span>
          <span>{phoneNumber}</span>
        </div>
      </div>

      <div className={styles.part}>
        <h3>Autres informations</h3>

        <div className={styles.box}>
          <span>
            <i className="mdi mdi-key-outline"></i>
            Utilisateur
          </span>
          <span>x-xx-xx-xxx</span>
          <i className="mdi mdi-pencil-box-outline"></i>
        </div>
      </div>

      <div className={styles.box}>
        <span>
          <i className="mdi mdi-lock-outline"></i>
          Mot de passe
        </span>
        <span>xx-x-xxx-xx</span>
        <i className="mdi mdi-pencil-box-outline"></i>
      </div>
    </div>
  );
}
