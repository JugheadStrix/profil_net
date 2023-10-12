import React from "react";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Contacts</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.sub_content1}>
          <h2>Contact info</h2>
          <div className={styles.box}>
            <i className="mdi mdi-email"></i>
            <span>+261 34 36 582 62</span>
          </div>
          <div className={styles.box}>
            <i className="mdi mdi-phone"></i>
            <span>+261 34 36 582 62</span>
          </div>
          <div className={styles.box}>
            <i className="mdi mdi-linkedin"></i>
            <span>+261 34 36 582 62</span>
          </div>
          <div className={styles.box}>
            <i className="mdi mdi-git"></i>
            <span>+261 34 36 582 62</span>
          </div>
          <div className={styles.box}>
            <i className="mdi mdi-facebook"></i>
            <span>+261 34 36 582 62</span>
          </div>
        </div>

        <div className={styles.sub_content2}>
          <h2>Messages</h2>
          <div className={styles.box}>
            <span>Votre e-mail</span>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.box}>
            <span>Message</span>
            <textarea type="text" name="" id="" />
          </div>
          <button>Envoyer</button>
        </div>

        <div className={styles.sub_content3}>
          <div className={styles.logo}></div>
          <p>Our tech company</p>
          <div className={styles.span}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est
            quam deserunt voluptatem minima aliquid voluptas, sint deleniti
            repellendus excepturi iusto nisi voluptatibus.
          </div>
          <div className={styles.star}>
            <i className="mdi mdi-star"></i>
            <i className="mdi mdi-star"></i>
            <i className="mdi mdi-star"></i>
            <i className="mdi mdi-star"></i>
            <i className="mdi mdi-star"></i>
          </div>
          <p className={styles.copyright}>copyright ◙ 2023</p>
        </div>
      </div>
    </div>
  );
}
