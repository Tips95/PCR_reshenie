import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Банкротство физических лиц в Грозном | Списание долгов | Правовой центр Решение',
  description: 'Банкротство физических лиц в Грозном. Списание долгов через суд. Бесплатная консультация юриста по банкротству. Опыт 10+ лет. Звоните: +7 909 007-77-57',
  keywords: 'банкротство физических лиц, списание долгов, банкротство в Грозном, юрист по банкротству, списание кредитов, долги по кредитам, банкротство через суд, бесплатная консультация юриста, гражданские дела, правовая помощь',
  openGraph: {
    title: 'Банкротство физических лиц в Грозном | Списание долгов',
    description: 'Банкротство физических лиц в Грозном. Списание долгов через суд. Бесплатная консультация юриста по банкротству.',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Правовой центр Решение",
    "description": "Банкротство физических лиц в Грозном. Списание долгов через суд. Бесплатная консультация юриста по банкротству.",
    "url": "https://reshenie.ru",
    "telephone": "+79090077757",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Грозный",
      "addressRegion": "Чеченская Республика",
      "streetAddress": "переулок Первомайский, д. 1"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.3119",
      "longitude": "45.6889"
    },
    "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
    "priceRange": "$$",
    "serviceType": [
      "Банкротство физических лиц",
      "Списание долгов",
      "Юридические консультации",
      "Представительство в суде"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Грозный"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги по банкротству",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Банкротство физических лиц",
            "description": "Списание всех долгов через процедуру банкротства"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Списание долгов",
            "description": "Помощь в списании долгов по кредитам и займам"
          }
        }
      ]
    }
  }

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preload" href="/assets/logo.png" as="image" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="180x180" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}