'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type PriceRange = { min: number; max: number | null; price: number }

const BankruptcyCalculator = () => {
  const [debtAmount, setDebtAmount] = useState(300000)
  const [calculatedPrice, setCalculatedPrice] = useState<number>(145000)

  const priceRanges: PriceRange[] = [
    { min: 300000, max: 400000, price: 145000 },
    { min: 400000, max: 500000, price: 155000 },
    { min: 500000, max: 600000, price: 165000 },
    { min: 600000, max: 700000, price: 175000 },
    { min: 700000, max: 800000, price: 210000 },
    { min: 800000, max: 900000, price: 220000 },
    { min: 900000, max: 1000000, price: 230000 },
    { min: 1000000, max: 1100000, price: 260000 },
    { min: 1100000, max: 1200000, price: 270000 },
    { min: 1200000, max: 1300000, price: 280000 },
    { min: 1300000, max: 1400000, price: 290000 },
    { min: 1400000, max: 1500000, price: 300000 },
    { min: 1500000, max: 1600000, price: 360000 },
    { min: 1600000, max: 1700000, price: 370000 },
    { min: 1700000, max: 1800000, price: 380000 },
    { min: 1800000, max: 1900000, price: 400000 },
    { min: 1900000, max: 2000000, price: 410000 },
    { min: 2000000, max: 2100000, price: 510000 },
    { min: 2100000, max: 2200000, price: 520000 },
    { min: 2200000, max: 2300000, price: 530000 },
    { min: 2300000, max: 2400000, price: 540000 },
    { min: 2400000, max: 2500000, price: 550000 },
    { min: 2500000, max: 2600000, price: 560000 },
    { min: 2600000, max: 2700000, price: 570000 },
    { min: 2700000, max: 2800000, price: 580000 },
    { min: 2800000, max: 2900000, price: 590000 },
    { min: 2900000, max: 3000000, price: 600000 },
    { min: 3000000, max: 3100000, price: 610000 },
    { min: 3100000, max: 3200000, price: 620000 },
    { min: 3200000, max: 3300000, price: 630000 },
    { min: 3300000, max: 3400000, price: 640000 },
    { min: 3400000, max: 3500000, price: 650000 },
    { min: 3600000, max: 3700000, price: 660000 },
    { min: 3800000, max: 3900000, price: 670000 },
    { min: 3900000, max: 4000000, price: 680000 },
    { min: 4000000, max: 4100000, price: 760000 },
    { min: 4200000, max: 4300000, price: 770000 },
    { min: 4300000, max: 4400000, price: 780000 },
    { min: 4400000, max: 4500000, price: 790000 },
    { min: 4500000, max: 4600000, price: 800000 },
    { min: 4600000, max: 4700000, price: 810000 },
    { min: 4700000, max: 4800000, price: 820000 },
    { min: 4800000, max: 4900000, price: 830000 },
    { min: 4900000, max: 5000000, price: 840000 },
    { min: 5000000, max: null, price: 910000 },
  ]

  const calculatePrice = (amount: number): number => {
    const range = priceRanges.find(r => amount >= r.min && (r.max === null || amount < r.max))
    if (range) return range.price
    if (amount < 300000) return 145000
    if (amount >= 5000000) return 910000
    const fallback = [...priceRanges].filter(r => r.min <= amount).sort((a, b) => b.min - a.min)[0]
    return fallback?.price ?? 145000
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

  const getCurrentRange = (): PriceRange | undefined => {
    const range = priceRanges.find(r => debtAmount >= r.min && (r.max === null || debtAmount < r.max))
    if (range) return range
    if (debtAmount >= 5000000) return priceRanges[priceRanges.length - 1]
    return [...priceRanges].filter(r => r.min <= debtAmount).sort((a, b) => b.min - a.min)[0]
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
                  {currentRange?.max != null
                    ? `Для долгов от ${formatCurrency(currentRange.min)} до ${formatCurrency(currentRange.max)} ₽`
                    : `Для долгов от ${formatCurrency(currentRange?.min ?? 0)} ₽ и выше`}
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