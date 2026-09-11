export const SITE_URL = 'https://pcr-reshenie.ru'

export const COMPANY_NAME = 'Правовой центр «Решение»'

export const PHONE = {
  display: '+7 928 644-45-75',
  tel: '+79286444575',
  whatsapp: '79286444575',
}

export const ADDRESS = {
  full: 'г. Грозный, ул. Лермонтова, д. 103',
  street: 'улица Лермонтова, д. 103',
  locality: 'Грозный',
  region: 'Чеченская Республика',
  country: 'RU',
  /** Запрос для виджета Яндекс.Карт — точку ставит сам Яндекс по адресу */
  mapQuery: 'Грозный, улица Лермонтова, 103',
}

export const WORKING_HOURS = [
  { days: 'Понедельник - Пятница', time: '9:00 - 18:00' },
  { days: 'Суббота', time: '10:00 - 16:00' },
  { days: 'Воскресенье', time: 'Выходной' },
]

export const SOCIAL = {
  telegram: `https://t.me/${PHONE.tel}`,
  whatsapp: `https://wa.me/${PHONE.whatsapp}`,
}

export const WHATSAPP_MESSAGE = 'Здравствуйте! Хочу получить консультацию по банкротству.'

export const whatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `${SOCIAL.whatsapp}?text=${encodeURIComponent(message)}`
