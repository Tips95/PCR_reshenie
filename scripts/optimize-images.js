/**
 * Сжатие изображений и генерация Open Graph превью.
 *
 * Запуск: npm run optimize:images
 *
 * Скрипт идемпотентен: повторный запуск не ухудшает качество, потому что
 * исходники фотографий читаются из *.jpeg, а результат пишется в *.webp.
 */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const PUBLIC_DIR = path.join(__dirname, '..', 'public')
const SOURCE_DIR = path.join(__dirname, '..', 'source-images')
const SOURCE_LAWYERS_DIR = path.join(SOURCE_DIR, 'lawyers')
const LAWYERS_DIR = path.join(PUBLIC_DIR, 'assets', 'lawyers')
const LOGO_PATH = path.join(PUBLIC_DIR, 'assets', 'logo.png')
const OG_PATH = path.join(PUBLIC_DIR, 'og-image.jpg')

/** Логотип уже сжат — повторная квантизация палитры только ухудшит качество. */
const LOGO_SKIP_THRESHOLD_BYTES = 30 * 1024

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} КБ`

function assertExists(target, label) {
  if (!fs.existsSync(target)) {
    throw new Error(`Не найден ${label}: ${target}`)
  }
}

async function optimizeLawyerPhotos() {
  assertExists(SOURCE_LAWYERS_DIR, 'каталог с оригиналами фотографий (source-images/lawyers)')
  fs.mkdirSync(LAWYERS_DIR, { recursive: true })

  const sources = fs
    .readdirSync(SOURCE_LAWYERS_DIR)
    .filter((file) => /\.(jpe?g|png)$/i.test(file))

  if (sources.length === 0) {
    console.warn('[images] Фотографии юристов не найдены, шаг пропущен')
    return
  }

  for (const file of sources) {
    const source = path.join(SOURCE_LAWYERS_DIR, file)
    const target = path.join(LAWYERS_DIR, `${path.parse(file).name}.webp`)
    const before = fs.statSync(source).size

    await sharp(source)
      .rotate()
      .resize(400, 400, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(target)

    const after = fs.statSync(target).size
    console.log(`[images] ${file} → ${path.basename(target)}: ${kb(before)} → ${kb(after)}`)
  }
}

async function optimizeLogo() {
  assertExists(LOGO_PATH, 'логотип')

  const before = fs.statSync(LOGO_PATH).size
  if (before <= LOGO_SKIP_THRESHOLD_BYTES) {
    console.log(`[images] logo.png уже оптимизирован (${kb(before)}), шаг пропущен`)
    return
  }

  const buffer = await sharp(LOGO_PATH)
    .resize(240, 240, { fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toBuffer()

  fs.writeFileSync(LOGO_PATH, buffer)
  console.log(`[images] logo.png: ${kb(before)} → ${kb(buffer.length)}`)
}

async function buildOgImage() {
  assertExists(LOGO_PATH, 'логотип')

  const logo = await sharp(LOGO_PATH)
    .resize(150, 150, { fit: 'inside' })
    .png()
    .toBuffer()

  const background = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#ffffff"/>
      <rect width="1200" height="12" fill="#dc2626"/>
      <text x="100" y="300" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="bold" fill="#0f172a">Банкротство физических лиц</text>
      <text x="100" y="380" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="bold" fill="#dc2626">в Грозном</text>
      <text x="100" y="450" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#475569">Списание долгов через суд · Бесплатная консультация</text>
      <text x="100" y="530" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="bold" fill="#0f172a">+7 928 644-45-75</text>
      <text x="100" y="180" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="bold" fill="#0f172a">Правовой центр «Решение»</text>
    </svg>
  `)

  await sharp(background)
    .composite([{ input: logo, top: 80, left: 950 }])
    .jpeg({ quality: 86 })
    .toFile(OG_PATH)

  console.log(`[images] og-image.jpg создан: ${kb(fs.statSync(OG_PATH).size)}`)
}

async function main() {
  try {
    await optimizeLawyerPhotos()
    await optimizeLogo()
    await buildOgImage()
    console.log('[images] Готово')
  } catch (error) {
    console.error('[images] Ошибка:', error.message)
    process.exitCode = 1
  }
}

main()
