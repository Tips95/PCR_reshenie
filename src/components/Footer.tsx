'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Telegram',
      href: 'https://t.me/+79090077757',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/79090077757',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    {
      name: 'VK',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.368 17.123c-2.044.237-3.753.395-3.753.395-.267 0-.353-.173-.353-.173V7.397c0-.18.092-.353.353-.353h2.38c.18 0 .353.173.353.353v6.58c0 .18.18.353.353.353h1.216c.18 0 .353-.173.353-.353V7.397c0-.18.173-.353.353-.353h2.38c.18 0 .353.173.353.353v9.726c0 .18-.173.353-.353.353z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                  <Image 
                    src="/assets/logo.png" 
                    alt="Логотип Правового центра Решение" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <span className="text-xl font-bold">Правовой центр Решение</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Профессиональная помощь в банкротстве физических лиц и списании долгов в Грозном. 
                Более 10 лет успешной работы по банкротству и гражданским делам.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-primary-400 hover:bg-dark-700 transition-colors"
                    aria-label={`Ссылка на ${social.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Услуги</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Банкротство физических лиц
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Арбитражное управление
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Юридические консультации
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Представительство в суде
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Гражданское право
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Семейное право
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+7 909 007-77-57</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">г. Грозный, переулок Первомайский, д. 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-dark-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Правовой центр "Решение". Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 