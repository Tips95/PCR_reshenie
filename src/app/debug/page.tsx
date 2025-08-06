export default function DebugPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Отладка</h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-blue-100 border border-blue-300 rounded">
          <h2 className="text-xl font-bold text-blue-800">Проверка фонового изображения</h2>
          <p>Попробуйте открыть: <a href="/images/background.jpeg" className="text-blue-600 underline" target="_blank">/images/background.jpeg</a></p>
        </div>
        
        <div className="p-4 bg-green-100 border border-green-300 rounded">
          <h2 className="text-xl font-bold text-green-800">Проверка CSS</h2>
          <p>Фон должен быть установлен через CSS в body</p>
        </div>
        
        <div className="p-4 bg-yellow-100 border border-yellow-300 rounded">
          <h2 className="text-xl font-bold text-yellow-800">Инструкции</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Откройте ссылку на изображение выше</li>
            <li>Если изображение загружается, проблема в CSS</li>
            <li>Если изображение не загружается, проблема в пути</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 