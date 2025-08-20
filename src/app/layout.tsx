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
        <meta name="google-site-verification" content="B8k-T2EDxuwZeJnNCTrZIvlUslNzq_5vNVz5Cb2HdlI" />
        
        {/* Preconnect для внешних доменов */}
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://forms.yandex.ru" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://forms.yandex.ru" />
        
        {/* Preload критических ресурсов */}
        <link rel="preload" href="/assets/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/images/background.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/assets/lawyers/Amarbek.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/assets/lawyers/Rustam.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/assets/lawyers/Rizvan.jpeg" as="image" type="image/jpeg" />
        
        {/* Preload шрифтов */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="180x180" />
        
        {/* Yandex.Metrika counter с defer для неблокирующей загрузки */}
        <script
          defer
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103640261', 'ym');
            ym(103640261, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/103640261" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}