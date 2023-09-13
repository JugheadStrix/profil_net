import styles from "./Popup.module.css";
export default function Popup({ setShowPopup }) {
  return (
    <div className={styles.container}>
      <i
        className="mdi mdi-close-circle-outline"
        onClick={() => setShowPopup(false)}
      ></i>
      <div>
        <div>Titre</div>
        <div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            error, quo odio voluptatum ad, architecto reiciendis ea itaque
            voluptatibus facere repellendus sit fuga quidem perferendis
            voluptates nobis non expedita accusamus!
          </div>
        </div>
      </div>
    </div>
  );
}
