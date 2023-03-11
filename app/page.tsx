import styles from '@/styles/Home.module.css'
import FirstSection from "@/app/components/firstSection";

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
      <FirstSection/>
    </main>
  )
}
