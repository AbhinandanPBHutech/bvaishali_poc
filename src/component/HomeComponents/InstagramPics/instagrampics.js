import React from "react";
import Img1 from "../../../../public/assets/carousel/img1.png";
import Img2 from "../../../../public/assets/carousel/img2.png";
import Img3 from "../../../../public/assets/carousel/img3.png";
import Img4 from "../../../../public/assets/carousel/img4.png";
import styles from "./instagram.module.scss";
import Image from "next/image";

function InstagramPics() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>@BVaishali</div>
      <div className={styles.fallow_text}>Follow us on Instagram</div>
      <div className={styles.card_wrapper}>
        {[Img3, Img1, Img2, Img3, Img2]?.map((item, index) => {
          return (
            <div key={index}>
              <Image {...item} alt="" />
            </div>
          );
        })}
      </div>
      <div className={styles.fallow_btn_wrapper}>
        <button>
          <Image {...Img4} alt="" />
          Fallow Us On Instagram
        </button>
      </div>
    </div>
  );
}

export default InstagramPics;
