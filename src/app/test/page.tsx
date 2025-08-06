export default function TestPage() {
  return (
    <div className="min-h-screen p-8 bg-white bg-opacity-50">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Тест фона</h1>
      <p className="text-lg">Если вы видите этот текст, значит страница загружается.</p>
      <p className="text-lg">Фон должен быть виден за этим полупрозрачным блоком.</p>
      <div className="mt-8 p-4 bg-red-100 border-2 border-red-500 rounded">
        <h2 className="text-2xl font-bold text-red-800">Проверка фона</h2>
        <p>Если фон работает, вы увидите изображение за этим блоком.</p>
      </div>
    </div>
  );
} 