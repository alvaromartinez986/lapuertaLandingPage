import React, { useState, useMemo, useEffect } from 'react';
import './MenuPage.css';
import {
  menuCategories,
  carbohidratosDesayuno,
  menuItems,
  featuredHighlights,
  reservationInfo
} from '../data/menuData';
import cartaPdf from '../assets/CARTA LA PUERTA.pdf';
import heroBg from '../assets/menu/brunch-jardin.png';

export default function MenuPage({ onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyWithPhotos, setOnlyWithPhotos] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [selectedDish, setSelectedDish] = useState(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(0);
  const [selectedCarb, setSelectedCarb] = useState(carbohidratosDesayuno[0]);

  // Format currency in COP
  const formatPrice = (price, priceLabel) => {
    if (priceLabel) return priceLabel;
    if (price === null || price === undefined) return '';
    return `$ ${price.toLocaleString('es-CO')}`;
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'todos' || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (onlyWithPhotos && !item.image) return false;

      if (!searchTerm.trim()) return true;

      const term = searchTerm.toLowerCase();
      const matchName = item.name.toLowerCase().includes(term);
      const matchDesc = item.description.toLowerCase().includes(term);
      const matchTags = item.tags && item.tags.some((t) => t.toLowerCase().includes(term));
      const matchSub = item.subCategory && item.subCategory.toLowerCase().includes(term);

      return matchName || matchDesc || matchTags || matchSub;
    });
  }, [activeCategory, searchTerm, onlyWithPhotos]);

  // Group items by subcategory if applicable
  const groupedItems = useMemo(() => {
    const groups = {};
    filteredItems.forEach((item) => {
      const groupKey = item.subCategory || 'Especialidades';
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
    });
    return groups;
  }, [filteredItems]);

  const totalResults = filteredItems.length;
  const currentCategoryObj = menuCategories.find((c) => c.id === activeCategory);

  // Open modal with dish
  const openDishModal = (dish) => {
    setSelectedDish(dish);
    setActiveModalImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeDishModal = () => {
    setSelectedDish(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeDishModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="menu-page">
      {/* Hero Header with ambient background photo */}
      <section
        className="menu-hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 24, 20, 0.82), rgba(30, 24, 20, 0.94)), url(${heroBg})`
        }}
      >
        <div className="container menu-hero-inner">
          <div className="menu-hero-badge-pill">
            <span className="sparkle-icon">✨</span> Gastronomía & Café de Especialidad
          </div>

          <h1 className="menu-hero-title">
            Nuestra <span>Carta</span>
          </h1>

          <p className="menu-hero-subtitle">
            Masa madre artesanal, ingredientes frescos del campo y selecciones de café de origen.
            Un menú pensado para deleitar tu paladar y acompañar tus mejores momentos.
          </p>

          {/* Value props badges */}
          <div className="hero-features-chips">
            <div className="feature-chip">
              <span className="chip-icon">☕</span>
              <span>Café de Origen</span>
            </div>
            <div className="feature-chip">
              <span className="chip-icon">🥖</span>
              <span>Masas Artesanales</span>
            </div>
            <div className="feature-chip">
              <span className="chip-icon">🍳</span>
              <span>Preparado al Instante</span>
            </div>
            <div className="feature-chip">
              <span className="chip-icon">🌿</span>
              <span>100% Fresco</span>
            </div>
          </div>

          <div className="menu-hero-actions">
            <button onClick={onNavigateHome} className="btn-back-home">
              ← Volver al Inicio
            </button>
            <a
              href={reservationInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reservation"
            >
              📅 {reservationInfo.text}
            </a>
            <a
              href={cartaPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pdf"
            >
              📄 Descargar Menú PDF
            </a>
          </div>
        </div>
      </section>

      {/* Featured Highlights Showcase (Real Photos) */}
      <section className="featured-showcase-section">
        <div className="container">
          <div className="section-head-flex">
            <div>
              <span className="section-eyebrow">Recomendaciones de la Casa</span>
              <h2 className="section-main-title">Platos Estrella & Experiencias</h2>
            </div>
            <p className="section-head-desc">
              Descubre las creaciones favoritas de nuestros comensales, preparadas con el toque único de La Puerta.
            </p>
          </div>

          <div className="featured-grid">
            {featuredHighlights.map((feat) => (
              <div
                key={feat.id}
                className="featured-card"
                onClick={() => {
                  if (feat.itemId) {
                    const found = menuItems.find((i) => i.id === feat.itemId);
                    if (found) openDishModal(found);
                  } else {
                    openDishModal({
                      id: feat.id,
                      name: feat.title,
                      badge: feat.badge,
                      price: feat.price,
                      priceLabel: feat.priceLabel,
                      image: feat.image,
                      secondaryImage: feat.secondaryImage,
                      description: feat.description,
                      tags: feat.tags
                    });
                  }
                }}
              >
                <div className="featured-image-wrapper">
                  <img src={feat.image} alt={feat.title} className="featured-img" />
                  <div className="featured-badge-overlay">{feat.badge}</div>
                  <div className="featured-hover-zoom">
                    <span>🔍 Ver Detalle</span>
                  </div>
                </div>
                <div className="featured-body">
                  <span className="featured-subtitle">{feat.subtitle}</span>
                  <h3 className="featured-title">{feat.title}</h3>
                  <p className="featured-desc">{feat.description}</p>
                  <div className="featured-footer">
                    <span className="featured-price">
                      {formatPrice(feat.price, feat.priceLabel)}
                    </span>
                    <button className="featured-btn-view">Explorar ➔</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Controls Bar */}
      <div className="menu-controls-wrapper">
        <div className="container menu-controls">
          {/* Top Row: Search & Filters */}
          <div className="controls-top-row">
            {/* Search Box */}
            <div className="menu-search-box">
              <span className="menu-search-icon">🔍</span>
              <input
                type="text"
                placeholder="Buscar por plato, ingrediente o café (ej. caprese, waffle, cold brew, lomo)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="menu-search-input"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="menu-search-clear"
                  title="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Toggle Controls */}
            <div className="controls-toggles-group">
              <button
                className={`toggle-pill-btn ${onlyWithPhotos ? 'active' : ''}`}
                onClick={() => setOnlyWithPhotos(!onlyWithPhotos)}
                title="Mostrar únicamente platos con fotografía"
              >
                📸 Con Foto
              </button>

              <div className="view-mode-switch">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Vista en tarjetas"
                >
                  ▦ Cuadrícula
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="Vista de lista clásica"
                >
                  ☰ Lista
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs Carousel */}
          <div className="category-tabs-scroll-container">
            <div className="category-tabs">
              {menuCategories.map((cat) => {
                const count =
                  cat.id === 'todos'
                    ? menuItems.length
                    : menuItems.filter((i) => i.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                    }}
                    className={`category-tab-btn ${
                      activeCategory === cat.id ? 'active' : ''
                    }`}
                  >
                    <span className="tab-icon">{cat.icon}</span>
                    <span className="tab-name">{cat.name}</span>
                    <span className="category-tab-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container menu-main-content">
        {/* Category Description Banner */}
        {currentCategoryObj && (
          <div className="category-lead-banner">
            <div className="lead-left">
              <span className="lead-icon">{currentCategoryObj.icon}</span>
              <div>
                <h2 className="lead-title">{currentCategoryObj.name}</h2>
                <p className="lead-desc">{currentCategoryObj.description}</p>
              </div>
            </div>
            <div className="lead-count-badge">
              {totalResults} {totalResults === 1 ? 'opción disponible' : 'opciones disponibles'}
            </div>
          </div>
        )}

        {/* Special Interactive Breakfast Builder Banner */}
        {(activeCategory === 'desayunos' || (activeCategory === 'todos' && !searchTerm)) && (
          <div className="breakfast-builder-card">
            <div className="builder-header">
              <div className="builder-icon-circle">🍳</div>
              <div>
                <span className="builder-badge">Experiencia a tu gusto</span>
                <h3 className="builder-title">¿Cómo armar tu desayuno en La Puerta?</h3>
                <p className="builder-desc">
                  Todos nuestros desayunos incluyen huevos al gusto preparados al momento, fruta fresca y tu bebida caliente favorita.
                </p>
              </div>
            </div>

            <div className="builder-steps-grid">
              {/* Step 1 */}
              <div className="builder-step-box">
                <div className="step-header-tag">
                  <span className="step-number">1</span>
                  <h4>Elige tu Carbohidrato</h4>
                </div>
                <p className="step-subtext">Selecciona tu base preferida:</p>
                <div className="carbs-tags-cloud">
                  {carbohidratosDesayuno.map((carb, idx) => (
                    <button
                      key={idx}
                      className={`carb-pill-btn ${selectedCarb === carb ? 'selected' : ''}`}
                      onClick={() => setSelectedCarb(carb)}
                    >
                      {selectedCarb === carb ? '✓ ' : ''}{carb}
                    </button>
                  ))}
                </div>
                <div className="selected-carb-feedback">
                  Base elegida: <strong>{selectedCarb}</strong>
                </div>
              </div>

              {/* Step 2 */}
              <div className="builder-step-box">
                <div className="step-header-tag">
                  <span className="step-number">2</span>
                  <h4>Escoge la Preparación</h4>
                </div>
                <p className="step-subtext">
                  Desde lo tradicional hasta nuestras creaciones gourmet como <strong>Caprese, Campesino, Umami, Llanero, Tentativo u Obsesión</strong>.
                </p>
                <div className="builder-highlight-dish">
                  <span className="dish-highlight-badge">⭐ Más Recomendado</span>
                  <p><strong>Desayuno Caprese:</strong> Con pesto artesanal, mozzarella de búfala, napolitana y tomates cherry.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="builder-step-box">
                <div className="step-header-tag">
                  <span className="step-number">3</span>
                  <h4>Acompañamiento Incluido</h4>
                </div>
                <ul className="step-included-list">
                  <li>🥚 Huevos al gusto (pericos, fritos, revueltos o tibios)</li>
                  <li>🍓 Porción de fruta fresca de temporada</li>
                  <li>☕ Bebida caliente: Café de especialidad o Chocolate tradicional</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Menu Items Rendering */}
        {totalResults === 0 ? (
          <div className="menu-empty-state">
            <span className="empty-icon">🍽️</span>
            <h3 className="empty-title">No encontramos opciones para esta búsqueda</h3>
            <p className="empty-desc">
              No hay platos ni bebidas que coincidan con "<strong>{searchTerm}</strong>" {onlyWithPhotos ? 'y contengan foto' : ''}.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setOnlyWithPhotos(false);
                setActiveCategory('todos');
              }}
              className="btn btn-primary"
            >
              Ver todo el menú
            </button>
          </div>
        ) : (
          Object.keys(groupedItems).map((subCatName) => {
            const items = groupedItems[subCatName];
            const isSingleDefaultGroup =
              Object.keys(groupedItems).length === 1 && subCatName === 'Especialidades';

            return (
              <div key={subCatName} className="subcategory-section">
                {!isSingleDefaultGroup && (
                  <div className="subcategory-header">
                    <h3 className="subcategory-title">
                      <span className="subcategory-title-icon">✦</span>
                      {subCatName}
                    </h3>
                    <span className="subcategory-count">
                      {items.length} {items.length === 1 ? 'opción' : 'opciones'}
                    </span>
                  </div>
                )}

                {/* Grid View */}
                {viewMode === 'grid' ? (
                  <div className="menu-grid">
                    {items.map((item) => {
                      const hasImage = Boolean(item.image);

                      return (
                        <div
                          key={item.id}
                          className={`menu-card ${hasImage ? 'has-image' : 'no-image'}`}
                          onClick={() => openDishModal(item)}
                        >
                          {hasImage && (
                            <div className="menu-card-image-wrap">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="menu-card-img"
                                loading="lazy"
                              />
                              {item.badge && (
                                <div className="menu-card-badge on-image">{item.badge}</div>
                              )}
                              <div className="image-action-overlay">
                                <span>Ver detalle</span>
                              </div>
                            </div>
                          )}

                          <div className="menu-card-content">
                            {!hasImage && item.badge && (
                              <div className="menu-card-badge inline-badge">{item.badge}</div>
                            )}

                            <div className="menu-card-top">
                              <h4 className="menu-card-name">{item.name}</h4>
                              {(item.price !== null || item.priceLabel) && (
                                <div className="menu-card-price">
                                  {formatPrice(item.price, item.priceLabel)}
                                </div>
                              )}
                            </div>

                            <p className="menu-card-desc">{item.description}</p>

                            {item.tags && item.tags.length > 0 && (
                              <div className="menu-card-tags">
                                {item.tags.map((tag, tIdx) => (
                                  <span key={tIdx} className="menu-tag">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Classic Editorial List View */
                  <div className="menu-list-view">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="menu-list-item"
                        onClick={() => openDishModal(item)}
                      >
                        {item.image && (
                          <div className="list-item-thumb">
                            <img src={item.image} alt={item.name} />
                          </div>
                        )}
                        <div className="list-item-details">
                          <div className="list-item-header">
                            <div className="list-item-title-group">
                              <span className="list-item-name">{item.name}</span>
                              {item.badge && (
                                <span className="list-item-badge">{item.badge}</span>
                              )}
                            </div>
                            <span className="list-item-dots"></span>
                            <span className="list-item-price">
                              {formatPrice(item.price, item.priceLabel)}
                            </span>
                          </div>
                          <p className="list-item-desc">{item.description}</p>
                          {item.tags && (
                            <div className="list-item-tags">
                              {item.tags.map((t, idx) => (
                                <span key={idx} className="list-tag">
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Dish Detail Modal / Lightbox */}
      {selectedDish && (
        <div className="dish-modal-backdrop" onClick={closeDishModal}>
          <div
            className="dish-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className="dish-modal-close" onClick={closeDishModal} title="Cerrar">
              ✕
            </button>

            {/* Modal Image Section */}
            {selectedDish.image && (
              <div className="dish-modal-media">
                <img
                  src={
                    activeModalImageIndex === 1 && selectedDish.secondaryImage
                      ? selectedDish.secondaryImage
                      : selectedDish.image
                  }
                  alt={selectedDish.name}
                  className="modal-hero-img"
                />
                {selectedDish.secondaryImage && (
                  <div className="modal-gallery-thumbs">
                    <button
                      className={`modal-thumb-btn ${activeModalImageIndex === 0 ? 'active' : ''}`}
                      onClick={() => setActiveModalImageIndex(0)}
                    >
                      <img src={selectedDish.image} alt="Vista 1" />
                    </button>
                    <button
                      className={`modal-thumb-btn ${activeModalImageIndex === 1 ? 'active' : ''}`}
                      onClick={() => setActiveModalImageIndex(1)}
                    >
                      <img src={selectedDish.secondaryImage} alt="Vista 2" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Modal Info Section */}
            <div className="dish-modal-info">
              {selectedDish.badge && (
                <span className="dish-modal-badge">{selectedDish.badge}</span>
              )}

              <h3 className="dish-modal-title">{selectedDish.name}</h3>

              <div className="dish-modal-price">
                {formatPrice(selectedDish.price, selectedDish.priceLabel)}
              </div>

              <div className="dish-modal-divider"></div>

              <p className="dish-modal-description">{selectedDish.description}</p>

              {selectedDish.tags && selectedDish.tags.length > 0 && (
                <div className="dish-modal-tags">
                  <span className="tags-label">Características:</span>
                  <div className="tags-container">
                    {selectedDish.tags.map((t, idx) => (
                      <span key={idx} className="modal-tag-pill">
                        ✦ {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Barista & Chef Pairing Tip */}
              <div className="dish-pairing-box">
                <span className="pairing-icon">☕</span>
                <div>
                  <strong>Sugerencia de la Casa:</strong>
                  <p>
                    Acompáñalo con un <em>Café Filtrado V60</em> o una refrescante <em>Malteada de Frutos Rojos</em>.
                  </p>
                </div>
              </div>

              <div className="dish-modal-footer">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `¡Hola! Quiero ordenar en La Puerta: ${selectedDish.name} (${formatPrice(
                      selectedDish.price,
                      selectedDish.priceLabel
                    )})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-order-whatsapp"
                >
                  💬 Preguntar / Ordenar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
