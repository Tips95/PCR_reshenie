'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Lawyers = () => {
  const lawyers = [
    {
      name: 'Якубов Амарбек Хамидович',
      specialization: 'Юрист по гражданским делам',
      phone: '+7 964 063-98-83',
      experience: '5 лет опыта',
      description: 'Эксперт по банкротству.',
      photo: '/assets/lawyers/Amarbek.jpeg'
    },
    {
      name: 'Ииев Ризван Султанович',
      specialization: 'Юрист по гражданским делам',
      phone: '+7 988 905-87-02',
      experience: '9 лет опыта',
      description: 'Специализируется на гражданских делах и представительстве в суде.',
      photo: '/assets/lawyers/Rizvan.jpeg'
    },
    {
      name: 'Дербишев Рустам Вахидович',
      specialization: 'Гражданское право',
      phone: '+7 928 744-02-12',
      experience: '15 лет опыта',
      description: 'Эксперт по гражданским спорам, договорным отношениям и защите прав потребителей.',
      photo: '/assets/lawyers/Rustam.jpeg'
    },
    {
      name: 'Юнусов Магомед Шамильевич',
      specialization: 'Юрист по гражданским делам',
      phone: '+7 928 644-45-75',
      experience: '8 лет опыта',
      description: 'Банкротство, гражданские дела, автоюрист.',
      photo: '/assets/lawyers/Yunusov.jpeg'
    }
  ]

  return (
    <section id="lawyers" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-6">
            Наши юристы
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Команда опытных специалистов с многолетним стажем работы в различных областях права
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="w-40 h-40 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {lawyer.photo ? (
                  <Image 
                    src={lawyer.photo} 
                    alt={`Фото юриста ${lawyer.name}`} 
                    width={160} 
                    height={160} 
                    className="object-cover w-40 h-40"
                    loading="lazy"
                    quality={85}
                  />
                ) : (
                  <div className="text-primary-600">
                    {/* fallback icon */}
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-bold text-dark-900 text-lg mb-2">
                  {lawyer.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {lawyer.specialization}
                </p>
                <p className="text-dark-500 text-sm mb-3">
                  {lawyer.experience}
                </p>
                <p className="text-dark-600 text-sm mb-4">
                  {lawyer.description}
                </p>
                
                {/* Phone */}
                <div className="flex items-center justify-center space-x-2 text-primary-600 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">{lawyer.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-dark-600 mb-6">
            Нужна консультация? Свяжитесь с нами прямо сейчас
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary"
          >
            Получить консультацию
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Lawyers 