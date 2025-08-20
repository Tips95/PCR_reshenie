'use client'

import { motion } from 'framer-motion'
import Script from 'next/script'

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Телефон',
      value: '+7 909 007-77-57',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Адрес',
      value: 'г. Грозный, переулок Первомайский, д. 1',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00 - 18:00<br />Сб: 10:00 - 16:00<br />Вс: Выходной',
    },
  ]

  return (
    <section id="contact" className="section-padding">
      {/* Подключение скрипта Яндекс.Форм */}
      <Script src="https://forms.yandex.ru/_static/embed.js" strategy="afterInteractive" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-6">
            Получите бесплатную консультацию по банкротству
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Оставьте заявку и наш юрист по банкротству свяжется с вами для бесплатной консультации
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Яндекс.Форма */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Заявка на консультацию по банкротству
            </h3>
            <iframe
              src="https://forms.yandex.ru/cloud/689c485402848f5e0df5eaac?iframe=1"
              width="100%"
              height="400"
              frameBorder="0"
              name="ya-form-689c485402848f5e0df5eaac"
              title="Яндекс Форма для консультации"
            ></iframe>
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 mb-1">{item.title}</h3>
                      <p className="text-dark-600" dangerouslySetInnerHTML={{ __html: item.value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Режим работы */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-dark-900 mb-4">
                Режим работы
              </h4>
              <div className="space-y-2 text-dark-600">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье</span>
                  <span>Выходной</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact