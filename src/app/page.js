import TopBanner from "@/component/HomeComponents/TopBanner/topbanner";
import styles from "./page.module.css";
import SubCollections from "@/component/HomeComponents/Collections/collection";
import FullScreenCollection from "@/component/HomeComponents/FullScreenCollection/fullscreencollection";
import ThirdCollection from "@/component/HomeComponents/ThirdCollections/thirdcollection";
import AboutStore from "@/component/HomeComponents/AboutStore/aboutstore";
import Header from "@/component/Header/header";
import Home3dCouresel from "@/component/HomeComponents/home3dCarosusel/home3dCarousel";
import InstagramPics from "@/component/HomeComponents/InstagramPics/instagrampics";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 9999999,
        }}
      >
        <Header />
      </div>
      <div style={{ marginTop: "70px" }}>
        <TopBanner />
      </div>
      <div>
        <SubCollections />
      </div>
      <div>
        <FullScreenCollection />
      </div>
      <div>
        <ThirdCollection />
      </div>
      <div>
        <AboutStore />
      </div>
      <div>
        <Home3dCouresel />
      </div>
      <div>
        <InstagramPics />
      </div>
    </main>
  );
}
