'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const BankruptcyCalculator = () => {
  const [debtAmount, setDebtAmount] = useState(300000)
  const [calculatedPrice, setCalculatedPrice] = useState<number>(135000)

  const priceRanges = [
    { min: 300000, max: 500000, price: 135000 },
    { min: 500000, max: 750000, price: 175000 },
    { min: 750000, max: 1000000, price: 200000 },
    { min: 1000000, max: 1500000, price: 250000 },
    { min: 1500000, max: 2000000, price: 350000 },
    { min: 2000000, max: 3000000, price: 500000 },
    { min: 3000000, max: 4000000, price: 600000 },
    { min: 4000000, max: 5000000, price: 750000 },
  ]

  const calculatePrice = (amount: number) => {
    const range = priceRanges.find(range => amount >= range.min && amount <= range.max)
    return range ? range.price : 135000
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseInt(e.target.value)
    setDebtAmount(amount)
    const price = calculatePrice(amount)
    setCalculatedPrice(price)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU').format(amount)
  }

  const getCurrentRange = () => {
    return priceRanges.find(range => debtAmount >= range.min && debtAmount <= range.max)
  }

  const currentRange = getCurrentRange()

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-6">
            Калькулятор стоимости банкротства
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Укажите сумму ваших долгов и получите точную стоимость процедуры банкротства
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Основной калькулятор */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg"
          >
            {/* Ползунок */}
            <div className="mb-8">
              <label htmlFor="debtSlider" className="block text-lg font-medium text-dark-700 mb-4 text-center">
                Сумма долга: <span className="text-primary-600 font-bold text-2xl">{formatCurrency(debtAmount)} ₽</span>
              </label>
              
              <div className="relative">
                <input
                  type="range"
                  id="debtSlider"
                  min="300000"
                  max="5000000"
                  step="50000"
                  value={debtAmount}
                  onChange={handleSliderChange}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                
                {/* Маркеры на ползунке */}
                <div className="flex justify-between text-xs text-dark-500 mt-2">
                  <span>300 тыс.</span>
                  <span>1 млн</span>
                  <span>2 млн</span>
                  <span>3 млн</span>
                  <span>4 млн</span>
                  <span>5 млн</span>
                </div>
              </div>
            </div>

            {/* Результат расчета */}
            <motion.div
              key={calculatedPrice}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl p-8">
                <div className="text-5xl lg:text-6xl font-bold text-primary-600 mb-4">
                  {formatCurrency(calculatedPrice)} ₽
                </div>
                <div className="text-xl text-dark-700 mb-2">
                  Стоимость процедуры банкротства
                </div>
                <div className="text-sm text-dark-600">
                  Для долгов от {formatCurrency(currentRange?.min || 0)} до {formatCurrency(currentRange?.max || 0)} ₽
                </div>
              </div>
            </motion.div>

            {/* Что включено */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-dark-900 mb-4 text-center">Что включено в стоимость:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center text-dark-600">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Анализ документов и ситуации
                </div>
                <div className="flex items-center text-dark-600">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Составление заявления о банкротстве
                </div>
                <div className="flex items-center text-dark-600">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Сопровождение в суде
                </div>
                <div className="flex items-center text-dark-600">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Работа с финансовым управляющим
                </div>
              </div>
            </div>

            {/* Важная информация */}
            <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <div className="text-sm text-dark-600 text-center">
                <strong>Важно:</strong> Указанная стоимость включает полное юридическое сопровождение процедуры банкротства "под ключ". 
                Более точную информацию о стоимости и деталях процедуры вы сможете узнать на бесплатной консультации с нашим юристом.
              </div>
            </div>
          </motion.div>

          {/* CTA блок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                Получите детальный расчет стоимости
              </h3>
              <p className="text-dark-600 mb-6">
                Оставьте заявку и наш юрист свяжется с вами для уточнения деталей и составления индивидуального плана
              </p>
              <a
                href="#contact"
                className="btn-primary inline-block"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Получить консультацию
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(220, 38, 38, 0.3);
          transition: all 0.2s ease;
        }
        
        .slider::-webkit-slider-thumb:hover {
          background: #b91c1c;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(220, 38, 38, 0.3);
        }
        
        .slider::-moz-range-thumb:hover {
          background: #b91c1c;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  )
}

export default BankruptcyCalculator 