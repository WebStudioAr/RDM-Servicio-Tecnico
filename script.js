(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = () => window.matchMedia("(max-width: 880px)").matches;
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

  document.documentElement.classList.remove("no-js");

  /* ---------- Año en footer ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     1) SMOOTH SCROLL — nativo del navegador
     ========================================================= */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
    });
  });

  /* =========================================================
     2) HEADER STICKY
     ========================================================= */
  const header = $("#header");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* =========================================================
     3) DRAWER MOBILE
     ========================================================= */
  const burger = $("#burger");
  const drawer = $("#drawer");
  const backdrop = document.createElement("div");
  backdrop.className = "drawer-backdrop";
  document.body.appendChild(backdrop);

  function setDrawer(open) {
    burger.classList.toggle("is-open", open);
    drawer.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", () => setDrawer(!drawer.classList.contains("is-open")));
  backdrop.addEventListener("click", () => setDrawer(false));
  $$("[data-close]", drawer).forEach((el) => el.addEventListener("click", () => setDrawer(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) setDrawer(false);
  });

  /* =========================================================
     4) REVEALS ON SCROLL — IntersectionObserver
     ========================================================= */
  function initReveals() {
    const items = $$("[data-reveal]");
    if (prefersReduced) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    const vh = window.innerHeight * 0.92;
    items.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        // Ya visible al cargar — revelar de inmediato sin esperar IO
        el.classList.add("is-in");
      } else {
        io.observe(el);
      }
    });
  }

  /* =========================================================
     5) DIAGNÓSTICO INTERACTIVO
     ========================================================= */
  const WA = "https://wa.me/5491160509126?text=";
  const diagData = {
    lenta: {
      state: "Alerta moderada",
      meter: 40,
      tag: "Diagnóstico",
      title: "Tu PC está lenta",
      text: "Suele ser disco saturado, exceso de programas al inicio o falta de mantenimiento. Un formateo con puesta a punto —o un upgrade puntual de RAM/SSD— la deja como nueva.",
      service: "Formateo y puesta a punto",
      msg: "Hola RDM, mi PC está muy lenta y quiero consultar por un formateo / puesta a punto.",
    },
    noenciende: {
      state: "Alerta crítica",
      meter: 90,
      tag: "Urgente",
      title: "No enciende",
      text: "Puede ser fuente, placa, RAM o un problema de encendido. Hacemos un diagnóstico para detectar la causa real antes de tocar nada.",
      service: "Reparación / Diagnóstico",
      msg: "Hola RDM, mi PC no enciende y necesito un diagnóstico.",
    },
    ruido: {
      state: "Alerta media",
      meter: 55,
      tag: "Diagnóstico",
      title: "Hace ruido",
      text: "Casi siempre son los coolers con suciedad o un disco mecánico empezando a fallar. Conviene revisarlo a tiempo para evitar pérdida de datos.",
      service: "Mantenimiento y limpieza",
      msg: "Hola RDM, mi PC hace ruido y quiero que la revisen.",
    },
    temp: {
      state: "Alerta alta",
      meter: 85,
      tag: "Atención",
      title: "Se recalienta",
      text: "Polvo acumulado y pasta térmica seca elevan la temperatura y bajan el rendimiento. Una limpieza interna con cambio de pasta lo soluciona.",
      service: "Mantenimiento y limpieza",
      msg: "Hola RDM, mi PC se recalienta y quiero coordinar una limpieza / cambio de pasta térmica.",
    },
    virus: {
      state: "Alerta alta",
      meter: 80,
      tag: "Seguridad",
      title: "Tiene virus",
      text: "Ventanas raras, lentitud y publicidad suelen ser malware. Limpiamos el sistema, lo dejamos seguro y, si hace falta, formateamos sin perder tus datos.",
      service: "Formateo / Limpieza de virus",
      msg: "Hola RDM, creo que mi PC tiene virus y quiero consultar.",
    },
    mant: {
      state: "Alerta preventiva",
      meter: 45,
      tag: "Preventivo",
      title: "Necesita mantenimiento",
      text: "Mantenimiento preventivo: limpieza interna, control de temperaturas, actualización y puesta a punto general para que rinda y dure más.",
      service: "Mantenimiento y limpieza",
      msg: "Hola RDM, quiero coordinar un mantenimiento general de mi PC.",
    },
    red: {
      state: "Alerta media",
      meter: 50,
      tag: "Redes",
      title: "Problemas de red",
      text: "WiFi que se corta, sin internet o señal débil. Configuramos router, mejoramos la cobertura y dejamos la conexión estable.",
      service: "Redes",
      msg: "Hola RDM, tengo problemas de red / WiFi y quiero consultar.",
    },
  };

  const diagImages = {
    lenta:      "assets/diagnostico/pc-lenta.webp",
    noenciende: "assets/diagnostico/pc-no-enciende.webp",
    ruido:      "assets/diagnostico/pc-hace-ruido.webp",
    temp:       "assets/diagnostico/pc-recalienta.webp",
    virus:      "assets/diagnostico/pc-virus.webp",
    mant:       "assets/diagnostico/pc-mantenimiento.webp",
    red:        "assets/diagnostico/pc-problemas-red.webp",
  };

  function initDiag() {
    const chips = $$(".diag__options .chip");
    if (!chips.length) return;
    const info = $(".diag__info");
    const elState = $("#diagState");
    const elMeter = $("#diagMeter");
    const elTag = $("#diagTag");
    const elTitle = $("#diagTitle");
    const elText = $("#diagText");
    const elService = $("#diagService");
    const elCta = $("#diagCta");
    const diagImg = $("#diagnosticImage");

    function swapImage(key, title) {
      if (!diagImg || !diagImages[key]) return;
      diagImg.classList.add("is-changing");
      window.setTimeout(() => {
        diagImg.src = diagImages[key];
        diagImg.alt = title;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          diagImg.classList.remove("is-changing");
        }));
      }, 220);
    }

    function render(key) {
      const d = diagData[key];
      if (!d) return;
      info.classList.add("is-swapping");
      elState.textContent = d.state;
      elMeter.style.width = d.meter + "%";
      elMeter.parentElement.dataset.level = d.meter >= 85 ? "critical" : d.meter >= 65 ? "high" : "low";
      swapImage(key, d.title);
      window.setTimeout(() => {
        elTag.textContent = d.tag;
        elTitle.textContent = d.title;
        elText.textContent = d.text;
        elService.textContent = d.service;
        elCta.href = WA + encodeURIComponent(d.msg);
        info.classList.remove("is-swapping");
      }, 180);
    }

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => {
          c.classList.remove("is-active");
          c.setAttribute("aria-selected", "false");
        });
        chip.classList.add("is-active");
        chip.setAttribute("aria-selected", "true");
        render(chip.dataset.key);
      });
    });

    render("lenta");
  }

  /* =========================================================
     6) FONDOS DINÁMICOS — Sección Armado a medida
     ========================================================= */
  function initBuild() {
    const specs = $("#buildSpecs");
    if (!specs) return;
    const items = $$("li[data-bg]", specs);
    if (!items.length) return;

    const layers = {};
    $$(".build__layer").forEach((el) => {
      const match = el.className.match(/build__layer--(\w+)/);
      if (match) layers[match[1]] = el;
    });
    if (!layers["default"]) return;

    function activate(key) {
      Object.values(layers).forEach((l) => l.classList.remove("is-active"));
      (layers[key] || layers["default"]).classList.add("is-active");
    }

    items.forEach((item) => {
      item.addEventListener("pointerenter", () => activate(item.dataset.bg));
      item.addEventListener("focus", () => activate(item.dataset.bg));
    });

    specs.addEventListener("pointerleave", () => activate("default"));
    specs.addEventListener("focusout", (e) => {
      if (!specs.contains(e.relatedTarget)) activate("default");
    });
  }

  /* =========================================================
     7) ESCALA DEL CANVAS FIJO — sección servicios
     ========================================================= */
  function scaleServicesCanvas() {
    const frame  = document.querySelector(".services-fixed__frame");
    const canvas = document.querySelector(".services-fixed__canvas");
    if (!frame || !canvas) return;
    if (isMobile()) {
      canvas.style.transform = "";
      frame.style.minHeight  = "";
      return;
    }
    const scale = Math.min(1, frame.clientWidth / 1680);
    canvas.style.transform = `scale(${scale})`;
    frame.style.minHeight  = `${900 * scale}px`;
  }

  /* =========================================================
     INIT
     ========================================================= */
  function init() {
    initReveals();
    initDiag();
    initBuild();
    scaleServicesCanvas();
    window.addEventListener("resize", scaleServicesCanvas, { passive: true });
  }

  if (document.readyState === "complete") init();
  else window.addEventListener("load", init);
})();
