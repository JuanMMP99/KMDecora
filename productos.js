/* ============================================================
   KM DECORA — productos.js
   Base de datos central de productos.

   CÓMO AGREGAR UN PRODUCTO:
   Copia un objeto existente, cambia el id (único) y llena
   los campos. El campo "fotos" usa rutas locales con el
   identificador del catálogo como nombre de archivo.

   ESTRUCTURA DE CARPETA DE IMÁGENES:
   img/
     desayunos/   → ID1.jpg, ID2.jpg ... ID38.jpg
     reposteria/  → (tus fotos cuando las tengas)
     flores/      → (tus fotos cuando las tengas)
     mesas/       → (tus fotos cuando las tengas)
     accesorios/  → (tus fotos cuando las tengas)

   NOTA sobre ID1: El precio no está definido en el catálogo
   original. Actualiza el campo "precio" cuando lo tengas.
   ============================================================ */

const KM_PRODUCTOS = [
  // ──────────────────────────────────────────────────────────
  // DESAYUNOS & ALMUERZOS  (38 paquetes del catálogo real)
  // *Los desayunos pueden contener flores y algún dulce o
  //  chocolate como cortesía, sujetos a disponibilidad.
  // ──────────────────────────────────────────────────────────

  {
    id: "ID39",
    categoria: "canastas",
    nombre: "Canasta Grande",
    descripcion:
      "Canasta surtida con 1 kg de tasajo, costilla, cecina y chorizo, acompañada de guacamole, pasta de frijol y guarniciones tradicionales.",
    descripcionLarga:
      "Ideal para compartir en grande. Incluye 1 kg de cada carne: tasajo, costilla, cecina y chorizo. Se acompaña con salsa guacamole, pasta de frijol, rábanos, cebollas, nopales, chiles de agua y chepiches.",
    precio: 2000,
    precioTexto: "$2000 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/desayunos/ID39.jpeg"],
    incluye: [
      "1 kg de tasajo",
      "1 kg de costilla",
      "1 kg de cecina",
      "1 kg de chorizo",
      "Salsa",
      "Guacamole",
      "Pasta de frijol",
      "Rábanos",
      "Cebollas",
      "Nopales",
      "Chiles de agua",
      "Chepiches",
    ],
    tags: ["tasajo", "costilla", "cecina", "chorizo", "compartir"],
  },
  {
    id: "ID40",
    categoria: "canastas",
    nombre: "Canasta Mediana",
    descripcion:
      "Canasta surtida con medio kilo de tasajo, costilla, cecina y chorizo, acompañada de nopales, aguacate y guarniciones tradicionales.",
    descripcionLarga:
      "Perfecta para una reunión pequeña. Incluye medio kilo de cada carne: tasajo, costilla, cecina y chorizo. Acompañada de nopales, chiles de agua, cebollas, limones y aguacate.",
    precio: 1000,
    precioTexto: "$1000 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/desayunos/ID40.jpeg"],
    incluye: [
      "1/2 kg de tasajo",
      "1/2 kg de costilla",
      "1/2 kg de cecina",
      "1/2 kg de chorizo",
      "Nopales",
      "Chiles de agua",
      "Cebollas",
      "Limones",
      "Aguacate",
    ],
    tags: ["tasajo", "costilla", "cecina", "chorizo", "mediana"],
  },
  {
    id: "ID41",
    categoria: "canastas",
    nombre: "Canasta Chica",
    descripcion:
      "Canasta práctica con 350 g de tasajo, costilla, cecina y chorizo, acompañada de cebollas y chiles de agua.",
    descripcionLarga:
      "Una opción perfecta para disfrutar en pequeño. Incluye 350 g de cada carne: tasajo, costilla, cecina y chorizo. Se acompaña con nopales, cebollas y chiles de agua.",
    precio: 500,
    precioTexto: "$500 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/desayunos/ID41.jpeg"],
    incluye: [
      "350 g de tasajo",
      "350 g de costilla",
      "350 g de cecina",
      "350 g de chorizo",
      "Nopales",
      "Cebollas",
      "Chiles de agua",
    ],
    tags: ["tasajo", "costilla", "cecina", "chorizo", "chica"],
  },

  {
    id: "ID3",
    categoria: "desayunos",
    nombre: "Desayuno Oaxaqueño Festivo",
    descripcion:
      "Hot cakes, fruta, cupcakes, gelatinas, fresas con crema, enchiladas verdes con tasajo, jugo, yogurt y canasta de carnes. ¡Un festín completo!",
    descripcionLarga:
      "Un desayuno que combina lo mejor de la cocina oaxaqueña con los postres más queridos. Incluye hot cakes, fruta fresca, 4 cupcakes, 2 gelatinas, fresas con crema, platillo de enchiladas verdes con tasajo, jugo natural, yogurt y canasta de carnes.",
    precio: 1050,
    precioTexto: "$1050 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/desayunos/ID3.jpeg"],
    incluye: [
      "Hot cakes",
      "Fruta",
      "Cupcakes (4 piezas)",
      "Gelatinas (2 piezas)",
      "Fresas con crema",
      "Platillo (enchiladas verdes con tasajo)",
      "Jugo natural",
      "Yogurt",
      "Canasta de carnes",
    ],
    tags: ["oaxaqueño", "enchiladas", "tasajo", "completo", "festivo"],
  },
  {
    id: "ID9",
    categoria: "desayunos",
    nombre: "Desayuno Enchiladas",
    descripcion:
      "Hot cakes, fruta, 4 cupcakes, 2 gelatinas, fresas con crema, enchiladas verdes con tasajo, jugo y yogurt. El clásico favorito.",
    descripcionLarga:
      "El desayuno clásico y completo que todos aman. Incluye hot cakes, fruta fresca, 4 cupcakes, 2 gelatinas, fresas con crema, platillo de enchiladas verdes con tasajo, 1 jugo y yogurt.",
    precio: 550,
    precioTexto: "$550 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/desayunos/ID9.jpeg"],
    incluye: [
      "Hot cakes",
      "Fruta",
      "Cupcakes (4 piezas)",
      "Gelatinas (2 piezas)",
      "Fresas con crema",
      "Platillo (enchiladas verdes con tasajo)",
      "Jugo",
      "Yogurt",
    ],
    tags: ["enchiladas", "tasajo", "clásico", "hot cakes"],
  },
  {
    id: "ID10",
    categoria: "desayunos",
    nombre: "Desayuno Pechuga",
    descripcion:
      "Hot cakes, fruta, 4 cupcakes, 2 gelatinas, pechuga empanizada con spaghetti, jugo, 2 yogurts y 2 frappes. ¡El más completo!",
    descripcionLarga:
      "El paquete más completo de la colección. Incluye hot cakes, fruta fresca, 4 cupcakes, 2 gelatinas, platillo de pechuga empanizada con spaghetti y verduras, jugo, 2 yogurts y 2 frappes helados.",
    precio: 700,
    precioTexto: "$700 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/desayunos/ID10.jpeg"],
    incluye: [
      "Hot cakes",
      "Fruta",
      "Cupcakes (4 piezas)",
      "Gelatinas (2 piezas)",
      "Platillo (pechuga empanizada con spaghetti y verduras)",
      "Jugo",
      "Yogurt (2 piezas)",
      "2 Frappes",
    ],
    tags: ["frappe", "pechuga", "completo", "hot cakes"],
  },
  {
    id: "ID13",
    categoria: "desayunos",
    nombre: "Desayuno Entomatadas con Tasajo",
    descripcion:
      "Hot cakes, fruta, 2 cupcakes, 2 gelatinas, entomatadas con tasajo, 1 jugo, yogurt y fresas con crema. Sabor oaxaqueño.",
    descripcionLarga:
      "Un desayuno con el auténtico sabor de Oaxaca. Incluye hot cakes, fruta fresca, 2 cupcakes, 2 gelatinas, platillo de entomatadas con tasajo, 1 jugo, yogurt y fresas con crema.",
    precio: 550,
    precioTexto: "$550 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/desayunos/ID13.jpeg"],
    incluye: [
      "Hot cakes",
      "Fruta",
      "Cupcakes (2 piezas)",
      "Gelatinas (2 piezas)",
      "Platillo (entomatadas con tasajo)",
      "1 Jugo",
      "Yogurt",
      "Fresas con crema",
    ],
    tags: ["oaxaqueño", "entomatadas", "tasajo", "hot cakes"],
  },
  {
    id: "ID14",
    categoria: "desayunos",
    nombre: "Desayuno Pechuga con Ensalada",
    descripcion:
      "Hot cakes, fruta, 2 cupcakes, 1 gelatina, pechuga con ensalada y verduras + salsa, jugo natural. Fresco y nutritivo.",
    descripcionLarga:
      "Una opción fresca y nutritiva. Incluye hot cakes, fruta fresca, 2 cupcakes, 1 gelatina y platillo de pechuga con ensalada y verduras acompañada de salsa, más jugo natural.",
    precio: 500,
    precioTexto: "$500 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/desayunos/ID14.jpeg"],
    incluye: [
      "Hot cakes",
      "Fruta",
      "Cupcakes (2 piezas)",
      "Gelatina (1 pieza)",
      "Platillo (pechuga con ensalada y verduras + salsa)",
      "Jugo natural",
    ],
    tags: ["pechuga", "ensalada", "ligero", "fresco"],
  },

  // ──────────────────────────────────────────────
  // PASTELES & GELATINAS
  // ──────────────────────────────────────────────

  {
    id: "pastel01",
    categoria: "reposteria",
    nombre: "Pastel",
    descripcion:
      "Pastel artesanal ideal para cualquier celebración. Decorado y personalizado al gusto.",
    descripcionLarga:
      "Nuestros pasteles son elaborados artesanalmente con ingredientes de calidad y decorados según la temática que elijas. Disponibles desde tamaño mini para 10 personas hasta presentaciones grandes para 20, 30, 50 y hasta 400 personas. El precio varía según el tamaño, decoración y frutos de temporada.",
    precio: 200,
    precioTexto: "Desde $200",
    unidad: "pastel",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/reposteria/pastel01.jpeg"],
    incluye: [
      "Bizcocho artesanal",
      "Decoración personalizada",
      "Temática a elegir",
      "Frutos de temporada",
    ],
    tags: ["pastel", "cumpleaños", "personalizado"],
  },

  {
    id: "pastel02",
    categoria: "reposteria",
    nombre: "Pastel",
    descripcion:
      "Pastel artesanal ideal para cualquier celebración. Decorado y personalizado al gusto.",
    descripcionLarga:
      "Elaborado con pan suave y decoración personalizada. Disponible en diferentes sabores y decoraciones según la ocasión. Ideal para cumpleaños, aniversarios y eventos familiares.",
    precio: 200,
    precioTexto: "Desde $200",
    unidad: "pastel",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/reposteria/pastel02.jpeg"],
    incluye: [
      "Decoración personalizada",
      "Fruta de temporada",
      "Mensaje especial",
    ],
    tags: ["pastel", "evento", "artesanal"],
  },

  {
    id: "pastel03",
    categoria: "reposteria",
    nombre: "Pastel",
    descripcion:
      "Pastel artesanal ideal para cualquier celebración. Decorado y personalizado al gusto.",
    descripcionLarga:
      "Perfecto para eventos grandes y reuniones especiales. Nuestros pasteles se preparan al momento con ingredientes frescos y decoración artesanal personalizada.",
    precio: 200,
    precioTexto: "Desde $200",
    unidad: "pastel",
    disponible: true,
    anticipacion: "3 días",
    fotos: ["img/reposteria/pastel03.jpeg"],
    incluye: ["Decoración temática", "Frutos de temporada", "Personalización"],
    tags: ["pastel", "fiesta", "cumpleaños"],
  },

  {
    id: "pastel04",
    categoria: "reposteria",
    nombre: "Pastel",
    descripcion:
      "Pastel artesanal ideal para cualquier celebración. Decorado y personalizado al gusto.",
    descripcionLarga:
      "Disponible en tamaños amplios para bodas, XV años, graduaciones y eventos empresariales. Diseños personalizados y decoración especial según la temática de tu evento.",
    precio: 200,
    precioTexto: "Desde $200",
    unidad: "pastel",
    disponible: true,
    anticipacion: "5 días",
    fotos: ["img/reposteria/pastel04.jpeg"],
    incluye: [
      "Diseño personalizado",
      "Decoración especial",
      "Fruta de temporada",
    ],
    tags: ["evento", "boda", "xv años", "graduación"],
  },

  {
    id: "pastel05",
    categoria: "reposteria",
    nombre: "Pastel",
    descripcion:
      "Pastel artesanal ideal para cualquier celebración. Decorado y personalizado al gusto.",
    descripcionLarga:
      "Nuestra opción más especial, elaborada con detalles exclusivos, decoración artística y acabados personalizados. Ideal para celebraciones únicas y eventos de gran tamaño.",
    precio: 200,
    precioTexto: "Desde $200",
    unidad: "pastel",
    disponible: true,
    anticipacion: "5 días",
    fotos: ["img/reposteria/pastel05.jpeg"],
    incluye: [
      "Decoración premium",
      "Diseño personalizado",
      "Frutos de temporada",
      "Detalles especiales",
    ],
    tags: ["premium", "evento", "personalizado"],
  },
  {
    id: "pastel06",
    categoria: "reposteria",
    nombre: "Pastel",
    descripcion:
      "Pastel artesanal personalizado para cualquier celebración especial.",
    descripcionLarga:
      "Nuestros pasteles son elaborados de manera artesanal y pueden personalizarse según la temática, colores y detalles que desees. Disponibles desde tamaño mini para 10 personas hasta presentaciones para eventos de más de 400 personas. Los sabores, rellenos, decoraciones y frutas utilizadas están sujetas a disponibilidad de temporada. El precio final dependerá del tamaño, diseño y personalización solicitada.",
    precio: 200,
    precioTexto: "Desde $200 + envío",
    unidad: "pastel",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/reposteria/pastel06.jpeg"],
    incluye: [
      "Pastel artesanal",
      "Decoración personalizada",
      "Diseño temático",
      "Sabores a elegir",
    ],
    tags: ["pastel", "cumpleaños", "personalizado", "celebración"],
  },

  {
    id: "gelatina01",
    categoria: "reposteria",
    nombre: "Gelatina Artesanal",
    descripcion:
      "Gelatina artesanal decorada, perfecta para acompañar cualquier celebración.",
    descripcionLarga:
      "Gelatina preparada artesanalmente con sabores frescos y decoración especial. Ideal para cumpleaños, reuniones y eventos familiares.",
    precio: 230,
    precioTexto: "$230 + envío",
    unidad: "gelatina",
    disponible: true,
    anticipacion: "2 días",
    fotos: ["img/reposteria/gelatina01.jpeg"],
    incluye: [
      "Decoración artesanal",
      "Sabor a elegir",
      "Presentación lista para regalo",
    ],
    tags: ["gelatina", "postre", "artesanal"],
  },

  {
    id: "gelatina02",
    categoria: "reposteria",
    nombre: "Gelatina Artística",
    descripcion:
      "Gelatina decorada artesanalmente, ideal para regalar o complementar cualquier celebración.",
    descripcionLarga:
      "Gelatina elaborada de forma artesanal con diseños decorativos únicos. Perfecta para cumpleaños, aniversarios, reuniones familiares y eventos especiales. Los colores, detalles y decoración pueden personalizarse según la ocasión.",
    precio: 230,
    precioTexto: "$230 + envío",
    unidad: "gelatina",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/reposteria/gelatina02.jpeg"],
    incluye: [
      "Gelatina artesanal",
      "Decoración personalizada",
      "Presentación especial",
    ],
    tags: ["gelatina", "postre", "regalo", "personalizado"],
  },
  {
    id: "gelatina03",
    categoria: "reposteria",
    nombre: "Gelatina Artística Premium",
    descripcion:
      "Gelatina decorada con detalles especiales para celebraciones importantes.",
    descripcionLarga:
      "Gelatina artesanal elaborada con diseños personalizados y acabados especiales. Ideal para cumpleaños, eventos familiares y ocasiones especiales. La decoración puede adaptarse a la temática solicitada.",
    precio: 280,
    precioTexto: "$280 + envío",
    unidad: "gelatina",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/reposteria/gelatina03.jpeg"],
    incluye: [
      "Gelatina artesanal",
      "Decoración especial",
      "Diseño personalizado",
    ],
    tags: ["gelatina", "premium", "evento", "personalizado"],
  },
  {
    id: "gelatina04",
    categoria: "reposteria",
    nombre: "Gelatina Decorativa",
    descripcion:
      "Gelatina artesanal con diseño especial para cualquier ocasión.",
    descripcionLarga:
      "Deliciosa gelatina decorada de forma artesanal, ideal para sorprender con un detalle diferente. Puede personalizarse en colores y presentación según la ocasión.",
    precio: 280,
    precioTexto: "$280 + envío",
    unidad: "gelatina",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/reposteria/gelatina04.jpeg"],
    incluye: [
      "Gelatina artesanal",
      "Decoración personalizada",
      "Presentación especial",
    ],
    tags: ["gelatina", "decorativa", "regalo", "evento"],
  },
  {
    id: "gelatina05",
    categoria: "reposteria",
    nombre: "Gelatina Personalizada",
    descripcion: "Gelatina artesanal con detalles decorativos personalizados.",
    descripcionLarga:
      "Una opción perfecta para complementar cualquier celebración. Elaborada artesanalmente y decorada según la temática o estilo solicitado por el cliente.",
    precio: 230,
    precioTexto: "$230 + envío",
    unidad: "gelatina",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/reposteria/gelatina05.jpeg"],
    incluye: [
      "Gelatina artesanal",
      "Diseño personalizado",
      "Decoración especial",
    ],
    tags: ["gelatina", "personalizada", "postre", "regalo"],
  },
  {
    id: "gelatina06",
    categoria: "reposteria",
    nombre: "Gelatina con Ramo de Rosas y Chocolates",
    descripcion:
      "Paquete especial que combina una gelatina artesanal con un hermoso ramo de rosas y chocolates.",
    descripcionLarga:
      "La combinación perfecta para sorprender. Incluye una gelatina artesanal decorada, acompañada de un ramo de rosas con chocolates. Ideal para cumpleaños, aniversarios, agradecimientos o cualquier ocasión especial. Las flores están sujetas a disponibilidad de temporada.",
    precio: 580,
    precioTexto: "$580 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/reposteria/gelatina06.jpeg"],
    incluye: [
      "Ramo de rosas $400",
      "Gelatina $180",
      "Gelatina artesanal",
      "Ramo de rosas",
      "Chocolates",
      "Decoración especial",
    ],
    tags: ["gelatina", "flores", "chocolates", "regalo", "sorpresa"],
  },

  // ────────────────────────────────────────────── // FLORES // ──────────────────────────────────────────────
  {
    id: "fl01",
    categoria: "flores",
    nombre: "Ramo de Rosas Rojas",
    descripcion:
      "Ramo elegante de rosas rojas frescas, ideal para sorprender en ocasiones especiales.",
    descripcionLarga:
      "Hermoso ramo elaborado con rosas rojas frescas y decoración especial. Perfecto para aniversarios, cumpleaños, fechas románticas o cualquier ocasión especial. El tamaño y diseño pueden personalizarse según el presupuesto y disponibilidad de flores de temporada.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl01.jpeg"],
    incluye: [
      "Rosas rojas frescas",
      "Decoración especial",
      "Envoltura personalizada",
    ],
    tags: ["flores", "rosas", "romántico", "regalo"],
  },
  {
    id: "fl02",
    categoria: "flores",
    nombre: "Ramo de Rosas con Billetes Decorativos",
    descripcion:
      "Ramo de rosas rojas con decoración especial y billetes decorativos.",
    descripcionLarga:
      "Un arreglo elegante y personalizado que combina rosas frescas con billetes decorativos y detalles especiales. Ideal para regalos sorpresa, aniversarios o celebraciones importantes. El diseño se adapta al presupuesto y está sujeto a disponibilidad de flores de temporada.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl02.jpeg"],
    incluye: [
      "Rosas rojas",
      "Billetes decorativos",
      "Decoración personalizada",
    ],
    tags: ["flores", "rosas", "regalo", "personalizado"],
  },
  {
    id: "fl03",
    categoria: "flores",
    nombre: "Ramo de Gerberas",
    descripcion: "Ramo fresco y colorido elaborado con gerberas de temporada.",
    descripcionLarga:
      "Arreglo floral elaborado con gerberas frescas en diferentes colores y decoración especial. Ideal para cumpleaños, detalles especiales y celebraciones alegres. El diseño puede ajustarse según presupuesto y flores disponibles de temporada.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl03.jpeg"],
    incluye: [
      "Gerberas frescas",
      "Decoración especial",
      "Envoltura personalizada",
    ],
    tags: ["flores", "gerberas", "colorido", "regalo"],
  },
  {
    id: "fl04",
    categoria: "flores",
    nombre: "Arreglo Floral Mixto",
    descripcion:
      "Arreglo floral con combinación de flores frescas y decoración especial.",
    descripcionLarga:
      "Arreglo elaborado con distintas flores frescas de temporada y detalles decorativos personalizados. Perfecto para regalos, celebraciones y ocasiones especiales. El diseño y tamaño se ajustan según presupuesto y disponibilidad.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "arreglo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl04.jpeg"],
    incluye: [
      "Flores frescas variadas",
      "Decoración personalizada",
      "Envoltura especial",
    ],
    tags: ["flores", "arreglo", "temporada", "regalo"],
  },
  {
    id: "fl05",
    categoria: "flores",
    nombre: "Ramo de Rosas Rosa",
    descripcion: "Ramo delicado de rosas color rosa con decoración elegante.",
    descripcionLarga:
      "Hermoso ramo de rosas color rosa elaborado con flores frescas y decoración especial. Ideal para cumpleaños, aniversarios o detalles románticos. Disponible según flores de temporada y ajustable al presupuesto.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl05.jpeg"],
    incluye: [
      "Rosas color rosa",
      "Decoración especial",
      "Envoltura personalizada",
    ],
    tags: ["flores", "rosas", "rosa", "romántico"],
  },
  {
    id: "fl06",
    categoria: "flores",
    nombre: "Ramo de Rosas Rosa y Blancas",
    descripcion:
      "Combinación elegante de rosas rosas y blancas con decoración especial.",
    descripcionLarga:
      "Ramo floral elaborado con rosas rosas y blancas frescas, ideal para celebraciones, aniversarios y ocasiones especiales. El diseño puede personalizarse según presupuesto y disponibilidad de flores de temporada.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl06.jpeg"],
    incluye: [
      "Rosas rosas y blancas",
      "Decoración personalizada",
      "Envoltura especial",
    ],
    tags: ["flores", "rosas", "blancas", "regalo"],
  },
  {
    id: "fl07",
    categoria: "flores",
    nombre: "Ramo de Fresas con Chocolate",
    descripcion:
      "Ramo especial elaborado con fresas cubiertas de chocolate y decoración personalizada.",
    descripcionLarga:
      "Delicioso ramo de fresas frescas cubiertas de chocolate, ideal para sorprender en cumpleaños, aniversarios o fechas especiales. El diseño puede personalizarse y está sujeto a disponibilidad de temporada.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl07.jpeg"],
    incluye: [
      "Fresas cubiertas de chocolate",
      "Decoración especial",
      "Envoltura personalizada",
    ],
    tags: ["fresas", "chocolate", "ramo", "regalo"],
  },
  {
    id: "fl08",
    categoria: "flores",
    nombre: "Arreglo Floral Especial",
    descripcion:
      "Arreglo floral elegante elaborado con flores frescas y detalles decorativos especiales.",
    descripcionLarga:
      "Hermoso arreglo floral diseñado para sorprender en cualquier ocasión especial. Elaborado con flores frescas y decoración personalizada. Las flores utilizadas están sujetas a disponibilidad de temporada, garantizando siempre la mejor calidad y frescura.",
    precio: 1000,
    precioTexto: "$1000 + envío",
    unidad: "arreglo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl08.jpeg"],
    incluye: [
      "Flores frescas de temporada",
      "Decoración especial",
      "Presentación personalizada",
    ],
    tags: ["flores", "arreglo", "especial", "regalo"],
  },
  {
    id: "fl09",
    categoria: "flores",
    nombre: "Ramo de Rosas Rojas",
    descripcion:
      "Clásico ramo de rosas rojas frescas para expresar amor y admiración.",
    descripcionLarga:
      "Hermoso ramo elaborado con rosas rojas frescas y decoración especial. Ideal para aniversarios, cumpleaños, San Valentín o cualquier ocasión romántica. El costo final dependerá del tamaño del ramo y la cantidad de rosas seleccionadas.",
    precio: 0,
    precioTexto: "Precio según tamaño",
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl09.jpeg"],
    incluye: [
      "Rosas rojas frescas",
      "Envoltura decorativa",
      "Presentación especial",
    ],
    tags: ["rosas", "rojas", "ramo", "romántico"],
  },
  {
    id: "fl10",
    categoria: "flores",
    nombre: "Ramo de Rosas con Billetes",
    descripcion:
      "Ramo personalizado que combina rosas frescas con billetes decorativos.",
    descripcionLarga:
      "Un detalle único y elegante que combina rosas frescas con billetes decorativos. Ideal para cumpleaños, graduaciones, aniversarios o celebraciones especiales. El diseño se adapta completamente al presupuesto y preferencias del cliente.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl10.jpeg"],
    incluye: [
      "Rosas frescas",
      "Billetes decorativos",
      "Decoración personalizada",
    ],
    tags: ["rosas", "billetes", "personalizado", "regalo"],
  },
  {
    id: "fl11",
    categoria: "flores",
    nombre: "Ramo de Rosas Rojas y Girasoles",
    descripcion:
      "Hermosa combinación de rosas rojas y girasoles frescos en un arreglo lleno de color.",
    descripcionLarga:
      "Un ramo elegante y llamativo elaborado con rosas rojas y girasoles frescos. Ideal para sorprender en cumpleaños, aniversarios o cualquier ocasión especial. Las flores están sujetas a disponibilidad de temporada.",
    precio: 500,
    precioTexto: "$500 + envío",
    unidad: "ramo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/flores/fl11.jpeg"],
    incluye: [
      "Rosas rojas",
      "Girasoles frescos",
      "Envoltura decorativa",
      "Presentación especial",
    ],
    tags: ["rosas", "girasoles", "ramo", "flores"],
  },
  
  // ────────────────────────────────────────────── // MESAS DE DULCES // ──────────────────────────────────────────────
  {
    id: "mesa01",
    categoria: "mesas",
    nombre: "Mesa de Dulces Personalizada",
    descripcion:
      "Mesa de dulces decorada y personalizada para cualquier tipo de evento.",
    descripcionLarga:
      "Creamos mesas de dulces totalmente personalizadas según la temática, colores y estilo de tu evento. Incluye decoración especial, dulces, postres y detalles coordinados para celebraciones como cumpleaños, bodas, XV años, baby shower y más. Todo se ajusta al presupuesto y disponibilidad.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "servicio",
    disponible: true,
    anticipacion: "3 días",
    fotos: [
      "img/mesas/mesa01.jpeg",
      "img/mesas/mesa02.jpeg",
      "img/mesas/mesa03.jpeg",
    ],
    incluye: [
      "Decoración personalizada",
      "Dulces y postres",
      "Temática a elegir",
      "Montaje especial",
    ],
    tags: ["mesa de dulces", "eventos", "personalizado", "decoración"],
  },

  // ──────────────────────────────────────────────
  // ACCESORIOS & REGALOS
  // ──────────────────────────────────────────────

  {
    id: "accesorio01",
    categoria: "accesorios",
    nombre: "Caja Sorpresa Personalizada",
    descripcion:
      "Caja de regalo personalizada con accesorios premium y detalles especiales para sorprender.",
    descripcionLarga:
      "Una caja sorpresa elegante y totalmente personalizable, ideal para cumpleaños, aniversarios o cualquier ocasión especial. Esta presentación incluye una playera Boss, perfume Boss y cartera Guess, acompañados de chocolates y decoración especial. Los artículos, colores, frases y accesorios pueden personalizarse según gustos y disponibilidad.",
    precio: 0,
    precioTexto: "Precio variable según artículos",
    unidad: "caja",
    disponible: true,
    anticipacion: "3 días",
    fotos: ["img/accesorios/accesorio01.jpeg"],
    incluye: [
      "Playera Boss",
      "Perfume Boss",
      "Cartera Guess",
      "Caja decorada",
      "Frase personalizada",
    ],
    tags: ["regalo", "sorpresa", "personalizado", "premium"],
  },

  {
    id: "accesorio02",
    categoria: "accesorios",
    nombre: "Set de Regalo Premium",
    descripcion:
      "Set de regalo premium con accesorios y artículos especiales para sorprender.",
    descripcionLarga:
      "Un regalo elegante y personalizado ideal para cumpleaños, aniversarios o fechas especiales. Los artículos incluidos pueden variar según disponibilidad y preferencias del cliente.",
    precio: 0,
    precioTexto: "Precio variable según artículos",
    unidad: "set",
    disponible: true,
    anticipacion: "3 días",
    fotos: ["img/accesorios/accesorio02.jpeg"],
    incluye: [
      "Caja de presentación",
      "Accesorios premium",
      "Detalles personalizados",
      "Decoración especial",
    ],
    tags: ["premium", "regalo", "accesorios", "personalizado"],
  },
  {
    id: "accesorio03",
    categoria: "accesorios",
    nombre: "Caja Corazón Personalizada",
    descripcion:
      "Caja en forma de corazón con rosas, chocolates y mensaje personalizado para sorprender en cualquier ocasión especial.",
    descripcionLarga:
      "Hermosa caja decorativa en forma de corazón elaborada con rosas rojas, chocolates y una frase personalizada. Ideal para aniversarios, cumpleaños, San Valentín o cualquier ocasión especial. Los colores, cantidad de flores, chocolates, mensajes y detalles pueden personalizarse según el gusto del cliente. Las flores están sujetas a disponibilidad de temporada y los artículos pueden variar según existencia.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "caja",
    disponible: true,
    anticipacion: "1 semana",
    fotos: ["img/accesorios/accesorio03.jpeg"],
    incluye: [
      "Caja decorativa en forma de corazón",
      "Rosas de temporada",
      "Chocolates",
      "Frase personalizada",
      "Decoración especial",
    ],
    tags: ["corazón", "rosas", "chocolates", "personalizado", "romántico"],
  },

  // ────────────────────────────────────────────── // TAZAS PERSONALIZADAS // ──────────────────────────────────────────────
  {
    id: "taza01",
    categoria: "tazas",
    nombre: "Tazas Personalizadas",
    descripcion:
      "Set de tazas personalizadas con diseños, frases o fotografías al gusto del cliente.",
    descripcionLarga:
      "Tazas de cerámica personalizadas ideales para regalar en cumpleaños, aniversarios, fechas especiales o detalles sorpresa. Puedes personalizar colores, frases, imágenes y diseños completamente al gusto del cliente. Disponible en taza sencilla o taza mágica.",
    precio: 120,
    precioTexto: "Desde $120 c/u",
    unidad: "pieza",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/tazas/taza01.jpeg"],
    incluye: [
      "Taza de cerámica",
      "Diseño personalizado",
      "Frase o imagen a elegir",
    ],
    tags: ["taza", "personalizado", "regalo", "sublimación"],
  },
  {
    id: "taza02",
    categoria: "tazas",
    nombre: "Taza Mágica Personalizada",
    descripcion:
      "Taza mágica personalizada que revela el diseño al agregar bebida caliente.",
    descripcionLarga:
      "Taza mágica con efecto térmico personalizada con frases, imágenes o fotografías. Ideal para regalos especiales y detalles únicos. El diseño puede personalizarse completamente al gusto del cliente.",
    precio: 280,
    precioTexto: "$280 c/u",
    unidad: "pieza",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/tazas/taza02.jpeg"],
    incluye: ["Taza mágica", "Diseño personalizado", "Impresión térmica"],
    tags: ["taza", "mágica", "personalizado", "regalo"],
  },
  {
    id: "taza03",
    categoria: "tazas",
    nombre: "Taza Personalizada",
    descripcion:
      "Taza personalizada con diseño especial para cualquier ocasión.",
    descripcionLarga:
      "Personaliza tu taza con frases, fotografías, nombres o diseños especiales. Ideal para regalos, detalles empresariales o recuerdos personalizados.",
    precio: 120,
    precioTexto: "Desde $120 c/u",
    unidad: "pieza",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/tazas/taza03.jpeg"],
    incluye: ["Taza de cerámica", "Diseño personalizado"],
    tags: ["taza", "regalo", "personalizado"],
  },
  {
    id: "taza04",
    categoria: "tazas",
    nombre: "Taza Personalizada",
    descripcion:
      "Taza decorada y personalizada completamente al gusto del cliente.",
    descripcionLarga:
      "Elige fotografías, frases, colores y estilos para crear una taza única y especial. Perfecta para regalos personalizados y ocasiones especiales.",
    precio: 120,
    precioTexto: "Desde $120 c/u",
    unidad: "pieza",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/tazas/taza04.jpeg"],
    incluye: ["Diseño personalizado", "Taza de cerámica"],
    tags: ["taza", "sublimación", "personalizado"],
  }, // ────────────────────────────────────────────── // BOTANAS // ──────────────────────────────────────────────
  {
    id: "botana01",
    categoria: "botanas",
    nombre: "Charola botanera de 6 latones",
    descripcion:
      "Botana preparada con cervezas, fruta fresca, cacahuates y acompañamientos.",
    descripcionLarga:
      "Ideal para reuniones, cumpleaños o convivencias. Incluye 6 cervezas de lata Corona o Victoria, pepinos preparados, naranja, mango, sandía, jícama, zanahoria, cacahuates, gomitas, limones y banderillas de pulpa de tamarindo.",
    precio: 380,
    precioTexto: "$380 + envío",
    unidad: "tabla",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/botanas/botana01.jpeg"],
    incluye: [
      "6 cervezas Corona/Victoria",
      "Pepinos preparados",
      "Naranja",
      "Mango",
      "Sandía",
      "Jícama",
      "Zanahoria",
      "Cacahuates",
      "Gomitas",
      "Limones",
      "Banderillas de pulpa de tamarindo",
    ],
    tags: ["botanas", "cerveza", "fruta", "reunión"],
  },
  {
    id: "botana02",
    categoria: "botanas",
    nombre: "Charola botanera de 4 latones",
    descripcion:
      "Botana preparada con cerveza, fruta fresca y acompañamientos especiales.",
    descripcionLarga:
      "Perfecta para compartir en reuniones y ocasiones especiales. Incluye 4 cervezas de lata Corona o Victoria, pepinos preparados, mango, sandía, jícama, zanahoria, cacahuates, gomitas, limones y banderillas de pulpa de tamarindo.",
    precio: 280,
    precioTexto: "$280 + envío",
    unidad: "tabla",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/botanas/botana02.jpeg"],
    incluye: [
      "4 cervezas Corona/Victoria",
      "Pepinos preparados",
      "Mango",
      "Sandía",
      "Jícama",
      "Zanahoria",
      "Cacahuates",
      "Gomitas",
      "Limones",
      "Banderillas de pulpa de tamarindo",
    ],
    tags: ["botanas", "tabla", "cerveza", "fruta"],
  },
  // ────────────────────────────────────────────── // ARREGLOS PERSONALIZADOS // ──────────────────────────────────────────────
  {
    id: "arreglo01",
    categoria: "arreglos",
    nombre: "Arreglo Personalizado",
    descripcion:
      "Arreglo sorpresa personalizado ideal para niñas y ocasiones especiales.",
    descripcionLarga:
      "Arreglo decorativo completamente personalizable con accesorios, colores, temática y detalles especiales. Ideal para cumpleaños, regalos sorpresa y celebraciones infantiles. Los artículos incluidos pueden variar según disponibilidad y presupuesto.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "arreglo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/arreglos/arreglo01.jpeg"],
    incluye: [
      "Decoración personalizada",
      "Accesorios sorpresa",
      "Temática a elegir",
      "Tarjeta personalizada",
    ],
    tags: ["arreglo", "niñas", "personalizado", "sorpresa"],
  },
  {
    id: "arreglo02",
    categoria: "arreglos",
    nombre: "Arreglo con Despensa",
    descripcion: "Arreglo personalizado con despensa y decoración especial.",
    descripcionLarga:
      "Un detalle útil y especial ideal para sorprender en cualquier ocasión. El arreglo puede incluir distintos productos de despensa y decoración personalizada según presupuesto y disponibilidad.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "arreglo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/arreglos/arreglo02.jpeg"],
    incluye: [
      "Productos de despensa",
      "Decoración personalizada",
      "Tarjeta especial",
    ],
    tags: ["despensa", "arreglo", "personalizado", "regalo"],
  },
  {
    id: "arreglo03",
    categoria: "arreglos",
    nombre: "Desayuno Sorpresa",
    descripcion:
      "Desayuno personalizado con globos, decoración especial y flores de temporada.",
    descripcionLarga:
      "Desayuno sorpresa ideal para cumpleaños, aniversarios y fechas especiales. Incluye decoración personalizada, globos y flores sujetas a disponibilidad de temporada. Todo el diseño puede ajustarse según presupuesto y preferencias del cliente.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "arreglo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/arreglos/arreglo03.jpeg"],
    incluye: [
      "Desayuno sorpresa",
      "Globos decorativos",
      "Flores de temporada",
      "Decoración personalizada",
    ],
    tags: ["desayuno", "globos", "flores", "sorpresa"],
  },

  // ────────────────────────────────────────────── // DECORACIÓN // ──────────────────────────────────────────────
  {
    id: "decoracion01",
    categoria: "decoracion",
    nombre: "Decoración para Sacramentos",
    descripcion:
      "Decoración elegante y personalizada para sacramentos y celebraciones religiosas.",
    descripcionLarga:
      "Decoración especial para bautizos, primeras comuniones, confirmaciones y otros eventos religiosos. Diseñamos cada espacio según la temática, colores y estilo deseado. Todo se ajusta al presupuesto y al tamaño del lugar.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "servicio",
    disponible: true,
    anticipacion: "3 días",
    fotos: [
      "img/decoracion/decoracion01.jpeg",
      "img/decoracion/decoracion02.jpeg",
    ],
    incluye: [
      "Decoración personalizada",
      "Montaje especial",
      "Temática y colores a elegir",
    ],
    tags: ["decoración", "sacramentos", "bautizo", "primera comunión"],
  },
  {
    id: "decoracion02",
    categoria: "decoracion",
    nombre: "Decoración para Cumpleaños",
    descripcion:
      "Decoración temática personalizada para cumpleaños y celebraciones especiales.",
    descripcionLarga:
      "Creamos decoraciones únicas para cumpleaños infantiles, juveniles y adultos. Incluye globos, mesa principal, detalles decorativos y temática personalizada según el estilo del evento. Todo se ajusta al presupuesto y tamaño del lugar.",
    precio: 0,
    precioTexto: "Precio según presupuesto",
    unidad: "servicio",
    disponible: true,
    anticipacion: "3 días",
    fotos: [
      "img/decoracion/decoracion03.jpeg",
      "img/decoracion/decoracion04.jpeg",
      "img/decoracion/decoracion05.jpeg",
    ],
    incluye: [
      "Decoración temática",
      "Globos decorativos",
      "Montaje personalizado",
      "Detalles especiales",
    ],
    tags: ["cumpleaños", "decoración", "globos", "eventos"],
  },
];

/* ── Funciones de utilidad ──────────────────────────────── */

// Obtener producto por ID
function getProductoById(id) {
  return KM_PRODUCTOS.find((p) => p.id === id) || null;
}

// Filtrar por categoría ('todos' devuelve todos)
function getProductosByCategoria(cat) {
  if (cat === "todos") return KM_PRODUCTOS;
  return KM_PRODUCTOS.filter((p) => p.categoria === cat);
}

// Buscar por texto en nombre, descripción o tags
function buscarProductos(query) {
  const q = query.toLowerCase().trim();
  if (!q) return KM_PRODUCTOS;
  return KM_PRODUCTOS.filter(
    (p) =>
      p.nombre.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      (p.tags && p.tags.some((t) => t.toLowerCase().includes(q))),
  );
}
