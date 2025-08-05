import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Правовой центр Решение - Защита ваших прав',
  description: 'Правовой центр "Решение" - команда опытных юристов, специализирующихся на гражданских и административных делах. Работаем по всей России более 10 лет.',
  keywords: 'юридические услуги,  правовая помощь, судебное представительство',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 