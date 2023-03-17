import React from 'react';
import styles from "./thirdSection.module.css"
import Link from "next/link";

const Question = () => {
  return (
    <div className={`${styles.question} ${styles.container}`}>
      <span>Не нашли того, что искали?</span>
      <Link href="/">Задайте нам вопрос</Link>
    </div>
  );
};

export default Question;