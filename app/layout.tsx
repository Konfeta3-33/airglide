import '@/styles/globals.css'

export const metadata = {
  title: {
    default: 'Airglide',
    template: '%s | Airglide',
  },
  description: 'Российский производитель вингсьютов и снаряжения для бэйсджампинга',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1',
  keywords: 'вингсьют, костюм, бейс, бэйсджампинг, прыжки, снаряжение, парашют, летать, полет,' +
    ' производитель, товары, производство, конструктор, rage, mono, inspire, falcon, twiist, rogue, otter',
  robots: {
    index: false,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
