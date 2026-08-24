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

                    {/* Grupo 1: Planes por horas */}
                    <div className="plans-group-label">
                        <span className="plans-group-pill">⏱ Por horas</span>
                        <h3 className="plans-group-title">Acceso diario por horas</h3>
                    </div>

                    <div className="plans-grid plans-grid-3">
                        {/* Plan Coworking 2h */}
                        <div className="pricing-card">
                            <div className="pricing-card-header">
                                <div className="plan-type-pill">Entrada rápida</div>
                                <h3 className="plan-name">Plan Coworking</h3>
                                <p className="plan-summary">La opción ideal para una visita corta o una reunión de trabajo puntual.</p>
                                <div className="price-box">
                                    <span className="currency">$</span>
                                    <span className="amount">15.000</span>
                                    <span className="period">/ 2 horas</span>
                                </div>
                            </div>
                            <div className="pricing-card-body">
                                <p className="benefits-label">Incluye:</p>
                                <ul className="benefits-list">
                                    <li><span className="check-icon">✓</span><span>Acceso a zona coworking por <strong>2 horas</strong></span></li>
                                    <li><span className="check-icon">✓</span><span>Los <strong>$15.000 son consumibles</strong> en café o alimentos del lugar</span></li>
                                </ul>
                            </div>
                            <div className="pricing-card-footer">
                                <a href={coworkingWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-block">
                                    Consultar disponibilidad
                                </a>
                            </div>
                        </div>

                        {/* Plan Flex 4 */}
                        <div className="pricing-card pricing-card-featured">
                            <div className="featured-ribbon">Popular</div>
                            <div className="pricing-card-header">
                                <div className="plan-type-pill">Media jornada</div>
                                <h3 className="plan-name">Plan Flex 4</h3>
                                <p className="plan-summary">Coworking en espacios abiertos por 4 horas. Perfecto para jornadas de mañana o tarde.</p>
                                <div className="price-box">
                                    <span className="currency">$</span>
                                    <span className="amount">25.000</span>
                                    <span className="period">/ 4 horas</span>
                                </div>
                            </div>
                            <div className="pricing-card-body">
                                <p className="benefits-label">Incluye:</p>
                                <ul className="benefits-list">
                                    <li><span className="check-icon">✓</span><span>Acceso a zona coworking por <strong>4 horas diarias</strong></span></li>
                                    <li><span className="check-icon">✓</span><span><strong>$15.000 en consumo</strong> de cafetería o restaurante</span></li>
                                </ul>
                            </div>
                            <div className="pricing-card-footer">
                                <a href={coworkingWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                                    Reservar Plan Flex 4
                                </a>
                            </div>
                        </div>

                        {/* Plan Full 9 */}
                        <div className="pricing-card">
                            <div className="pricing-card-header">
                                <div className="plan-type-pill">Jornada completa</div>
                                <h3 className="plan-name">Plan Full 9</h3>
                                <p className="plan-summary">Coworking en espacios abiertos por 9 horas continuas o partidas. Tu día, a tu ritmo.</p>
                                <div className="price-box">
                                    <span className="currency">$</span>
                                    <span className="amount">50.000</span>
                                    <span className="period">/ 9 horas</span>
                                </div>
                            </div>
                            <div className="pricing-card-body">
                                <p className="benefits-label">Incluye:</p>
                                <ul className="benefits-list">
                                    <li><span className="check-icon">✓</span><span>Acceso a zona coworking por <strong>9 horas</strong> (continuas o partidas)</span></li>
                                    <li><span className="check-icon">✓</span><span><strong>$30.000 en consumo</strong> de cafetería o restaurante</span></li>
                                </ul>
                            </div>
                            <div className="pricing-card-footer">
                                <a href={coworkingWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-block">
                                    Reservar Plan Full 9
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grupo 2: Planes mensuales */}
                    <div className="plans-group-label plans-group-label-monthly">
                        <span className="plans-group-pill">📅 Mensuales</span>
                        <h3 className="plans-group-title">Planes de membresía mensual</h3>
                    </div>

                    <div className="plans-grid plans-grid-3">
                        {/* Plan Freelance Básico */}
                        <div className="pricing-card">
                            <div className="pricing-card-header">
                                <div className="plan-type-pill">Freelancers</div>
                                <h3 className="plan-name">Freelance Básico</h3>
                                <p className="plan-summary">Ideal para freelancers y trabajadores independientes que necesitan un espacio productivo de mañana.</p>
                                <div className="price-box">
                                    <span className="currency">$</span>
                                    <span className="amount">310.000</span>
                                    <span className="period">/ mes</span>
                                </div>
                            </div>
                            <div className="pricing-card-body">
                                <p className="benefits-label">Incluye:</p>
                                <ul className="benefits-list">
                                    <li><span className="check-icon">✓</span><span>Acceso a zona coworking <strong>4 horas diarias</strong>, lunes a viernes</span></li>
                                    <li><span className="check-icon">✓</span><span>Desayuno <strong>o</strong> almuerzo consumible hasta <strong>$15.000/día</strong> (a elección, no ambos)</span></li>
                                    <li><span className="check-icon">✓</span><span><strong>Café ilimitado</strong> durante tu jornada</span></li>
                                </ul>
                            </div>
                            <div className="pricing-card-footer">
                                <a href={coworkingWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-block">
                                    Consultar plan
                                </a>
                            </div>
                        </div>

                        {/* Plan Emprendedor Full */}
                        <div className="pricing-card pricing-card-featured">
                            <div className="featured-ribbon">Recomendado</div>
                            <div className="pricing-card-header">
                                <div className="plan-type-pill">Startups & Equipos</div>
                                <h3 className="plan-name">Emprendedor Full</h3>
                                <p className="plan-summary">Para startups en fase inicial y equipos pequeños que necesitan presencia total de lunes a viernes.</p>
                                <div className="price-box">
                                    <span className="currency">$</span>
                                    <span className="amount">420.000</span>
                                    <span className="period">/ mes</span>
                                </div>
                            </div>
                            <div className="pricing-card-body">
                                <p className="benefits-label">Incluye:</p>
                                <ul className="benefits-list">
                                    <li><span className="check-icon">✓</span><span>Acceso <strong>todo el día</strong>, de lunes a viernes</span></li>
                                    <li><span className="check-icon">✓</span><span><strong>Almuerzo ejecutivo</strong> incluido todos los días (menú fijo, no personalizado)</span></li>
                                    <li><span className="check-icon">✓</span><span>1 café o bebida caliente adicional en la tarde</span></li>
                                    <li><span className="check-icon">✓</span><span><strong>10% de descuento</strong> en reservas de sala de reuniones</span></li>
                                </ul>
                            </div>
                            <div className="pricing-card-footer">
                                <a href={coworkingWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                                    Reservar membresía
                                </a>
                            </div>
                        </div>

                        {/* Plan Corporativo Flex */}
                        <div className="pricing-card">
                            <div className="pricing-card-header">
                                <div className="plan-type-pill">Senior & Corporativo</div>
                                <h3 className="plan-name">Corporativo Flex</h3>
                                <p className="plan-summary">Para teletrabajadores corporativos o profesionales senior que necesitan flexibilidad total, incluyendo fines de semana.</p>
                                <div className="price-box">
                                    <span className="currency">$</span>
                                    <span className="amount">700.000</span>
                                    <span className="period">/ mes</span>
                                </div>
                            </div>
                            <div className="pricing-card-body">
                                <p className="benefits-label">Incluye:</p>
                                <ul className="benefits-list">
                                    <li><span className="check-icon">✓</span><span>Acceso <strong>todo el día, todos los días</strong> (incluyendo fines de semana)</span></li>
                                    <li><span className="check-icon">✓</span><span>Desayuno y almuerzo consumibles diariamente (<strong>hasta $15.000 c/u</strong>)</span></li>
                                    <li><span className="check-icon">✓</span><span><strong>Reserva prioritaria</strong> de puesto fijo</span></li>
                                    <li><span className="check-icon">✓</span><span><strong>1 invitado gratis</strong> al mes para reunión de trabajo</span></li>
                                </ul>
                            </div>
                            <div className="pricing-card-footer">
                                <a href={coworkingWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-block">
                                    Consultar plan
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
