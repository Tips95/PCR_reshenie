'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      title: 'Юридические консультации',
      description: 'Бесплатные первичные консультации и детальный анализ вашей ситуации',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ['Анализ документов', 'Правовая оценка', 'Стратегия защиты']
    },
    {
      title: 'Представительство в суде',
      description: 'Полное ведение дела от подачи иска до исполнения решения суда',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['Составление исков', 'Участие в заседаниях', 'Обжалование решений']
    },
    {
      title: 'Составление документов',
      description: 'Подготовка всех необходимых документов для защиты ваших интересов',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: ['Договоры', 'Претензии', 'Жалобы']
    },
    {
      title: 'Семейное право',
      description: 'Решение всех вопросов, связанных с семейными отношениями',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: ['Разводы', 'Раздел имущества', 'Алименты']
    },
    {
      title: 'Гражданское право',
      description: 'Решение гражданских споров и защита прав потребителей',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: ['Договорные споры', 'Защита прав потребителей', 'Возмещение ущерба']
    },
    {
      title: 'Административное право',
      description: 'Споры с государственными органами и административные дела',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['Споры с ГИБДД', 'Налоговые споры', 'Земельные споры']
    }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Полный спектр юридических услуг для физических и юридических лиц
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <div className="text-primary-600">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-dark-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                Почему выбирают нас?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-dark-600">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Бесплатная первичная консультация
                </li>
                <li className="flex items-center text-dark-600">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Работаем по всей России
                </li>
                <li className="flex items-center text-dark-600">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Гарантия конфиденциальности
                </li>
                <li className="flex items-center text-dark-600">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Персональный подход к каждому делу
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <Image src={require('@/assets/logo.png')} alt="Логотип компании" width={96} height={96} className="object-contain" />
              </div>
              <p className="text-dark-600">
                Получите профессиональную консультацию уже сегодня
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 