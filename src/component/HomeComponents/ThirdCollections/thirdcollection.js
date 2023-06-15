import ThirdCollectionCard from "@/component/Cards/ThirdCollectionCard/thirdcollectioncard";
import React from "react";
import styles from "./thirdcollection.module.scss";
import Img from "../../../../public/assets/thirdCollection/img.png";
import Img2 from "../../../../public/assets/thirdCollection/img2.png";
import Img3 from "../../../../public/assets/thirdCollection/img3.png";
import Image from "next/image";

function ThirdCollection() {
  return (
    <div className={styles.container}>
      <div className={styles.cards_wrapper}>
        {[Img, Img2, Img3]?.map((item, index) => {
          return (
            <div key={index} className={styles.container1}>
              <Image {...item} alt="" className={styles.card_img} />
              <div className={styles.text_wrapper}>
                <h2>Special Offer</h2>
                <p>Women Ethnic Motifs Embroidered </p>
                <button>VIEW COLLECTION</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThirdCollection;
