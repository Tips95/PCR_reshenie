import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import {
  ADDRESS,
  COMPANY_NAME,
  PHONE,
  SITE_URL,
  SOCIAL,
} from '@/lib/site'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Банкротство физических лиц в Грозном | Списание долгов | Правовой центр Решение',
    template: '%s | Правовой центр Решение',
  },
  description:
    'Банкротство физических лиц в Грозном под ключ: списание долгов по кредитам и микрозаймам через суд. Бесплатная консультация юриста, стаж 10+ лет, стоимость от 150 000 ₽. Звоните: +7 928 644-45-75',
  keywords: [
    'банкротство физических лиц',
    'банкротство физических лиц Грозный',
    'списание долгов',
    'списание долгов по кредитам',
    'юрист по банкротству Грозный',
    'списание кредитов',
    'банкротство через суд',
    'внесудебное банкротство через МФЦ',
    'арбитражное управление',
    'бесплатная консультация юриста Грозный',
    'юрист по гражданским делам Грозный',
  ],
  applicationName: COMPANY_NAME,
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Банкротство физических лиц в Грозном | Списание долгов через суд',
    description:
      'Спишем долги по кредитам и микрозаймам законным способом. Опыт 10+ лет, сопровождение под ключ, бесплатная первичная консультация.',
    url: SITE_URL,
    siteName: COMPANY_NAME,
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Правовой центр Решение — банкротство физических лиц в Грозном',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Банкротство физических лиц в Грозном | Списание долгов через суд',
    description:
      'Спишем долги по кредитам и микрозаймам законным способом. Бесплатная консультация юриста по банкротству.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'B8k-T2EDxuwZeJnNCTrZIvlUslNzq_5vNVz5Cb2HdlI',
  },
  category: 'legal services',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      alternateName: 'Правовой центр Решение',
      description:
        'Банкротство физических лиц в Грозном. Списание долгов по кредитам и микрозаймам через суд, арбитражное управление, гражданские дела. Бесплатная консультация юриста.',
      url: SITE_URL,
      telephone: `+${PHONE.tel.replace(/\D/g, '')}`,
      image: `${SITE_URL}/assets/logo.png`,
      logo: `${SITE_URL}/assets/logo.png`,
      priceRange: 'от 150 000 ₽',
      currenciesAccepted: 'RUB',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        addressCountry: ADDRESS.country,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '16:00',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Грозный' },
        { '@type': 'State', name: 'Чеченская Республика' },
        { '@type': 'Country', name: 'Россия' },
      ],
      knowsLanguage: ['ru'],
      sameAs: [SOCIAL.telegram, SOCIAL.whatsapp],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Услуги по банкротству и юридическому сопровождению',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Банкротство физических лиц',
              description:
                'Списание долгов через процедуру банкротства под ключ: подготовка заявления, работа с финансовым управляющим, сопровождение в суде.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Списание долгов по кредитам и микрозаймам',
              description:
                'Освобождение от обязательств перед банками, МФО и коллекторами законным способом.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Арбитражное управление',
              description:
                'Сопровождение процедур банкротства, работа с кредиторами и торгами.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Представительство в суде',
              description:
                'Ведение гражданских дел от подачи иска до исполнения решения суда.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY_NAME,
      inLanguage: 'ru-RU',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://forms.yandex.ru" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://forms.yandex.ru" />

        <link rel="preload" href="/assets/logo.png" as="image" type="image/png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}

        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103640261', 'ym');
            ym(103640261, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/103640261" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
