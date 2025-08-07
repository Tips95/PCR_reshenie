'use client'

import { useEffect, useState } from 'react'

interface Metrics {
  loadTime: number
  ttfb: number
  domContentLoaded: number
  domComplete: number
  fcp: number
  lcp: number
}

export default function PerformancePage() {
  const [metrics, setMetrics] = useState<Metrics | null>(null)

  useEffect(() => {
    // Получаем метрики производительности
    if (typeof window !== 'undefined') {
      const getMetrics = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const paint = performance.getEntriesByType('paint')
        
        const metrics: Metrics = {
          // Время загрузки страницы
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          // Время до первого байта
          ttfb: navigation.responseStart - navigation.requestStart,
          // Время до интерактивности
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          // Время до полной загрузки
          domComplete: navigation.domComplete - navigation.fetchStart,
          // Первая отрисовка
          fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          // Первая значимая отрисовка
          lcp: 0, // Будет обновлено позже
        }

        setMetrics(metrics)
      }

      // Ждем загрузки страницы
      if (document.readyState === 'complete') {
        getMetrics()
      } else {
        window.addEventListener('load', getMetrics)
      }

      // Отслеживаем LCP
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics((prev: Metrics | null) => prev ? { ...prev, lcp: lastEntry.startTime } : null)
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })

      return () => {
        window.removeEventListener('load', getMetrics)
        observer.disconnect()
      }
    }
  }, [])

  const getScore = (value: number, threshold: number) => {
    if (value <= threshold * 0.5) return '🟢 Отлично'
    if (value <= threshold) return '🟡 Хорошо'
    return '🔴 Требует улучшения'
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Метрики производительности</h1>
        
        {metrics ? (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Основные метрики</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Время загрузки:</span>
                  <span className="font-mono">{metrics.loadTime.toFixed(2)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>TTFB:</span>
                  <span className="font-mono">{metrics.ttfb.toFixed(2)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>DOM Content Loaded:</span>
                  <span className="font-mono">{metrics.domContentLoaded.toFixed(2)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>DOM Complete:</span>
                  <span className="font-mono">{metrics.domComplete.toFixed(2)}ms</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Core Web Vitals</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>FCP:</span>
                  <span className="font-mono">{metrics.fcp.toFixed(2)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>LCP:</span>
                  <span className="font-mono">{metrics.lcp.toFixed(2)}ms</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="text-sm text-gray-600">
                    FCP: {getScore(metrics.fcp, 1800)} (цель: &lt;1.8s)
                  </div>
                  <div className="text-sm text-gray-600">
                    LCP: {getScore(metrics.lcp, 2500)} (цель: &lt;2.5s)
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">Загрузка метрик...</p>
          </div>
        )}

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Рекомендации по оптимизации</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Используйте WebP/AVIF форматы для изображений</li>
            <li>• Включите сжатие Gzip/Brotli на сервере</li>
            <li>• Минимизируйте CSS и JavaScript</li>
            <li>• Используйте CDN для статических ресурсов</li>
            <li>• Оптимизируйте критический путь рендеринга</li>
            <li>• Используйте lazy loading для изображений</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 