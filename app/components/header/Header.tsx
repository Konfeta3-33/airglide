import React from 'react';
import styles from "./header.module.css"
import Link from "next/link";

const Header = () => {
  return (
    <div className={`${styles.header} ${styles.container}`}>
      <div className={styles.logo}>Here will be logo</div>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>
          <Link href="/">Главная</Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">Костюмы</Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">Оборудование</Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/">Контакты и Дилеры</Link>
        </li>
      </ul>
      <Link href="/" className={styles.btn}>Обратная связь</Link>
    </div>
  );
}

export default Header;