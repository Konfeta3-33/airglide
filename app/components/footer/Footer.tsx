import React from 'react';
import styles from "./footer.module.css"
import Link from "next/link";
import Image from "next/image";
import youtube from "./youtube-converted.svg";
import instagram from "./instagram-converted.svg";
import vk from "./vk-converted.svg";
import facebook from "./facebook-converted.svg";

const Footer = () => {
  return (
    <div className={`${styles.footer} ${styles.container}`}>
      <div className={styles.footer_copyright}>Copyright &copy; 2023. All rights reserved</div>
      <div className={styles.footer_pay_and_delivery}>
        <Link href="/">Оплата и доставка</Link>
      </div>
      <div className={styles.footer_social}>
        <span className={styles.footer_social_text}>Социальные сети</span>
        <Link href="/" className={styles.footer_social_link}>
          <Image alt="youtube" src={youtube} className={styles.footer_social_icons}/>
        </Link>
        <Link href="/" className={styles.footer_social_link}>
          <Image alt="instagram" src={instagram} className={styles.footer_social_icons}/>
        </Link>
        <Link href="/" className={styles.footer_social_link}>
          <Image alt="vk" src={vk} className={styles.footer_social_icons}/>
        </Link>
        <Link href="/" className={styles.footer_social_link}>
          <Image alt="facebook" src={facebook} className={styles.footer_social_icons}/>
        </Link>
      </div>
    </div>
  );
};

export default Footer;