import React from "react";
import styles from "./aboutstore.module.scss";
import Image from "next/image";
import Img from "../../../../public/assets/homeAbout/img.png";

function AboutStore() {
  return (
    <div className={styles.container}>
      <div className={styles.image_content}>
        <Image {...Img} alt="image" className={styles.image} />
      </div>
      <div className={styles.text_content}>
        <h2>About BVaishali</h2>
        <p>
          Established in 1998 by Rozina Vishram, this unique label was started
          with a passion to create each outfit with intricate craftsmanship and
          designs that are versatile and timeless. With thousands of stunning
          pieces and pleased clientele over the years, Rozina has a vast
          collection of designs that can inspire your ideal ensemble for any
          occasion – formal or bridal. As a brand we strive to bring you
          exquisite creations that are customised and tailor-made to achieve
          your desired Rozina outfit, one that you own and wear with pride.
        </p>
      </div>
    </div>
  );
}

export default AboutStore;
