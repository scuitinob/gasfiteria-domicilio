# Gasfitería Servicio a Domicilio — v1

Landing page de una sola página, responsiva y orientada a conversión desde Google Ads / búsquedas.

## Antes de publicar

1. Abre `assets/js/config.js`.
2. Cambia `whatsappNumber` por el número real, en formato internacional sin `+`, espacios ni guiones. Ejemplo Chile: `56912345678`.
3. Personaliza `whatsappMessage`.
4. Confirma las comunas/zonas reales de atención y agrégalas al contenido y al schema antes de trabajar SEO local.
5. Agrega fotos reales de trabajos a `assets/img/galeria/` y decláralas en `galleryImages`.

## Cómo agregar una foto a la galería

```js
{ 
  src: "assets/img/galeria/reparacion-fuga.webp",
  alt: "Reparación de fuga en cañería de cocina",
  title: "Reparación de fuga"
}
```

Para quitarla, elimina el objeto correspondiente del arreglo.

## SEO incluido

- Title y meta description.
- Canonical a `https://gasfiteriadomicilio.cl/`.
- Open Graph y Twitter Card.
- `robots.txt` y `sitemap.xml`.
- Schema.org tipo `Plumber`.
- HTML semántico, H1/H2/H3 y FAQ visible.
- Imágenes con dimensiones/alt y carga diferida en galería.
- Diseño mobile-first/responsivo y navegación por anclas.

## Para una segunda versión

Conviene completar datos reales del negocio: teléfono, comunas de cobertura, horarios, servicios exactos, fotos propias y cualquier dato comercial verificable. Esos datos permitirán mejorar mucho el SEO local y el copy de Google Ads.
