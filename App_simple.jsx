import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { MessageCircle, Phone } from 'lucide-react'
import './App_simple.css'

// Импорт изображений
import heroPhoto from './assets/hero_photo_main.jpeg'
import aboutPhoto from './assets/about_photo_moon.jpeg'
import packagesPhoto from './assets/packages_photo_suit.jpeg'

// Контактная информация
const CONTACTS = {
  phone: '+7778 587 8284',
  telegram: 'https://t.me/alitoganasov',
  whatsapp: 'https://wa.me/77785878284'
}

function App() {
  const handleTelegramClick = () => {
    window.open(CONTACTS.telegram, '_blank')
  }

  const handleWhatsAppClick = () => {
    window.open(CONTACTS.whatsapp, '_blank')
  }

  const handlePriceClick = (packageName) => {
    const message = `Здравствуйте! Хочу узнать цену на пакет "${packageName}"`
    const encodedMessage = encodeURIComponent(message)
    window.open(`${CONTACTS.whatsapp}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="simple-bg min-h-screen text-white">
      {/* Главная секция */}
      <section className="hero-section min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Фотография */}
            <div className="flex justify-center">
              <div className="simple-card">
                <img 
                  src={heroPhoto} 
                  alt="Али Тоганасов - Тамада" 
                  className="w-full max-w-md rounded-lg object-cover"
                />
              </div>
            </div>
            
            {/* Текст и кнопки */}
            <div className="text-center lg:text-left space-y-6">
              <div>
                <div className="mb-4">
                  <span className="simple-badge">
                    ⭐ ЛУЧШИЙ ТАМАДА 2024
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Ваши гости будут говорить об этом годами!
                </h1>
                <p className="text-xl text-blue-200 mb-4">
                  Али Тоганасов — тамада, который превращает любое мероприятие в незабываемое шоу
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-lg mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span>100% гарантия веселья</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Без банальных конкурсов</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={handleTelegramClick}
                    className="btn-simple btn-telegram"
                  >
                    <MessageCircle size={20} />
                    🚀 Сделать праздник незабываемым!
                  </button>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="btn-simple btn-whatsapp"
                  >
                    <MessageCircle size={20} />
                    ⚡ Заказать шоу мечты!
                  </button>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-sm text-gray-300">
                    🔥 <span className="text-yellow-400 font-bold">1000+</span> довольных клиентов уже выбрали Али
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Обо мне" */}
      <section className="section-simple py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Обо мне</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Фотография */}
            <div className="flex justify-center">
              <div className="simple-card">
                <img 
                  src={aboutPhoto} 
                  alt="Али Тоганасов на фоне луны" 
                  className="w-full max-w-md rounded-lg object-cover"
                />
              </div>
            </div>
            
            {/* Текст и статистика */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="simple-badge">🏆 Лучший тамада Алматы</span>
                  <span className="simple-badge">✅ Застрахованные мероприятия</span>
                  <span className="simple-badge">🎓 Диплом юриста</span>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Мой путь начался с КВН и привел к профессиональной карьере тамады. 
                  Имея диплом юриста, я идеально веду деловую часть церемоний, 
                  сочетая юмор и официоз в нужных пропорциях.
                </p>
                
                <div className="text-cyan-300 text-lg font-medium">
                  ⚡ Зарядим ваших гостей смехом и эмоциями — без банальных конкурсов!
                </div>
                
                <div className="simple-guarantee">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">💯 ГАРАНТИЯ КАЧЕСТВА:</h3>
                  <p className="text-lg">Если ваши гости не будут в восторге - вернем 100% стоимости!</p>
                </div>
              </div>
              
              {/* Статистика */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="stats-simple">
                  <div className="text-3xl font-bold text-cyan-400">10+</div>
                  <div className="text-sm text-gray-400">лет опыта</div>
                  <div className="text-xs text-gray-500">с 2014 года</div>
                </div>
                <div className="stats-simple">
                  <div className="text-3xl font-bold text-cyan-400">1000+</div>
                  <div className="text-sm text-gray-400">довольных клиентов</div>
                  <div className="text-xs text-gray-500">и их число растет!</div>
                </div>
                <div className="stats-simple">
                  <div className="text-3xl font-bold text-cyan-400">2</div>
                  <div className="text-sm text-gray-400">языка</div>
                  <div className="text-xs text-gray-500">каз/рус</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="testimonial-simple">
              <div className="text-4xl mb-4">А</div>
              <p className="text-lg mb-4">
                "Али превратил нашу свадьбу в настоящее шоу! Гости до сих пор вспоминают этот день!"
              </p>
              <div className="text-sm text-gray-400">- Айгуль, свадьба 2024</div>
            </div>
            
            <div className="testimonial-simple">
              <div className="text-4xl mb-4">Д</div>
              <p className="text-lg mb-4">
                "Профессионал высшего класса! Юбилей прошел на ура!"
              </p>
              <div className="text-sm text-gray-400">- Данияр, юбилей 2024</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex justify-center gap-4">
              <button 
                onClick={handleTelegramClick}
                className="btn-simple btn-telegram"
                title="Написать в Telegram"
              >
                🎉Telegram
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="btn-simple btn-whatsapp"
                title="Написать в WhatsApp"
              >
                🎉WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Пакеты услуг */}
      <section className="section-simple py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Пакеты услуг</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Стандарт */}
            <div className="package-simple">
              <h3 className="text-2xl font-bold mb-4">Стандарт</h3>
              <div className="mb-6">
                <button 
                  onClick={() => handlePriceClick('Стандарт')}
                  className="btn-simple btn-price w-full"
                >
                  💰 Узнай цену!
                </button>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Ведение мероприятия</li>
                <li>• Музыкальный пульт</li>
                <li>• Базовый сценарий</li>
                <li>• Zoom-созвон с Али</li>
              </ul>
            </div>

            {/* Комфорт */}
            <div className="package-simple package-popular">
              <div className="popular-badge">🔥 ПОПУЛЯРНЫЙ</div>
              <h3 className="text-2xl font-bold mb-4">Комфорт</h3>
              <div className="mb-6">
                <button 
                  onClick={() => handlePriceClick('Комфорт')}
                  className="btn-simple btn-price w-full"
                >
                  💰 Узнай цену!
                </button>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Всё из пакета "Стандарт"</li>
                <li>• Этно-ансамбль</li>
                <li>• DJ с плейлистом под ваши вкусы</li>
                <li>• Интерактив-квест</li>
              </ul>
            </div>

            {/* Премиум */}
            <div className="package-simple">
              <h3 className="text-2xl font-bold mb-4">Премиум</h3>
              <div className="mb-6">
                <button 
                  onClick={() => handlePriceClick('Премиум')}
                  className="btn-simple btn-price w-full"
                >
                  💰 Узнай цену!
                </button>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Всё из пакета "Комфорт"</li>
                <li>• Звезда-инфлюенсер</li>
                <li>• Профессиональный видео-оператор</li>
                <li>• Love-Story видео</li>
                <li>• Светодизайн, дым-машина</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={handleTelegramClick}
                className="btn-simple btn-telegram"
              >
                🚀 Обсудить детали в Telegram
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="btn-simple btn-whatsapp"
              >
                ⚡ Быстрая консультация в WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Мои услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-simple">
              <div className="text-4xl mb-4">💒</div>
              <h3 className="text-xl font-bold mb-2">Свадьбы</h3>
              <p className="text-sm text-gray-300">
                Создам незабываемую атмосферу для вашего особенного дня
              </p>
            </div>
            
            <div className="service-simple">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold mb-2">Тои</h3>
              <p className="text-sm text-gray-300">
                Проведу традиционные торжества с уважением к обычаям
              </p>
            </div>
            
            <div className="service-simple">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="text-xl font-bold mb-2">Юбилеи</h3>
              <p className="text-sm text-gray-300">
                Сделаю ваш праздник ярким и запоминающимся
              </p>
            </div>
            
            <div className="service-simple">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-2">Корпоративы</h3>
              <p className="text-sm text-gray-300">
                Организую деловые и развлекательные мероприятия для компаний
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="section-simple py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Свяжитесь со мной</h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Выезжаю по всему Казахстану для проведения мероприятий любого масштаба
          </p>
          
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">{CONTACTS.phone}</div>
            </div>
            
            <div className="flex justify-center gap-4">
              <button 
                onClick={handleTelegramClick}
                className="btn-simple btn-telegram"
              >
                <MessageCircle size={20} />
                Написать сообщение
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="btn-simple btn-whatsapp"
              >
                <MessageCircle size={20} />
                Написать сообщение
              </button>
            </div>
            
            <p className="text-sm text-gray-400">
              Выезжаю по всему Казахстану
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

