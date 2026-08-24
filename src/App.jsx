import React, { useState, useEffect } from 'react';
import './App.css';
import CoworkingPage from './components/CoworkingPage';
import MenuPage from './components/MenuPage';
import LocationSection from './components/LocationSection';
import comida from './assets/comida.png';

const LogoSVG = () => (
  <svg
    viewBox="0 0 100 120"
    className="logo-svg"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 10,120 L 10,10 L 90,10 L 90,120" />
    <path d="M 30,120 L 30,30 L 70,30 L 70,120" />
    <path d="M 50,120 L 50,50 L 50,120" />
  </svg>
);

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (window.location.hash === '#menu') return 'menu';
    if (window.location.hash === '#coworking') return 'coworking';
    return 'home';
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#menu') {
        setCurrentPage('menu');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#coworking') {
        setCurrentPage('coworking');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, targetSection = null) => {
    setCurrentPage(page);
    if (page === 'menu') {
      window.location.hash = 'menu';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'coworking') {
      window.location.hash = 'coworking';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = targetSection ? targetSection : '';
      if (targetSection) {
        setTimeout(() => {
          const el = document.getElementById(targetSection.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const isDarkHero = currentPage === 'menu' || currentPage === 'coworking';

  return (
    <>
      <header
        className={`header ${isDarkHero ? 'header-on-dark' : 'header-on-light'} ${isScrolled ? 'header-scrolled' : ''
          }`}
      >
        <div className="container header-container">
          <div
            className="logo-wrapper"
            style={{ cursor: 'pointer' }}
            onClick={() => navigateTo('home')}
          >
            <LogoSVG />
            <div className="logo-text">
              <span className="logo-text-bold">La</span> PUERTA
            </div>
          </div>
          <nav className="nav-links">
            <button
              onClick={() => navigateTo('home')}
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              Inicio
            </button>
            <button
              onClick={() => navigateTo('menu')}
              className={`nav-link ${currentPage === 'menu' ? 'active' : ''}`}
            >
              Menú
            </button>
            <button
              onClick={() => navigateTo('coworking')}
              className={`nav-link ${currentPage === 'coworking' ? 'active' : ''}`}
            >
              Coworking
            </button>
            <button
              onClick={() => navigateTo('home', 'ubicacion')}
              className="nav-link"
            >
              Ubicación
            </button>
          </nav>
        </div>
      </header>

      {currentPage === 'menu' ? (
        <main>
          <MenuPage onNavigateHome={() => navigateTo('home')} />
        </main>
      ) : currentPage === 'coworking' ? (
        <main>
          <CoworkingPage onNavigateHome={() => navigateTo('home')} />
        </main>
      ) : (
        <main>
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content container">
              <span className="hero-subtitle">La entrada al sabor y la productividad</span>
              <h1 className="hero-title">Bienvenidos a la Puerta</h1>
              <p className="hero-desc">
                Comida fresca, espacios inspiradores y coworking adaptable. ¡La Puerta: donde la pasión se encuentra con la productividad! 🔆
              </p>
              <div className='links-main'>
                <button
                  onClick={() => navigateTo('menu')}
                  className="btn btn-primary"
                >
                  Ver Menú
                </button>
                <button
                  onClick={() => navigateTo('coworking')}
                  className="btn btn-outline"
                >
                  Conoce el Coworking
                </button>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://i.wfolio.com/x/Erhj60RfGoSDn6LYN1vjjheZsgmFENWg/70nl7vp0vtA5I_3875z-74SYoU4uutGd/sKWLdkPGTgdMywQcC8RBXGxqrDdxByj5/mdJNivi8Om1ME5ShhDpJv2I9d1vVU-zo/uywrXE0Q5k_tQTgqK-imo76BWoz0WIju/pgpEXKPRt_xAKKh0EU-QYsu2Lu8J9o_5/GjymHetQZywaCQCWYizoWldU2SKYmzjg/zCLYwdJHH7VblkRaGsJrOb2xYxOVFw7n/Im_z35TqYRJcV0YM0k_oCzlYA4FRbZCr/q3HFk1YbB8TBhJJ8dvU92dErxPpqyv8z/B4NhFfir5dgq5GpDhUnlkbX8B2eWVARF/tEJ1eGNmEgHsH-8bITibaOnxYtSZGOGZ/lT1ruX-AvTketI3KokBoBlz9egpsEj2c/Ixz92BfgBcvymaAR6DCIhkGCfEjGR4Ja/4AC1DfogEOnrv1iEMt1A1KhfwVI_2Apz/IwWqjU7BAVh4CPPk71UCdE1cLphnMVCg/vuy0KdGO9rrFRnDHHkwqLhvHS35VF-jf/eELlQYgyC9m9nwumU3MTH6XVadvixq8O/KNf7OXNKKM4O01d7UKDDmD5-yQFU2orw/VEii7CCeW84.jpg"
                style={{ objectPosition: '50% 50%' }}
                className="hero-image is-protected"
              >
                <source src="https://vp.wfolio.com/video_proxies/of4j5aS4cVwPTxC_axvSqtevD08WkzZE/PQzCQHXjAS7XLSgq0ncVhDR1xrdW4DC9/zOCtWdDwdVO5Zun67vaWsy-GDC2jE4P1/9aI-cT76KYzSEghcXSgfI9SgQItrELiv/mU6nbI85u2l7drzpiVIcOU2XzBlL1KD8/cglh8kPeLtrz2KLV2C7APsqSUrElnr3l/US7M7lXXYdcN_-zA9kclPNqftR9UH6Vn/GDWiw336BVSuTqxEzOEqxw7OPETK91-o.mp4" />
              </video>
            </div>
          </section>

          {/* Introducción / Valores */}
          <section id="ambiente" className="features">
            <div className="container">
              <h2 className="section-title text-center">Un ambiente diseñado para ti</h2>
              <div className="features-grid">
                <div
                  className="feature-card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigateTo('menu')}
                >
                  <div className="feature-icon">☕</div>
                  <h3 className="feature-title">Menú & Café de Especialidad</h3>
                  <p className="feature-desc">
                    Masa madre artesanal, recetas frescas, repostería y café de origen tostado a la perfección.
                  </p>
                  <span style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem', marginTop: '1.2rem', display: 'inline-block' }}>
                    Explorar Menú →
                  </span>
                </div>
                <div
                  className="feature-card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigateTo('coworking')}
                >
                  <div className="feature-icon">💻</div>
                  <h3 className="feature-title">Coworking & Oficinas</h3>
                  <p className="feature-desc">
                    Estaciones de trabajo ergonómicas, oficinas privadas, internet de alta velocidad y sala de espera.
                  </p>
                  <span style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem', marginTop: '1.2rem', display: 'inline-block' }}>
                    Ver Espacios & Planes →
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Split Section Restaurante */}
          <section id="restaurante" className="split-section">
            <img src={comida} alt="Comida La Puerta" className="image" />
            <div className="split-content">
              <h2>Deleita tu paladar exquisito</h2>
              <p>
                Nuestra identidad sobria y elegante se refleja en cada plato. Creamos experiencias culinarias para amantes de la buena mesa que buscan algo más que una comida: buscan inspiración.
              </p>
              <button
                onClick={() => navigateTo('menu')}
                className="btn btn-outline"
                style={{
                  borderColor: 'var(--color-bg)',
                  color: 'var(--color-bg)',
                  alignSelf: 'flex-start'
                }}
              >
                Conoce nuestra oferta
              </button>
            </div>
          </section>

          {/* Sección de Ubicación & Google Maps */}
          <LocationSection />
        </main>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div
            className="logo-wrapper footer-logo"
            style={{ cursor: 'pointer' }}
            onClick={() => navigateTo('home')}
          >
            <LogoSVG />
            <div className="logo-text">
              <span className="logo-text-bold">La</span> PUERTA
            </div>
            <p
              style={{
                marginTop: '0.5rem',
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-primary)'
              }}
            >
              Donde la pasión se encuentra con la productividad
            </p>
          </div>
          <div className="footer-socials">
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('menu');
              }}
            >
              Ver Menú
            </a>
            <a
              href="#coworking"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('coworking');
              }}
            >
              Coworking
            </a>
            <a
              href="#ubicacion"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home', 'ubicacion');
              }}
            >
              Ubicación
            </a>
            <a
              href="https://www.instagram.com/lapuerta_rc/"
              target="_blank"
              rel="noopener noreferrer"
              title="Síguenos en Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089057190607"
              target="_blank"
              rel="noopener noreferrer"
              title="Síguenos en Facebook"
            >
              Facebook
            </a>
          </div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} La Puerta Coworking & Restaurante. Cr 41 #36-98, Tuluá. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

