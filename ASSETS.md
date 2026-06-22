# RDM — Asset Map

Mapa de recursos visuales sugeridos para llevar la landing al máximo nivel premium.
**Ninguno de estos archivos existe todavía.** La web funciona perfecta sin ellos
(usa fondos CSS trabajados como fallback). Cuando generes un asset, activarlo es
cambiar **una sola línea** en `styles.css` → bloque `1b. REGISTRO DE ASSETS`.

---

## Cómo integrar un asset (3 pasos)

1. Generá la imagen con el nombre exacto de la tabla.
2. Guardala en una carpeta `assets/` junto a `index.html`.
3. En `styles.css`, en el bloque `:root` de assets, reemplazá `none` por la URL:

```css
/* Antes */
--bg-hero: none;
/* Después */
--bg-hero: url("assets/hero-hardware-bg.webp");
```

Listo. La imagen entra con su velo oscuro de integración ya resuelto (el texto
sigue siendo legible). Para ajustar cuánto pesa la imagen sobre el fondo, tocá
`--asset-opacity` (valor global, por defecto `.55`).

---

## Variables disponibles

| Variable CSS         | Sección            | Tipo de asset                |
|----------------------|--------------------|------------------------------|
| `--bg-hero`          | Hero               | Fondo full-bleed             |
| `--img-hero-render`  | Hero               | Render PC (transparente)     |
| `--bg-services`      | Servicios          | Fondo full-bleed             |
| `--bg-diagnostic`    | Diagnóstico        | Fondo full-bleed             |
| `--bg-build`         | Armado de PC       | Fondo full-bleed (lado der.) |
| `--img-pc-render`    | Armado de PC       | Render torre (transparente)  |
| `--bg-location`      | Ubicación          | Mapa estilizado              |
| `--bg-cta`           | CTA final          | Fondo full-bleed             |

---

## ASSET MAP detallado

### 1. `hero-hardware-bg.webp`
- **Sección:** Hero (fondo principal).
- **Tamaño:** 2400 × 1600 px (también exportar @1x 1600px para mobile si querés).
- **Formato:** WebP, **oscuro**, horizontal (3:2 aprox).
- **Texto:** NO. Solo ambiente.
- **Descripción visual:** Laboratorio técnico / setup de hardware en penumbra.
  Placa madre o gabinete abierto con luces azules muy controladas, profundidad de
  campo (bokeh), trazos de circuito sutiles. Lado derecho con más detalle, lado
  izquierdo oscuro y limpio (ahí va el texto). Nada saturado ni gamer-infantil.
- **Nota:** la zona inferior debe poder fundirse a negro (#07111B). El velo CSS
  ya oscurece, pero generala dejando "aire" oscuro a la izquierda.

### 2. `hero-pc-render.webp`
- **Sección:** Hero (objeto protagonista, opcional — reemplaza el núcleo animado).
- **Tamaño:** 1400 × 1400 px.
- **Formato:** WebP o PNG con **fondo transparente**, cuadrado (1:1).
- **Texto:** NO.
- **Descripción visual:** Render premium de un gabinete/PC de frente 3/4, o un
  componente icónico (placa, cooler), con iluminación azul/roja sutil y sombra
  propia. Estilo producto, limpio, flotando. Si lo activás, conviene ocultar el
  núcleo CSS (`.hero__core{display:none}`).

### 3. `services-blueprint-bg.webp`
- **Sección:** Servicios (fondo).
- **Tamaño:** 2400 × 1800 px.
- **Formato:** WebP, **oscuro**, horizontal.
- **Texto:** NO.
- **Descripción visual:** Blueprint técnico / plano de ingeniería muy sutil:
  líneas finas azul tenue, cotas, nodos de circuito, esquinas con detalles tipo
  esquemático. Debe sentirse "plano técnico" sin competir con las cards. Muy bajo
  contraste, casi monocromo azul sobre grafito.

### 4. `diagnostic-interface-bg.webp`
- **Sección:** Diagnóstico interactivo (fondo).
- **Tamaño:** 2400 × 1600 px.
- **Formato:** WebP, **oscuro**, horizontal.
- **Texto:** NO.
- **Descripción visual:** Interfaz de diagnóstico / HUD futurista difuminado:
  ondas, gráficos de señal, scanlines, líneas de telemetría, hexágonos tenues.
  Concentrá el detalle arriba-centro (donde está el título) y dejá el centro algo
  más limpio para el panel. Glow azul controlado, toque rojo mínimo.

### 5. `pc-build-bg.webp` (opcional)
- **Sección:** Armado de PC (fondo, se funde desde la derecha).
- **Tamaño:** 2000 × 1600 px.
- **Formato:** WebP, **oscuro**, horizontal.
- **Texto:** NO.
- **Descripción visual:** Ambiente de ensamblaje: piezas de PC, líneas de montaje,
  partículas, luz azul. El velo CSS lo desvanece hacia la izquierda (donde está el
  texto), así que cargá el detalle a la derecha.

### 6. `pc-build-render.webp`
- **Sección:** Armado de PC (render protagonista, opcional — reemplaza la torre CSS).
- **Tamaño:** 1200 × 1500 px.
- **Formato:** WebP/PNG **transparente**, vertical (4:5).
- **Texto:** NO.
- **Descripción visual:** Render de torre gamer/workstation con panel de vidrio,
  RGB azul/rojo elegante, coolers visibles, vista 3/4. Estilo producto premium,
  sombra propia, flotando. Reemplaza visualmente el render CSS `.rig`.

### 7. `location-tech-map-bg.webp`
- **Sección:** Ubicación (panel del mapa).
- **Tamaño:** 1400 × 1200 px.
- **Formato:** WebP, **oscuro**, vertical/cuadrado.
- **Texto:** NO (el tag "RDM · Ciudad Jardín" y el pin se dibujan en CSS encima).
- **Descripción visual:** Mapa estilizado tech de Ciudad Jardín / Lomas del Palomar:
  calles en azul tenue sobre grafito, estilo "dark map" (tipo Mapbox dark), grid
  sutil. Sin etiquetas de texto. El pin rojo y el cartel ya van por encima en CSS.
- **Nota:** Si preferís un mapa real, podés exportar un screenshot de Google Maps /
  Mapbox en tema oscuro recortado a la zona. Mantené la estética azul/grafito.

### 8. `cta-final-bg.webp`
- **Sección:** CTA final (fondo).
- **Tamaño:** 2400 × 1400 px.
- **Formato:** WebP, **oscuro**, horizontal.
- **Texto:** NO.
- **Descripción visual:** Fondo atmosférico, hero-like pero más simple: halo azul
  central potente, formas técnicas tenues, líneas que convergen al centro. Debe
  dejar el centro algo despejado para el título y el botón. Contraste fuerte.

---

## ASSET MAP — Mobile (≤ 768px)

Las versiones mobile **no son recortes del desktop**: están pensadas en vertical,
con menos ruido visual, menos peso y zonas limpias para que el texto se lea
perfecto. Se conectan en `styles.css` → variables `--bg-*-mobile` (todas en `none`
por defecto). En el `@media (max-width:768px)` cada sección pasa a usar
automáticamente su variante mobile cuando existe; si no, cae al fondo CSS (nunca al
desktop estirado). La opacidad global baja a `.42` en mobile para priorizar lectura.

| Variable CSS              | Archivo                              |
|---------------------------|--------------------------------------|
| `--bg-hero-mobile`        | `hero-hardware-bg-mobile.webp`       |
| `--bg-services-mobile`    | `services-blueprint-bg-mobile.webp`  |
| `--bg-diagnostic-mobile`  | `diagnostic-interface-bg-mobile.webp`|
| `--bg-build-mobile`       | `pc-build-bg-mobile.webp`            |
| `--bg-location-mobile`    | `location-tech-map-bg-mobile.webp`   |
| `--bg-cta-mobile`         | `cta-final-bg-mobile.webp`           |

> Los renders transparentes (`hero-pc-render.webp`, `pc-build-render.webp`) no
> necesitan variante mobile: escalan bien por ser `contain` y transparentes. Si
> querés, generá versiones más livianas con el mismo nombre.

### 1m. `hero-hardware-bg-mobile.webp`
- **Sección:** Hero. **Orientación:** vertical (4:5 o 9:16).
- **Tamaño:** 1080 × 1600 px.
- **Descripción visual:** Hardware en penumbra, composición vertical, con el detalle
  (placa/luz azul) en el **tercio inferior** y la **mitad superior oscura y limpia**
  (ahí va el titular). Mucho menos ruido que el desktop.
- **Peso:** < 120 KB (WebP ~70).

### 2m. `services-blueprint-bg-mobile.webp`
- **Sección:** Servicios. **Orientación:** vertical (3:4).
- **Tamaño:** 1080 × 1440 px.
- **Descripción visual:** Blueprint técnico muy tenue, pocas líneas, distribuidas en
  vertical. Casi monocromo azul sobre grafito. Sin densidad: las cards van encima.
- **Peso:** < 90 KB.

### 3m. `diagnostic-interface-bg-mobile.webp`
- **Sección:** Diagnóstico. **Orientación:** vertical (3:4).
- **Tamaño:** 1080 × 1440 px.
- **Descripción visual:** HUD/telemetría difuminada concentrada **arriba** (zona del
  título), centro limpio para el panel interactivo. Glow azul leve, rojo mínimo.
- **Peso:** < 100 KB.

### 4m. `pc-build-bg-mobile.webp`
- **Sección:** Armado de PC. **Orientación:** vertical (3:4).
- **Tamaño:** 1080 × 1440 px.
- **Descripción visual:** Ambiente de ensamblaje suave; detalle hacia un costado/arriba
  y resto limpio. Recordá que en mobile el bloque se apila (texto + visual), así que
  evitá saturar el centro.
- **Peso:** < 110 KB.

### 5m. `location-tech-map-bg-mobile.webp`
- **Sección:** Ubicación (panel del mapa). **Orientación:** vertical/cuadrado (4:5).
- **Tamaño:** 1080 × 1200 px.
- **Descripción visual:** Mapa dark estilizado de Ciudad Jardín, pocas calles azul
  tenue, sin etiquetas (el pin rojo y el tag van en CSS encima). Limpio y legible.
- **Peso:** < 100 KB.

### 6m. `cta-final-bg-mobile.webp`
- **Sección:** CTA final. **Orientación:** vertical (4:5 o 9:16).
- **Tamaño:** 1080 × 1500 px.
- **Descripción visual:** Halo azul central, formas técnicas mínimas, **centro
  despejado** para el título y el botón de WhatsApp. Contraste fuerte, poco ruido.
- **Peso:** < 110 KB.

**Cómo activarlas:** igual que las de desktop, pero en las variables `-mobile`:

```css
--bg-hero-mobile: url("assets/hero-hardware-bg-mobile.webp");
```

---

## Recomendaciones de producción

- **Peso:** apuntá a < 250 KB por imagen de fondo (WebP calidad ~75–82). Para los
  renders transparentes, PNG si necesitás bordes limpios; si no, WebP.
- **Coherencia:** misma paleta en todos (#07111B grafito base, azules #12B3FF /
  #58C8FF, rojo #EF3D4D solo como acento). Mismo nivel de glow.
- **Mobile:** opcionalmente generá variantes `-mobile` más livianas y verticales;
  se pueden conectar con un `@media` que redefina la variable.
- **Texto en imágenes:** ninguno lo lleva. Todo el copy vive en HTML (mejor SEO,
  accesibilidad y edición).

---

## ¿Figma / Canva?

No son necesarios para esta entrega: la landing ya está casi terminada en código
con fondos muy trabajados. Solo tendría sentido usarlos como apoyo puntual:

- **Figma:** para diseñar el sistema visual / variantes responsive antes de generar
  los assets, o para maquetar un render si no usás IA de imágenes.
- **Canva:** para piezas auxiliares (placeholder rápido, banner para redes), no
  para los fondos de la web.

Si generás los assets directamente (IA de imágenes o foto/render real), podés
saltarte ambas herramientas sin perder calidad.
