# Инструкция по управлению деплоем

## Статус сайта
```bash
pm2 status
```

## Перезапуск сайта
```bash
pm2 restart pcr-landing
```

## Остановка сайта
```bash
pm2 stop pcr-landing
```

## Запуск сайта
```bash
pm2 start pcr-landing
```

## Просмотр логов
```bash
pm2 logs pcr-landing
```

## Обновление с GitHub
```bash
git pull origin main
npm run build
pm2 restart pcr-landing
```

## Автозапуск при перезагрузке сервера
PM2 уже настроен на автозапуск. При необходимости:
```bash
pm2 save
pm2 startup
```

## Порт
Сайт работает на порту 3000
Проверить: `lsof -i :3000`

## Структура
- Сайт: http://localhost:3000
- PM2 процесс: pcr-landing
- Логи: ./logs/
- Конфигурация: ecosystem.config.js 