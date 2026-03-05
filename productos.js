/* ============================================================
   KM DECORA — productos.js
   Base de datos central de productos.
   Para agregar un producto: copia un objeto existente,
   cambia el id (debe ser único), llena los campos y listo.
   Las imágenes son placeholders de Unsplash — reemplaza
   el array "fotos" con tus propias imágenes.
   ============================================================ */

const KM_PRODUCTOS = [

  // ──────────────────────────────────────────────
  // DESAYUNOS & ALMUERZOS
  // ──────────────────────────────────────────────
  {
    id: "da-001",
    categoria: "desayunos",
    nombre: "Desayuno Romántico Coral",
    descripcion: "El detalle perfecto para esa persona especial. Incluye waffles con fruta, jugo natural, café o chocolate caliente, y una tarjeta personalizada con tu mensaje.",
    descripcionLarga: "Empieza el día de alguien especial con este desayuno pensado al detalle. Cada elemento está seleccionado para crear una experiencia inolvidable: waffles esponjosos acompañados de fruta de temporada, un vaso de jugo natural recién preparado, bebida caliente a elección (café, chocolate o té) y una tarjeta escrita a mano con tu mensaje. Presentación en caja kraft decorada con listón y flores secas.",
    precio: 380,
    unidad: "desayuno",
    disponible: true,
    anticipacion: "1 día",
    fotos: [
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=800",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800"
    ],
    incluye: ["Waffles con fruta", "Jugo natural", "Bebida caliente", "Tarjeta personalizada", "Caja kraft decorada"],
    tags: ["romántico", "cumpleaños", "aniversario"]
  },
  {
    id: "da-002",
    categoria: "desayunos",
    nombre: "Almuerzo Sorpresa Completo",
    descripcion: "Un almuerzo completo y delicioso con todo lo que necesitas para sorprender a alguien a mediodía. Incluye botana, platillo principal, postre y bebida.",
    descripcionLarga: "Porque las sorpresas no son solo de mañana. Este almuerzo sorpresa incluye una variedad de antojitos o botana para abrir boca, un platillo principal a elección (pasta, ensalada gourmet o sándwich artesanal), postre del día y bebida fría o caliente. Todo en presentación especial con globo y mensaje.",
    precio: 450,
    unidad: "almuerzo",
    disponible: true,
    anticipacion: "1 día",
    fotos: [
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800"
    ],
    incluye: ["Botana o antojitos", "Platillo principal", "Postre del día", "Bebida", "Globo y mensaje"],
    tags: ["almuerzo", "sorpresa", "cumpleaños"]
  },
  {
    id: "da-003",
    categoria: "desayunos",
    nombre: "Box Desayuno Fitness",
    descripcion: "Para quien cuida su alimentación sin renunciar al placer. Bowl de granola, frutas, yogurt griego, huevos al gusto y agua de frutas.",
    descripcionLarga: "El regalo ideal para la persona fitness de tu vida. Este box saludable incluye un bowl de granola artesanal con leche de almendra, bowl de frutas de temporada, yogurt griego con miel y semillas, huevos al gusto (revueltos o benedictinos) y agua fresca de frutas. Presentación en caja blanca con detalle verde y etiqueta personalizada.",
    precio: 320,
    unidad: "box",
    disponible: true,
    anticipacion: "1 día",
    fotos: [
      "https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=800",
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=800",
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800"
    ],
    incluye: ["Granola artesanal", "Bowl de frutas", "Yogurt griego", "Huevos al gusto", "Agua fresca"],
    tags: ["saludable", "fitness", "ligero"]
  },

  // ──────────────────────────────────────────────
  // PASTELES & GELATINAS
  // ──────────────────────────────────────────────
  {
    id: "pg-001",
    categoria: "reposteria",
    nombre: "Pastel de Cumpleaños Personalizado",
    descripcion: "Pastel artesanal decorado a tu gusto con el tema, nombre y mensaje que elijas. Sabores disponibles: vainilla, chocolate, red velvet, fresa.",
    descripcionLarga: "Nuestros pasteles son elaborados artesanalmente con ingredientes de calidad. Puedes elegir el sabor del bizcocho (vainilla, chocolate, red velvet o fresa), el tipo de relleno (crema, nutella, cajeta o mermelada de fresa) y el diseño decorativo. Cada pastel incluye decoración temática, mensaje escrito y velas. Disponibles en tamaños: 15, 20 y 25 cm de diámetro.",
    precio: 350,
    unidad: "pastel",
    disponible: true,
    anticipacion: "2 días",
    fotos: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800"
    ],
    incluye: ["Bizcocho artesanal", "Relleno a elegir", "Decoración temática", "Mensaje personalizado", "Velas"],
    tags: ["cumpleaños", "personalizado", "artesanal"]
  },
  {
    id: "pg-002",
    categoria: "reposteria",
    nombre: "Gelatina Artística de Flores",
    descripcion: "Gelatinas con flores en 3D hechas a mano. Una obra de arte comestible perfecta para regalar o decorar tu evento. Tamaños y sabores a elegir.",
    descripcionLarga: "Cada gelatina es una pieza única creada con la técnica de flores en 3D. Usando gelatina de sabor y colorantes naturales, nuestras artesanas insertan flores y diseños florales al interior de cada pieza. El resultado es un postre que parece escultura. Disponibles en individual (500ml), mediana (1lt) y grande para eventos (3lt). Sabores: leche con vainilla, maracuyá, fresa o menta.",
    precio: 120,
    unidad: "gelatina",
    disponible: true,
    anticipacion: "1 día",
    fotos: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800",
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800"
    ],
    incluye: ["Flores 3D hechas a mano", "Sabor a elegir", "Presentación en recipiente decorado"],
    tags: ["postre", "artístico", "flores", "evento"]
  },
  {
    id: "pg-003",
    categoria: "reposteria",
    nombre: "Cupcakes Decorados (docena)",
    descripcion: "Docena de cupcakes decorados con buttercream artesanal. Perfectos para cumpleaños, baby shower, graduaciones o cualquier celebración.",
    descripcionLarga: "Cada cupcake es una pequeña obra de arte. Bizcocho esponjoso en el sabor que elijas, cubierto con buttercream decorado a mano con técnica de flores, letras o temática especial. Disponibles en presentación individual, media docena o docena. El precio mostrado es por docena. Consulta disponibilidad de temas personalizados.",
    precio: 280,
    unidad: "docena",
    disponible: true,
    anticipacion: "1 día",
    fotos: [
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=800",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800",
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800"
    ],
    incluye: ["12 cupcakes", "Buttercream artesanal", "Decoración temática", "Caja de presentación"],
    tags: ["cupcakes", "baby shower", "graduación", "cumpleaños"]
  },

  // ──────────────────────────────────────────────
  // FLORES & DECORACIÓN
  // ──────────────────────────────────────────────
  {
    id: "fl-001",
    categoria: "flores",
    nombre: "Ramo Romántico Mixto",
    descripcion: "Ramo artesanal con flores frescas de temporada. Rosas, girasoles, lisianthus y follaje verde. Envuelto en papel kraft con listón personalizado.",
    descripcionLarga: "Cada ramo es armado al momento con las flores más frescas del día. Combinamos rosas, girasoles, lisianthus y follaje según disponibilidad, garantizando un arreglo único. El ramo viene envuelto en papel kraft o tisú de colores con listón y tarjeta de mensaje. Disponible en tamaños: pequeño (10 tallos), mediano (18 tallos) y grande (25+ tallos). El precio mostrado es para el mediano.",
    precio: 250,
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: [
      "https://images.unsplash.com/photo-1487530811015-780dfd4f5571?q=80&w=800",
      "https://images.unsplash.com/photo-1490750967868-88df5691cc7e?q=80&w=800",
      "https://images.unsplash.com/photo-1477120128765-a0528148fed2?q=80&w=800"
    ],
    incluye: ["Flores frescas de temporada", "Follaje verde", "Papel kraft o tisú", "Listón", "Tarjeta de mensaje"],
    tags: ["flores", "romántico", "aniversario", "cumpleaños"]
  },
  {
    id: "fl-002",
    categoria: "flores",
    nombre: "Arreglo Floral con Globos",
    descripcion: "Arreglo floral en base decorativa combinado con globos personalizados. Ideal para cumpleaños, baby shower y celebraciones especiales.",
    descripcionLarga: "Combina lo mejor de dos mundos: un arreglo floral fresco en base decorativa (maceta de terracota o caja de madera a elegir) acompañado de un ramo de globos de látex y/o metalizado con la temática o mensaje que necesites. Perfectamente coordinados en colores. El arreglo se puede adaptar para cumpleaños, baby shower, graduación o cualquier ocasión especial.",
    precio: 420,
    unidad: "arreglo",
    disponible: true,
    anticipacion: "1 día",
    fotos: [
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800",
      "https://images.unsplash.com/photo-1558618047-f4e60cefbf58?q=80&w=800"
    ],
    incluye: ["Arreglo floral fresco", "Globos decorativos", "Base decorativa", "Mensaje personalizado"],
    tags: ["globos", "arreglo", "baby shower", "cumpleaños"]
  },
  {
    id: "fl-003",
    categoria: "flores",
    nombre: "Decoración para Evento Completa",
    descripcion: "Decoración temática completa para tu evento: centro de mesas, arco floral, globos y detalles coordinados. Cotización personalizada.",
    descripcionLarga: "Transforma cualquier espacio con nuestra decoración personalizada para eventos. Incluye servicio de consultoría para definir colores y temática, centro de mesas, arco floral o backdrop, globos decorativos y detalles coordinados. Ideal para cumpleaños, XV años, baby shower, boda o graduación. El precio mostrado es una referencia base; el costo final depende del tamaño del evento y número de elementos. Solicita tu cotización.",
    precio: 1500,
    unidad: "evento",
    disponible: true,
    anticipacion: "3 días",
    fotos: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800"
    ],
    incluye: ["Consultoría de diseño", "Centro de mesas", "Arco floral o backdrop", "Globos decorativos", "Coordinación de colores"],
    tags: ["evento", "XV años", "boda", "baby shower", "graduación"]
  },

  // ──────────────────────────────────────────────
  // MESAS DE DULCES
  // ──────────────────────────────────────────────
  {
    id: "md-001",
    categoria: "mesas",
    nombre: "Mesa de Dulces Básica (20 personas)",
    descripcion: "Mesa de dulces completa y decorada para 20 personas. Incluye dulces, chocolates, paletas, minipasteles y decoración temática coordinada.",
    descripcionLarga: "Una mesa de dulces es el corazón de cualquier celebración. Nuestro paquete básico para 20 personas incluye: variedad de 5 tipos de dulces y chocolates, paletas de caramelo artesanales, minipasteles o galletas decoradas, dulces tradicionales mexicanos, y toda la decoración temática (mesas, manteles, bases, letras decorativas y señalética). Disponible en cualquier temática y paleta de colores. El servicio incluye armado y desarmado en el lugar.",
    precio: 2500,
    unidad: "servicio",
    disponible: true,
    anticipacion: "3 días",
    fotos: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800",
      "https://images.unsplash.com/photo-1558303571-31eda57d08e6?q=80&w=800",
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800"
    ],
    incluye: ["Dulces y chocolates", "Paletas artesanales", "Minipasteles o galletas", "Decoración temática completa", "Armado y desarmado"],
    tags: ["mesa de dulces", "eventos", "cumpleaños", "XV años"]
  },
  {
    id: "md-002",
    categoria: "mesas",
    nombre: "Mesa de Dulces Premium (50 personas)",
    descripcion: "Mesa de dulces de lujo para 50 personas con variedad premium de dulces importados, chocolates belgas, macarons, cake pops y decoración exclusiva.",
    descripcionLarga: "La experiencia dulce más completa para eventos grandes. Diseñada para 50 personas, esta mesa premium incluye: dulces y chocolates de importación, macarons franceses, cake pops decorados, chocolates belgas, algodón de azúcar, gominolas artesanales, fuente de chocolate, y decoración exclusiva de lujo con elementos metálicos, florales y personalizados. Perfecta para bodas, XV años o eventos corporativos.",
    precio: 5500,
    unidad: "servicio",
    disponible: true,
    anticipacion: "5 días",
    fotos: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
      "https://images.unsplash.com/photo-1499396010904-4e0bf79e8e7e?q=80&w=800",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800"
    ],
    incluye: ["Dulces y chocolates premium", "Macarons franceses", "Cake pops", "Fuente de chocolate", "Decoración exclusiva", "Armado y desarmado"],
    tags: ["premium", "boda", "XV años", "corporativo"]
  },

  // ──────────────────────────────────────────────
  // ACCESORIOS
  // ──────────────────────────────────────────────
  {
    id: "ac-001",
    categoria: "accesorios",
    nombre: "Taza Personalizada",
    descripcion: "Taza de cerámica de 11oz con diseño personalizado. Nombre, foto o mensaje a tu elección. Resistente al lavavajillas. Ideal para regalar.",
    descripcionLarga: "Una taza es el regalo más personal del día a día. Nuestras tazas de cerámica de alta calidad (11oz) se personalizan con el diseño que elijas: nombre con diseño gráfico, foto, frase especial o combinación. El diseño se aplica con técnica de sublimación permanente, resistente al lavavajillas y microondas. Disponibles en blanco, negro, dos tonos y colores pastel. Tiempo de elaboración: 24 horas.",
    precio: 180,
    unidad: "taza",
    disponible: true,
    anticipacion: "1 día",
    fotos: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800",
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?q=80&w=800",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800"
    ],
    incluye: ["Taza cerámica 11oz", "Diseño personalizado", "Sublimación permanente", "Caja de regalo"],
    tags: ["personalizado", "taza", "regalo", "sublimación"]
  },
  {
    id: "ac-002",
    categoria: "accesorios",
    nombre: "Vaso con Popote Personalizado",
    descripcion: "Vaso acrílico de 16oz o 22oz con tapa y popote de acero inoxidable. Personalizado con nombre o diseño a tu elección. Colores: transparente, rosa, verde menta.",
    descripcionLarga: "Los vasos personalizados son tendencia y el regalo perfecto para cualquier edad. Disponibles en 16oz y 22oz de acrílico de alta calidad con tapa segura y popote reutilizable de acero inoxidable. Se personalizan con nombre, iniciales, diseño o frase en vinil de corte o impresión UV. Resistentes al frío y calor moderado. Colores disponibles: transparente, rosa claro, verde menta, lila y negro. Incluye caja kraft de regalo.",
    precio: 220,
    unidad: "vaso",
    disponible: true,
    anticipacion: "1 día",
    fotos: [
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800"
    ],
    incluye: ["Vaso acrílico", "Tapa con popote inox", "Diseño personalizado", "Caja kraft de regalo"],
    tags: ["vaso", "personalizado", "regalo", "popote"]
  },
  {
    id: "ac-003",
    categoria: "accesorios",
    nombre: "Gorra Bordada Personalizada",
    descripcion: "Gorra dad hat o snapback con bordado personalizado. Nombre, iniciales o diseño a tu elección. Tela de algodón de alta calidad. Ideal para regalo o merchandising.",
    descripcionLarga: "Las gorras personalizadas son un regalo original y funcional. Disponibles en estilo dad hat (ajustable con hebilla) o snapback (talla única ajustable) en tela de algodón de alta calidad. El bordado se realiza con hilo de alta densidad en el frente y/o parte trasera. Puedes elegir: nombre, iniciales, frase corta o logotipo. Colores de gorra disponibles: negro, blanco, beige, verde menta, rosa y azul marino. Colores de hilo a elegir.",
    precio: 350,
    unidad: "gorra",
    disponible: true,
    anticipacion: "2 días",
    fotos: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=800"
    ],
    incluye: ["Gorra algodón", "Bordado personalizado", "Caja de presentación"],
    tags: ["gorra", "personalizado", "bordado", "regalo"]
  }
];

/* ── Funciones de utilidad ──────────────────────────────── */

// Obtener producto por ID
function getProductoById(id) {
  return KM_PRODUCTOS.find(p => p.id === id) || null;
}

// Filtrar por categoría ('todos' devuelve todos)
function getProductosByCategoria(cat) {
  if (cat === 'todos') return KM_PRODUCTOS;
  return KM_PRODUCTOS.filter(p => p.categoria === cat);
}

// Buscar por texto en nombre, descripción o tags
function buscarProductos(query) {
  const q = query.toLowerCase().trim();
  if (!q) return KM_PRODUCTOS;
  return KM_PRODUCTOS.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.descripcion.toLowerCase().includes(q) ||
    (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
  );
}
