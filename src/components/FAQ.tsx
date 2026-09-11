'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FAQ_ITEMS } from '@/lib/faq'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-6">
            Частые вопросы о банкротстве
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Отвечаем на то, что чаще всего спрашивают на консультации: стоимость, сроки,
            имущество и последствия процедуры
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-dark-900">{item.question}</span>
                    <svg
                      className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h3>

                <div
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-dark-600 leading-relaxed"
                >
                  {item.answer}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-dark-600 mb-6">
            Не нашли свой вопрос? Задайте его юристу — консультация бесплатная
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Задать вопрос юристу
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
