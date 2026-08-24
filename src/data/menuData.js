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
import imgDesayunoVarios5 from '../assets/menu/desayunoVarios5.png';
import imgBowl from '../assets/menu/bowl.png';
import imgBowl3 from '../assets/menu/bowl3.png';
import imgBowl5 from '../assets/menu/bowl5.png';
import imgBowlFrijoles from '../assets/menu/bowlFrijoles.jpg';
import imgAlmuerzoFrijoles from '../assets/menu/almuerzoFrijoles.png';

// Bebidas & Café
import imgCapuchino from '../assets/menu/capuchino.jpg';
import imgBebidaFresa from '../assets/menu/bebodaFresa.png';
import imgSmoothieFrutosRojos from '../assets/menu/smoothie-frutos-rojos.png';

// Tardear, Sandwiches, Hamburguesas & Pastas
import imgHamburguesa from '../assets/menu/hamburguesa.jpg';
import imgHamburguesa2 from '../assets/menu/hamburguesa2.jpg';
import imgHamburguesa2Png from '../assets/menu/hamburguesa2.png';
import imgSandwich from '../assets/menu/sandwhic.jpg';
import imgPastaCarbonara from '../assets/menu/pastaCarbonara.png';
import imgCarbonara3 from '../assets/menu/carbona3.jpg';
import imgPasta from '../assets/menu/pasta.png';
import imgPasta3 from '../assets/menu/pasta3.jpg';
import imgPasta4 from '../assets/menu/pasta4.jpg';
import imgPastaGenerica3 from '../assets/menu/pastaGenerica3.png';
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
import imgGalletaKlim from '../assets/menu/galletaKlim.png';
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

export const menuCategories = [
  { id: 'todos', name: 'Todos', icon: '✨', description: 'Nuestra selección gastronómica completa' },
  { id: 'desayunos', name: 'Desayunos', icon: '🍳', description: 'Arma tu desayuno con carbohidrato a elección, huevos al gusto, fruta y bebida' },
  { id: 'bebidas', name: 'Bebidas', icon: '☕', description: 'Café de especialidad, métodos filtrados, cold brew y malteadas' },
  { id: 'tardear', name: 'Tardear', icon: '🥪', description: 'Bruschettas artesanales, sándwiches gourmet, hamburguesas y delicias' },
  { id: 'dulces', name: 'Dulces & Postres', icon: '🧇', description: 'Waffles crocantes, tostadas francesas y momentos dulces' },
  { id: 'tortas', name: 'Tortas', icon: '🍰', description: 'Porciones individuales frescas horneadas a diario' },
  { id: 'galletas', name: 'Galletas', icon: '🍪', description: 'Galletas artesanales recién horneadas con centro suave' },
  { id: 'panaderia', name: 'Panadería', icon: '🥖', description: 'Panes rellenos y masas madre elaboradas artesanalmente' },
];

export const carbohidratosDesayuno = [
  'Pan aliñado',
  'Pan integral',
  'Arepa',
  'Focaccia',
  'Pancakes clásicos',
  'Pancakes proteicos',
  'Pancakes de zanahoria',
  'Waffles clásicos',
  'Waffles proteicos',
  'Waffles de pandebono',
  'Waffles de zanahoria'
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
    itemId: 'rollo-hamburguesa',
    title: 'Rollo Hamburguesa La Puerta',
    subtitle: 'Carne Jugosa & Pan Artesanal',
    image: imgHamburguesa2Png,
    secondaryImage: imgHamburguesa,
    badge: '🍔 Favorito de Tardear',
    price: 20000,
    category: 'tardear',
    description: 'Pan rollo de la casa, salsa obsesión, carne jugosa, tocineta crujiente, queso fundido y cebolla morada encurtida.',
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
    price: 12000,
    category: 'dulces',
    description: 'Masa de pandebono horneada en waffle maker: crocante por fuera, suave por dentro, bañado con arequipe y mermelada artesanal.',
    tags: ['Típico Recreado', 'Favorito', 'Arequipe']
  },
  {
    id: 'feat-torta-zanahoria',
    itemId: 'torta-zanahoria',
    title: 'Torta Rústica de Zanahoria',
    subtitle: 'Frosting de Queso Crema & Especias',
    image: imgPastelZanahoria,
    secondaryImage: imgTortaZanahoria,
    badge: '🍰 Repostería de Autor',
    price: 8000,
    category: 'tortas',
    description: 'Bizcocho ultra húmedo de zanahoria fresca con canela, nueces tostadas y capas generosas de suave crema de queso.',
    tags: ['Porción Individual', 'Casera', 'Especias']
  },
  {
    id: 'feat-malteada',
    itemId: 'fria-sin-malteada-frutos',
    title: 'Malteada & Smoothie Frutos Rojos',
    subtitle: 'Refrescancia Cremosa Natural',
    image: imgBebidaFresa,
    secondaryImage: imgSmoothieFrutosRojos,
    badge: '🍓 100% Natural',
    price: 12000,
    category: 'bebidas',
    description: 'Helado artesanal batido con fresas, moras y frutos del bosque frescos, decorado con fruta natural fresca.',
    tags: ['Frutas Frescas', 'Helado', 'Cremoso']
  },
  {
    id: 'feat-galletas',
    itemId: 'galleta-clasica',
    title: 'Galletas Rústicas Artesanales',
    subtitle: 'Recién Salidas del Horno',
    image: imgGalletasVariadas,
    secondaryImage: imgCookie,
    badge: '🍪 Horneadas a Diario',
    price: 8000,
    category: 'galletas',
    description: 'Generosa masa de mantequilla con centro suave, chispas de chocolate belga y frutos secos tostados.',
    tags: ['Artesanal', 'Centro Suave', 'Chocolate']
  }
];

export const menuItems = [
  // --- DESAYUNOS ---
  {
    id: 'desayuno-dia',
    category: 'desayunos',
    name: 'Desayuno del Día Clásico',
    price: 12000,
    badge: 'Popular',
    image: imgDesayunoHuevos,
    secondaryImage: imgDesayunoCocidos,
    description: 'Escoges tu carbohidrato preferido, acompañado de huevo al gusto, porción de fruta fresca y bebida caliente (café o chocolate).',
    tags: ['Completo', 'Económico', 'Tradicional']
  },
  {
    id: 'desayuno-caprese',
    category: 'desayunos',
    name: 'Caprese',
    price: 20000,
    badge: 'Recomendado',
    image: imgDesayunoCaprese,
    secondaryImage: imgDesayuno3,
    description: 'Imagina el aroma envolvente de una salsa napolitana casera, huevos al gusto, pesto artesanal, tomate cherry, queso y rúgula fresca.',
    tags: ['Con carbohidrato a elección', 'Frescura', 'Chef Pick']
  },
  {
    id: 'desayuno-campesino',
    category: 'desayunos',
    name: 'Campesino',
    price: 18000,
    badge: 'Tradición',
    image: imgDesayunoRanchero,
    secondaryImage: imgDesayuno2,
    description: 'Con el auténtico sabor del campo: chorizo artesanal, huevo perico, aguacate fresco y queso campesino. Un desayuno que te abraza por dentro.',
    tags: ['Con carbohidrato a elección', 'Típico', 'Chorizo']
  },
  {
    id: 'desayuno-huerta',
    category: 'desayunos',
    name: 'Huerta',
    price: 18000,
    badge: 'Saludable',
    image: imgBowl,
    secondaryImage: imgBowl3,
    description: 'Explosión de colores y frescura: ensalada fría, lechuga, rúgula, mango, piña, calabacín, queso campesino y huevos al gusto.',
    tags: ['Con carbohidrato a elección', 'Ligero', 'Frutas']
  },
  {
    id: 'desayuno-tentativo',
    category: 'desayunos',
    name: 'Tentativo',
    price: 22000,
    badge: 'Gourmet',
    image: imgDesayuno3,
    secondaryImage: imgDesayunoVarios,
    description: 'Combina lo dulce, lo salado y lo crujiente: queso crema, mermelada de frutos amarillos de la casa, jamón serrano, huevos al gusto y frutos secos.',
    tags: ['Con carbohidrato a elección', 'Agridulce', 'Premium']
  },
  {
    id: 'desayuno-llanero',
    category: 'desayunos',
    name: 'Llanero',
    price: 20000,
    badge: 'Contundente',
    image: imgDesayunoRanchero,
    description: 'Para quienes no temen disfrutar: chorizo, tocineta crocante, pepperoni, huevos al gusto, chimichurri especial y queso campesino.',
    tags: ['Con carbohidrato a elección', 'Proteico']
  },
  {
    id: 'desayuno-amanecer',
    category: 'desayunos',
    name: 'Amanecer',
    price: 18000,
    badge: 'Colorido',
    image: imgBowl5,
    secondaryImage: imgDesayunoVarios5,
    description: 'Queso crema, mermelada de frutos rojos o amarillos, huevos al gusto, fruta variada y frutos secos. Ligero, vibrante y lleno de contrastes.',
    tags: ['Con carbohidrato a elección', 'Frutas']
  },
  {
    id: 'desayuno-umami',
    category: 'desayunos',
    name: 'Umami',
    price: 20000,
    badge: 'Favorito',
    image: imgDesayuno2,
    description: 'Puré de maduro, tocineta crujiente, huevos al gusto, queso campesino y la exquisita salsa Obsesión de la casa. Un plato que se recuerda y se repite.',
    tags: ['Con carbohidrato a elección', 'Sabor Único']
  },
  {
    id: 'desayuno-obsesion',
    category: 'desayunos',
    name: 'Obsesión',
    price: 22000,
    badge: 'Especialidad',
    image: imgDesayunoSandwich,
    description: 'Balance perfecto entre frescura y cremosidad: lechuga, aguacate, huevos al gusto, queso, tocineta, salsa obsesión y queso crema.',
    tags: ['Con carbohidrato a elección', 'Creación de la Casa']
  },

  // --- BEBIDAS (Café Caliente) ---
  {
    id: 'cafe-espresso',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Espresso',
    price: 3000,
    description: 'Extracción intensa y aromática de café de especialidad seleccionado.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-espresso-doble',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Espresso Doble',
    price: 5000,
    description: 'Doble carga de espresso para máxima energía y cuerpo concentrado.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-americano',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Americano',
    price: 6000,
    description: 'Café suave y balanceado a base de espresso y agua caliente.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-americano-irlandes',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Americano Irlandés',
    price: 6000,
    description: 'Americano con notas irlandesas especiales.',
    tags: ['Café Caliente', 'Especial']
  },
  {
    id: 'cafe-capuccino',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Capuccino',
    price: 8000,
    image: imgCapuchino,
    description: 'Espresso perfecto con leche vaporizada y sedosa espuma decorada con latte art.',
    tags: ['Café Caliente', 'Clásico', 'Latte Art']
  },
  {
    id: 'cafe-capuccino-nutella',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Capuccino Nutella',
    price: 10000,
    badge: 'Dulce',
    image: imgCapuchino,
    description: 'Capuccino cremoso con un toque generoso de Nutella original.',
    tags: ['Café Caliente', 'Gourmet']
  },
  {
    id: 'cafe-capuccino-vainilla',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Capuccino Vainilla',
    price: 8500,
    description: 'Capuccino aromatizado con esencia sutil de vainilla francesa.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-capuchai',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Capuchai',
    price: 9000,
    description: 'La fusión perfecta de especias chai con el vigor del capuccino.',
    tags: ['Café Caliente', 'Especiado']
  },
  {
    id: 'cafe-capuccino-baileys',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Capuccino Baileys',
    price: 12000,
    badge: 'Con Licor',
    description: 'Capuccino premium con crema de licor Baileys.',
    tags: ['Café Caliente', 'Licor']
  },
  {
    id: 'cafe-capuccino-irlandes',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Capuccino Irlandés',
    price: 12000,
    badge: 'Con Licor',
    description: 'Capuccino con toque irlandés para ocasiones especiales.',
    tags: ['Café Caliente', 'Licor']
  },
  {
    id: 'cafe-mocaccino',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Mocaccino',
    price: 9000,
    image: imgCapuchino,
    description: 'Deliciosa armonía entre espresso, leche vaporizada y chocolate.',
    tags: ['Café Caliente', 'Chocolate']
  },
  {
    id: 'cafe-latte',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Latte',
    price: 9000,
    image: imgCapuchino,
    description: 'Textura suave y cremosa con predominancia de leche y ligero toque de espresso.',
    tags: ['Café Caliente']
  },
  {
    id: 'cafe-latte-chai',
    category: 'bebidas',
    subCategory: 'Café Caliente',
    name: 'Latte Chai',
    price: 10000,
    description: 'Latte infundido con exquisita mezcla de té chai y especias aromáticas.',
    tags: ['Café Caliente', 'Especiado']
  },

  // --- BEBIDAS (Métodos Filtrados) ---
  {
    id: 'filtrado-prensa',
    category: 'bebidas',
    subCategory: 'Métodos Filtrados',
    name: 'Filtrado Prensa Francesa',
    price: 16000,
    badge: 'Origen',
    description: 'Extracción por inmersión que resalta cuerpo, aceites naturales y notas profundas del café.',
    tags: ['Método de Filtrado', 'Especialidad']
  },
  {
    id: 'filtrado-v60',
    category: 'bebidas',
    subCategory: 'Métodos Filtrados',
    name: 'Filtrado V60',
    price: 16000,
    badge: 'Origen',
    description: 'Método de goteo de precisión que resalta notas florales, cítricas y dulzura limpia.',
    tags: ['Método de Filtrado', 'Especialidad']
  },
  {
    id: 'filtrado-chemex',
    category: 'bebidas',
    subCategory: 'Métodos Filtrados',
    name: 'Filtrado Chemex (Quemex)',
    price: 16000,
    badge: 'Origen',
    description: 'Taza extraordinariamente cristalina y sedosa gracias a su filtro grueso patentado.',
    tags: ['Método de Filtrado', 'Especialidad']
  },

  // --- BEBIDAS (Cold Brew) ---
  {
    id: 'cold-brew-clasico',
    category: 'bebidas',
    subCategory: 'Cold Brew',
    name: 'Cold Brew Clásico',
    price: 8000,
    description: 'Café infusionado en frío durante horas, suave, naturalmente dulce y baja acidez.',
    tags: ['Cold Brew', 'Frío']
  },
  {
    id: 'cold-brew-soda',
    category: 'bebidas',
    subCategory: 'Cold Brew',
    name: 'Cold Brew con Soda',
    price: 10000,
    description: 'Refrescante combinación de infusión en frío de café con burbujas de soda efervescente.',
    tags: ['Cold Brew', 'Refrescante']
  },
  {
    id: 'cold-brew-irlandes',
    category: 'bebidas',
    subCategory: 'Cold Brew',
    name: 'Cold Brew Irlandés',
    price: 12000,
    description: 'Cold brew macerado con perfil irlandés aromático y envolvente.',
    tags: ['Cold Brew', 'Frío']
  },
  {
    id: 'cold-brew-naranja',
    category: 'bebidas',
    subCategory: 'Cold Brew',
    name: 'Cold Brew con Naranja',
    price: 12000,
    badge: 'Recomendado',
    description: 'Extraordinaria fusión cítrica entre jugo fresco de naranja y extracto frío de café.',
    tags: ['Cold Brew', 'Cítrico']
  },

  // --- BEBIDAS (Calientes Sin Café) ---
  {
    id: 'bebida-chocolate',
    category: 'bebidas',
    subCategory: 'Calientes Sin Café',
    name: 'Chocolate Caliente',
    price: 8000,
    description: 'Chocolate tradicional espeso y reconfortante preparado con cacao seleccionado.',
    tags: ['Sin Café', 'Caliente']
  },
  {
    id: 'bebida-te-chai',
    category: 'bebidas',
    subCategory: 'Calientes Sin Café',
    name: 'Té Chai Caliente',
    price: 8000,
    description: 'Infusión de té negro con canela, cardamomo, clavo, jengibre y leche cremosa.',
    tags: ['Sin Café', 'Especiado']
  },
  {
    id: 'bebida-choco-chai',
    category: 'bebidas',
    subCategory: 'Calientes Sin Café',
    name: 'Choco Chai',
    price: 8000,
    description: 'El encuentro celestial entre chocolate tradicional y mezcla especiada chai.',
    tags: ['Sin Café', 'Dulce']
  },
  {
    id: 'bebida-chocomasmelo',
    category: 'bebidas',
    subCategory: 'Calientes Sin Café',
    name: 'Chocomasmelo',
    price: 10000,
    badge: 'Dulce',
    description: 'Taza de chocolate caliente coronada con masmelos fundidos.',
    tags: ['Sin Café', 'Postre']
  },
  {
    id: 'bebida-aromatica',
    category: 'bebidas',
    subCategory: 'Calientes Sin Café',
    name: 'Aromática Frutos Rojos / Amarillos',
    price: 7000,
    image: imgSmoothieFrutosRojos,
    description: 'Infusión natural con trozos de fruta macerada fresca (a elección: frutos rojos o amarillos).',
    tags: ['Sin Café', 'Natural', 'Frutas']
  },

  // --- BEBIDAS (Malteadas Cookies) ---
  {
    id: 'malteada-arequipe',
    category: 'bebidas',
    subCategory: 'Malteadas Cookies',
    name: 'Malteada Clásica con Arequipe',
    price: 16000,
    badge: 'Cookie Shake',
    image: imgBebidaFresa,
    description: 'Malteada espesa de helado artesanal, galleta y veteado abundante de arequipe.',
    tags: ['Malteada', 'Cookies']
  },
  {
    id: 'malteada-chocolate',
    category: 'bebidas',
    subCategory: 'Malteadas Cookies',
    name: 'Malteada Chocolate Cookies',
    price: 16000,
    badge: 'Cookie Shake',
    description: 'Intensidad de chocolate, helado cremoso y trozos de galleta artesanal.',
    tags: ['Malteada', 'Cookies']
  },
  {
    id: 'malteada-red-velvet',
    category: 'bebidas',
    subCategory: 'Malteadas Cookies',
    name: 'Malteada Red Velvet',
    price: 16000,
    badge: 'Cookie Shake',
    image: imgBebidaFresa,
    description: 'Suave perfil Red Velvet combinado con helado y textura de galleta.',
    tags: ['Malteada', 'Cookies']
  },
  {
    id: 'malteada-mani-frutos',
    category: 'bebidas',
    subCategory: 'Malteadas Cookies',
    name: 'Malteada Mantequilla de Maní y Frutos Amarillos',
    price: 16000,
    badge: 'Favorito',
    description: 'Combinación irresistible de crema de maní suave con dulce mermelada de frutos amarillos.',
    tags: ['Malteada', 'Cookies']
  },
  {
    id: 'malteada-nutella',
    category: 'bebidas',
    subCategory: 'Malteadas Cookies',
    name: 'Malteada Nutella',
    price: 16000,
    badge: 'Cookie Shake',
    description: 'Cremosa y chocolatosa con abundante Nutella y tropezones de galleta.',
    tags: ['Malteada', 'Cookies']
  },
  {
    id: 'malteada-nucita',
    category: 'bebidas',
    subCategory: 'Malteadas Cookies',
    name: 'Malteada Nucita',
    price: 16000,
    badge: 'Cookie Shake',
    description: 'El sabor nostálgico del clásico dulce bicolor en una cremosa malteada.',
    tags: ['Malteada', 'Cookies']
  },
  {
    id: 'malteada-oreo',
    category: 'bebidas',
    subCategory: 'Malteadas Cookies',
    name: 'Malteada Oreo',
    price: 16000,
    badge: 'Cookie Shake',
    description: 'Auténtica galleta Oreo triturada con base cremosa de vainilla.',
    tags: ['Malteada', 'Cookies']
  },

  // --- BEBIDAS (Frías Con Café) ---
  {
    id: 'fria-cafe-americano',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Americano Frío (Iced Americano)',
    price: 8000,
    description: 'Espresso doble servido sobre hielo cristalino para un refresque revitalizante.',
    tags: ['Frío', 'Café']
  },
  {
    id: 'fria-cafe-latte',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Iced Latte',
    price: 10000,
    description: 'Leche fría, hielo y shot de espresso fresco en perfecto degradé visual.',
    tags: ['Frío', 'Café']
  },
  {
    id: 'fria-cafe-dalgona',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Café Dalgona',
    price: 8000,
    description: 'Espuma batida sedosa de café coronando una base de leche bien fría.',
    tags: ['Frío', 'Especial']
  },
  {
    id: 'fria-cafe-affogato',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Affogato',
    price: 8000,
    badge: 'Delicioso',
    description: 'Bola de helado de vainilla ahogada al instante en un espresso recién extraído.',
    tags: ['Postre / Café', 'Italiano']
  },
  {
    id: 'fria-cafe-frappe-clasico',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Frappé Clásico',
    price: 12000,
    description: 'Café frappé granizado con leche y toque dulce balanceado.',
    tags: ['Frappé', 'Café']
  },
  {
    id: 'fria-cafe-frappe-choco',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Frappé con Chocolate',
    price: 14000,
    description: 'Frappé de café combinado con salsa de chocolate fundido.',
    tags: ['Frappé', 'Chocolate']
  },
  {
    id: 'fria-cafe-frappe-chai',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Frappé Chai',
    price: 14000,
    description: 'Frappé con armoniosa infusión de especias chai y café.',
    tags: ['Frappé', 'Especias']
  },
  {
    id: 'fria-cafe-frappe-caramelo',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Frappé con Caramelo',
    price: 14000,
    description: 'Frappé endulzado y decorado con generoso sirope de caramelo.',
    tags: ['Frappé', 'Caramelo']
  },
  {
    id: 'fria-cafe-frappe-baileys',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Frappé con Baileys',
    price: 15000,
    badge: 'Con Licor',
    description: 'Frappé especial con crema irlandesa Baileys para una experiencia sublime.',
    tags: ['Frappé', 'Licor']
  },
  {
    id: 'fria-cafe-tonic-espresso',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Tonic Espresso',
    price: 8000,
    description: 'Burbujas de agua tónica fría con un shot de espresso encima. Refrescancia sofisticada.',
    tags: ['Café Frío', 'Burbujas']
  },
  {
    id: 'fria-cafe-naranja',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Café Naranja',
    price: 10000,
    description: 'Zumo fresco de naranja con extracción de café espresso sobre hielo.',
    tags: ['Café Frío', 'Cítrico']
  },
  {
    id: 'fria-cafe-soda',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Soda de Café con Frutos Rojos / Amarillos',
    price: 12000,
    description: 'Soda artesanal saborizada con fruta natural y toque de café frío.',
    tags: ['Café Frío', 'Frutas']
  },
  {
    id: 'fria-cafe-latte-frutos',
    category: 'bebidas',
    subCategory: 'Frías Con Café',
    name: 'Latte Frutos Rojos / Amarillos',
    price: 14000,
    description: 'Iced latte con reducción artesanal de frutos frescos.',
    tags: ['Café Frío', 'Frutas']
  },

  // --- BEBIDAS (Frías Sin Café & Licores) ---
  {
    id: 'fria-sin-te-chai',
    category: 'bebidas',
    subCategory: 'Frías Sin Café',
    name: 'Té Chai Frío',
    price: 8000,
    description: 'Té especiado chai servido sobre hielo con leche fría.',
    tags: ['Sin Café', 'Frío']
  },
  {
    id: 'fria-sin-granizado-choco',
    category: 'bebidas',
    subCategory: 'Frías Sin Café',
    name: 'Granizado de Chocolate',
    price: 12000,
    description: 'Hielo finamente triturado con intenso sabor a chocolate.',
    tags: ['Sin Café', 'Granizado']
  },
  {
    id: 'fria-sin-granizado-chai',
    category: 'bebidas',
    subCategory: 'Frías Sin Café',
    name: 'Granizado de Té Chai',
    price: 12000,
    description: 'Granizado refrescante cargado con los aromas de especias chai.',
    tags: ['Sin Café', 'Granizado']
  },
  {
    id: 'fria-sin-soda-frutos',
    category: 'bebidas',
    subCategory: 'Frías Sin Café',
    name: 'Soda de Frutos Rojos / Amarillos',
    price: 10000,
    image: imgSmoothieFrutosRojos,
    description: 'Soda refrescante con pulpa y trozos de frutos macerados.',
    tags: ['Sin Café', 'Soda']
  },
  {
    id: 'fria-sin-malteada-frutos',
    category: 'bebidas',
    subCategory: 'Frías Sin Café',
    name: 'Malteada de Frutos Rojos / Amarillos',
    price: 12000,
    badge: 'Favorita',
    image: imgBebidaFresa,
    secondaryImage: imgSmoothieFrutosRojos,
    description: 'Malteada cremosa de fruta natural a base de helado y fresas maceradas.',
    tags: ['Sin Café', 'Malteada', 'Fruta Fresca']
  },
  {
    id: 'fria-sin-jugo-agua',
    category: 'bebidas',
    subCategory: 'Frías Sin Café',
    name: 'Jugos Naturales en Agua',
    price: 6000,
    description: 'Frutas frescas de temporada licuadas al momento en agua pura.',
    tags: ['Sin Café', 'Natural']
  },
  {
    id: 'fria-sin-jugo-leche',
    category: 'bebidas',
    subCategory: 'Frías Sin Café',
    name: 'Jugos Naturales en Leche',
    price: 8000,
    description: 'Frutas frescas batidas con leche cremosa.',
    tags: ['Sin Café', 'Natural']
  },
  {
    id: 'fria-sin-gaseosas',
    category: 'bebidas',
    subCategory: 'Frías Sin Café',
    name: 'Gaseosas',
    price: 5000,
    description: 'Variedad de bebidas gaseosas frías en presentación personal.',
    tags: ['Bebida']
  },
  {
    id: 'licor-temporada',
    category: 'bebidas',
    subCategory: 'Licores',
    name: 'Licores de Temporada (Vinos, Cervezas, Baileys, Whiskey)',
    price: null,
    priceLabel: 'Preguntar por disponibilidad',
    badge: 'Temporada',
    description: 'Selección de vinos por copa/botella, cervezas artesanales y nacionales, Baileys y whiskey para acompañar tu tardeo.',
    tags: ['Licores', 'Bar']
  },

  // --- TARDEAR (Bruschettas & Pastas) ---
  {
    id: 'bruschettas-mix',
    category: 'tardear',
    subCategory: 'Bruschettas',
    name: 'Trío de Bruschettas Artesanales (3 unds)',
    price: 12000,
    badge: '3 Unidades',
    image: imgPlatosVarios,
    secondaryImage: imgComboTardear,
    description: 'Base de pan de corteza ciabatta crujiente recién tostado. Elige tus 3 sabores favoritos entre Caprese, Campesina, Tentativa, Roja, Umami o Valluna.',
    tags: ['Para Compartir', 'Ciabatta']
  },
  {
    id: 'bruschetta-caprese',
    category: 'tardear',
    subCategory: 'Bruschettas',
    name: 'Bruschetta Caprese',
    price: 12000,
    image: imgDesayunoCaprese,
    description: 'Salsa napolitana casera, tomate cherry, pesto artesanal, queso parmesano y albahaca fresca sobre ciabatta.',
    tags: ['Bruschetta', 'Caprese']
  },
  {
    id: 'bruschetta-campesina',
    category: 'tardear',
    subCategory: 'Bruschettas',
    name: 'Bruschetta Campesina',
    price: 12000,
    image: imgPlatosVarios,
    description: 'Chimichurri de la casa, trozos de chorizo doradito y queso campesino fundido.',
    tags: ['Bruschetta']
  },
  {
    id: 'bruschetta-tentativa',
    category: 'tardear',
    subCategory: 'Bruschettas',
    name: 'Bruschetta Tentativa',
    price: 12000,
    image: imgComboTardear,
    description: 'Queso crema untuoso, jamón serrano, durazno dulce, frutos secos tostados y un toque de miel pura.',
    tags: ['Bruschetta', 'Agridulce']
  },
  {
    id: 'bruschetta-roja',
    category: 'tardear',
    subCategory: 'Bruschettas',
    name: 'Bruschetta Roja',
    price: 12000,
    description: 'Queso crema suave, pimentón dulce confitado y hojas de rúgula fresca.',
    tags: ['Bruschetta']
  },
  {
    id: 'bruschetta-umami',
    category: 'tardear',
    subCategory: 'Bruschettas',
    name: 'Bruschetta Umami',
    price: 12000,
    description: 'Puré de plátano maduro meloso, tocineta crujiente y queso campesino.',
    tags: ['Bruschetta']
  },
  {
    id: 'bruschetta-valluna',
    category: 'tardear',
    subCategory: 'Bruschettas',
    name: 'Bruschetta Valluna',
    price: 12000,
    description: 'Carne o pollo desmechado bañado en salsa hogao tradicional, maduritos y queso campesino.',
    tags: ['Bruschetta']
  },

  // --- TARDEAR (Sandwiches & Hamburguesa) ---
  {
    id: 'rollo-hamburguesa',
    category: 'tardear',
    subCategory: 'Sandwiches & Hamburguesas',
    name: 'Rollo Hamburguesa La Puerta',
    price: 20000,
    badge: 'Especial de la Casa',
    image: imgHamburguesa2Png,
    secondaryImage: imgHamburguesa2,
    description: 'Pan rollo a elección, salsa obsesión de la casa, lechuga fresca, tomate, tocineta crocante, carne jugosa seleccionada, queso y cebolla encurtida morada.',
    tags: ['Hamburguesa', 'Pan de Rollo', 'Favorito']
  },
  {
    id: 'sandwich-carne',
    category: 'tardear',
    subCategory: 'Sandwiches & Hamburguesas',
    name: 'Sandwich de Carne',
    price: 20000,
    image: imgSandwich,
    description: 'Pan aliñado o pan rollo, lechuga, salsa napolitana, tomate, pesto, queso derretido y tierna carne desmechada.',
    tags: ['Sandwich Gourmet']
  },
  {
    id: 'sandwich-pollo',
    category: 'tardear',
    subCategory: 'Sandwiches & Hamburguesas',
    name: 'Sandwich de Pollo',
    price: 20000,
    image: imgSandwich,
    description: 'Pan aliñado o pan rollo, lechuga, tomate, queso crema, pepperoni, queso derretido, pollo desmechado jugoso y salsa napolitana.',
    tags: ['Sandwich Gourmet']
  },
  {
    id: 'sandwich-cosecha',
    category: 'tardear',
    subCategory: 'Sandwiches & Hamburguesas',
    name: 'Sandwich Cosecha',
    price: 20000,
    badge: 'Gourmet',
    image: imgDesayunoSandwich,
    description: 'Pan focaccia artesanal, queso crema, lechuga, rúgula, jamón serrano premium, pepperoni, queso búfala, tomate cherry y aceitunas negras.',
    tags: ['Focaccia', 'Serrano', 'Búfala']
  },
  {
    id: 'sandwich-choripan',
    category: 'tardear',
    subCategory: 'Sandwiches & Hamburguesas',
    name: 'Choripán La Puerta',
    price: 20000,
    image: imgSandwich,
    description: 'Pan aliñado o pan rollo, chimichurri casero, chorizo parrillero, lechuga, tomate, cebolla encurtida, maduritos y queso.',
    tags: ['Choripán', 'Tardear']
  },

  // --- TARDEAR (Pastas & Delicias a Otro Nivel) ---
  {
    id: 'pasta-carbonara',
    category: 'tardear',
    subCategory: 'Pastas & Platos Fuertes',
    name: 'Pasta Carbonara Artesanal',
    price: 24000,
    badge: 'Especialidad',
    image: imgPastaCarbonara,
    secondaryImage: imgCarbonara3,
    description: 'Pasta fresca al dente en salsa carbonara clásica con tocineta crocante dorada, queso parmesano curado y pimienta negra recién molida.',
    tags: ['Pasta Fresca', 'Carbonara', 'Italiano']
  },
  {
    id: 'pasta-napolitana',
    category: 'tardear',
    subCategory: 'Pastas & Platos Fuertes',
    name: 'Pasta Pomodoro & Pesto',
    price: 22000,
    image: imgPasta,
    secondaryImage: imgPasta3,
    description: 'Pasta bañada en reducción lenta de tomates frescos con aceite de oliva extra virgen, albahaca y gotas de pesto artesanal.',
    tags: ['Pasta Fresca', 'Vegetariano', 'Pesto']
  },
  {
    id: 'delicia-bowl-frijoles',
    category: 'tardear',
    subCategory: 'Pastas & Platos Fuertes',
    name: 'Cazuela / Bowl Campesino',
    price: 22000,
    badge: 'Tradicional',
    image: imgBowlFrijoles,
    secondaryImage: imgAlmuerzoFrijoles,
    description: 'Generosa cazuela campesina con frijoles sazonados, plátano maduro en cubos, chicharrón crocante, aguacate y arepita.',
    tags: ['Típico', 'Contundente', 'Tradición']
  },
  {
    id: 'delicia-juan-valerios',
    category: 'tardear',
    subCategory: 'Pastas & Platos Fuertes',
    name: 'Juan Valerios',
    price: 12000,
    badge: 'Exclusivo',
    image: imgPlatosVarios,
    description: 'Masa de plátano maduro con chicharrón crocante, corazón relleno de queso fundido, acompañado con salsa chimichurri.',
    tags: ['Maduro', 'Chicharrón', 'Plato Estrella']
  },
  {
    id: 'delicia-ceviche-chicharron',
    category: 'tardear',
    subCategory: 'Pastas & Platos Fuertes',
    name: 'Ceviche de Chicharrón',
    price: 20000,
    badge: 'Imperdible',
    image: imgPlatosVarios,
    description: 'Crujientes trozos de chicharrón artesanal marinados en una fresca mezcla cítrica con cebolla morada, limón, cilantro y el toque secreto de la casa.',
    tags: ['Ceviche', 'Chicharrón', 'Cítrico']
  },
  {
    id: 'delicia-lomo-cafe',
    category: 'tardear',
    subCategory: 'Pastas & Platos Fuertes',
    name: 'Lomo de Café',
    price: 30000,
    badge: 'Plato Fuerte',
    image: imgPasta4,
    description: 'Puré de papa suave, corte de lomo tierno sellado al término, bañado en reducción de salsa de café, espárragos salteados y chips crocantes de plátano.',
    tags: ['Cena / Tardear', 'Lomo', 'Café']
  },
  {
    id: 'delicia-lomo-salteado',
    category: 'tardear',
    subCategory: 'Pastas & Platos Fuertes',
    name: 'Lomo Salteado',
    price: 25000,
    badge: 'Recomendado',
    image: imgPastaGenerica3,
    description: 'Tiras de lomo salteado al wok en salsa agridulce con cebolla morada, pimentón, calabacín tierno, acompañado de arepa tostada.',
    tags: ['Lomo', 'Salteado']
  },

  // --- DULCES & POSTRES ---
  {
    id: 'dulce-sweet-waffle',
    category: 'dulces',
    name: 'Sweet Waffle Clásico',
    price: 12000,
    badge: 'Delicioso',
    image: imgWaffle2,
    secondaryImage: imgWaffles3,
    description: 'Waffle dorado y crujiente cubierto con chocolate fundido, mermelada artesanal y bola de helado cremoso.',
    tags: ['Waffle', 'Helado', 'Dulce']
  },
  {
    id: 'dulce-brownie-helado',
    category: 'dulces',
    name: 'Brownie / Galleta con Helado',
    price: 10000,
    image: imgCookie,
    description: 'Brownie húmedo de chocolate o galleta recién horneada tibia servida con helado de vainilla.',
    tags: ['Brownie', 'Helado']
  },
  {
    id: 'dulce-waffle-pandebono',
    category: 'dulces',
    name: 'Waffle de Pandebono con Arequipe',
    price: 12000,
    badge: 'Típico Recreado',
    image: imgWaffle,
    secondaryImage: imgWaffle2,
    description: 'Waffle elaborado con masa de pandebono crocante por fuera y suave por dentro, bañado con mermelada y arequipe.',
    tags: ['Pandebono', 'Arequipe', 'Especial']
  },
  {
    id: 'dulce-nevado',
    category: 'dulces',
    name: 'Nevado de Frutos Rojos / Amarillos',
    price: 14000,
    badge: 'Refrescante',
    image: imgBebidaFresa,
    secondaryImage: imgSmoothieFrutosRojos,
    description: 'Generosas capas de fruta fresca, crema dulce suave, lluvia de queso rallado y helado cremoso.',
    tags: ['Copas', 'Frutas']
  },
  {
    id: 'dulce-tostadas-clasicas',
    category: 'dulces',
    name: 'Tostadas Francesas Clásicas',
    price: 10000,
    image: imgWaffles3,
    description: 'Pan brioche bañado en mezcla de vainilla y canela, dorado a la mantequilla con miel y fruta.',
    tags: ['French Toast']
  },
  {
    id: 'dulce-tostadas-creme-brulee',
    category: 'dulces',
    name: 'Tostadas Francesas Crème Brûlée',
    price: 12000,
    badge: 'Gourmet',
    image: imgWaffles3,
    description: 'Tostadas francesas coronadas con crema sedosa y una crujiente capa de azúcar caramelizada al fuego.',
    tags: ['French Toast', 'Crème Brûlée']
  },
  {
    id: 'dulce-tostadas-tiramisu',
    category: 'dulces',
    name: 'Tostadas Francesas Tiramisú',
    price: 14000,
    badge: 'Favorito',
    image: imgPastelCafe,
    description: 'Tostadas francesas infusionadas con café espresso, crema mascarpone y cacao en polvo.',
    tags: ['French Toast', 'Tiramisú', 'Café']
  },
  {
    id: 'dulce-torta-temporada',
    category: 'dulces',
    name: 'Porción Torta de Temporada',
    price: 8000,
    image: imgPastel,
    description: 'Pregunta por la creación pastelera del día preparada por nuestros reposteros.',
    tags: ['Torta', 'Repostería']
  },
  {
    id: 'dulce-migao',
    category: 'dulces',
    name: 'Migao Tradicional La Puerta',
    price: 15000,
    badge: 'Experiencia',
    description: 'Tazón caliente con chocolate artesanal, pan, waffle de pandebono, grissinis crujientes, galleta y queso campesino derretido.',
    tags: ['Tradicional', 'Chocolate', 'Queso']
  },
  {
    id: 'dulce-cuchariable',
    category: 'dulces',
    name: 'Cuchariable (Torta en Vaso)',
    price: 15000,
    badge: 'Postre en Vaso',
    image: imgPastelFrutosRojos,
    description: 'Capas de bizcocho húmedo, rellenos cremosos y toppings para disfrutar a cucharadas.',
    tags: ['En Vaso', 'Pastelería']
  },

  // --- TORTAS ---
  {
    id: 'torta-zanahoria',
    category: 'tortas',
    name: 'Torta de Zanahoria',
    price: 8000,
    badge: 'Favorita',
    image: imgPastelZanahoria,
    secondaryImage: imgTortaZanahoria,
    description: 'Bizcocho esponjoso y húmedo de zanahoria con nueces tostadas, canela y suave frosting de queso crema.',
    tags: ['Porción Individual', 'Zanahoria', 'Queso Crema']
  },
  {
    id: 'torta-chocolate',
    category: 'tortas',
    name: 'Torta de Chocolate',
    price: 8000,
    image: imgPastelCafe,
    description: 'Intensidad de cacao puro en capas suaves con ganache sedoso de chocolate.',
    tags: ['Porción Individual', 'Chocolate']
  },
  {
    id: 'torta-naranja-amapola',
    category: 'tortas',
    name: 'Torta de Naranja y Semillas de Amapola',
    price: 8000,
    image: imgPastel,
    description: 'Sabor cítrico refrescante de naranja natural complementado con el crujido de la amapola.',
    tags: ['Porción Individual', 'Cítrico']
  },
  {
    id: 'torta-red-velvet',
    category: 'tortas',
    name: 'Torta Red Velvet',
    price: 8000,
    badge: 'Clásico',
    image: imgPastelRedVelvet,
    secondaryImage: imgPastelRedVelvet2,
    description: 'El clásico terciopelo rojo con un delicado toque de cacao y capas de crema de queso.',
    tags: ['Porción Individual', 'Red Velvet']
  },
  {
    id: 'torta-blue-velvet',
    category: 'tortas',
    name: 'Torta Blue Velvet',
    price: 8000,
    image: imgPastelRedVelvet2,
    description: 'Innovadora versión terciopelo azul con notas avainilladas y suave cobertura.',
    tags: ['Porción Individual']
  },
  {
    id: 'torta-coco',
    category: 'tortas',
    name: 'Torta de Coco',
    price: 8000,
    image: imgPastel,
    description: 'Esponjosa y perfumada con coco rallado natural y crema ligera.',
    tags: ['Porción Individual', 'Coco']
  },
  {
    id: 'torta-cafe',
    category: 'tortas',
    name: 'Torta de Café',
    price: 8000,
    badge: 'De la Casa',
    image: imgPastelCafe,
    description: 'Bizcocho humedecido con extracto de café de especialidad y crema suave.',
    tags: ['Porción Individual', 'Café de Especialidad']
  },
  {
    id: 'torta-limon-arandanos',
    category: 'tortas',
    name: 'Torta de Limón y Arándanos',
    price: 8000,
    image: imgPastelFresa,
    description: 'Balance cítrico de limón fresco con arándanos enteros jugosos horneados.',
    tags: ['Porción Individual', 'Frutas']
  },
  {
    id: 'torta-pandebono',
    category: 'tortas',
    name: 'Torta de Pandebono',
    price: 8000,
    image: imgPastel,
    description: 'Torta suave con todo el sabor quesudo y característico del pandebono.',
    tags: ['Porción Individual', 'Típico']
  },
  {
    id: 'torta-cheesecake',
    category: 'tortas',
    name: 'Cheesecake Frutos Rojos',
    price: 8000,
    badge: 'Recomendado',
    image: imgPastelFrutosRojos,
    secondaryImage: imgPastelFresa,
    description: 'Cremoso pastel de queso al estilo tradicional sobre base crocante de galleta y coulis de frutos rojos.',
    tags: ['Porción Individual', 'Cheesecake']
  },

  // --- GALLETAS ---
  {
    id: 'galleta-clasica',
    category: 'galletas',
    name: 'Galleta Clásica Artesanal',
    price: 8000,
    badge: 'Favorita',
    image: imgGalleta,
    secondaryImage: imgCookie,
    description: 'Masa tradicional dorada con chips de chocolate, trozos de frutos secos y centro suave recién salido del horno.',
    tags: ['Galleta Artesanal', 'Recién Horneada', 'Chips Chocolate']
  },
  {
    id: 'galleta-chocolate',
    category: 'galletas',
    name: 'Galleta Doble Chocolate',
    price: 8000,
    image: imgGalleta3,
    description: 'Para los amantes del cacao: masa de chocolate oscuro con chispas de chocolate fundente.',
    tags: ['Galleta Artesanal', 'Chocolate']
  },
  {
    id: 'galleta-red-velvet',
    category: 'galletas',
    name: 'Galleta Red Velvet',
    price: 8000,
    badge: 'Especial',
    image: imgGalletaRoja,
    description: 'Color escarlata aterciopelado con gotas de chocolate blanco cremoso.',
    tags: ['Galleta Artesanal', 'Red Velvet']
  },
  {
    id: 'galleta-mantequilla-mani',
    category: 'galletas',
    name: 'Galleta de Mantequilla de Maní',
    price: 8000,
    image: imgCookie,
    description: 'Rica en textura y sabor a cacahuate tostado con un toque sutil de sal marina.',
    tags: ['Galleta Artesanal', 'Maní']
  },
  {
    id: 'galleta-nucita',
    category: 'galletas',
    name: 'Galleta Nucita & Klim',
    price: 8000,
    image: imgGalletaKlim,
    description: 'Rellena con suave crema Nucita avellana y leche, inspirada en los sabores de siempre.',
    tags: ['Galleta Artesanal', 'Nucita']
  },
  {
    id: 'galleta-nutella',
    category: 'galletas',
    name: 'Galleta Nutella',
    price: 8000,
    badge: 'Favorita',
    image: imgGalleta3,
    secondaryImage: imgGalletasVarioas2,
    description: 'Centro derretido cargado de avellanas y chocolate Nutella.',
    tags: ['Galleta Artesanal', 'Nutella']
  },
  {
    id: 'galleta-oreo',
    category: 'galletas',
    name: 'Galleta Oreo Cookies & Cream',
    price: 8000,
    image: imgGalletasVariadas2,
    description: 'Trozos crujientes de Oreo integrados en masa de galleta horneada al punto.',
    tags: ['Galleta Artesanal', 'Oreo']
  },

  // --- PANADERÍA ---
  {
    id: 'pan-rollo-sabores',
    category: 'panaderia',
    subCategory: 'Panes de Rollo',
    name: 'Pan de Rollo Relleno ($5.000 c/u)',
    price: 5000,
    badge: '$5.000 c/u',
    image: imgPanChocha,
    secondaryImage: imgPanChocha2,
    description: 'Masa suave y esponjosa enrollada con tu relleno preferido: Ajo, Pesto, Pepperoni, Canela, Mantequilla de Maní, o Dulce de Guayaba y Queso.',
    tags: ['Panadería Fresca', 'Salado / Dulce', 'Recién Horneado']
  },
  {
    id: 'pan-alinado',
    category: 'panaderia',
    subCategory: 'Panes Artesanales',
    name: 'Pan Aliñado Completo',
    price: 14000,
    image: imgPanChocha3,
    description: 'Pan tradicional suave y aromatizado con el auténtico sazón de la panadería de antaño.',
    tags: ['Pan Entero']
  },
  {
    id: 'pan-integral',
    category: 'panaderia',
    subCategory: 'Panes Artesanales',
    name: 'Pan Integral',
    price: 15000,
    image: imgPanChocha4,
    description: 'Elaborado con harina integral y semillas para una digestión balanceada y sabor rústico.',
    tags: ['Pan Entero', 'Saludable']
  },
  {
    id: 'pan-focaccia',
    category: 'panaderia',
    subCategory: 'Panes Artesanales',
    name: 'Focaccia Artesanal',
    price: 16000,
    badge: 'Italiano',
    image: imgDesayunoCaprese,
    secondaryImage: imgPanChocha,
    description: 'Pan italiano de masa madre con aceite de oliva extra virgen, romero fresco y sal marina.',
    tags: ['Pan Entero', 'Aceite de Oliva', 'Masa Madre']
  },
  {
    id: 'pan-ciabatta',
    category: 'panaderia',
    subCategory: 'Panes Artesanales',
    name: 'Pan Ciabatta',
    price: 6000,
    image: imgPanChocha2,
    description: 'Corteza bien crujiente y miga aireada y elástica, ideal para bruschettas y bocadillos.',
    tags: ['Pan Artesanal']
  },
  {
    id: 'pan-engordacion',
    category: 'panaderia',
    subCategory: 'Panes Artesanales',
    name: 'Pan "La Engordación"',
    price: 16000,
    badge: 'Especialidad',
    image: imgPanChocha4,
    description: 'Nuestra creación estrella cargada de queso derretido, mantequilla y sabor sin remordimientos.',
    tags: ['Pan Entero', 'Generoso', 'Quesudo']
  },
  {
    id: 'pan-grissinis',
    category: 'panaderia',
    subCategory: 'Panes Artesanales',
    name: 'Grissinis Crujientes',
    price: 3000,
    image: imgPanChocha3,
    description: 'Bastoncitos de pan crocantes horneados, perfectos para acompañar cafés, salsas o dips.',
    tags: ['Snack']
  }
];
