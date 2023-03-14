import React from 'react';
import styles from "./sliders.module.css"
import FirstSlider from "@/app/components/firstSection/Sliders/FirstSlider";

const Sliders = () => {
  return (
    <div className={styles.carousel}>
      <FirstSlider/>
    </div>
  )
    ;
};

export default Sliders;