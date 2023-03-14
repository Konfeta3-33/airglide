import React from 'react';
import {inspect} from "util";
import styles from "./secondSection.module.css"

const SecondSection = () => {
  return (
    <div className={`${styles.production_time} ${styles.container}`}>
      <h2 className={styles.production_title}>
        <span>Актуальное</span>
        <span>Время производства</span>
      </h2>
      <div className={styles.production_main}>
        <div className={styles.production_text}>
          <p>
            Now in <b>2017</b> having <b>great R&D</b> and production capacity Airglide
            Wingsuits offers <b>high quality</b> skydiving and BASE jumping equipment.
          </p>
          <p>
            Airglide custom suits one <b>made carefully with excellence</b> in
            every single detail.
          </p>
          <span>– R&D Department, Airglide</span>
        </div>
        <div className={styles.production_numbers}>
          <div className={styles.production_numbers_item}>
            <span className={styles.production_numbers_count}>40</span>
            <div className={styles.production_numbers_right}>
              <span className={styles.production_numbers_days}>дней</span>
              <span className={styles.production_numbers_type}>для вингсьютов</span>
            </div>
          </div>
          <div className={styles.production_numbers_item}>
            <span className={styles.production_numbers_count}>40</span>
            <div className={styles.production_numbers_right}>
              <span className={styles.production_numbers_days}>дней</span>
              <span className={styles.production_numbers_type}>для контейнеров</span>
            </div>
          </div>
          <div className={styles.production_numbers_item}>
            <span className={styles.production_numbers_count}>7</span>
            <div className={styles.production_numbers_right}>
              <span className={styles.production_numbers_days}>дней</span>
              <span className={styles.production_numbers_type}>для других товаров</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
    ;
};

export default SecondSection;