import styles from '@/styles/Home.module.css'
import FirstSection from "@/app/components/firstSection";
import Header from "@/app/components/header/Header";
import SecondSection from "@/app/components/secondSection/SecondSection";
import ThirdSection from "@/app/components/thirdSection/ThirdSection";
import Footer from "@/app/components/footer/Footer";

export const metadata = {
  title: 'Главная | Airglide',
  openGraph: {
    title: 'Главная | Airglide',
    description: 'Российский производитель вингсьютов и снаряжения для бэйсджампинга'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Footer/>
    </main>
  )
}
