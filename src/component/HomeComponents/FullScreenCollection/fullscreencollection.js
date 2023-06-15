import React from "react";
import styles from "./fullscreencollection.module.scss";
import Image from "next/image";
import Img from "../../../../public/assets/fullscreenCollection/fullscreen-collection.png";

function FullScreenCollection() {
  return (
    <div className={styles.container}>
      <div className={styles.text_content}>
        <h2>Gown</h2>
        <p>Gown at amazing prices</p>
        <button>VIEW COLLECTION</button>
      </div>
      <div className={styles.image_content}>
        <Image {...Img} alt="image" className={styles.image} />
      </div>
    </div>
  );
}

export default FullScreenCollection;
