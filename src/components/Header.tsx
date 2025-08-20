'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'О компании', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Юристы', href: '#lawyers' },
    { name: 'Контакты', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Логотип и название */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center flex-shrink-0"
          >
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center mr-3 overflow-hidden shadow-lg">
              <Image 
                src="/assets/logo.png" 
                alt="Логотип Правового центра Решение" 
                width={40} 
                height={40} 
                className="object-contain"
                priority
                quality={90}
              />
            </div>
            <span className="text-xl font-bold text-dark-900 whitespace-nowrap">
              Правовой центр Решение
            </span>
          </motion.div>

          {/* Центральная навигация */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 bg-gray-50 rounded-full p-1 shadow-sm">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="px-6 py-2 rounded-full text-dark-600 hover:text-primary-600 hover:bg-white font-medium transition-all duration-300 whitespace-nowrap"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Правая часть - контакты и кнопка меню */}
          <div className="flex items-center space-x-4">
            {/* Контактная информация для больших экранов */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-dark-500">Бесплатная консультация</div>
                <div className="text-dark-900 font-semibold">+7 909 007-77-57</div>
              </div>
            </div>

            {/* Кнопка мобильного меню */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Открыть меню"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
          >
            <div className="py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-dark-600 hover:text-primary-600 font-medium py-3 px-4 hover:bg-gray-50 transition-colors rounded-lg mx-2"
                >
                  {item.name}
                </button>
              ))}
              {/* Контакт в мобильном меню */}
              <div className="px-4 py-3 border-t border-gray-100">
                <div className="text-sm text-dark-500 mb-1">Бесплатная консультация</div>
                <div className="text-dark-900 font-semibold text-lg">+7 909 007-77-57</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header