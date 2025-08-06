import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, phone, question } = req.body

  if (!name || !phone || !question) {
    return res.status(400).json({ message: 'Заполните все поля' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 587,
    secure: false,
    auth: {
      user: 'pcr-reshenie@yandex.ru',
      pass: process.env.YANDEX_MAIL_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: 'pcr-reshenie@yandex.ru',
      to: 'pcr-reshenie@yandex.ru',
      subject: 'Новая заявка с сайта',
      text: `Имя: ${name}\nТелефон: ${phone}\nВопрос: ${question}`,
      html: `<b>Имя:</b> ${name}<br/><b>Телефон:</b> ${phone}<br/><b>Вопрос:</b> ${question}`,
    })
    return res.status(200).json({ message: 'Заявка успешно отправлена!' })
  } catch (error) {
    console.error('MAIL ERROR:', error)
    return res.status(500).json({ message: 'Ошибка при отправке письма', error: error && error.toString ? error.toString() : error })
  }
}