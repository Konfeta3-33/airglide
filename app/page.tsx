import styles from '@/styles/Home.module.css'
import FirstSection from "@/app/components/firstSection";
import Header from "@/app/components/header/Header";
import SecondSection from "@/app/components/secondSection/SecondSection";

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
    </main>
  )
}
