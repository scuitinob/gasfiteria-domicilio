# Gasfitería Servicio a Domicilio — v2

Landing page de una sola página, responsiva y orientada a contacto desde Google Ads y búsquedas locales en Santiago / Región Metropolitana.

## 1. Cambiar entre web completa y modo mantenimiento

Abre `assets/js/config.js` y cambia:

```js
siteMode: "live"
```

por:

```js
siteMode: "maintenance"
```

- `live`: muestra la web completa.
- `maintenance`: muestra una página provisoria con logo, servicios, certificación SEC, zona de atención y contacto por WhatsApp.

Mientras el modo mantenimiento está activo, JavaScript cambia la etiqueta `robots` a `noindex,nofollow,noarchive` para reducir la posibilidad de que Google indexe la página provisoria.

> Nota: en GitHub Pages este es un modo visual de mantenimiento. GitHub Pages no permite devolver un HTTP 503 real desde una página estática.

## 2. WhatsApp

El número ya quedó configurado como:

```text
+56 9 6492 4530
```

En `assets/js/config.js` se almacena sin `+` ni espacios:

```js
whatsappNumber: "56964924530"
```

Todos los botones de WhatsApp usan el mismo valor.

## 3. Agregar fotos a los servicios

Crea, si no existe, la carpeta:

```text
assets/img/servicios/
```

Guarda allí imágenes optimizadas, idealmente `.webp`, y completa las rutas de `serviceImages` en `assets/js/config.js`:

```js
serviceImages: {
  destapes: "assets/img/servicios/destapes.webp",
  fugasAgua: "assets/img/servicios/fugas-agua.webp",
  fugasGas: "assets/img/servicios/fugas-gas.webp",
  calefon: "assets/img/servicios/calefon.webp"
}
```

Si una ruta queda vacía, la tarjeta muestra un placeholder para que la página siga funcionando.

## 4. Galería opcional de trabajos realizados

Las fotografías se agregan en `assets/img/galeria/` y se declaran en `galleryImages`:

```js
{ 
  src: "assets/img/galeria/reparacion-fuga.webp",
  alt: "Reparación de fuga de agua en Santiago",
  title: "Reparación de fuga"
}
```

Si no existen fotografías, la sección completa se oculta automáticamente.

## 5. Cambios incluidos en esta versión

- Modo `live` / `maintenance` mediante una sola variable.
- WhatsApp real: +56 9 6492 4530.
- Servicios reales: destapes, fugas de agua, fugas de gas y reparación de calefón.
- Atención de urgencias sin afirmar disponibilidad 24/7.
- Sección de certificación SEC y logo proporcionado.
- Mapa de Google Maps centrado en Santiago de Chile.
- Área de atención: Santiago y Región Metropolitana.
- Tarjetas de servicios preparadas para foto + título + descripción + detalle.
- SEO actualizado para búsquedas locales en Santiago.
- Schema.org `Plumber` con teléfono, área de servicio y catálogo de servicios.
- Diseño responsivo para móvil y escritorio.

## 6. Pendiente para la próxima iteración

- Agregar fotografías definitivas de cada servicio.
- Agregar fotografías reales de trabajos si se desea usar la galería secundaria.
- Revisar textos finales con el dueño del servicio.
- Cuando corresponda: dominio definitivo, Search Console, Analytics y medición de conversiones de Google Ads/WhatsApp.
