import React from 'react';
import Image from "next/image";
import inspire from "@/app/components/firstSection/images/duck_slider.png";
import styles from "./sliders.module.css"
import Link from "next/link";

const FirstSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider_image}>
        <Image src={inspire} alt="Inspire 2" width={570} height={400}/>
      </div>
      <div className={styles.slider_desc}>
        <span className={styles.slider_title}>На уровень выше</span>
        <span className={styles.slider_logo}></span>
        <span className={styles.slider_text}>Самый большой маленький вингсьют</span>
        <span className={styles.slider_price}>
          <sup>₽</sup>
          90500
          <sub>.00</sub>
          <span>от</span>
        </span>
        <div>
          <Link href="/" className={styles.slider_btn}>Хочу!</Link>
        </div>
      </div>
    </div>
  );
};

export default FirstSlider;