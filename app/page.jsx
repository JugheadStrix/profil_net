import styles from "./page.module.css";
import Icon from "../composants/home/icons";
import Description from "../composants/home/description";
import Photo from "../composants/home/pdp";

export default function Home() {
  return (
    <>
      {/* <Footer>
    </Footer> */}
      <div className={styles.container}>
        <Icon />
        <Description />
        <Photo />
      </div>
    </>
  );
}
