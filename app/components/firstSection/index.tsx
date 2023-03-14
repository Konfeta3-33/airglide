import React from 'react';
import Header from "../header/Header";
import Sliders from "./Sliders/Sliders";
import styles from '@/styles/Home.module.css'

const FirstSection = () => {
  return (
    <div className={`${styles.firstSection} ${styles.container}`}>
      <Sliders/>
    </div>
  );
};

export default FirstSection;