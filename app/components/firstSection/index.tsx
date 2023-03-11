import React from 'react';
import Header from "./Header";
import Slider from "./Slider";
import styles from '@/styles/Home.module.css'

const FirstSection = () => {
  return (
    <div className={styles.firstSection}>
      <Header/>
      <Slider/>
    </div>
  );
};

export default FirstSection;