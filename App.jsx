import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const notifications = [
    "Асель из Шымкента только что забронировал(а) свадьбу!",
    "Жанна выбрала пакет Комфорт для юбилея!",
    "Данияр заказал корпоратив на 50 человек!",
    "Айгуль забронировала свадьбу на июль!",
    "Марат выбрал пакет Премиум для годовщины!"
  ];

  useEffect(() => {
    const showRandomNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setNotification(randomNotification);
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    };

    const interval = setInterval(showRandomNotification, 8000);
    setTimeout(showRandomNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/77785878284', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/alitoganasov', '_blank');
  };

  const handleBooking = () => {
    handleWhatsApp();
    setShowBanner(false);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleOrderNow = () => {
    handleTelegram();
    setShowDialog(false);
  };

  return (
    <div className="App">
      {/* Баннер акции */}
      {showBanner && (
        <div className="promo-banner">
          <div className="promo-content">
            <span className="fire-emoji">🔥</span>
            <span className="promo-text">
              АКЦИЯ! Забронируйте дату сегодня - скидка 10%! Только 3 свободные даты в этом месяце!
            </span>
            <button className="promo-button" onClick={handleBooking}>
              Забронировать!
            </button>
            <button className="close-banner" onClick={handleCloseBanner}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Уведомления */}
      {showNotification && (
        <div className="notification">
          {notification}
        </div>
      )}

      {/* Основной контент */}
      <div className="main-content">
        {/* Hero секция */}
        <section className="hero">
          <div className="hero-container">
            {/* ФОТО СЛЕВА */}
            <div className="hero-image-container">
              <img src="https://nasyryllauly.github.io/AliTamada/assets/hero_photo_dark_suit.jpeg" alt="Али Тоганасов - Тамада" className="hero-image" />
            </div>
            
            {/* ТЕКСТ СПРАВА */}
            <div className="hero-content">
              <div className="badge">⭐ ЛУЧШИЙ ТАМАДА 2024</div>
              <h1 className="hero-title">
                Ваши гости<br />
                будут говорить<br />
                об этом<br />
                <span className="highlight">годами!</span>
              </h1>
              <p className="hero-subtitle">
                Али Тоганасов — тамада, который превращает любое мероприятие в незабываемое шоу
              </p>
              <div className="features">
                <div className="feature">✅ 100% гарантия веселья</div>
                <div className="feature">✅ Без банальных конкурсов</div>
              </div>
            </div>
          </div>
        </section>

        {/* Статистика */}
        <section className="stats">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">🔥 1000+</div>
              <div className="stat-text">довольных клиентов уже выбрали Али</div>
            </div>
          </div>
        </section>

        {/* О себе */}
        <section className="about">
          <div className="about-container">
            <div className="about-image">
              <img src="https://nasyryllauly.github.io/AliTamada/assets/about_photo_moon.jpeg" alt="Али Тоганасов на фоне луны" />
            </div>
            <div className="about-content">
              <h2>Обо мне</h2>
              <div className="badges">
                <span className="badge-item">🏆 Лучший тамада Алматы</span>
                <span className="badge-item">✅ Застрахованные мероприятия</span>
                <span className="badge-item">🎓 Диплом юриста</span>
              </div>
              <p>
                Мой путь начался с КВН и привел к профессиональной карьере тамады. 
                Имея диплом юриста, я идеально веду деловую часть церемоний, 
                сочетая юмор и официоз в нужных пропорциях.
              </p>
              <p className="highlight-text">
                ⚡ Зарядим ваших гостей смехом и эмоциями — без банальных конкурсов!
              </p>
              <div className="guarantee">
                <h3>💯 ГАРАНТИЯ КАЧЕСТВА:</h3>
                <p>Если ваши гости не будут в восторге - вернем 100% стоимости!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Статистика опыта */}
        <section className="experience">
          <div className="experience-container">
            <div className="exp-item">
              <div className="exp-number">10+</div>
              <div className="exp-text">лет опыта<br />с 2014 года</div>
            </div>
            <div className="exp-item">
              <div className="exp-number">1000+</div>
              <div className="exp-text">довольных клиентов<br />и их число растет!</div>
            </div>
            <div className="exp-item">
              <div className="exp-number">2</div>
              <div className="exp-text">языка<br />каз/рус</div>
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section className="reviews">
          <div className="reviews-container">
            <div className="review">
              <div className="review-avatar">А</div>
              <div className="review-content">
                <p>"Али превратил нашу свадьбу в настоящее шоу! Гости до сих пор вспоминают этот день!"</p>
                <span>- Айгуль, свадьба 2024</span>
              </div>
            </div>
            <div className="review">
              <div className="review-avatar">Д</div>
              <div className="review-content">
                <p>"Профессионал высшего класса! Юбилей прошел на ура!"</p>
                <span>- Данияр, юбилей 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Пакеты услуг */}
        <section className="packages">
          <h2>Пакеты услуг</h2>
          <div className="packages-container">
            <div className="package standard">
              <h3>Стандарт</h3>
              <button className="price-button" onClick={handleTelegram}>💰 Узнай цену!</button>
              <ul>
                <li>• Ведение мероприятия</li>
                <li>• Музыкальный пульт</li>
                <li>• Базовый сценарий</li>
                <li>• Zoom-созвон с Али</li>
              </ul>
            </div>
            
            <div className="package comfort">
              <h3>Комфорт</h3>
              <button className="price-button" onClick={handleTelegram}>💰 Узнай цену!</button>
              <ul>
                <li>• Всё из пакета "Стандарт"</li>
                <li>• Этно-ансамбль</li>
                <li>• DJ с плейлистом под ваши вкусы</li>
                <li>• Интерактив-квест</li>
              </ul>
            </div>
            
            <div className="package premium">
              <div className="popular-badge">🔥 ПОПУЛЯРНЫЙ</div>
              <h3>Премиум</h3>
              <button className="price-button" onClick={handleTelegram}>💰 Узнай цену!</button>
              <ul>
                <li>• Всё из пакета "Комфорт"</li>
                <li>• Звезда-инфлюенсер</li>
                <li>• Профессиональный видео-оператор для съемки мероприятия</li>
                <li>• Love-Story видео</li>
                <li>• Светодизайн, паровой/дым-машина</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA секция */}
        <section className="cta">
          <div className="cta-container">
            <button className="cta-button telegram" onClick={handleTelegram}>
              🚀 Обсудить детали в Telegram
            </button>
            <button className="cta-button whatsapp" onClick={handleWhatsApp}>
              ⚡ Быстрая консультация в WhatsApp
            </button>
          </div>
        </section>

        {/* Услуги */}
        <section className="services">
          <div className="services-container">
            <div className="service">
              <div className="service-icon">💒</div>
              <h3>Свадьбы</h3>
              <p>Создам незабываемую атмосферу для вашего особенного дня</p>
            </div>
            <div className="service">
              <div className="service-icon">🎭</div>
              <h3>Юбилеи</h3>
              <p>Проведу традиционные торжества с уважением к обычаям</p>
            </div>
            <div className="service">
              <div className="service-icon">🎂</div>
              <h3>Дни рождения</h3>
              <p>Сделаю ваш праздник ярким и запоминающимся</p>
            </div>
            <div className="service">
              <div className="service-icon">🏢</div>
              <h3>Корпоративы</h3>
              <p>Организую деловые и развлекательные мероприятия для компаний</p>
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section className="contact">
          <div className="contact-container">
            <h2>Выезжаю по всему Казахстану для проведения мероприятий любого масштаба</h2>
            <div className="contact-info">
              <div className="phone">+7778 587 8284</div>
              <div className="contact-buttons">
                <button onClick={handleTelegram}>Написать сообщение</button>
                <button onClick={handleWhatsApp}>Написать сообщение</button>
              </div>
            </div>
            <p>Выезжаю по всему Казахстану</p>
          </div>
        </section>
      </div>

      {/* Плавающие кнопки */}
      <div className="floating-buttons">
        <button className="floating-btn primary" onClick={handleTelegram}>
          🚀 Сделать праздник незабываемым!
        </button>
        <button className="floating-btn secondary" onClick={handleWhatsApp}>
          ⚡ Заказать шоу мечты!
        </button>
      </div>

      {/* Фиксированные социальные кнопки */}
      <div className="fixed-social">
        <button className="social-btn telegram" onClick={handleTelegram} title="Написать в Telegram">
          🎉 Telegram
        </button>
        <button className="social-btn whatsapp" onClick={handleWhatsApp} title="Написать в WhatsApp">
          🎉 WhatsApp
        </button>
      </div>

      {/* Диалог */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <button className="dialog-close" onClick={handleCloseDialog}>✕</button>
            <div className="dialog-content">
              <div className="dialog-emoji">😊</div>
              <h3>Готовы к незабываемому празднику?</h3>
              <button className="dialog-button" onClick={handleOrderNow}>
                Заказать сейчас!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

