import React from "react";
import styles from "./topbanner.module.scss";

function TopBannerCard() {
  return (
    <div className={styles.conatiner}>
      <div className={styles.banner_text}>
        Check it out
        <br /> today’s flash sale
        <button className={styles.view_btn}>VIEW COLLECTION</button>
      </div>
    </div>
  );
}

export default TopBannerCard;
