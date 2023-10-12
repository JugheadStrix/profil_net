"use client";
import React, { useContext, useState } from "react";
import styles from "../styles/profil.module.css";
import Apropos from "@/components/Apropos";
import InfoBule from "./InfoBule";
import GlobalView from "./GlobalView";
import Form from "./Form";
import Pdp from "../assets/myAvatar.png";
import Image from "next/image";
import { TestContext } from "@/lib/context/TestContext";
import { useDispatch, useSelector } from "react-redux";
import { updateInfos } from "@/lib/redux/slices/testSlice";
export default function Profil() {
  const { setShowMessage } = useContext(TestContext);
  const { name } = useSelector((state) => state.test);
  const dispatch = useDispatch();
  const [bulle, setBulle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(0);
  const [infoActive, setInfoActive] = useState(0);
  const handleActive1 = () => {
    setActive(0);
    setInfoActive(0);
  };

  const handleActive2 = () => {
    setActive(1);
    setInfoActive(1);
    setShowMessage("Test réussi");
  };
  const takeImg = () => {
    setBulle(!bulle);
  };
  const handleForm = () => {
    setEdit(!edit);
  };
  return (
    <div className={styles.container}>
      <div className={edit ? `${styles.editOk}` : `${styles.editNo}`}>
        <Form andrana={setEdit} />
      </div>
      <div className={styles.left}>
        <div className={styles.pdp}>
          <Image src={Pdp} alt="photo de profil" />
          <span>
            <i className="mdi mdi-camera" onClick={takeImg}></i>
          </span>
          <div className={bulle ? `${styles.bulle}` : `${styles.infoNot1}`}>
            <InfoBule />
          </div>
        </div>
        <div className={styles.description}>
          <h2>Biographie</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            asperiores
          </p>
        </div>
        <span></span>
        <div className={styles.description}>
          <h2>Biographie</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            asperiores
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.head}>
          <div className={styles.nom}>
            <div>
              <h1
                onClick={() =>
                  dispatch(
                    updateInfos({
                      newName: "Jughead Strix",
                    })
                  )
                }
              >
                {name}
              </h1>
              <div className="location">
                <i className="mdi mdi-map-marker"></i>
                <p>Mada MG, 007</p>
              </div>
            </div>
            <div className={styles.edit} onClick={handleForm}>
              <p>Modifié</p>
              <i className="mdi mdi-pencil"></i>
            </div>
          </div>

          <div className={styles.star}>
            <p>completing profil</p>
            <div>
              8,6
              <i className="mdi mdi-star"></i>
              <i className="mdi mdi-star"></i>
              <i className="mdi mdi-star"></i>
              <i className="mdi mdi-star"></i>
              <i className="mdi mdi-star"></i>
            </div>
          </div>

          {/* <div className={styles.actions}>
            <button>
              <i className="mdi mdi-information"></i>
              Besoin d aide
            </button>
            <button>
              <i className="mdi mdi-history"></i>
              Historique
            </button>
          </div> */}

          <div className={styles.toggle}>
            <p
              className={
                active == 0 ? `${styles.active}` : `${styles.notActive}`
              }
              onClick={handleActive1}
            >
              <i className="mdi mdi-eye" /> Vue global
              <span
                className={
                  active == 0 ? `${styles.spanLeft}` : `${styles.spanRight}`
                }
              ></span>
            </p>
            <p
              className={
                active == 1 ? `${styles.active}` : `${styles.notActive}`
              }
              onClick={handleActive2}
            >
              <i className="mdi mdi-account" /> A propos
            </p>
          </div>
        </div>

        <div className={styles.info}>
          <div
            className={
              infoActive == 0 ? `${styles.infoAct1}` : `${styles.infoNot1}`
            }
          >
            <GlobalView />
          </div>
          <div
            className={
              infoActive == 1 ? `${styles.infoAct2}` : `${styles.infoNot2}`
            }
          >
            <Apropos />
          </div>
        </div>
      </div>
    </div>
  );
}
