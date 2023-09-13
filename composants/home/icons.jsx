"use client";
import Image from "next/image";
import styles from "../../styles/icons.module.css";
import icon1 from "../../assets/icons8_instagram_50px.png";
import icon2 from "../../assets/icons8_user_shield_50px.png";
import icon4 from "../../assets/icons8_github_50px.png";
export default function Icons() {
  return (
    <div className={styles.icons}>
      <div id="Social media" type="hover">
        <Image src={icon1} alt="" className={styles.img} />
      </div>
      <div>
        <Image src={icon2} alt="" className={styles.img} />
      </div>
      <div>
        <Image src={icon4} alt="" className={styles.img} />
      </div>
    </div>
  );
}
