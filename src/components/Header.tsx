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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 h-20 sm:h-16">
      <div className="container-custom">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center pr-4 sm:pr-0"
          >
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
              <Image 
                src="/assets/logo.png" 
                alt="Логотип Правового центра Решение" 
                width={32} 
                height={32} 
                className="object-contain"
                priority
                quality={90}
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-dark-900 truncate">Правовой центр Решение</span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-dark-600 hover:text-primary-600 font-medium transition-colors duration-300"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50"
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

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white absolute top-20 left-0 right-0 z-40"
          >
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-dark-600 hover:text-primary-600 font-medium py-2 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header