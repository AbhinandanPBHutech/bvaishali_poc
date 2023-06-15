import React from "react";
import styles from "./subcollection.module.scss";
import Image from "next/image";
import Img1 from "../../../../public/assets/homeCollection1/collection1.png";
import Img2 from "../../../../public/assets/homeCollection1/collection2.png";

function SubCollection({ data }) {
  console.log("props", data);
  return (
    <div className={styles.container}>
      <Image {...Img1} alt="image" className={styles.image} />
      <div className={styles.collection_text_wrapper}>
        <h2>Lehenga</h2>
        <p>Women Ethnic Motifs Embroidered Work Frock & Gown</p>
      </div>
    </div>
  );
}

export default SubCollection;
