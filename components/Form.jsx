import React from "react";
import styles from "../styles/form.module.css";

export default function Form({ andrana }) {
  return (
    <div className={styles.container}>
      <div className={styles.fomrbox}>
        <i className="mdi mdi-account-settings"></i>
        <h1>
          Jughead Strix
          <i
            className="mdi mdi-close"
            onClick={() => {
              andrana(false);
            }}
          ></i>
        </h1>
        <form action="">
          <div className={styles.formcontent}>
            <div className={styles.part}>
              <div className={styles.box}>
                <label htmlFor="nom">Nom & prénom *</label>
                <input type="text" name="nom" id="nom" />
              </div>

              <div className={styles.box_radio}>
                <label htmlFor="">Genre *</label>
                <div>
                  <div>
                    <input type="radio" name="genre" id="homme" />
                    <label htmlFor="homme">Homme</label>
                  </div>
                  <div>
                    <input type="radio" name="genre" id="femme" />
                    <label htmlFor="femme">Femme</label>
                  </div>
                </div>
              </div>

              <div className={styles.box}>
                <label htmlFor="date">Date de naissance *</label>
                <input type="text" name="date" id="date" />
              </div>

              <div className={styles.box}>
                <label htmlFor="mail">E-mail *</label>
                <input type="email" name="mail" id="mail" />
              </div>

              <div className={styles.box}>
                <label htmlFor="phone">Téléphone *</label>
                <input type="text" name="phone" id="phone" />
              </div>
            </div>
            <div className={styles.part}>
              <div className={styles.box}>
                <label htmlFor="adrs">Adresse</label>
                <input type="text" name="adrs" id="adrs" />
              </div>

              <div className={styles.box}>
                <label htmlFor="user">Utilisateur</label>
                <input type="text" name="user" id="user" />
              </div>

              <div className={styles.box}>
                <label htmlFor="pwd">Mot de passe</label>
                <input type="password" name="pwd" id="pwd" />
              </div>

              <div className={styles.box}>
                <label htmlFor="conf_pwd">Confirme mot de passe</label>
                <input type="password" name="conf_pwd" id="conf_pwd" />
              </div>

              <div className={styles.box_btn}>
                <button type="reset">Annuler</button>
                <button type="submit">Enregistrer la modification</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
