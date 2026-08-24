import React, { useState } from 'react';
import './LocationSection.css';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const address = 'Cr 41 #36-98, Tuluá, Valle del Cauca';
  const mapsUrl = 'https://maps.app.goo.gl/GFCybA2a13NPnsJH7';

  // URL para el iframe embed de Google Maps
  const embedUrl = 'https://maps.google.com/maps?q=Cr+41+%2336-98,+Tulu%C3%A1,+Valle+del+Cauca&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="ubicacion" className="location-section">
      <div className="container">
        <div className="location-header text-center">
          <span className="location-badge">📍 Encuéntranos en Tuluá</span>
          <h2 className="location-title">Visítanos en La Puerta</h2>
          <p className="location-desc">
            Estamos ubicados en una zona accesible y tranquila de Tuluá. Ven a disfrutar de un buen café, nuestra gastronomía artesanal o un espacio productivo de coworking.
          </p>
        </div>

        <div className="location-card-wrapper">
          {/* Tarjeta con Información */}
          <div className="location-info-card">
            <div className="info-block">
              <div className="info-icon">📍</div>
              <div>
                <h3 className="info-title">Dirección</h3>
                <p className="info-text">{address}</p>
                <button
                  onClick={handleCopyAddress}
                  className="btn-copy-address"
                  title="Copiar dirección al portapapeles"
                >
                  {copied ? '✓ ¡Copiado!' : '📋 Copiar dirección'}
                </button>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">🕒</div>
              <div>
                <h3 className="info-title">Horarios de Atención</h3>
                <p className="info-text">
                  <strong>Lunes a Viernes:</strong> 8:00 am – 6:00 pm<br />
                  <strong>Sábados:</strong> 8:00 am – 1:00 pm<br />
                  <strong>Domingos y Festivos:</strong> Cerrado
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">☕</div>
              <div>
                <h3 className="info-title">Servicios Disponibles</h3>
                <p className="info-text">
                  Café de Especialidad · Panadería Artesanal · Restaurante · Coworking & Oficinas
                </p>
              </div>
            </div>

            <div className="location-actions">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-maps"
              >
                🗺️ Abrir en Google Maps
              </a>
              <a
                href="https://wa.me/573001234567?text=%C2%A1Hola!%20Quisiera%20saber%20c%C3%B3mo%20llegar%20a%20La%20Puerta%20en%20Tulu%C3%A1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-location"
              >
                💬 Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Mapa Interactivo */}
          <div className="location-map-wrapper">
            <iframe
              title="Ubicación de La Puerta en Google Maps"
              src={embedUrl}
              className="location-map-iframe"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="map-badge-overlay">
              <span className="map-pulse"></span>
              <span>La Puerta · Cr 41 #36-98, Tuluá</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
