import styles from "../../styles/description.module.css";
import Image from "next/image";
import bug from "../../assets/icons8_blockchain_new_logo_50px_1.png";
import sent from "../../assets/icons8_email_send_50px.png";
export default function description() {
  return (
    <div className={styles.container}>
      <h1 type="hover" id="Titre">
        Jughead Strix <Image src={bug} alt="" />
      </h1>
      <span className={styles.ssection}>
        <h2>▬▬ &nbsp;&nbsp;&nbsp; Mentaliste -/- Magicien</h2>
      </span>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius
        accusantium blanditiis ducimus iusto doloribus reiciendis sit iste modi
        cupiditateconsectetur adipisicing elit. Ut eius accusantium blanditiis
        ducimus iusto doloribus reiciendis sit iste modi cupiditate .
      </p>
      <div className={styles.con_btn} type="hover" id="button submit">
        <button className={styles.btn}>
          Say Hello <Image src={sent} alt="" className={styles.sent} />
        </button>
      </div>
    </div>
  );
}
