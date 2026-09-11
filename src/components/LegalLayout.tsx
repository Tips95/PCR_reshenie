import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_NAME } from '@/lib/site'

type LegalLayoutProps = {
  title: string
  updatedAt: string
  children: React.ReactNode
}

const LegalLayout = ({ title, updatedAt, children }: LegalLayoutProps) => {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center mr-3 overflow-hidden">
                <Image
                  src="/assets/logo.png"
                  alt={`Логотип: ${COMPANY_NAME}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-dark-900">Правовой центр Решение</span>
            </Link>
            <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
              На главную
            </Link>
          </div>
        </div>
      </header>

      <div className="container-custom py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-3">{title}</h1>
          <p className="text-sm text-dark-500 mb-10">Дата последнего обновления: {updatedAt}</p>

          <div className="space-y-6 text-dark-600 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-dark-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary-600 [&_a]:underline">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default LegalLayout
