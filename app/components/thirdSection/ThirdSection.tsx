import React from 'react';
import styles from "./thirdSection.module.css"
import Link from "next/link";
import Image from "next/image";
import rogue from "./rogue.png";
import otter from "./otter.png";
import inspire from "./inspire2_banana.png";
import mono from "./mono.png";
import Question from "@/app/components/thirdSection/Question";

const ThirdSection = () => {
  return (
    <div className={styles.main}>
      <div className={`${styles.products} ${styles.container}`}>
        <div className={styles.products_title}>
          <span>Популярная</span>
          <h2>продукция</h2>
        </div>
        <div className={styles.catalogue}>
          <div className={styles.catalogue_item}>
            <Link href="/" className={styles.catalogue_link}>
              <Image src={rogue} alt="Rogue" className={styles.catalogue_image}/>
              <span className={styles.catalogue_label}>Средний</span>
              <span className={styles.catalogue_name}>Rogue</span>
              <span className={styles.catalogue_jumps}>100+ прыжков</span>
            </Link>
          </div>
          <div className={styles.catalogue_item}>
            <Link href="/" className={styles.catalogue_link}>
              <Image src={otter} alt="Otter" className={styles.catalogue_image}/>
              <span className={styles.catalogue_label}>Продвинутый</span>
              <span className={styles.catalogue_name}>Otter</span>
              <span className={styles.catalogue_jumps}>150+ прыжков</span>
            </Link>
          </div>
          <div className={styles.catalogue_item}>
            <Link href="/" className={styles.catalogue_link}>
              <Image src={inspire} alt="Inspire 2" className={styles.catalogue_image}/>
              <span className={styles.catalogue_label}>Средний</span>
              <span className={styles.catalogue_name}>Inspire 2</span>
              <span className={styles.catalogue_jumps}>80+ прыжков</span>
            </Link>
          </div>
          <div className={styles.catalogue_item}>
            <Link href="/" className={styles.catalogue_link}>
              <Image src={mono} alt="Mono" className={styles.catalogue_image}/>
              <span className={styles.catalogue_label}>Средний</span>
              <span className={styles.catalogue_name}>Mono</span>
              <span className={styles.catalogue_jumps}>0+ прыжков</span>
            </Link>
          </div>
        </div>
      </div>
      <Question/>
    </div>
  );
};

export default ThirdSection;
