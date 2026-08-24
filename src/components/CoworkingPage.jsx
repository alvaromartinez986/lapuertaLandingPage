import React, { useState, useEffect } from 'react';
import './CoworkingPage.css';

// Importación de fotos de Coworking
import imgOficinaPrincipal from '../assets/menu/espacioCowrkingOficina.png';
import imgOficina4 from '../assets/menu/espacioCowkijgnOficina4.png';
import imgOficina6 from '../assets/menu/espacioCowkijngOficina6.png';
import imgCoworking2 from '../assets/menu/espacioCoworking2.jpg';
import imgCoworking3 from '../assets/menu/espacioCoworking3.jpg';
import imgCoworking4 from '../assets/menu/espacioCoworking4.jpg';
import imgCoworking1 from '../assets/menu/espacioCoworkin1.jpg';
import imgCoworking7 from '../assets/menu/espacioCowkirng7.jpg';
import imgCoworkingOfc3 from '../assets/menu/espacioCowrkinOficina3.jpg';
import imgCoworkingOfc5 from '../assets/menu/espacioCowrkingOfc5.jpg';
import imgCoworkingOfc9 from '../assets/menu/espacioCowrkingOfc9.png';
import imgCoworking5 from '../assets/menu/espacioCowrking5.png';
import imgBano from '../assets/menu/espacioCoworkingBano.png';

const coworkingGallery = [
  {
    id: 1,
    image: imgOficinaPrincipal,
    title: 'Oficina Privada Ejecutiva',
    category: 'oficinas',
    desc: 'Espacio cerrado, luminoso y acondicionado para máxima concentración y privacidad.'
  },
  {
    id: 2,
    image: imgCoworking2,
    title: 'Estaciones de Coworking',
    category: 'coworking',
    desc: 'Puestos individuales amplios con tomas de corriente y sillas ergonómicas.'
  },
  {
    id: 3,
    image: imgCoworking1,
    title: 'Sala de Espera & Recepción',
    category: 'zonas-comunes',
    desc: 'Ambiente confortable para recibir clientes y visitas comerciales.'
  },
  {
    id: 4,
    image: imgOficina6,
    title: 'Oficina para Equipos',
    category: 'oficinas',
    desc: 'Área espaciosa con luz natural para trabajo colaborativo de alto rendimiento.'
  },
  {
    id: 5,
    image: imgCoworking3,
    title: 'Área Colaborativa Abierta',
    category: 'coworking',
    desc: 'Espacios compartidos diseñados para el flujo de ideas y networking.'
  },
  {
    id: 6,
    image: imgOficina4,
    title: 'Despacho & Escritorio Privado',
    category: 'oficinas',
    desc: 'Mobiliario moderno de madera, privacidad y confort acústico.'
  },
  {
    id: 7,
    image: imgCoworking7,
    title: 'Vista General Coworking',
    category: 'coworking',
    desc: 'Atmósfera tranquila con arquitectura acogedora y plantas naturales.'
  },
  {
    id: 8,
    image: imgCoworking4,
    title: 'Mesa de Trabajo Compartida',
    category: 'coworking',
    desc: 'Iluminación cálida y tomas para laptops y dispositivos de trabajo.'
  },
  {
    id: 9,
    image: imgCoworkingOfc3,
    title: 'Estación de Trabajo Individual',
    category: 'oficinas',
    desc: 'Escritorio con iluminación enfocada y ambiente silencioso.'
  },
  {
    id: 10,
    image: imgCoworkingOfc5,
    title: 'Oficina Suite Privada',
    category: 'oficinas',
    desc: 'Oficina independiente para profesionales o firmas consultoras.'
  },
  {
    id: 11,
    image: imgCoworkingOfc9,
    title: 'Módulo de Oficina Iluminado',
    category: 'oficinas',
    desc: 'Ventilación y luz natural en un espacio seguro y moderno.'
  },
  {
    id: 12,
    image: imgCoworking5,
    title: 'Puestos Flexibles de Trabajo',
    category: 'coworking',
    desc: 'Zonas adaptadas para conectar tu laptop y trabajar con tranquilidad.'
  },
  {
    id: 13,
    image: imgBano,
    title: 'Servicios Sanitarios & Confort',
    category: 'zonas-comunes',
    desc: 'Instalaciones impecables y modernas para tu total comodidad.'
  }
];

export default function CoworkingPage({ onNavigateHome }) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [activePhoto, setActivePhoto] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtrado de fotos
  const filteredPhotos = selectedCategory === 'todos'
    ? coworkingGallery
    : coworkingGallery.filter((item) => item.category === selectedCategory);

  const coworkingWhatsAppUrl = 'https://wa.link/fhv7ml';

  return (
    <div className="coworking-page">
      {/* Hero Header de la Página Coworking */}
      <section
        className="coworking-hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(28, 23, 20, 0.84), rgba(28, 23, 20, 0.95)), url(${imgOficinaPrincipal})`
        }}
      >
        <div className="container coworking-hero-inner">
          <div className="coworking-hero-badge-pill">
            <span className="sparkle-icon">✨</span> Espacios de Productividad & Coworking
          </div>

          <h1 className="coworking-hero-title">
            Espacio <span>Coworking</span> & Oficinas
          </h1>

          <p className="coworking-hero-subtitle">
            Un ambiente inspirador donde la serenidad, la alta velocidad de internet, el café de especialidad
            y el confort se unen para potenciar tus mejores ideas y proyectos.
          </p>

          {/* Chips de características destacadas */}
          <div className="hero-features-chips">
            <div className="feature-chip">
              <span className="chip-icon">⚡</span>
              <span>Internet Fibra Óptica</span>
            </div>
            <div className="feature-chip">
              <span className="chip-icon">☕</span>
              <span>Café & Agua Ilimitados</span>
            </div>
            <div className="feature-chip">
              <span className="chip-icon">📬</span>
              <span>Dirección Comercial</span>
            </div>
            <div className="feature-chip">
              <span className="chip-icon">🛋️</span>
              <span>Sala de Espera VIP</span>
            </div>
          </div>

          {/* Botones de acción en el Hero */}
          <div className="coworking-hero-actions">
            <button onClick={onNavigateHome} className="btn-back-home">
              ← Volver al Inicio
            </button>
            <a href="#planes" className="btn-see-plans">
              Ver Tarifas & Planes ↓
            </a>
          </div>
        </div>
      </section>

      <div className="container coworking-body-container">
        {/* Widget de Horarios de Atención */}
        <div className="coworking-schedule-card">
          <div className="schedule-header">
            <div className="schedule-icon-wrap">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="schedule-title">Horarios de Atención</h3>
              <p className="schedule-tagline">Disponibilidad en nuestras instalaciones</p>
            </div>
          </div>

          <div className="schedule-items-grid">
            <div className="schedule-item">
              <div className="schedule-day-badge">Lunes a Viernes</div>
              <div className="schedule-hours">8:00 am – 6:00 pm</div>
              <div className="schedule-note">Jornada continua & acceso total</div>
            </div>
            <div className="schedule-item">
              <div className="schedule-day-badge">Sábados</div>
              <div className="schedule-hours">8:00 am – 1:00 pm</div>
              <div className="schedule-note">Media jornada productiva</div>
            </div>
            <div className="schedule-item schedule-item-closed">
              <div className="schedule-day-badge">Domingos & Festivos</div>
              <div className="schedule-hours">Cerrado</div>
              <div className="schedule-note">Descanso & eventos privados</div>
            </div>
          </div>
        </div>

        {/* Sección de Planes de Precios */}
        <div className="coworking-plans-section" id="planes">
          <div className="text-center section-heading">
            <span className="sub-heading">Elige la modalidad que mejor se adapte a ti</span>
            <h2 className="plans-main-title">Nuestros Planes y Tarifas</h2>
            <p className="plans-main-desc">
              Tarifas claras, transparentes y con todos los beneficios incluidos para que trabajes sin preocupaciones.
            </p>
          </div>

          <div className="plans-grid">
            {/* Plan 1: Oficina Mensual */}
            <div className="pricing-card pricing-card-featured">
              <div className="featured-ribbon">Recomendado</div>
              <div className="pricing-card-header">
                <div className="plan-type-pill">Espacio Dedicado</div>
                <h3 className="plan-name">Oficina Mensual</h3>
                <p className="plan-summary">
                  Tu oficina privada o puesto fijo con acceso continuo durante todo el mes. Diseñado para profesionales, creativos y equipos.
                </p>
                <div className="price-box">
                  <span className="currency">$</span>
                  <span className="amount">1.200.000</span>
                  <span className="period">/ mes</span>
                </div>
              </div>

              <div className="pricing-card-body">
                <p className="benefits-label">Beneficios incluidos:</p>
                <ul className="benefits-list">
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Dirección de correspondencia</strong> comercial para tu empresa o marca.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Sala de espera</strong> y recepción para recibir a tus clientes con distinción.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Servicio de internet</strong> de fibra óptica de alta velocidad y estabilidad.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Precio especial</strong> en todos los eventos y talleres promocionados en el coworking.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Café de especialidad y agua</strong> ilimitados durante toda tu jornada.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Acceso completo de <strong>Lunes a Viernes (8am - 6pm) y Sábados (8am - 1pm)</strong>.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Servicio de limpieza y mantenimiento continuo de las instalaciones.</span>
                  </li>
                </ul>
              </div>

              <div className="pricing-card-footer">
                <a
                  href={coworkingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                >
                  Reservar Oficina Mensual
                </a>
              </div>
            </div>

            {/* Plan 2: Prepago 10 Horas */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <div className="plan-type-pill">Máxima Flexibilidad</div>
                <h3 className="plan-name">Plan Prepago 10 Horas</h3>
                <p className="plan-summary">
                  Bono de 10 horas para consumo mensual. Perfecto para nómadas digitales, reuniones y jornadas de trabajo híbrido.
                </p>
                <div className="price-box">
                  <span className="currency">$</span>
                  <span className="amount">150.000</span>
                  <span className="period">/ 10 horas al mes</span>
                </div>
              </div>

              <div className="pricing-card-body">
                <p className="benefits-label">Beneficios incluidos:</p>
                <ul className="benefits-list">
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>10 horas de acceso flexible</strong> para consumir a tu propio ritmo en el mes.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Dirección de correspondencia</strong> comercial durante la vigencia de tu plan.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Sala de espera</strong> disponible para citas y visitas profesionales.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Servicio de internet</strong> de alta velocidad para conexiones sin interrupciones.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Precio especial</strong> en eventos y conferencias promocionados en el espacio.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span><strong>Café de especialidad y agua</strong> incluidos durante tus horas de permanencia.</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Uso de puestos ergonómicos en zona compartida con luz natural.</span>
                  </li>
                </ul>
              </div>

              <div className="pricing-card-footer">
                <a
                  href={coworkingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-block"
                >
                  Comprar Plan Prepago
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios & Amenidades Clave */}
        <div className="coworking-features-section">
          <div className="text-center section-heading">
            <span className="sub-heading">Ventajas de nuestra sede</span>
            <h2 className="plans-main-title">Todo lo que necesitas para rendir al máximo</h2>
          </div>

          <div className="amenities-grid">
            <div className="amenity-card">
              <div className="amenity-icon">📬</div>
              <h4>Dirección Comercial</h4>
              <p>Proyecta confianza recibiendo correspondencia, paquetería y notificaciones de tu empresa.</p>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon">🛋️</div>
              <h4>Sala de Espera</h4>
              <p>Un espacio profesional y distinguido donde tus clientes podrán esperar cómodamente.</p>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon">⚡</div>
              <h4>Internet de Alta Velocidad</h4>
              <p>Fibra óptica empresarial con cobertura Wi-Fi óptima y tomas de conexión rápida.</p>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon">☕</div>
              <h4>Café de Especialidad</h4>
              <p>Barismo de primer nivel, agua fresca y estación de bebidas para acompañar tu jornada.</p>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon">🎟️</div>
              <h4>Eventos & Networking</h4>
              <p>Tarifas preferenciales en talleres, charlas y actividades de nuestra comunidad creadora.</p>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon">🥐</div>
              <h4>Cocina & Repostería</h4>
              <p>Acceso directo al restaurante y cafetería de La Puerta con opciones deliciosas a pocos pasos.</p>
            </div>
          </div>
        </div>

        {/* Galería de Espacios Reales */}
        <div className="coworking-gallery-section" id="galeria">
          <div className="gallery-header-row">
            <div>
              <span className="sub-heading">Nuestras Instalaciones</span>
              <h2 className="plans-main-title">Conoce los Espacios</h2>
            </div>
            
            {/* Categorías de Galería */}
            <div className="gallery-category-tabs">
              <button
                className={`gallery-tab-btn ${selectedCategory === 'todos' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('todos')}
              >
                Todos ({coworkingGallery.length})
              </button>
              <button
                className={`gallery-tab-btn ${selectedCategory === 'oficinas' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('oficinas')}
              >
                Oficinas Privadas
              </button>
              <button
                className={`gallery-tab-btn ${selectedCategory === 'coworking' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('coworking')}
              >
                Puestos Compartidos
              </button>
              <button
                className={`gallery-tab-btn ${selectedCategory === 'zonas-comunes' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('zonas-comunes')}
              >
                Sala & Zonas Comunes
              </button>
            </div>
          </div>

          <div className="gallery-grid">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="gallery-item-card"
                onClick={() => setActivePhoto(photo)}
              >
                <div className="gallery-img-wrapper">
                  <img src={photo.image} alt={photo.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="zoom-icon">🔍</span>
                    <span className="view-text">Ver detalle</span>
                  </div>
                </div>
                <div className="gallery-item-info">
                  <h4 className="gallery-item-title">{photo.title}</h4>
                  <p className="gallery-item-desc">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner CTA Final */}
        <div className="coworking-cta-banner" id="contacto">
          <div className="cta-content">
            <span className="cta-badge">¿Listo para comenzar?</span>
            <h2 className="cta-title">Agenda tu visita o reserva tu puesto hoy</h2>
            <p className="cta-desc">
              Ven a conocer nuestras instalaciones, disfruta de un café de cortesía y encuentra el espacio perfecto para trabajar con tranquilidad.
            </p>
            <div className="cta-buttons">
              <a
                href={coworkingWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                💬 Escribir por WhatsApp
              </a>
              <button
                onClick={onNavigateHome}
                className="btn btn-outline-light"
              >
                ← Volver al Inicio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox para fotos */}
      {activePhoto && (
        <div className="photo-lightbox-modal" onClick={() => setActivePhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setActivePhoto(null)}
              aria-label="Cerrar modal"
            >
              ✕
            </button>
            <div className="lightbox-img-wrapper">
              <img src={activePhoto.image} alt={activePhoto.title} />
            </div>
            <div className="lightbox-footer">
              <h4>{activePhoto.title}</h4>
              <p>{activePhoto.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
