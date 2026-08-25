// --- Importación de Fotografías Reales de La Puerta ---
// Desayunos & Bowls
import imgDesayunoCaprese from '../assets/menu/desayunoBurrata.png';
import imgDesayunoRanchero from '../assets/menu/desayunoRanmchero.jpg';
import imgDesayunoHuevos from '../assets/menu/desayunoHuevos3.png';
import imgDesayunoCocidos from '../assets/menu/desayunoHuboevosCocidos.png';
import imgDesayuno2 from '../assets/menu/desayuno2.jpg';
import imgDesayuno3 from '../assets/menu/desayuno3.png';
import imgDesayunoSandwich from '../assets/menu/desayunoSandwich.jpg';
import imgDesayunoVarios from '../assets/menu/desayunoVariosPlatos.png';
import imgBowl from '../assets/menu/bowl.png';
import imgBowlFrijoles from '../assets/menu/bowlFrijoles.jpg';
import imgAlmuerzoFrijoles from '../assets/menu/almuerzoFrijoles.png';

// Bebidas & Café
import imgCapuchino from '../assets/menu/capuchino.jpg';
import imgBebidaFresa from '../assets/menu/bebodaFresa.png';
import imgSmoothieFrutosRojos from '../assets/menu/smoothie-frutos-rojos.png';

// Tardear, Sandwiches, Hamburguesas
import imgHamburguesa from '../assets/menu/hamburguesa.jpg';
import imgHamburguesa2 from '../assets/menu/hamburguesa2.jpg';
import imgHamburguesa2Png from '../assets/menu/hamburguesa2.png';
import imgSandwich from '../assets/menu/sandwhic.jpg';
import imgPlatosVarios from '../assets/menu/platosVarios.png';
import imgComboTardear from '../assets/menu/combo-tardear.png';

// Dulces & Waffles
import imgWaffle from '../assets/menu/waffle.png';
import imgWaffle2 from '../assets/menu/waffle2.png';
import imgWaffles3 from '../assets/menu/waffles3.png';

// Tortas & Pasteles
import imgPastelZanahoria from '../assets/menu/pastelZanahoria.png';
import imgTortaZanahoria from '../assets/menu/tortaZanahoria.jpg';
import imgPastelCafe from '../assets/menu/pastelCafe.jpg';
import imgPastelRedVelvet from '../assets/menu/pastelRedVelvet.jpg';
import imgPastelRedVelvet2 from '../assets/menu/pasteledVelvet.jpg';
import imgPastelFresa from '../assets/menu/pastelFresa.jpg';
import imgPastelFrutosRojos from '../assets/menu/pastelFrutosRoijos.jpg';
import imgPastel from '../assets/menu/pastel.jpg';

// Galletas
import imgCookie from '../assets/menu/cookie.png';
import imgGalleta from '../assets/menu/galleta.png';
import imgGalleta3 from '../assets/menu/galleta3.png';
import imgGalletaRoja from '../assets/menu/galletaRoja.png';
import imgGalletasVariadas from '../assets/menu/galletasVariadas.png';
import imgGalletasVariadas2 from '../assets/menu/galletasVariadas2.jpg';
import imgGalletasVarioas2 from '../assets/menu/galletasVarioas2.png';

// Panadería
import imgPanChocha from '../assets/menu/panChocha.png';
import imgPanChocha2 from '../assets/menu/panChocha2.png';
import imgPanChocha3 from '../assets/menu/panchocha3.png';
import imgPanChocha4 from '../assets/menu/panchocha4.png';

// Información de Reservaciones
export const reservationInfo = {
  text: 'Haz una reservación',
  url: 'https://wa.link/ardql6',
};

export const carbohidratosDesayuno = [
  'Arepa',
  'Pan aliñado',
  'Pan integral',
  'Pan Chochita',
  'Focaccia personal',
  'Pan Brioche',
];

export const menuCategories = [
  { id: 'todos', name: 'Todos', icon: '✨', description: 'Nuestra selección gastronómica completa' },
  { id: 'desayunos', name: 'Desayunos', icon: '🍳', description: 'Arma tu desayuno con carbohidrato a elección, huevos al gusto, fruta y bebida' },
  { id: 'bebidas', name: 'Bebidas', icon: '☕', description: 'Café de especialidad, métodos filtrados, cold brew y bebidas frías' },
  { id: 'almuerzo', name: 'Almuerzo', icon: '🥗', description: 'Bowl de almuerzo y entradas' },
  { id: 'tardear', name: 'Tardear', icon: '🥪', description: 'Bruschettas artesanales, montaditos, empanadas y delicias' },
  { id: 'cenas', name: 'Cenas', icon: '🍔', description: 'Sándwiches gourmet y hamburguesas artesanales con papas' },
  { id: 'dulces', name: 'Dulces', icon: '🧇', description: 'Waffles crocantes, tostadas francesas y momentos dulces' },
  { id: 'tortas', name: 'Tortas', icon: '🍰', description: 'Porciones individuales frescas horneadas a diario' },
  { id: 'galletas', name: 'Galletas', icon: '🍪', description: 'Galletas artesanales recién horneadas con centro suave y brownies' },
  { id: 'panaderia', name: 'Panadería', icon: '🥖', description: 'Panes rellenos y masas madre elaboradas artesanalmente' },
];

export const featuredHighlights = [
  {
    id: 'feat-caprese',
    itemId: 'desayuno-caprese',
    title: 'Desayuno Caprese Artesanal',
    subtitle: 'Nuestra Creación Insignia',
    image: imgDesayunoCaprese,
    secondaryImage: imgDesayuno3,
    badge: '⭐ Estrella de la Casa',
    price: 20000,
    category: 'desayunos',
    description: 'Salsa napolitana casera, huevos al gusto, pesto artesanal de albahaca, tomate cherry dulce y mozzarella fresca sobre pan artesanal.',
    tags: ['Recomendado', 'Artesanal', 'Gourmet']
  },
  {
    id: 'feat-hamburguesa',
    itemId: 'hamburguesa-valluna',
    title: 'Hamburguesa Valluna',
    subtitle: 'Sabor de la Tierra',
    image: imgHamburguesa2Png,
    secondaryImage: imgHamburguesa,
    badge: '🍔 Favorita',
    price: 30000,
    category: 'cenas',
    description: 'Hogao, lechuga, aguacate, chicharrón, carne artesanal, queso, maduro y huevo frito. Incluye papas con salsa roja.',
    tags: ['Hamburguesa', 'Especial', 'Artesanal']
  },
  {
    id: 'feat-waffle',
    itemId: 'dulce-waffle-pandebono',
    title: 'Waffle de Pandebono Dorado',
    subtitle: 'Textura Crocante & Quesuda',
    image: imgWaffle,
    secondaryImage: imgWaffle2,
    badge: '🧇 Más Pedido',
    price: 16000,
    category: 'dulces',
    description: 'Masa de pandebono horneada en waffle maker: crocante por fuera, suave por dentro, bañado con mermelada y arequipe.',
    tags: ['Típico Recreado', 'Favorito', 'Arequipe']
  },
  {
    id: 'feat-torta-zanahoria',
    itemId: 'torta-porciones',
    title: 'Tortas Artesanales por Porción',
    subtitle: '11 Sabores Exclusivos',
    image: imgPastelZanahoria,
    secondaryImage: imgTortaZanahoria,
    badge: '🍰 Repostería de Autor',
    price: 10000,
    category: 'tortas',
    description: 'Zanahoria, Chocolate, Naranja/Amapola, Red Velvet, Blue Velvet, Coco, Café, Limón/Arándanos, Pandebono, Cheesecake o Pie de Manzana.',
    tags: ['Porción Individual', 'Casera', 'Artesanal']
  },
  {
    id: 'feat-malteada',
    itemId: 'fria-sin-malteada-frutos',
    title: 'Malteada de Frutos Rojos / Amarillos',
    subtitle: 'Refrescancia Cremosa Natural',
    image: imgBebidaFresa,
    secondaryImage: imgSmoothieFrutosRojos,
    badge: '🍓 100% Natural',
    price: 15000,
    category: 'bebidas',
    description: 'Helado artesanal batido con fresas, moras y frutos del bosque frescos, decorado con fruta natural fresca.',
    tags: ['Frutas Frescas', 'Helado', 'Cremoso']
  },
  {
    id: 'feat-galletas',
    itemId: 'galleta-estandar',
    title: 'Galletas Rústicas Artesanales',
    subtitle: 'Recién Salidas del Horno',
    image: imgGalletasVariadas,
    secondaryImage: imgCookie,
    badge: '🍪 Horneadas a Diario',
    price: 10000,
    category: 'galletas',
    description: 'Generosa masa de mantequilla con centro suave: Clásica, Chocolate, Red Velvet, Mantequilla de Maní, Nucita, Nutella, Leche Klim, Oreo o Masmelo.',
    tags: ['Artesanal', 'Centro Suave', 'Chocolate']
  }
];

export const menuItems = [
  // --- DESAYUNOS ---
  {
    id: 'desayuno-arepa-pan',
    category: 'desayunos',
    name: 'Arepa / Pan',
    price: 15000,
    badge: 'Clásico',
    image: imgDesayunoHuevos,
    secondaryImage: imgDesayunoCocidos,
    description: 'Acompañado de huevo al gusto, porción de fruta y bebida café o chocolate.',
    tags: ['Completo', 'Tradicional']
  },
  {
    id: 'desayuno-rollo-huevo',
    category: 'desayunos',
    name: 'Rollo al Huevo',
    price: 15000,
    badge: 'Popular',
    image: imgDesayunoVarios,
    description: 'Pan rollo a elección, huevos al gusto, queso, porción de fruta y bebida café o chocolate.',
    tags: ['Pan de Rollo', 'Completo']
  },
  {
    id: 'desayuno-caprese',
    category: 'desayunos',
    name: 'Caprese',
    price: 20000,
    badge: 'Recomendado',
    image: imgDesayunoCaprese,
    secondaryImage: imgDesayuno3,
    description: 'Salsa napolitana casera, huevos al gusto, pesto, tomate Cherry, queso, rúgula.',
    tags: ['Especial', 'Frescura', 'Chef Pick']
  },
  {
    id: 'desayuno-campesino',
    category: 'desayunos',
    name: 'Campesino',
    price: 20000,
    badge: 'Tradición',
    image: imgDesayunoRanchero,
    secondaryImage: imgDesayuno2,
    description: 'Chorizo, madurito, huevo perico, aguacate y queso campesino.',
    tags: ['Típico', 'Chorizo']
  },
  {
    id: 'desayuno-obsesion',
    category: 'desayunos',
    name: 'Obsesión',
    price: 24000,
    badge: 'Especialidad',
    image: imgDesayunoSandwich,
    description: 'Lechuga, aguacate, huevos al gusto, queso, tocineta, salsa obsesión y queso crema.',
    tags: ['Creación de la Casa', 'Premium']
  },
  {
    id: 'desayuno-serrano',
    category: 'desayunos',
    name: 'Serrano',
    price: 24000,
    badge: 'Gourmet',
    image: imgDesayuno3,
    secondaryImage: imgDesayunoVarios,
    description: 'Queso crema, mermelada de frutos amarillos, jamón serrano, huevos al gusto, frutos secos.',
    tags: ['Agridulce', 'Premium', 'Serrano']
  },
  {
    id: 'desayuno-llanero',
    category: 'desayunos',
    name: 'Llanero',
    price: 24000,
    badge: 'Contundente',
    image: imgDesayunoRanchero,
    description: 'Chorizo, tocineta, pepperoni, huevos al gusto, chimichurri y queso campesino.',
    tags: ['Proteico', 'Especial']
  },
  {
    id: 'desayuno-umami',
    category: 'desayunos',
    name: 'Umami',
    price: 22000,
    badge: 'Favorito',
    image: imgDesayuno2,
    description: 'Puré de maduro, tocineta, huevos al gusto, queso campesino, salsa obsesión.',
    tags: ['Sabor Único', 'Especial']
  },

  // --- BEBIDAS ---
  {
    id: 'cafe-espresso',
    category: 'bebidas',
    name: 'Espresso',
    price: 4000,
    description: 'Extracción intensa y aromática de café de especialidad seleccionado.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-espresso-doble',
    category: 'bebidas',
    name: 'Espresso Doble',
    price: 8000,
    description: 'Doble carga de espresso para máxima energía y cuerpo concentrado.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-americano',
    category: 'bebidas',
    name: 'Americano',
    price: 6000,
    description: 'Café suave y balanceado a base de espresso y agua caliente.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-capuccino',
    category: 'bebidas',
    name: 'Capuccino',
    price: 10000,
    image: imgCapuchino,
    description: 'Espresso perfecto con leche vaporizada y sedosa espuma decorada con latte art.',
    tags: ['Café Caliente', 'Clásico', 'Latte Art']
  },
  {
    id: 'cafe-capuccino-nutella',
    category: 'bebidas',
    name: 'Capuccino Nutella',
    price: 12000,
    badge: 'Dulce',
    image: imgCapuchino,
    description: 'Capuccino cremoso con un toque generoso de Nutella original.',
    tags: ['Café Caliente', 'Gourmet']
  },
  {
    id: 'cafe-capuccino-vainilla',
    category: 'bebidas',
    name: 'Capuccino Vainilla',
    price: 10000,
    description: 'Capuccino aromatizado con esencia sutil de vainilla francesa.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-capuchai',
    category: 'bebidas',
    name: 'Capuchai',
    price: 10000,
    description: 'La fusión perfecta de especias chai con el vigor del capuccino.',
    tags: ['Café Caliente', 'Especiado']
  },
  {
    id: 'cafe-capuccino-baileys',
    category: 'bebidas',
    name: 'Capuccino Baileys',
    price: 14000,
    badge: 'Con Licor',
    description: 'Capuccino premium con crema de licor Baileys.',
    tags: ['Café Caliente', 'Licor']
  },
  {
    id: 'cafe-mocaccino',
    category: 'bebidas',
    name: 'Mocaccino',
    price: 12000,
    image: imgCapuchino,
    description: 'Deliciosa armonía entre espresso, leche vaporizada y chocolate.',
    tags: ['Café Caliente', 'Chocolate']
  },
  {
    id: 'cafe-latte',
    category: 'bebidas',
    name: 'Latte',
    price: 10000,
    image: imgCapuchino,
    description: 'Textura suave y cremosa con predominancia de leche y ligero toque de espresso.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-latte-chai',
    category: 'bebidas',
    name: 'Latte Chai',
    price: 12000,
    description: 'Latte infundido con exquisita mezcla de té chai y especias aromáticas.',
    tags: ['Café Caliente', 'Especiado']
  },
  {
    id: 'cafe-ganocafe',
    category: 'bebidas',
    name: 'Ganocafé',
    price: 8000,
    description: 'Café especial elaborado con extracto de Ganoderma, suave y reconfortante.',
    tags: ['Café Caliente', 'Especial']
  },
  {
    id: 'cafe-gano-mocharico',
    category: 'bebidas',
    name: 'Gano Mocharico',
    price: 10000,
    description: 'Combinación de Ganocafé con chocolate para una experiencia única.',
    tags: ['Café Caliente', 'Chocolate']
  },
  {
    id: 'cold-brew-clasico',
    category: 'bebidas',
    name: 'Cold Brew Clásico',
    price: 8000,
    description: 'Café infusionado en frío durante horas, suave, naturalmente dulce y de baja acidez.',
    tags: ['Cold Brew', 'Frío']
  },
  {
    id: 'cold-brew-soda',
    category: 'bebidas',
    name: 'Cold Brew con Soda',
    price: 12000,
    description: 'Refrescante combinación de infusión en frío de café con burbujas de soda efervescente.',
    tags: ['Cold Brew', 'Refrescante']
  },
  {
    id: 'cold-brew-naranja',
    category: 'bebidas',
    name: 'Cold Brew con Naranja',
    price: 14000,
    badge: 'Recomendado',
    description: 'Extraordinaria fusión cítrica entre jugo fresco de naranja y extracto frío de café.',
    tags: ['Cold Brew', 'Cítrico']
  },
  {
    id: 'bebida-chocolate',
    category: 'bebidas',
    name: 'Chocolate',
    price: 10000,
    description: 'Chocolate tradicional espeso y reconfortante preparado con cacao seleccionado.',
    tags: ['Sin Café', 'Caliente']
  },
  {
    id: 'bebida-gano-chocolate',
    category: 'bebidas',
    name: 'Gano Chocolate',
    price: 10000,
    description: 'Chocolate enriquecido con extracto de Ganoderma para una bebida nutritiva.',
    tags: ['Sin Café', 'Especial']
  },
  {
    id: 'bebida-milo',
    category: 'bebidas',
    name: 'Milo',
    price: 8000,
    description: 'Clásica bebida de malta y chocolate, reconfortante y energizante.',
    tags: ['Sin Café', 'Caliente']
  },
  {
    id: 'bebida-te-chai',
    category: 'bebidas',
    name: 'Té Chai',
    price: 8000,
    description: 'Infusión de té negro con canela, cardamomo, clavo, jengibre y leche cremosa.',
    tags: ['Sin Café', 'Especiado']
  },
  {
    id: 'bebida-choco-chai',
    category: 'bebidas',
    name: 'Choco Chai',
    price: 10000,
    description: 'El encuentro celestial entre chocolate tradicional y mezcla especiada chai.',
    tags: ['Sin Café', 'Dulce']
  },
  {
    id: 'bebida-aromatica',
    category: 'bebidas',
    name: 'Aromáticas',
    price: 7000,
    description: 'Infusión natural aromática de hierbas y frutas seleccionadas.',
    tags: ['Sin Café', 'Natural']
  },
  {
    id: 'filtrado',
    category: 'bebidas',
    name: 'Filtrado (Prensa Francesa / V60 / Chemex)',
    price: 6000,
    badge: 'Especialidad',
    description: 'Método de filtrado a elección: Prensa Francesa, V60 o Chemex. Cada uno resalta notas únicas del café.',
    tags: ['Método de Filtrado', 'Café de Especialidad']
  },
  {
    id: 'fria-cafe-americano',
    category: 'bebidas',
    name: 'Americano Frío',
    price: 10000,
    description: 'Espresso servido sobre hielo cristalino para un refresco revitalizante.',
    tags: ['Frío', 'Café']
  },
  {
    id: 'fria-cafe-latte',
    category: 'bebidas',
    name: 'Latte Frío',
    price: 12000,
    description: 'Leche fría, hielo y shot de espresso fresco en perfecto degradé visual.',
    tags: ['Frío', 'Café']
  },
  {
    id: 'fria-cafe-affogato',
    category: 'bebidas',
    name: 'Affogato',
    price: 12000,
    badge: 'Delicioso',
    description: 'Bola de helado de vainilla ahogada al instante en un espresso recién extraído.',
    tags: ['Postre / Café', 'Italiano']
  },
  {
    id: 'fria-cafe-frappe-clasico',
    category: 'bebidas',
    name: 'Frappe Clásico',
    price: 14000,
    description: 'Café frappé granizado con leche y toque dulce balanceado.',
    tags: ['Frappé', 'Café']
  },
  {
    id: 'fria-cafe-frappe-chai',
    category: 'bebidas',
    name: 'Frappe Chai',
    price: 14000,
    description: 'Frappé con armoniosa infusión de especias chai y café.',
    tags: ['Frappé', 'Especias']
  },
  {
    id: 'fria-cafe-frappe-baileys',
    category: 'bebidas',
    name: 'Frappe con Baileys',
    price: 15000,
    badge: 'Con Licor',
    description: 'Frappé especial con crema irlandesa Baileys para una experiencia sublime.',
    tags: ['Frappé', 'Licor']
  },
  {
    id: 'fria-cafe-naranja',
    category: 'bebidas',
    name: 'Café Naranja',
    price: 12000,
    description: 'Zumo fresco de naranja con extracción de café espresso sobre hielo.',
    tags: ['Café Frío', 'Cítrico']
  },
  {
    id: 'fria-sin-te-chai',
    category: 'bebidas',
    name: 'Té Chai Frío',
    price: 10000,
    description: 'Té especiado chai servido sobre hielo con leche fría.',
    tags: ['Sin Café', 'Frío']
  },
  {
    id: 'fria-sin-milo',
    category: 'bebidas',
    name: 'Milo Frío',
    price: 10000,
    description: 'Bebida de malta Milo servida fría y refrescante.',
    tags: ['Sin Café', 'Frío']
  },
  {
    id: 'fria-sin-granizado-milo',
    category: 'bebidas',
    name: 'Granizado de Milo',
    price: 14000,
    badge: 'Refrescante',
    description: 'Hielo finamente triturado con intenso sabor a Milo.',
    tags: ['Sin Café', 'Granizado']
  },
  {
    id: 'fria-sin-granizado-chai',
    category: 'bebidas',
    name: 'Granizado de Té Chai',
    price: 14000,
    description: 'Granizado refrescante cargado con los aromas de especias chai.',
    tags: ['Sin Café', 'Granizado']
  },
  {
    id: 'fria-sin-soda-frutos',
    category: 'bebidas',
    name: 'Soda de Frutos Rojos / Amarillos',
    price: 12000,
    image: imgSmoothieFrutosRojos,
    description: 'Soda refrescante con pulpa y trozos de frutos macerados.',
    tags: ['Sin Café', 'Soda']
  },
  {
    id: 'fria-sin-malteada-frutos',
    category: 'bebidas',
    name: 'Malteada de Frutos Rojos / Amarillos',
    price: 15000,
    badge: 'Favorita',
    image: imgBebidaFresa,
    secondaryImage: imgSmoothieFrutosRojos,
    description: 'Malteada cremosa de fruta natural a base de helado y frutos macerados.',
    tags: ['Sin Café', 'Malteada', 'Fruta Fresca']
  },
  {
    id: 'fria-sin-jugo-agua',
    category: 'bebidas',
    name: 'Jugos Naturales en Agua',
    price: 8000,
    description: 'Frutas frescas de temporada licuadas al momento en agua pura.',
    tags: ['Sin Café', 'Natural']
  },
  {
    id: 'fria-sin-granizado-frutas',
    category: 'bebidas',
    name: 'Granizado de Frutas',
    price: 14000,
    description: 'Granizado preparado con frutas naturales de temporada.',
    tags: ['Sin Café', 'Granizado']
  },
  {
    id: 'fria-sin-jugo-leche',
    category: 'bebidas',
    name: 'Jugos Naturales en Leche',
    price: 10000,
    description: 'Frutas frescas batidas con leche cremosa.',
    tags: ['Sin Café', 'Natural']
  },
  {
    id: 'fria-sin-batidos',
    category: 'bebidas',
    name: 'Batidos Naturales',
    price: 14000,
    description: 'Batidos preparados con frutas naturales y leche o yogurt.',
    tags: ['Sin Café', 'Natural', 'Saludable']
  },
  {
    id: 'fria-sin-gaseosas',
    category: 'bebidas',
    name: 'Gaseosas',
    price: 6000,
    description: 'Variedad de bebidas gaseosas frías en presentación personal.',
    tags: ['Bebida']
  },
  {
    id: 'fria-sin-soda-bretana',
    category: 'bebidas',
    name: 'Soda Bretaña',
    price: 4000,
    description: 'Agua con gas natural refrescante.',
    tags: ['Sin Café', 'Soda']
  },
  {
    id: 'fria-sin-michelado',
    category: 'bebidas',
    name: 'Michelado',
    price: 6000,
    description: 'Cerveza preparada al estilo michelada con limón y sal/especias.',
    tags: ['Refrescante']
  },
  {
    id: 'bebida-scoop-proteina',
    category: 'bebidas',
    name: 'Scoop de Proteína',
    price: 5000,
    description: 'Agrega un scoop de proteína a tu bebida favorita.',
    tags: ['Adicional', 'Saludable']
  },

  // --- ALMUERZO ---
  {
    id: 'almuerzo-bowl',
    category: 'almuerzo',
    name: 'Almuerzo Bowl (Escoge 3 opciones por categoría: Carbohidratos, Proteínas, Salsas, Acompañamientos, Ensaladas, Bebidas)',
    price: 16000,
    badge: 'Completo',
    image: imgBowl,
    secondaryImage: imgBowlFrijoles,
    description: 'Personaliza tu almuerzo seleccionando 3 opciones por categoría: Carbohidratos, Proteínas, Salsas, Acompañamientos, Ensaladas y Bebidas.',
    tags: ['Personalizable', 'Completo', 'Bowl']
  },
  {
    id: 'almuerzo-entradas',
    category: 'almuerzo',
    name: 'Entradas (Solo Martes y Viernes)',
    price: 6000,
    badge: 'Mar y Vie',
    image: imgAlmuerzoFrijoles,
    description: 'Disponibles exclusivamente los días Martes y Viernes. Pregunta por la entrada del día.',
    tags: ['Solo Mar y Vie', 'Entrada']
  },

  // --- TARDEAR ---
  {
    id: 'bruschettas-mix',
    category: 'tardear',
    name: 'Bruschetta (3 unds: Caprese / Campesina / Tentativa / Roja / Umami / Valluna)',
    price: 15000,
    badge: '3 Unidades',
    image: imgPlatosVarios,
    secondaryImage: imgComboTardear,
    description: 'Base de pan de corteza / ciabatta. Sabores: Caprese, Campesina, Tentativa, Roja, Umami o Valluna.',
    tags: ['Para Compartir', 'Ciabatta']
  },
  {
    id: 'montadito',
    category: 'tardear',
    name: 'Montadito (Campesino / Caprese / Pepperoni Fiesta / Dulce)',
    price: 16000,
    badge: 'A Elección',
    image: imgComboTardear,
    description: 'Elige tu montadito preferido: Campesino, Caprese, Pepperoni Fiesta o Dulce.',
    tags: ['Montadito', 'Tardear']
  },
  {
    id: 'empanadas-venezolanas',
    category: 'tardear',
    name: 'Empanadas Venezolanas (Trío: carne/queso, pollo/queso, queso)',
    price: 12000,
    badge: 'Trío',
    image: imgPlatosVarios,
    description: 'Trío de empanadas venezolanas: carne con queso, pollo con queso y queso.',
    tags: ['Empanadas', 'Para Compartir']
  },
  {
    id: 'juan-valerios',
    category: 'tardear',
    name: 'Juan Valerios (Masa de maduro con chicharrón, relleno de queso, salsa roja)',
    price: 12000,
    badge: 'Exclusivo',
    image: imgPlatosVarios,
    description: 'Masa de plátano maduro con chicharrón crocante, corazón relleno de queso fundido y salsa roja.',
    tags: ['Maduro', 'Chicharrón', 'Plato Estrella']
  },
  {
    id: 'lomo-salteado',
    category: 'tardear',
    name: 'Lomo Salteado (Salsa agridulce, verduras, acompañado de arepa)',
    price: 28000,
    badge: 'Recomendado',
    image: imgDesayunoVarios,
    description: 'Tiras de lomo en salsa agridulce con verduras salteadas, acompañado de arepa.',
    tags: ['Lomo', 'Salteado']
  },
  {
    id: 'ceviche-chicharron',
    category: 'tardear',
    name: 'Ceviche de Chicharrón',
    price: 25000,
    badge: 'Imperdible',
    image: imgPlatosVarios,
    description: 'Crujientes trozos de chicharrón artesanal marinados en fresca mezcla cítrica con cebolla morada, limón y cilantro.',
    tags: ['Ceviche', 'Chicharrón', 'Cítrico']
  },

  // --- CENAS ---
  {
    id: 'sandwich-carne',
    category: 'cenas',
    name: 'Sandwich de Carne',
    price: 22000,
    image: imgSandwich,
    description: 'Pan aliñado/rollo, lechuga, salsa napolitana, tomate, pesto, queso, carne desmechada.',
    tags: ['Sandwich Gourmet']
  },
  {
    id: 'sandwich-pollo',
    category: 'cenas',
    name: 'Sandwich de Pollo',
    price: 22000,
    image: imgSandwich,
    description: 'Pan aliñado/rollo, lechuga, tomate, queso crema, pepperoni, queso, pollo crunch, salsa napolitana.',
    tags: ['Sandwich Gourmet']
  },
  {
    id: 'sandwich-cosecha',
    category: 'cenas',
    name: 'Sandwich Cosecha',
    price: 24000,
    badge: 'Gourmet',
    image: imgDesayunoSandwich,
    description: 'Pan focaccia, queso crema, lechuga, rúgula, jamón serrano, pepperoni, queso búfala y tomate cherry.',
    tags: ['Focaccia', 'Serrano', 'Búfala']
  },
  {
    id: 'sandwich-choripan',
    category: 'cenas',
    name: 'Choripan',
    price: 24000,
    image: imgSandwich,
    description: 'Pan rollo a elección, chimichurri, chorizo, lechuga, tomate, cebolla encurtida, maduritos y queso.',
    tags: ['Choripán']
  },
  {
    id: 'hamburguesa-caprese',
    category: 'cenas',
    name: 'Hamburguesa Caprese (Incluye papas con salsa roja)',
    price: 28000,
    image: imgHamburguesa2Png,
    secondaryImage: imgHamburguesa,
    description: 'Salsa napolitana, rúgula, tomate cherry, jamón serrano, carne artesanal, queso búfala, pesto y parmesano. Incluye papas con salsa roja.',
    tags: ['Hamburguesa', 'Caprese', 'Artesanal']
  },
  {
    id: 'hamburguesa-valluna',
    category: 'cenas',
    name: 'Hamburguesa Valluna (Incluye papas con salsa roja)',
    price: 30000,
    badge: 'Favorita',
    image: imgHamburguesa2Png,
    secondaryImage: imgHamburguesa2,
    description: 'Hogao, lechuga, aguacate, chicharrón, carne artesanal, queso, maduro y huevo frito. Incluye papas con salsa roja.',
    tags: ['Hamburguesa', 'Típico', 'Artesanal']
  },
  {
    id: 'hamburguesa-hogarena',
    category: 'cenas',
    name: 'Hamburguesa Hogareña (Incluye papas con salsa roja)',
    price: 25000,
    image: imgHamburguesa2Png,
    description: 'Salsa obsesión, lechuga, tomate, tocineta, carne artesanal, queso y cebolla encurtida. Incluye papas con salsa roja.',
    tags: ['Hamburguesa', 'Clásica']
  },
  {
    id: 'hamburguesa-5-quesos',
    category: 'cenas',
    name: 'Hamburguesa 5 Quesos (Incluye papas con salsa roja)',
    price: 30000,
    badge: 'Especial',
    image: imgHamburguesa2Png,
    description: 'Queso crema, tocineta, carne artesanal, queso campesino, queso búfala, salsa obsesión y parmesano. Incluye papas con salsa roja.',
    tags: ['Hamburguesa', 'Quesos', 'Gourmet']
  },
  {
    id: 'hamburguesa-pollo-cesar',
    category: 'cenas',
    name: 'Hamburguesa Pollo César (Incluye papas con salsa roja)',
    price: 25000,
    image: imgHamburguesa2Png,
    description: 'Lechuga césar, pollo crunch, salsa intensa, queso, pimentón dulce, pepinillos. Incluye papas con salsa roja.',
    tags: ['Hamburguesa', 'Pollo', 'César']
  },

  // --- DULCES ---
  {
    id: 'dulce-sweet-waffle',
    category: 'dulces',
    name: 'Sweet Waffle',
    price: 18000,
    badge: 'Delicioso',
    image: imgWaffle2,
    secondaryImage: imgWaffles3,
    description: 'Waffle dorado y crujiente con toppings dulces a elección.',
    tags: ['Waffle', 'Dulce']
  },
  {
    id: 'dulce-brownie-helado',
    category: 'dulces',
    name: 'Brownie / Galleta con helado o yogurt griego',
    price: 15000,
    image: imgCookie,
    description: 'Brownie húmedo de chocolate o galleta recién horneada servida con helado o yogurt griego.',
    tags: ['Brownie', 'Helado']
  },
  {
    id: 'dulce-waffle-pandebono',
    category: 'dulces',
    name: 'Waffle de pandebono con mermelada y arequipe',
    price: 16000,
    badge: 'Típico Recreado',
    image: imgWaffle,
    secondaryImage: imgWaffle2,
    description: 'Waffle elaborado con masa de pandebono, crocante por fuera y suave por dentro, con mermelada y arequipe.',
    tags: ['Pandebono', 'Arequipe', 'Especial']
  },
  {
    id: 'dulce-nevado',
    category: 'dulces',
    name: 'Nevado de frutos rojos / amarillos',
    price: 18000,
    badge: 'Refrescante',
    image: imgBebidaFresa,
    secondaryImage: imgSmoothieFrutosRojos,
    description: 'Generosas capas de fruta fresca, crema dulce suave y helado cremoso.',
    tags: ['Copas', 'Frutas']
  },
  {
    id: 'dulce-tostadas-clasicas',
    category: 'dulces',
    name: 'Tostadas Francesas Clásicas',
    price: 15000,
    image: imgWaffles3,
    description: 'Pan brioche bañado en mezcla de vainilla y canela, dorado a la mantequilla con miel y fruta.',
    tags: ['French Toast']
  },
  {
    id: 'dulce-tostadas-tiramisu',
    category: 'dulces',
    name: 'Tostadas Francesas Tiramisú',
    price: 18000,
    badge: 'Favorito',
    image: imgPastelCafe,
    description: 'Tostadas francesas infusionadas con café espresso, crema mascarpone y cacao en polvo.',
    tags: ['French Toast', 'Tiramisú', 'Café']
  },
  {
    id: 'dulce-torta-temporada',
    category: 'dulces',
    name: 'Torta de temporada',
    price: 10000,
    image: imgPastel,
    description: 'Pregunta por la creación pastelera del día preparada por nuestros reposteros.',
    tags: ['Torta', 'Repostería']
  },
  {
    id: 'dulce-migao',
    category: 'dulces',
    name: 'Migao',
    price: 16000,
    badge: 'Experiencia',
    description: 'Tazón caliente con chocolate artesanal, pan, waffle de pandebono, grissinis crujientes, galleta y queso campesino derretido.',
    tags: ['Tradicional', 'Chocolate', 'Queso']
  },
  {
    id: 'dulce-brownie-saludable',
    category: 'dulces',
    name: 'Brownie saludable',
    price: 8000,
    image: imgCookie,
    description: 'Brownie elaborado con ingredientes saludables, sin azúcar refinada.',
    tags: ['Saludable', 'Sin Azúcar']
  },
  {
    id: 'dulce-galleta-almendras',
    category: 'dulces',
    name: 'Galleta de almendras saludable',
    price: 6000,
    image: imgGalleta,
    description: 'Galleta artesanal a base de almendras, sin harinas refinadas.',
    tags: ['Saludable', 'Almendras']
  },
  {
    id: 'dulce-parfait',
    category: 'dulces',
    name: 'Parfait',
    price: 16000,
    badge: 'Delicioso',
    image: imgBebidaFresa,
    description: 'Capas de yogurt griego, granola crocante y frutas frescas de temporada.',
    tags: ['Saludable', 'Frutas', 'Yogurt']
  },

  // --- TORTAS ---
  {
    id: 'torta-porciones',
    category: 'tortas',
    name: 'Torta (Zanahoria, Chocolate, Naranja/Amapola, Red Velvet, Blue Velvet, Coco, Café, Limón/Arándanos, Pandebono, Cheesecake, Pie de Manzana)',
    price: 10000,
    badge: '11 Sabores',
    image: imgPastelZanahoria,
    secondaryImage: imgPastelRedVelvet,
    description: 'Porción individual fresca horneada a diario. Sabores disponibles: Zanahoria, Chocolate, Naranja/Amapola, Red Velvet, Blue Velvet, Coco, Café, Limón/Arándanos, Pandebono, Cheesecake y Pie de Manzana.',
    tags: ['Porción Individual', 'Artesanal', 'Repostería']
  },

  // --- GALLETAS ---
  {
    id: 'galleta-estandar',
    category: 'galletas',
    name: 'Galleta (Clásica, Chocolate, Red Velvet, Mantequilla de Maní, Nucita, Nutella, Leche Klim, Oreo, Masmelo)',
    price: 10000,
    badge: '9 Sabores',
    image: imgGalletasVariadas,
    secondaryImage: imgCookie,
    description: 'Galletas artesanales recién horneadas con centro suave. Sabores: Clásica, Chocolate, Red Velvet, Mantequilla de Maní, Nucita, Nutella, Leche Klim, Oreo y Masmelo.',
    tags: ['Galleta Artesanal', 'Recién Horneada']
  },
  {
    id: 'galleta-pistacho-limon',
    category: 'galletas',
    name: 'Galleta Pistacho Limón',
    price: 12000,
    badge: 'Especial',
    image: imgGalletaRoja,
    secondaryImage: imgGalletasVariadas2,
    description: 'Galleta artesanal con pistachos tostados y toque cítrico de limón.',
    tags: ['Galleta Artesanal', 'Pistacho', 'Especial']
  },
  {
    id: 'brownie-clasico',
    category: 'galletas',
    name: 'Brownie Clásico',
    price: 10000,
    image: imgGalleta3,
    description: 'Brownie húmedo y denso de chocolate con centro fundente.',
    tags: ['Brownie', 'Chocolate']
  },
  {
    id: 'brookie',
    category: 'galletas',
    name: 'Brookie',
    price: 12000,
    badge: 'Especial',
    image: imgGalletasVarioas2,
    description: 'La combinación perfecta entre brownie y cookie en una sola pieza irresistible.',
    tags: ['Brownie', 'Cookie', 'Especial']
  },

  // --- PANADERÍA ---
  {
    id: 'pan-alinado',
    category: 'panaderia',
    name: 'Pan Aliñado',
    price: 15000,
    image: imgPanChocha3,
    description: 'Pan tradicional suave y aromatizado con el auténtico sazón de la panadería de antaño.',
    tags: ['Pan Entero']
  },
  {
    id: 'pan-integral',
    category: 'panaderia',
    name: 'Pan Integral',
    price: 15000,
    image: imgPanChocha4,
    description: 'Elaborado con harina integral y semillas para una digestión balanceada y sabor rústico.',
    tags: ['Pan Entero', 'Saludable']
  },
  {
    id: 'pan-focaccia',
    category: 'panaderia',
    name: 'Focaccia Personal',
    price: 8000,
    badge: 'Italiano',
    image: imgDesayunoCaprese,
    secondaryImage: imgPanChocha,
    description: 'Pan italiano personal con aceite de oliva extra virgen, romero fresco y sal marina.',
    tags: ['Pan Personal', 'Aceite de Oliva']
  },
  {
    id: 'pan-chochita',
    category: 'panaderia',
    name: 'Pan Chochita',
    price: 6000,
    image: imgPanChocha,
    secondaryImage: imgPanChocha2,
    description: 'Pan suave y esponjoso ideal para acompañar tus momentos.',
    tags: ['Pan Artesanal']
  },
  {
    id: 'pan-ciabatta',
    category: 'panaderia',
    name: 'Ciabatta',
    price: 5000,
    image: imgPanChocha2,
    description: 'Corteza bien crujiente y miga aireada y elástica, ideal para bruschettas y bocadillos.',
    tags: ['Pan Artesanal']
  },
  {
    id: 'pan-engordacion',
    category: 'panaderia',
    name: 'Pan La Engordación',
    price: 18000,
    badge: 'Especialidad',
    image: imgPanChocha4,
    description: 'Nuestra creación estrella cargada de queso derretido, mantequilla y sabor sin remordimientos.',
    tags: ['Pan Entero', 'Generoso', 'Quesudo']
  },
  {
    id: 'pan-masa-madre',
    category: 'panaderia',
    name: 'Pan Masa Madre',
    price: 20000,
    badge: 'Artesanal',
    image: imgPanChocha3,
    description: 'Pan de fermentación lenta con masa madre, corteza crujiente y miga alveolada.',
    tags: ['Pan Entero', 'Masa Madre', 'Artesanal']
  },
  {
    id: 'pan-brioche',
    category: 'panaderia',
    name: 'Pan Brioche',
    price: 18000,
    image: imgPanChocha4,
    description: 'Pan enriquecido con mantequilla y huevos, suave como ningún otro.',
    tags: ['Pan Entero', 'Mantequilla']
  },
  {
    id: 'pan-rollo-ajo',
    category: 'panaderia',
    name: 'Pan de Rollo Ajo',
    price: 8400,
    image: imgPanChocha,
    secondaryImage: imgPanChocha2,
    description: 'Pan de rollo relleno de mantequilla de ajo artesanal, crujiente y aromático.',
    tags: ['Pan de Rollo', 'Ajo']
  },
  {
    id: 'pan-rollo-pesto-pepperoni-canela',
    category: 'panaderia',
    name: 'Pan de Rollo (Pesto / Pepperoni / Canela)',
    price: 6700,
    image: imgPanChocha,
    description: 'Elige entre pesto artesanal, pepperoni o canela dulce.',
    tags: ['Pan de Rollo', 'A Elección']
  },
  {
    id: 'pan-rollo-chimichurri-pimenton',
    category: 'panaderia',
    name: 'Pan de Rollo (Chimichurri / Pimentón Dulce)',
    price: 6600,
    image: imgPanChocha2,
    description: 'Pan de rollo con chimichurri de la casa o pimentón dulce confitado.',
    tags: ['Pan de Rollo', 'A Elección']
  },
  {
    id: 'pan-rollo-nutella',
    category: 'panaderia',
    name: 'Pan de Rollo Nutella',
    price: 6750,
    badge: 'Dulce',
    image: imgPanChocha,
    description: 'Pan de rollo generosamente relleno de Nutella cremosa.',
    tags: ['Pan de Rollo', 'Nutella', 'Dulce']
  }
];

