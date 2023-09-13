import styles from "../../styles/pdp.module.css";
import image from "../../assets/myAvatar.png";
import Image from "next/image";
export default function pdp() {
  return (
    <div className={styles.container}>
      <Image src={image} alt="" className={styles.image} />
    </div>
  );
}
