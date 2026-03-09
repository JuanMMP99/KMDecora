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
    id: "ID1",
    categoria: "desayunos",
    nombre: "ID1 — Desayuno Romántico con Globos",
    descripcion: "Desayuno especial con baguette, fruta, café, jugo, pastel con topper cake, chocolates, osos, 3 globos de helio, decoración y 2 rosas. ¡La sorpresa perfecta!",
    descripcionLarga: "Un paquete diseñado para hacer sentir especial a esa persona. Incluye baguette, fruta fresca, café, jugo natural, pastel con topper cake personalizable, chocolates, osos de peluche, 3 globos de helio, decoración especial y 2 rosas. Precio + envío. *No incluye cajita.",
    precio: 0,
    precioTexto: "$ + envío (consultar)",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    nota: "No incluye la cajita.",
    fotos: ["img/desayunos/ID1.jpeg"],
    incluye: ["Baguette", "Fruta", "Café", "1 jugo", "Pastel con topper cake", "Chocolates", "Osos", "3 globos de helio", "Decoración", "2 rosas"],
    tags: ["romántico", "globos", "pastel", "aniversario", "cumpleaños"]
  },
  {
    id: "ID2",
    categoria: "desayunos",
    nombre: "ID2 — Desayuno Completo para 2",
    descripcion: "Porciones para 2 personas. Hot cakes, fruta, jugo natural, yogurt con fruta, atole de pinole, caldo de res y girasoles de cortesía.",
    descripcionLarga: "Paquete generoso pensado para compartir. Incluye hot cakes esponjosos, fruta fresca de temporada, jugo natural, yogurt con fruta, atole de pinole, platillo caliente de caldo de res y girasoles como cortesía. *Las flores son cortesía y están sujetas a disponibilidad.",
    precio: 1250,
    precioTexto: "$1,250 + envío",
    unidad: "paquete para 2",
    disponible: true,
    anticipacion: "1 día",
    nota: "Las flores son cortesía y están sujetas a disponibilidad.",
    fotos: ["img/desayunos/ID2.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Jugo natural", "Yogurt con fruta", "Atole de pinole", "Platillo (Caldo de res)", "Girasoles"],
    tags: ["para dos", "completo", "caldo", "hot cakes"]
  },
  {
    id: "ID3",
    categoria: "desayunos",
    nombre: "ID3 — Desayuno Oaxaqueño Festivo",
    descripcion: "Hot cakes, fruta, cupcakes, gelatinas, fresas con crema, enchiladas verdes con tasajo, jugo, yogurt y canasta de carnes. ¡Un festín completo!",
    descripcionLarga: "Un desayuno que combina lo mejor de la cocina oaxaqueña con los postres más queridos. Incluye hot cakes, fruta fresca, 4 cupcakes, 2 gelatinas, fresas con crema, platillo de enchiladas verdes con tasajo, jugo natural, yogurt y canasta de carnes.",
    precio: 850,
    precioTexto: "$850 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID3.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Cupcakes (4 piezas)", "Gelatinas (2 piezas)", "Fresas con crema", "Platillo (enchiladas verdes con tasajo)", "Jugo natural", "Yogurt", "Canasta de carnes"],
    tags: ["oaxaqueño", "enchiladas", "tasajo", "completo", "festivo"]
  },
  {
    id: "ID4",
    categoria: "desayunos",
    nombre: "ID4 — Desayuno con Pastel y Globo",
    descripcion: "Fruta, cupcakes, gelatinas, fresas con crema, caldo de res, 2 jugos, yogurt, atole de pinole y pastel con tupper cake y globo. Perfecto para cumpleaños.",
    descripcionLarga: "El paquete ideal para celebrar un cumpleaños con todo. Incluye fruta fresca, 3 cupcakes, 3 gelatinas, fresas con crema, platillo caliente de caldo de res, 2 jugos, yogurt, atole de pinole y un pastel con tupper cake y globo decorativo.",
    precio: 1600,
    precioTexto: "$1,600 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID4.jpeg"],
    incluye: ["Fruta", "Cupcakes (3 piezas)", "Gelatinas (3 piezas)", "Fresas con crema", "Platillo (Caldo de res)", "2 Jugos", "Yogurt", "Atole de pinole", "Pastel con tupper cake y globo"],
    tags: ["cumpleaños", "pastel", "globo", "caldo"]
  },
  {
    id: "ID5",
    categoria: "desayunos",
    nombre: "ID5 — Desayuno Ligero con Caldo",
    descripcion: "Fruta, 2 gelatinas, caldo de res, 2 jugos, yogurt y atole de pinole. Un desayuno completo y reconfortante. *No incluye billetes.",
    descripcionLarga: "Paquete completo y reconfortante. Incluye fruta fresca, 2 gelatinas, platillo caliente de caldo de res, 2 jugos, 1 yogurt y atole de pinole. *No se incluyen los billetes decorativos.",
    precio: 820,
    precioTexto: "$820 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    nota: "No se incluyen los billetes.",
    fotos: ["img/desayunos/ID5.jpeg"],
    incluye: ["Fruta", "Gelatinas (2 piezas)", "Platillo (Caldo de res)", "2 Jugos", "1 yogurt", "Atole de pinole"],
    tags: ["caldo", "ligero", "reconfortante"]
  },
  {
    id: "ID6",
    categoria: "desayunos",
    nombre: "ID6 — Desayuno con Pechuga Empanizada",
    descripcion: "Hot cakes, fruta, cupcakes, gelatinas, fresas con crema, pechuga empanizada con spaghetti y verduras, jugo y yogurt. Cortesía incluida.",
    descripcionLarga: "Desayuno completo y delicioso. Incluye hot cakes, fruta fresca, 4 cupcakes, 2 gelatinas, fresas con crema, platillo de pechuga empanizada con spaghetti y verduras, jugo natural y yogurt. *Como cortesía puede incluir paleta payaso, algún chocolate o dulce y flor (girasol o 2 rosas), sujeto a disponibilidad.",
    precio: 500,
    precioTexto: "$500 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    nota: "Como cortesía puede incluir: paleta payaso, o algún chocolate o dulce y flor (girasol o 2 rosas).",
    fotos: ["img/desayunos/ID6.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Cup cakes (4 piezas)", "Gelatinas (2 piezas)", "Fresas con crema", "Platillo (pechuga empanizada con spaghetti y verduras)", "Jugo natural", "Yogurt"],
    tags: ["pechuga", "spaghetti", "hot cakes", "completo"]
  },
  {
    id: "ID7",
    categoria: "desayunos",
    nombre: "ID7 — Charola de Desayuno con Crepas",
    descripcion: "Por charola: fruta, hot cakes, 4 crepas, frappe, yogurt, gelatina, 2 cupcakes y globo. ¡Todo en una charola festiva y deliciosa!",
    descripcionLarga: "Contenido por charola: fruta fresca, hot cakes, 4 crepas artesanales, frappe, yogurt, gelatina, 2 cupcakes decorados y globo. Un desayuno festivo y completo presentado en una charola.",
    precio: 550,
    precioTexto: "$550 + envío",
    unidad: "charola",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID7.jpeg"],
    incluye: ["Fruta", "Hot cakes", "4 crepas", "Frappe", "Yogurt", "Gelatina", "2 cupcakes", "Globo"],
    tags: ["crepas", "frappe", "charola", "globo", "festivo"]
  },
  {
    id: "ID8",
    categoria: "desayunos",
    nombre: "ID8 — Desayuno Enchiladas + 2 Jugos",
    descripcion: "Hot cakes, fruta, 4 cupcakes, 2 gelatinas, fresas con crema, enchiladas verdes con tasajo, 2 jugos pequeños y yogurt.",
    descripcionLarga: "Un desayuno generoso que combina lo dulce y lo salado. Incluye hot cakes, fruta fresca, 4 cupcakes, 2 gelatinas, fresas con crema, platillo de enchiladas verdes con tasajo, 2 jugos pequeños y yogurt.",
    precio: 470,
    precioTexto: "$470 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID8.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Cupcakes (4 piezas)", "Gelatinas (2 piezas)", "Fresas con crema", "Platillo (enchiladas verdes con tasajo)", "2 jugos pequeños", "Yogurt"],
    tags: ["enchiladas", "tasajo", "hot cakes", "cupcakes"]
  },
  {
    id: "ID9",
    categoria: "desayunos",
    nombre: "ID9 — Desayuno Enchiladas Clásico",
    descripcion: "Hot cakes, fruta, 4 cupcakes, 2 gelatinas, fresas con crema, enchiladas verdes con tasajo, jugo y yogurt. El clásico favorito.",
    descripcionLarga: "El desayuno clásico y completo que todos aman. Incluye hot cakes, fruta fresca, 4 cupcakes, 2 gelatinas, fresas con crema, platillo de enchiladas verdes con tasajo, 1 jugo y yogurt.",
    precio: 450,
    precioTexto: "$450 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID9.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Cupcakes (4 piezas)", "Gelatinas (2 piezas)", "Fresas con crema", "Platillo (enchiladas verdes con tasajo)", "Jugo", "Yogurt"],
    tags: ["enchiladas", "tasajo", "clásico", "hot cakes"]
  },
  {
    id: "ID10",
    categoria: "desayunos",
    nombre: "ID10 — Desayuno con Frappes",
    descripcion: "Hot cakes, fruta, 4 cupcakes, 2 gelatinas, pechuga empanizada con spaghetti, jugo, 2 yogurts y 2 frappes. ¡El más completo!",
    descripcionLarga: "El paquete más completo de la colección. Incluye hot cakes, fruta fresca, 4 cupcakes, 2 gelatinas, platillo de pechuga empanizada con spaghetti y verduras, jugo, 2 yogurts y 2 frappes helados.",
    precio: 610,
    precioTexto: "$610 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID10.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Cupcakes (4 piezas)", "Gelatinas (2 piezas)", "Platillo (pechuga empanizada con spaghetti y verduras)", "Jugo", "Yogurt (2 piezas)", "2 Frappes"],
    tags: ["frappe", "pechuga", "completo", "hot cakes"]
  },
  {
    id: "ID11",
    categoria: "desayunos",
    nombre: "ID11 — Desayuno Pechuga con 2 Yogurts",
    descripcion: "Hot cakes, fruta, 2 gelatinas, pechuga empanizada con spaghetti y verduras, jugo y 2 yogurts. Simple y delicioso.",
    descripcionLarga: "Desayuno equilibrado y sabroso. Incluye hot cakes, fruta fresca, 2 gelatinas, platillo de pechuga empanizada con spaghetti y verduras, jugo y 2 piezas de yogurt.",
    precio: 430,
    precioTexto: "$430 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID11.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Gelatinas (2 piezas)", "Platillo (pechuga empanizada con spaghetti y verduras)", "Jugo", "Yogurt (2 piezas)"],
    tags: ["pechuga", "spaghetti", "hot cakes"]
  },
  {
    id: "ID12",
    categoria: "desayunos",
    nombre: "ID12 — Desayuno Pequeño Pechuga",
    descripcion: "Hot cakes, 2 cupcakes, 2 gelatinas, pechuga empanizada con spaghetti y verduras, jugo y yogurt. Ideal para un antojo más ligero.",
    descripcionLarga: "Una versión más pequeña y económica para cuando no quieres tanto pero sí algo rico. Incluye hot cakes, 2 cupcakes, 2 gelatinas, platillo de pechuga empanizada con spaghetti y verduras, jugo y yogurt.",
    precio: 330,
    precioTexto: "$330 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID12.jpeg"],
    incluye: ["Hot cakes", "Cupcakes (2 piezas)", "Gelatinas (2 piezas)", "Platillo (pechuga empanizada con spaghetti y verduras)", "Jugo", "Yogurt"],
    tags: ["pequeño", "pechuga", "económico"]
  },
  {
    id: "ID13",
    categoria: "desayunos",
    nombre: "ID13 — Desayuno Entomatadas con Tasajo",
    descripcion: "Hot cakes, fruta, 2 cupcakes, 2 gelatinas, entomatadas con tasajo, 1 jugo, yogurt y fresas con crema. Sabor oaxaqueño.",
    descripcionLarga: "Un desayuno con el auténtico sabor de Oaxaca. Incluye hot cakes, fruta fresca, 2 cupcakes, 2 gelatinas, platillo de entomatadas con tasajo, 1 jugo, yogurt y fresas con crema.",
    precio: 450,
    precioTexto: "$450 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID13.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Cupcakes (2 piezas)", "Gelatinas (2 piezas)", "Platillo (entomatadas con tasajo)", "1 Jugo", "Yogurt", "Fresas con crema"],
    tags: ["oaxaqueño", "entomatadas", "tasajo", "hot cakes"]
  },
  {
    id: "ID14",
    categoria: "desayunos",
    nombre: "ID14 — Desayuno Pechuga con Ensalada",
    descripcion: "Hot cakes, fruta, 2 cupcakes, 1 gelatina, pechuga con ensalada y verduras + salsa, jugo natural. Fresco y nutritivo.",
    descripcionLarga: "Una opción fresca y nutritiva. Incluye hot cakes, fruta fresca, 2 cupcakes, 1 gelatina y platillo de pechuga con ensalada y verduras acompañada de salsa, más jugo natural.",
    precio: 360,
    precioTexto: "$360 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID14.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Cupcakes (2 piezas)", "Gelatina (1 pieza)", "Platillo (pechuga con ensalada y verduras + salsa)", "Jugo natural"],
    tags: ["pechuga", "ensalada", "ligero", "fresco"]
  },
  {
    id: "ID15",
    categoria: "desayunos",
    nombre: "ID15 — Desayuno Enchiladas con Atole",
    descripcion: "Fruta, enchiladas verdes con tasajo, gelatina, fresas con crema, 2 cupcakes, jugo y atole de pinole. Calientito y reconfortante.",
    descripcionLarga: "Un desayuno reconfortante con todos los sabores que se extrañan. Incluye fruta fresca, platillo de enchiladas verdes con tasajo, gelatina, fresas con crema, 2 cupcakes, jugo y atole de pinole.",
    precio: 400,
    precioTexto: "$400 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID15.jpeg"],
    incluye: ["Fruta", "Platillo (enchiladas verdes con tasajo)", "Gelatina", "Fresas con crema", "2 cupcakes", "Jugo", "Atole de pinole"],
    tags: ["enchiladas", "atole", "tasajo", "reconfortante"]
  },
  {
    id: "ID16",
    categoria: "desayunos",
    nombre: "ID16 — Desayuno Pechuga con Girasol",
    descripcion: "Fruta, hot cakes, pechuga empanizada con spaghetti, 2 gelatinas, yogurt y jugo. Con girasol como toque especial.",
    descripcionLarga: "Un desayuno completo con el toque de un girasol. Incluye fruta fresca, hot cakes, platillo de pechuga empanizada con spaghetti, 2 gelatinas, yogurt y jugo.",
    precio: 415,
    precioTexto: "$415 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID16.jpeg"],
    incluye: ["Fruta", "Hot cakes", "Platillo (pechuga empanizada con spaghetti)", "2 gelatinas", "Yogurt", "Jugo"],
    tags: ["pechuga", "girasol", "hot cakes"]
  },
  {
    id: "ID17",
    categoria: "desayunos",
    nombre: "ID17 — Desayuno Enchiladas con Girasol",
    descripcion: "2 porciones de fruta, enchiladas verdes con tasajo, 2 gelatinas, fresas con crema, yogurt, jugo y girasol. Un clásico con flores.",
    descripcionLarga: "Un desayuno clásico oaxaqueño con un toque floral. Incluye 2 porciones de fruta fresca, platillo de enchiladas verdes con tasajo, 2 gelatinas, fresas con crema, yogurt, jugo y girasol decorativo.",
    precio: 430,
    precioTexto: "$430 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID17.jpeg"],
    incluye: ["2 porciones de fruta", "Platillo (enchiladas verdes con tasajo)", "2 gelatinas", "Fresas con crema", "Yogurt", "Jugo", "Girasol"],
    tags: ["enchiladas", "girasol", "tasajo", "fresas"]
  },
  {
    id: "ID18",
    categoria: "desayunos",
    nombre: "ID18 — Canasta de Carnes con Refresco",
    descripcion: "Canasta de carnes, Coca Cola, cupcakes, hot cakes y fruta. El favorito para compartir en familia o en pareja.",
    descripcionLarga: "Un paquete especial para los amantes de las carnes oaxaqueñas. Incluye canasta de carnes surtidas, Coca Cola, cupcakes decorados, hot cakes y fruta fresca.",
    precio: 680,
    precioTexto: "$680 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID18.jpeg"],
    incluye: ["Canasta de carnes", "Coca cola", "Cupcakes", "Hot cakes", "Fruta"],
    tags: ["carnes", "oaxaqueño", "familiar", "compartir"]
  },
  {
    id: "ID19",
    categoria: "desayunos",
    nombre: "ID19 — Desayuno Ligero con Pescado",
    descripcion: "Fruta, filete de pescado con verduras, gelatina, jugo natural y yogurt. Una opción fresca y saludable.",
    descripcionLarga: "La opción ideal para quienes prefieren algo más ligero y saludable. Incluye fruta fresca, platillo de filete de pescado con verduras, gelatina, jugo natural y yogurt.",
    precio: 380,
    precioTexto: "$380 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID19.jpeg"],
    incluye: ["Fruta", "Platillo (Filete de pescado con verduras)", "Gelatina", "Jugo natural", "Yogurt"],
    tags: ["pescado", "ligero", "saludable", "fresco"]
  },
  {
    id: "ID20",
    categoria: "desayunos",
    nombre: "ID20 — Desayuno Pequeño con Yakult",
    descripcion: "Fruta, hot cakes, 2 gelatinas, 2 Yakult, jugo pequeño y yogurt. Un desayuno pequeño y completo.",
    descripcionLarga: "La opción más accesible de la colección. Un desayuno pequeño y completo que incluye fruta fresca, hot cakes, 2 gelatinas, 2 Yakult, jugo pequeño y yogurt.",
    precio: 250,
    precioTexto: "$250 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID20.jpeg"],
    incluye: ["Fruta", "Hot cakes", "2 Gelatinas", "2 Yakult", "Jugo pequeño", "Yogurt"],
    tags: ["pequeño", "yakult", "económico", "hot cakes"]
  },
  {
    id: "ID21",
    categoria: "desayunos",
    nombre: "ID21 — Desayuno con Frappes y Snickers",
    descripcion: "Fruta, hot cakes, 2 gelatinas, 2 frappes, jugo, yogurt, fresas con crema y Snickers. El más antojable de todos.",
    descripcionLarga: "Para los que les gusta un poco de todo. Incluye fruta fresca, hot cakes, 2 gelatinas, 2 frappes helados, jugo, yogurt, fresas con crema y una barra Snickers de regalo.",
    precio: 480,
    precioTexto: "$480 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID21.jpeg"],
    incluye: ["Fruta", "Hot cakes", "2 Gelatinas", "2 Frappes", "Jugo", "Yogurt", "Fresas con crema", "Snickers"],
    tags: ["frappe", "snickers", "antojable", "fresas"]
  },
  {
    id: "ID22",
    categoria: "desayunos",
    nombre: "ID22 — Canasta de Carnes Chica",
    descripcion: "Canasta de carnes oaxaqueñas surtidas en presentación chica. Ideal para compartir o regalar a quien ama la carne.",
    descripcionLarga: "Una selección de las mejores carnes oaxaqueñas en presentación chica. Perfecta para compartir en pareja o como regalo para el amante de las carnes. Consulta disponibilidad de carnes del día.",
    precio: 400,
    precioTexto: "$400 + envío",
    unidad: "canasta chica",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID22.jpeg"],
    incluye: ["Canasta de carnes chica"],
    tags: ["carnes", "oaxaqueño", "canasta", "chica"]
  },
  {
    id: "ID23",
    categoria: "desayunos",
    nombre: "ID23 — Canasta de Carnes Mediana + Girasol",
    descripcion: "Canasta de carnes oaxaqueñas en presentación mediana más girasol decorativo. El regalo perfecto para el que ama las carnes.",
    descripcionLarga: "Una selección generosa de carnes oaxaqueñas en presentación mediana, acompañada de un girasol fresco como detalle especial. La mejor opción para regalar a quien disfruta las carnes de la región.",
    precio: 900,
    precioTexto: "$900 + envío",
    unidad: "canasta mediana",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID23.jpeg"],
    incluye: ["Canasta de carnes mediana", "Girasol"],
    tags: ["carnes", "oaxaqueño", "canasta", "mediana", "girasol"]
  },
  {
    id: "ID24",
    categoria: "desayunos",
    nombre: "ID24 — Canasta de Carnes Grande",
    descripcion: "Canasta de carnes oaxaqueñas grande con salsa y guacamole. Para compartir en familia o en eventos especiales.",
    descripcionLarga: "La canasta más completa de la colección. Una generosa selección de carnes oaxaqueñas en presentación grande, acompañada de salsa casera y guacamole fresco. Ideal para reuniones familiares o para sorprender a alguien especial.",
    precio: 1800,
    precioTexto: "$1,800 + envío",
    unidad: "canasta grande",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID24.jpeg"],
    incluye: ["Canasta de carnes grande", "Salsa", "Guacamole"],
    tags: ["carnes", "oaxaqueño", "canasta", "grande", "familiar"]
  },

  // ── DESAYUNOS PEQUEÑOS ─────────────────────────────────

  {
    id: "ID25",
    categoria: "desayunos",
    nombre: "ID25 — Desayuno Pequeño Clásico",
    descripcion: "Hot cakes, 1 gelatina, pechuga empanizada con spaghetti, 1 jugo pequeño y yogurt. El desayuno pequeño más completo.",
    descripcionLarga: "El desayuno pequeño más completo de la colección. Incluye hot cakes, 1 gelatina, platillo de pechuga empanizada con spaghetti, 1 jugo pequeño y yogurt.",
    precio: 250,
    precioTexto: "$250 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID25.jpeg"],
    incluye: ["Hot cakes", "Gelatina (1 pieza)", "Platillo (pechuga empanizada con spaghetti)", "1 jugo pequeño", "Yogurt"],
    tags: ["pequeño", "pechuga", "económico", "hot cakes"]
  },
  {
    id: "ID26",
    categoria: "desayunos",
    nombre: "ID26 — Desayuno Pequeño Enfrijoladas",
    descripcion: "Hot cakes, fruta, 1 gelatina, enfrijoladas con tasajo, jugo pequeño y flor. Porciones pequeñas. Sabor grande.",
    descripcionLarga: "Desayuno pequeño con el sabor auténtico de Oaxaca. Incluye hot cakes, fruta fresca, 1 gelatina, platillo de enfrijoladas con tasajo, jugo pequeño y una flor de cortesía. *Las porciones son pequeñas.",
    precio: 300,
    precioTexto: "$300 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    nota: "Las porciones son pequeñas.",
    fotos: ["img/desayunos/ID26.jpeg"],
    incluye: ["Hot cakes", "Fruta", "1 Gelatina", "Platillo (enfrijoladas con tasajo)", "Jugo pequeño", "Flor"],
    tags: ["pequeño", "enfrijoladas", "tasajo", "oaxaqueño"]
  },
  {
    id: "ID27",
    categoria: "desayunos",
    nombre: "ID27 — Desayuno Entomatadas con Atole",
    descripcion: "Hot cakes, fruta, entomatadas con tasajo y atole de pinole. Sencillo, auténtico y delicioso.",
    descripcionLarga: "Lo más sencillo y auténtico. Incluye hot cakes, fruta fresca, platillo de entomatadas con tasajo y atole de pinole calientito.",
    precio: 360,
    precioTexto: "$360 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID27.jpeg"],
    incluye: ["Hot cakes", "Fruta", "Platillo (entomatadas con tasajo)", "Atole de pinole"],
    tags: ["pequeño", "entomatadas", "atole", "sencillo"]
  },
  {
    id: "ID28",
    categoria: "desayunos",
    nombre: "ID28 — Desayuno Wafles con Pechuga",
    descripcion: "Wafles, fruta, 1 gelatina, pechuga empanizada con spaghetti y jugo natural. Diferente y delicioso.",
    descripcionLarga: "Una variación diferente con wafles en lugar de hot cakes. Incluye wafles, fruta fresca, 1 gelatina, platillo de pechuga empanizada con spaghetti y jugo natural.",
    precio: 410,
    precioTexto: "$410 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID28.jpeg"],
    incluye: ["Wafles", "Fruta", "1 Gelatina", "Platillo (pechuga empanizada con spaghetti)", "Jugo natural"],
    tags: ["wafles", "pechuga", "diferente"]
  },
  {
    id: "ID29",
    categoria: "desayunos",
    nombre: "ID29 — Desayuno Mínimo Entomatadas",
    descripcion: "Fruta, entomatadas con tasajo y 2 jugos pequeños. La opción más sencilla y económica.",
    descripcionLarga: "La opción más accesible y sencilla. Incluye fruta fresca, platillo de entomatadas con tasajo y 2 jugos pequeños.",
    precio: 270,
    precioTexto: "$270 + envío",
    unidad: "paquete mínimo",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID29.jpeg"],
    incluye: ["Fruta", "Platillo (entomatadas con tasajo)", "2 Jugos pequeños"],
    tags: ["mínimo", "económico", "entomatadas", "sencillo"]
  },
  {
    id: "ID30",
    categoria: "desayunos",
    nombre: "ID30 — Desayuno Hot Cakes + 2 Cupcakes",
    descripcion: "Hot cakes, pechuga empanizada con spaghetti, jugo, yogurt, gelatina y 2 cupcakes. Pequeño pero completo.",
    descripcionLarga: "Un desayuno pequeño pero que no le falta nada. Incluye hot cakes, platillo de pechuga empanizada con spaghetti, jugo, yogurt, gelatina y 2 cupcakes decorados.",
    precio: 300,
    precioTexto: "$300 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID30.jpeg"],
    incluye: ["Hot cakes", "Platillo (pechuga empanizada con spaghetti)", "Jugo", "Yogurt", "Gelatina", "2 cupcakes"],
    tags: ["pequeño", "cupcakes", "hot cakes", "pechuga"]
  },
  {
    id: "ID31",
    categoria: "desayunos",
    nombre: "ID31 — Desayuno Mini con Kinder",
    descripcion: "Hot cakes, fruta (porción pequeña), yogurt, gelatina, jugo pequeño y Kinder Delice. El desayuno más pequeñito.",
    descripcionLarga: "El desayuno más pequeño y dulce de la colección. Incluye hot cakes, fruta en porción pequeña, yogurt, gelatina, jugo pequeño y un Kinder Delice como sorpresa dulce.",
    precio: 220,
    precioTexto: "$220 + envío",
    unidad: "paquete mini",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID31.jpeg"],
    incluye: ["Hot cakes", "Fruta (porción pequeña)", "Yogurt", "Gelatina", "Jugo pequeño", "Kinder delice"],
    tags: ["mini", "kinder", "pequeño", "económico"]
  },
  {
    id: "ID32",
    categoria: "desayunos",
    nombre: "ID32 — Desayuno Enchiladas con Huevo",
    descripcion: "Fruta, enchiladas verdes con huevo, 2 gelatinas y jugo. Una opción vegetariana y deliciosa.",
    descripcionLarga: "Una opción más ligera y vegetariana. Incluye fruta fresca, platillo de enchiladas verdes con huevo, 2 gelatinas y jugo.",
    precio: 225,
    precioTexto: "$225 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID32.jpeg"],
    incluye: ["Fruta", "Platillo (enchiladas verdes con huevo)", "2 gelatinas", "Jugo"],
    tags: ["enchiladas", "huevo", "vegetariano", "económico"]
  },
  {
    id: "ID33",
    categoria: "desayunos",
    nombre: "ID33 — Desayuno Enchiladas con Fresas",
    descripcion: "Jugo natural, enchiladas verdes con tasajo, fresas con crema y fruta. Sencillo y muy rico.",
    descripcionLarga: "Un desayuno fresco y sabroso. Incluye jugo natural, platillo de enchiladas verdes con tasajo, fresas con crema y fruta fresca.",
    precio: 350,
    precioTexto: "$350 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID33.jpeg"],
    incluye: ["Jugo natural", "Platillo (enchiladas verdes con tasajo)", "Fresas con crema", "Fruta"],
    tags: ["enchiladas", "fresas", "tasajo", "sencillo"]
  },
  {
    id: "ID34",
    categoria: "desayunos",
    nombre: "ID34 — Desayuno con Licuado",
    descripcion: "Fruta, licuado, jugo natural y enchiladas verdes. Fresco, nutritivo y diferente.",
    descripcionLarga: "Una opción refrescante y nutritiva. Incluye fruta fresca, licuado, jugo natural y platillo de enchiladas verdes.",
    precio: 400,
    precioTexto: "$400 + envío",
    unidad: "paquete",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID34.jpeg"],
    incluye: ["Fruta", "Licuado", "Jugo natural", "Platillo (enchiladas verdes)"],
    tags: ["licuado", "enchiladas", "fresco", "nutritivo"]
  },
  {
    id: "ID35",
    categoria: "desayunos",
    nombre: "ID35 — Desayuno Café con Cupcakes",
    descripcion: "Fruta (porción pequeña), café, 4 cupcakes y hot cakes. Para el amante del café y lo dulce.",
    descripcionLarga: "El desayuno perfecto para los amantes del café. Incluye fruta en porción pequeña, café caliente, 4 cupcakes decorados y hot cakes.",
    precio: 250,
    precioTexto: "$250 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID35.jpeg"],
    incluye: ["Fruta (porción pequeña)", "Café", "4 cupcakes", "Hot cakes"],
    tags: ["café", "cupcakes", "dulce", "hot cakes"]
  },
  {
    id: "ID36",
    categoria: "desayunos",
    nombre: "ID36 — Desayuno Básico con Jugo",
    descripcion: "Fruta, hot cakes, gelatina, jugo y yogurt. El más sencillo y clásico de todos.",
    descripcionLarga: "El desayuno más sencillo y clásico. Incluye fruta fresca, hot cakes, gelatina, jugo y yogurt. Para quien prefiere algo ligero sin complicaciones.",
    precio: 250,
    precioTexto: "$250 + envío",
    unidad: "paquete básico",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID36.jpeg"],
    incluye: ["Fruta", "Hot cakes", "Gelatina", "Jugo", "Yogurt"],
    tags: ["básico", "sencillo", "económico", "hot cakes"]
  },
  {
    id: "ID37",
    categoria: "desayunos",
    nombre: "ID37 — Desayuno Waffles con Chocolate",
    descripcion: "Waffles, fruta, jugo natural, gelatina y chocolate. Dulce, irresistible y diferente.",
    descripcionLarga: "Una opción dulce y diferente con waffles como protagonistas. Incluye waffles, fruta fresca, jugo natural, gelatina y chocolate.",
    precio: 280,
    precioTexto: "$280 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID37.jpeg"],
    incluye: ["Waffles", "Fruta", "Jugo natural", "Gelatina", "Chocolate"],
    tags: ["waffles", "chocolate", "dulce", "diferente"]
  },
  {
    id: "ID38",
    categoria: "desayunos",
    nombre: "ID38 — Desayuno con Crepa y Frappé",
    descripcion: "Fruta, hot cakes, crepa, frappé, yogurt, gelatina y Kinder Delice. Variedad en cada mordida.",
    descripcionLarga: "El desayuno más variado de la colección pequeña. Incluye fruta fresca, hot cakes, 1 crepa artesanal, frappé, yogurt, gelatina y Kinder Delice.",
    precio: 350,
    precioTexto: "$350 + envío",
    unidad: "paquete pequeño",
    disponible: true,
    anticipacion: "1 día",
    fotos: ["img/desayunos/ID38.jpeg"],
    incluye: ["Fruta", "Hot cakes", "Crepa", "Frappé", "Yogurt", "Gelatina", "Kinder Delice"],
    tags: ["crepa", "frappe", "kinder", "variado"]
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
