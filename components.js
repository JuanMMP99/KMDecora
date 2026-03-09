/* ============================================================
   KM DECORA — components.js
   Header, Footer, Modal Bienvenida, Modal Producto,
   Carrito/Cotizador, Lightbox, WhatsApp FAB, Scroll Reveal
   ============================================================ */

/* ── 1. HEADER ─────────────────────────────────────────── */
function renderHeader(activePage) {
  const pages = [
    { href: "index.html", label: "Inicio", icon: "🏠" },
    { href: "catalogo.html", label: "Catálogo", icon: "🛍️" },
    { href: "galeria.html", label: "Galería", icon: "📸" },
    { href: "contacto.html", label: "Contacto", icon: "💬" },
  ];

  const navLinks = pages
    .map(
      (p) => `
    <a href="${p.href}" class="${activePage === p.href ? "active" : ""}">${p.label}</a>
  `,
    )
    .join("");

  const mobileLinks = pages
    .map(
      (p) => `
    <a href="${p.href}" class="${activePage === p.href ? "active" : ""}">
      <span>${p.icon}</span>${p.label}
    </a>
  `,
    )
    .join("");

  document.getElementById("site-header").innerHTML = `
    <a href="index.html" class="logo">
      <div>
        KM <span>Decora</span>
        <small>Regalos & Sorpresas</small>
      </div>
    </a>
    <nav class="nav-links">${navLinks}</nav>
    <div class="nav-actions">
      <button class="cart-trigger" id="cart-open-btn" aria-label="Ver cotizador">
        🛒 Cotizador
        <span class="cart-counter" id="cart-counter">0</span>
      </button>
    </div>
    <button class="hamburger" id="hamburger-btn" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
    <div class="mobile-menu" id="mobile-menu">
      ${mobileLinks}
      <a href="#" id="mobile-cart-btn"><span>🛒</span>Cotizador</a>
    </div>
  `;

  const ham = document.getElementById("hamburger-btn");
  const menu = document.getElementById("mobile-menu");
  ham.addEventListener("click", () => {
    ham.classList.toggle("open");
    menu.classList.toggle("open");
  });
  menu.querySelectorAll("a").forEach((a) => {
    if (!a.id)
      a.addEventListener("click", () => {
        ham.classList.remove("open");
        menu.classList.remove("open");
      });
  });

  window.addEventListener("scroll", () => {
    document
      .getElementById("site-header")
      .classList.toggle("scrolled", window.scrollY > 40);
  });
}

/* ── 2. FOOTER ─────────────────────────────────────────── */
function renderFooter() {
  const year = new Date().getFullYear();

  document.getElementById("site-footer").innerHTML = `
    <div class="footer-grid">
      <div class="footer-logo">
        <div class="logo" style="margin-bottom:12px;">
          <div>KM <span>Decora</span><small>Regalos & Sorpresas</small></div>
        </div>
        <p>Hacemos que cada celebración sea única. Desayunos sorpresa, flores, pasteles, gelatinas artísticas, accesorios personalizados y decoración para eventos.</p>
      </div>
      <div class="footer-col">
        <h4>Menú</h4>
        <ul>
          <li><a href="index.html">🏠 Inicio</a></li>
          <li><a href="catalogo.html">🛍️ Catálogo</a></li>
          <li><a href="galeria.html">📸 Galería</a></li>
          <li><a href="contacto.html">💬 Contacto</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li><a href="https://wa.me/521234567890" target="_blank" rel="noopener">📱 WhatsApp</a></li>
          <li><a href="mailto:hola@kmdecora.mx">✉️ hola@kmdecora.mx</a></li>
          <li><a href="contacto.html">📍 Encuéntranos</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${year} KM Decora · Todos los derechos reservados</span>
      <span class="footer-hearts">Hecho con ♥ para cada celebración</span>
    </div>
  `;
}

/* ── 3. MODAL DE BIENVENIDA (obligatorio) ──────────────── */
function renderWelcomeModal() {
  const overlay = document.createElement("div");
  overlay.id = "welcome-overlay";
  overlay.className = "welcome-overlay";
  overlay.innerHTML = `
    <div class="welcome-modal" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div class="modal-icon">🎁</div>
      <h2 id="welcome-title">¡Bienvenida a <span>KM Decora</span>!</h2>
      <p>Tu tienda de regalos y sorpresas favorita. Aquí encontrarás desayunos, pasteles, flores, accesorios personalizados y mucho más para hacer especial cada momento.</p>
      <div class="highlight">
        <p>⏰ <span>Pedido con anticipación:</span> Si quieres que tu pedido sea <strong>igual al de la imagen</strong>, debes realizarlo con <strong>mínimo 1 día de anticipación</strong>. Los tiempos pueden variar según el producto.</p>
      </div>
      <button class="btn btn-coral" id="welcome-accept-btn">
        🎉 ¡Entendido, a explorar!
      </button>
    </div>
  `;
  document.body.appendChild(overlay);

  // No se puede cerrar hasta presionar el botón
  document
    .getElementById("welcome-accept-btn")
    .addEventListener("click", () => {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 0.4s ease";
      setTimeout(() => overlay.remove(), 400);
    });

  // Bloquear clic fuera (no cierra)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      const modal = overlay.querySelector(".welcome-modal");
      modal.style.animation = "none";
      modal.style.transform = "scale(1.02)";
      setTimeout(() => {
        modal.style.transform = "";
      }, 150);
    }
  });
}

/* ── 4. WHATSAPP FAB ───────────────────────────────────── */
function renderWhatsApp(
  phone = "521234567890",
  msg = "Hola KM Decora, quiero hacer un pedido 🎁",
) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  const fab = document.createElement("a");
  fab.href = url;
  fab.target = "_blank";
  fab.rel = "noopener";
  fab.className = "wa-fab";
  fab.setAttribute("aria-label", "Contactar por WhatsApp");
  fab.innerHTML = `
    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    <span class="wa-tooltip">¡Escríbenos!</span>
  `;
  document.body.appendChild(fab);
}

/* ── 5. SCROLL REVEAL ──────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  els.forEach((el) => obs.observe(el));
}

/* ── 6. MODAL DE PRODUCTO ──────────────────────────────── */
// Un solo modal que se rellena dinámicamente con el JSON del producto
const ProductModal = (() => {
  let currentImgs = [];
  let currentIdx = 0;

  function build() {
    const overlay = document.createElement("div");
    overlay.id = "product-overlay";
    overlay.className = "product-overlay";
    overlay.innerHTML = `
      <div class="product-modal" id="product-modal" role="dialog" aria-modal="true">
        <!-- Galería izquierda -->
        <div class="modal-gallery">
          <div class="modal-main-img">
            <img id="modal-main-img" src="" alt="">
          </div>
          <div class="modal-thumbnails" id="modal-thumbs"></div>
        </div>
        <!-- Info derecha -->
        <div class="modal-info">
          <button class="modal-close-btn" id="modal-close-btn" aria-label="Cerrar">✕</button>
          <span class="tag tag-coral modal-cat-badge" id="modal-cat"></span>
          <h2 class="modal-title" id="modal-title"></h2>
          <div class="modal-price-row">
            <span class="modal-price" id="modal-price"></span>
            <span class="modal-unit" id="modal-unit"></span>
          </div>
          <span class="modal-anticipacion" id="modal-anticipacion">⏰ Pedido con anticipación</span>
          <p class="modal-desc" id="modal-desc"></p>
          <p id="modal-nota" style="display:none; font-size:0.78rem; color:var(--coral-dark); background:rgba(255,107,107,0.07); border-left:3px solid var(--coral); padding:8px 12px; border-radius:0 6px 6px 0; margin-bottom:16px; font-style:italic;"></p>
          <div class="modal-incluye" id="modal-incluye-wrap">
            <h4>Incluye</h4>
            <ul id="modal-incluye-list"></ul>
          </div>
          <div class="modal-actions">
            <button class="btn btn-outline" id="modal-wa-btn">💬 Preguntar</button>
            <button class="btn btn-coral" id="modal-cart-btn">🛒 Cotizar</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById("modal-close-btn").addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("active")) return;
      if (e.key === "Escape") close();
    });
  }

  function open(productoId) {
    const p = getProductoById(productoId);
    if (!p) return;

    currentImgs = p.fotos || [];
    currentIdx = 0;

    // Rellenar datos
    document.getElementById("modal-cat").textContent = categoriaNombre(
      p.categoria,
    );
    document.getElementById("modal-title").textContent = p.nombre;
    document.getElementById("modal-price").textContent =
      p.precioTexto || `$${p.precio.toLocaleString()}`;
    document.getElementById("modal-unit").textContent = `MXN / ${p.unidad}`;
    document.getElementById("modal-anticipacion").textContent =
      `⏰ Anticipa tu pedido: ${p.anticipacion}`;
    document.getElementById("modal-desc").textContent =
      p.descripcionLarga || p.descripcion;

    // Nota especial (si existe)
    const notaEl = document.getElementById("modal-nota");
    if (p.nota) {
      notaEl.textContent = `* ${p.nota}`;
      notaEl.style.display = "block";
    } else {
      notaEl.style.display = "none";
    }

    // Incluye
    const ul = document.getElementById("modal-incluye-list");
    ul.innerHTML = (p.incluye || []).map((i) => `<li>${i}</li>`).join("");

    // Imagen principal
    const mainImg = document.getElementById("modal-main-img");
    mainImg.src = currentImgs[0] || "";
    mainImg.alt = p.nombre;

    // Thumbnails
    const thumbsEl = document.getElementById("modal-thumbs");
    thumbsEl.innerHTML = currentImgs
      .map(
        (src, i) => `
      <div class="modal-thumb ${i === 0 ? "active" : ""}" data-idx="${i}">
        <img src="${src}" alt="${p.nombre} foto ${i + 1}">
      </div>
    `,
      )
      .join("");
    thumbsEl.querySelectorAll(".modal-thumb").forEach((t) => {
      t.addEventListener("click", () => {
        currentIdx = parseInt(t.dataset.idx);
        setMainImg(currentIdx);
        thumbsEl
          .querySelectorAll(".modal-thumb")
          .forEach((x) => x.classList.remove("active"));
        t.classList.add("active");
      });
    });

    // WhatsApp
    document.getElementById("modal-wa-btn").onclick = () => {
      const precioStr = p.precioTexto || `$${p.precio} MXN`;
      const msg = `Hola KM Decora! Me interesa: *${p.nombre}* (${precioStr}). ¿Tienes disponibilidad?`;
      window.open(
        `https://wa.me/521234567890?text=${encodeURIComponent(msg)}`,
        "_blank",
      );
    };

    // Cotizar
    document.getElementById("modal-cart-btn").onclick = () => {
      Cart.add({
        id: p.id,
        name: p.nombre,
        price: p.precio,
        img: currentImgs[0] || "",
        cat: categoriaNombre(p.categoria),
      });
      close();
    };

    document.getElementById("product-overlay").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function setMainImg(idx) {
    const img = document.getElementById("modal-main-img");
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = currentImgs[idx];
      img.style.opacity = "1";
    }, 150);
  }

  function close() {
    document.getElementById("product-overlay").classList.remove("active");
    document.body.style.overflow = "";
  }

  return { build, open };
})();

/* ── 7. CARRITO / COTIZADOR ───────────────────────────── */
const Cart = (() => {
  let items = [];

  function total() {
    return items.reduce((s, i) => s + i.price, 0);
  }

  function updateCounter() {
    const c = document.getElementById("cart-counter");
    if (!c) return;
    c.textContent = items.length;
    c.classList.toggle("visible", items.length > 0);
    c.style.animation = "none";
    requestAnimationFrame(() => {
      c.style.animation = "cartBounce 0.4s ease";
    });
  }

  function renderItems() {
    const list = document.getElementById("cart-items-list");
    const empty = document.getElementById("cart-empty");
    const totalEl = document.getElementById("cart-total-val");
    if (!list) return;

    if (!items.length) {
      list.innerHTML = "";
      if (empty) empty.style.display = "flex";
      if (totalEl) totalEl.textContent = "$0";
      return;
    }
    if (empty) empty.style.display = "none";

    list.innerHTML = items
      .map(
        (item, idx) => `
      <div class="cart-item">
        <div class="cart-item-img">
          ${
            item.img
              ? `<img src="${item.img}" alt="${item.name}">`
              : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:1.5rem">🎁</div>`
          }
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.cat}</p>
        </div>
        <div class="cart-item-right">
          <span class="cart-item-price">$${item.price.toLocaleString()}</span>
          <button class="cart-remove-btn" onclick="Cart.remove(${idx})">quitar</button>
        </div>
      </div>
    `,
      )
      .join("");

    if (totalEl) totalEl.textContent = `$${total().toLocaleString()}`;
  }

  function add(item) {
    items.push(item);
    updateCounter();
    renderItems();
    open();
  }

  function remove(idx) {
    items.splice(idx, 1);
    updateCounter();
    renderItems();
  }

  function open() {
    document.getElementById("cart-panel")?.classList.add("open");
    document.getElementById("cart-bg-overlay")?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function close() {
    document.getElementById("cart-panel")?.classList.remove("open");
    document.getElementById("cart-bg-overlay")?.classList.remove("active");
    document.body.style.overflow = "";
  }

  function getQuoteText() {
    if (!items.length) return "";
    const list = items
      .map((i) => `• ${i.name} — $${i.price.toLocaleString()} MXN`)
      .join("\n");
    return `¡Hola KM Decora! Me gustaría cotizar estos productos 🎁:\n\n${list}\n\nTotal estimado: $${total().toLocaleString()} MXN\n\n¿Me pueden dar información sobre disponibilidad y tiempos de entrega?`;
  }

  function buildPanel() {
    const panel = document.createElement("div");
    panel.id = "cart-panel";
    panel.className = "cart-panel";
    panel.innerHTML = `
      <div class="cart-header">
        <h2><span>🛒</span> Mi Cotizador</h2>
        <button class="cart-close-btn" id="cart-close-btn" aria-label="Cerrar">✕</button>
      </div>
      <div class="cart-items-list" id="cart-items-list"></div>
      <div class="cart-empty" id="cart-empty">
        <span class="cart-empty-icon">🛍️</span>
        <p>Tu cotizador está vacío.<br>Agrega productos para cotizar.</p>
      </div>
      <div class="cart-footer">
        <div class="cart-total-row">
          <span>Total estimado</span>
          <strong id="cart-total-val">$0</strong>
        </div>
        <button class="btn btn-mint cart-wa-btn" id="cart-wa-btn">
          💬 Enviar cotización por WhatsApp
        </button>
        <p class="cart-note">Los precios son orientativos. Confirmamos disponibilidad, personalización y envío al recibir tu mensaje.</p>
      </div>
    `;
    document.body.appendChild(panel);

    const bg = document.createElement("div");
    bg.id = "cart-bg-overlay";
    bg.className = "cart-overlay";
    document.body.appendChild(bg);

    document.getElementById("cart-close-btn").addEventListener("click", close);
    bg.addEventListener("click", close);

    document.getElementById("cart-wa-btn").addEventListener("click", () => {
      const text = getQuoteText();
      if (!text) return;
      window.open(
        `https://wa.me/521234567890?text=${encodeURIComponent(text)}`,
        "_blank",
      );
    });

    // Botón de header
    document.addEventListener("click", (e) => {
      if (
        e.target.closest("#cart-open-btn") ||
        e.target.closest("#mobile-cart-btn")
      ) {
        e.preventDefault();
        open();
      }
    });
  }

  return { add, remove, open, close, buildPanel };
})();

/* ── 8. LIGHTBOX STANDALONE ───────────────────────────── */
const Lightbox = (() => {
  let imgs = [];
  let idx = 0;

  function build() {
    const lb = document.createElement("div");
    lb.id = "lightbox";
    lb.className = "lightbox";
    lb.innerHTML = `
      <button class="lb-close" id="lb-close">✕</button>
      <div class="lightbox-img-wrap" style="position:relative;">
        <button class="lb-nav lb-prev" id="lb-prev">‹</button>
        <img id="lb-img" src="" alt="">
        <button class="lb-nav lb-next" id="lb-next">›</button>
      </div>
      <p class="lightbox-caption" id="lb-caption"></p>
    `;
    document.body.appendChild(lb);

    document.getElementById("lb-close").addEventListener("click", close);
    document.getElementById("lb-prev").addEventListener("click", () => nav(-1));
    document.getElementById("lb-next").addEventListener("click", () => nav(1));
    lb.addEventListener("click", (e) => {
      if (e.target === lb) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("active")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") nav(-1);
      if (e.key === "ArrowRight") nav(1);
    });
  }

  function open(images, startIdx) {
    imgs = images;
    idx = startIdx || 0;
    show();
    document.getElementById("lightbox").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function close() {
    document.getElementById("lightbox").classList.remove("active");
    document.body.style.overflow = "";
  }

  function nav(dir) {
    idx = (idx + dir + imgs.length) % imgs.length;
    show();
  }

  function show() {
    document.getElementById("lb-img").src = imgs[idx]?.src || imgs[idx] || "";
    document.getElementById("lb-caption").textContent =
      imgs[idx]?.caption || "";
    document.getElementById("lb-prev").style.display =
      imgs.length > 1 ? "flex" : "none";
    document.getElementById("lb-next").style.display =
      imgs.length > 1 ? "flex" : "none";
  }

  return { build, open };
})();

/* ── Helpers ────────────────────────────────────────────── */
function categoriaNombre(cat) {
  const map = {
    desayunos: "Desayunos & Almuerzos",
    reposteria: "Pasteles & Gelatinas",
    flores: "Flores & Decoración",
    mesas: "Mesas de Dulces",
    accesorios: "Accesorios",
  };
  return map[cat] || cat;
}

// Renderizar una tarjeta de producto a partir del JSON
function renderProductCard(p) {
  return `
    <div class="product-card reveal" data-id="${p.id}" data-cat="${p.categoria}" onclick="ProductModal.open('${p.id}')">
      <div class="product-card-img">
        <img
          src="${p.fotos[0]}"
          alt="${p.nombre}"
          onerror="this.parentElement.style.background='var(--soft)'; this.style.display='none'"
          loading="lazy"
        >
        <span class="cat-badge">${categoriaNombre(p.categoria)}</span>
        <div class="zoom-hint">🔍</div>
      </div>
      <div class="product-card-body">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <div class="product-card-footer">
          <div class="product-price">
            ${p.precioTexto || `$${p.precio.toLocaleString()}`}
            <small>MXN / ${p.unidad}</small>
          </div>
          <button class="add-btn"
            aria-label="Agregar al cotizador"
            onclick="event.stopPropagation(); Cart.add({id:'${p.id}', name:'${p.nombre.replace(/'/g, "\\'")}', price:${p.precio || 0}, img:'${p.fotos[0]}', cat:'${categoriaNombre(p.categoria)}'})">
            +
          </button>
        </div>
      </div>
    </div>
  `;
}
