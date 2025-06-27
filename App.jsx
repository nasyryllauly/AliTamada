import React, { useState, useEffect } from 'react';
import './App.css';

// Массив уведомлений точно как в оригинале
const notifications = [
  "✅ Асель из Шымкента только что забронировал(а) свадьбу!",
  "✅ Данияр из Нур-Султана только что забронировал(а) юбилей!",
  "✅ Айгуль забронировала корпоратив на декабрь!",
  "✅ Ерлан из Алматы выбрал пакет Премиум!",
  "✅ Гульнара заказала той на 200 гостей!",
  "✅ Арман из Шымкента забронировал свадьбу!",
  "✅ Жанна выбрала пакет Комфорт для юбилея!"
];

function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  // Автоматические уведомления каждые 15 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Показываем диалог через 30 секунд
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/77785878284', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/alitamada', '_blank');
  };

  const handleBooking = () => {
    handleWhatsApp();
    setShowBanner(false);
  };

  const handleOrder = () => {
    handleWhatsApp();
    setShowDialog(false);
  };

  return (
    <div className="App">
      {/* Баннер акции - точная копия */}
      {showBanner && (
        <div className="promo-banner">
          <div className="promo-content">
            <span>🔥 АКЦИЯ! Забронируйте дату сегодня - скидка 10%! Только 3 свободные даты в этом месяце!</span>
            <button className="promo-btn" onClick={handleBooking}>
              Забронировать!
            </button>
          </div>
        </div>
      )}

      {/* Всплывающие уведомления - точная копия */}
      {showNotification && (
        <div className="notification">
          {currentNotification}
        </div>
      )}

      {/* Всплывающий диалог - точная копия */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <button className="dialog-close" onClick={() => setShowDialog(false)}>✕</button>
            <div className="dialog-content">
              <span className="dialog-emoji">😊</span>
              <h3>Готовы к незабываемому празднику?</h3>
              <button className="dialog-btn" onClick={handleOrder}>
                Заказать сейчас!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Плавающие кнопки - точная копия */}
      <div className="floating-buttons">
        <button className="floating-btn primary" onClick={handleTelegram}>
          🚀 Сделать праздник незабываемым!
        </button>
        <button className="floating-btn secondary" onClick={handleWhatsApp}>
          ⚡ Заказать шоу мечты!
        </button>
      </div>

      {/* Основной контент - точная копия структуры */}
      <main>
        {/* Hero секция - точная копия */}
        <section className="hero">
          <div className="hero-container">
            <div className="hero-left">
              <div className="hero-image-frame">
                <img src="https://nasyryllauly.github.io/AliTamada/assets/hero_photo_main.jpeg" alt="Али Тоганасов - Тамада" className="hero-image" />
              </div>
              <div className="ready-dialog">
                <span className="ready-emoji">😊</span>
                <span>Готовы к незабываемому празднику?</span>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="badge-top">⭐ ЛУЧШИЙ ТАМАДА 2024</div>
              
              <h1 className="hero-title">
                Ваши гости<br />
                будут говорить<br />
                об этом<br />
                <span className="highlight-blue">годами!</span>
              </h1>
              
              <p className="hero-subtitle">
                <em>Али Тоганасов — тамада, который превращает любое мероприятие в незабываемое шоу</em>
              </p>
              
              <div className="hero-features">
                <div className="feature">✅ 100% гарантия веселья</div>
                <div className="feature">✅ Без банальных конкурсов</div>
              </div>

              <div className="hero-buttons">
                <button className="cta-btn blue" onClick={handleTelegram}>
                  🚀 Сделать праздник незабываемым!
                </button>
                <button className="cta-btn green" onClick={handleWhatsApp}>
                  ⚡ Заказать шоу мечты!
                </button>
              </div>
            </div>
          </div>
          
          <div className="social-proof">
            🔥 <strong>1000+</strong> довольных клиентов уже выбрали Али
          </div>
        </section>

        {/* О себе - точная копия */}
        <section className="about">
          <div className="container">
            <h2>Обо мне</h2>
            
            <div className="about-content">
              <div className="about-image">
                <img src="https://nasyryllauly.github.io/AliTamada/assets/about_photo_moon.jpeg" alt="Али Тоганасов на фоне луны" />
              </div>
              
              <div className="about-text">
                <div className="badges">
                  <span className="badge gold">🏆 Лучший тамада Алматы</span>
                  <span className="badge green">✅ Застрахованные мероприятия</span>
                  <span className="badge blue">🎓 Диплом юриста</span>
                </div>
                
                <p>Мой путь начался с КВН и привел к профессиональной карьере тамады. Имея диплом юриста, я идеально веду деловую часть церемоний, сочетая юмор и официоз в нужных пропорциях.</p>
                
                <div className="highlight-text">
                  ⚡ Зарядим ваших гостей смехом и эмоциями — без банальных конкурсов!
                </div>
                
                <div className="guarantee">
                  <h3>💯 ГАРАНТИЯ КАЧЕСТВА:</h3>
                  <p>Если ваши гости не будут в восторге - вернем 100% стоимости!</p>
                </div>
              </div>
            </div>
            
            {/* Статистика - точная копия */}
            <div className="stats">
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">лет опыта<br />с 2014 года</div>
              </div>
              <div className="stat">
                <div className="stat-number">1000+</div>
                <div className="stat-label">довольных клиентов<br />и их число растет!</div>
              </div>
              <div className="stat">
                <div className="stat-number">2</div>
                <div className="stat-label">языка<br />каз/рус</div>
              </div>
            </div>
          </div>
        </section>

        {/* Отзывы - точная копия */}
        <section className="testimonials">
          <div className="container">
            <div className="testimonial">
              <div className="testimonial-avatar">А</div>
              <div className="testimonial-content">
                <p>"Али превратил нашу свадьбу в настоящее шоу! Гости до сих пор вспоминают этот день!"</p>
                <cite>- Айгуль, свадьба 2024</cite>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-avatar">Д</div>
              <div className="testimonial-content">
                <p>"Профессионал высшего класса! Юбилей прошел на ура!"</p>
                <cite>- Данияр, юбилей 2024</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Кнопки Telegram/WhatsApp */}
        <section className="social-buttons">
          <div className="container">
            <div className="social-buttons-row">
              <button className="social-button telegram" onClick={handleTelegram}>
                🎉 Telegram
              </button>
              <button className="social-button whatsapp" onClick={handleWhatsApp}>
                🎉 WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* Пакеты услуг - точная копия */}
        <section className="packages">
          <div className="container">
            <div className="packages-grid">
              <div className="package">
                <h3>Стандарт</h3>
                <ul>
                  <li>• Ведение мероприятия</li>
                  <li>• Музыкальный пульт</li>
                  <li>• Базовый сценарий</li>
                  <li>• Zoom-созвон с Али</li>
                </ul>
                <button className="package-btn" onClick={handleTelegram}>
                  💰 Узнай цену!
                </button>
              </div>
              
              <div className="package">
                <h3>Комфорт</h3>
                <ul>
                  <li>• Всё из пакета "Стандарт"</li>
                  <li>• Этно-ансамбль</li>
                  <li>• DJ с плейлистом под ваши вкусы</li>
                  <li>• Интерактив-квест</li>
                </ul>
                <button className="package-btn" onClick={handleTelegram}>
                  💰 Узнай цену!
                </button>
              </div>
              
              <div className="package popular">
                <div className="popular-badge">🔥 ПОПУЛЯРНЫЙ</div>
                <h3>Премиум</h3>
                <ul>
                  <li>• Всё из пакета "Комфорт"</li>
                  <li>• Звезда-инфлюенсер</li>
                  <li>• Профессиональный видео-оператор для съемки мероприятия</li>
                  <li>• Love-Story видео</li>
                  <li>• Светодизайн, паровой/дым-машина</li>
                </ul>
                <button className="package-btn" onClick={handleTelegram}>
                  💰 Узнай цену!
                </button>
              </div>
            </div>
            
            <div className="packages-cta">
              <button className="cta-btn blue" onClick={handleTelegram}>
                🚀 Обсудить детали в Telegram
              </button>
              <button className="cta-btn green" onClick={handleWhatsApp}>
                ⚡ Быстрая консультация в WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* Услуги - точная копия */}
        <section className="services">
          <div className="container">
            <div className="services-grid">
              <div className="service">
                <div className="service-icon">💒</div>
                <h3>Свадьбы</h3>
                <p>Создам незабываемую атмосферу для вашего особенного дня</p>
              </div>
              
              <div className="service">
                <div className="service-icon">🎭</div>
                <h3>Тои</h3>
                <p>Проведу традиционные торжества с уважением к обычаям</p>
              </div>
              
              <div className="service">
                <div className="service-icon">🎂</div>
                <h3>Юбилеи</h3>
                <p>Сделаю ваш праздник ярким и запоминающимся</p>
              </div>
              
              <div className="service">
                <div className="service-icon">🏢</div>
                <h3>Корпоративы</h3>
                <p>Организую деловые и развлекательные мероприятия для компаний</p>
              </div>
            </div>
          </div>
        </section>

        {/* Контакты - точная копия */}
        <section className="contact">
          <div className="container">
            <p>Выезжаю по всему Казахстану для проведения мероприятий любого масштаба</p>
            
            <div className="contact-info">
              <div className="contact-phone">
                <strong>+7778 587 8284</strong>
              </div>
              
              <div className="contact-buttons">
                <button className="contact-btn telegram" onClick={handleTelegram}>
                  Написать сообщение
                </button>
                <button className="contact-btn whatsapp" onClick={handleWhatsApp}>
                  Написать сообщение
                </button>
              </div>
            </div>
            
            <p className="coverage">Выезжаю по всему Казахстану</p>
          </div>
        </section>
      </main>

      {/* Фиксированные социальные кнопки - точная копия */}
      <div className="fixed-social">
        <button className="social-btn telegram" onClick={handleTelegram} title="Написать в Telegram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.47-4.03c.19-.17-.04-.27-.3-.1L9.28 13.47l-2.38-.75c-.52-.16-.53-.52.11-.77l9.28-3.58c.43-.16.81.1.67.77z"/>
          </svg>
        </button>
        <button className="social-btn whatsapp" onClick={handleWhatsApp} title="Написать в WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;

