import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer, { TransportOptions } from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, phone, question } = req.body

  if (!name || !phone || !question) {
    return res.status(400).json({ message: 'Заполните все поля' })
  }

  if (!process.env.YANDEX_MAIL_PASSWORD) {
    console.error('YANDEX_MAIL_PASSWORD is not set')
    return res.status(500).json({ message: 'Server configuration error' })
  }

  console.log('YANDEX_MAIL_PASSWORD:', process.env.YANDEX_MAIL_PASSWORD ? 'set' : 'not set')

  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 587,
    secure: false, // STARTTLS, не SSL
    auth: {
      user: 'pcr-reshenie@yandex.ru',
      pass: process.env.YANDEX_MAIL_PASSWORD,
    },
    socketTimeout: 30000,
    connectionTimeout: 30000,
    tls: {
      rejectUnauthorized: false, // если сервер с самоподписанным сертификатом — можно убрать, если нет — можно поставить true
    },
    family: 4, // использовать IPv4, чтобы избежать проблем с IPv6
  } as TransportOptions)

  try {
    // Проверка соединения с SMTP
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error('VERIFY ERROR:', error)
          reject(error)
        } else {
          console.log('SMTP server is ready')
          resolve(success)
        }
      })
    })

    // Отправка письма
    await transporter.sendMail({
      from: '"PCR Решение" <pcr-reshenie@yandex.ru>',
      to: 'pcr-reshenie@yandex.ru',
      subject: 'Новая заявка с сайта',
      text: `Имя: ${name}\nТелефон: ${phone}\nВопрос: ${question}`,
      html: `<b>Имя:</b> ${name}<br/><b>Телефон:</b> ${phone}<br/><b>Вопрос:</b> ${question}`,
    })

    return res.status(200).json({ message: 'Заявка успешно отправлена!' })
  } catch (error: any) {
    console.error('MAIL ERROR (raw):', error)
    console.error('MAIL ERROR (string):', error?.toString())
    console.error('MAIL ERROR (JSON):', JSON.stringify(error, null, 2))

    return res.status(500).json({
      message: 'Ошибка при отправке письма',
      error: error?.message || error?.toString() || 'Неизвестная ошибка',
      code: error?.code || null,
      response: error?.response || null,
    })
  }
}
