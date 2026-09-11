'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Бесплатная консультация',
    description:
      'Разбираем вашу ситуацию: сумму долга, кредиторов, имущество и сделки за последние три года. Честно говорим, подходит ли банкротство и какой будет результат.',
  },
  {
    title: 'Сбор документов',
    description:
      'Готовим список документов и помогаем получить справки: выписки по кредитам, сведения об имуществе, доходах и составе семьи. Большую часть запросов берём на себя.',
  },
  {
    title: 'Подача заявления в суд',
    description:
      'Составляем заявление о признании банкротом, подаём его в арбитражный суд и вносим депозит на вознаграждение финансового управляющего. После принятия заявления прекращаются звонки и начисление процентов.',
  },
  {
    title: 'Процедура и списание долгов',
    description:
      'Ведём дело: работаем с финансовым управляющим и кредиторами, участвуем в заседаниях по доверенности. Итог — определение суда об освобождении от обязательств.',
  },
]

const Process = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-6">
            Как проходит процедура банкротства
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Четыре этапа от первого звонка до списания долгов. В среднем процедура
            занимает от 8 до 12 месяцев, личное участие в заседаниях чаще всего не требуется
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-5">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-dark-900 mb-3">{step.title}</h3>
              <p className="text-dark-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
