/*
  CONFIGURACIÓN RÁPIDA DEL SITIO

  siteMode:
    "live"        = muestra la web completa.
    "maintenance" = muestra la página provisoria de mantenimiento.

  Para volver a publicar la web completa solo cambia esa variable a "live".
*/
window.SITE_CONFIG = {
  siteMode: "live",

  whatsappNumber: "56964924530",
  whatsappMessage: "¡Hola! Me interesa solicitar un servicio de gasfitería",

  /*
    Fotografías de las tarjetas de servicios.
    Ejemplo: destapes: "assets/img/servicios/destapes.webp"
  */
  serviceImages: {
    destapes: "assets/img/servicios/destapes.webp",
    fugasAgua: "assets/img/servicios/fugas-agua.webp",
    fugasGas: "assets/img/servicios/fugas-gas.webp",
    calefon: "assets/img/servicios/calefon.webp"
},

  /* Galería opcional de trabajos realizados */
  galleryImages: [
    { src: "assets/img/galeria/trabajos-1.webp", alt: "Destape de cámara", title: "Destape de cámara de alcantarillado" },
    { src: "assets/img/galeria/trabajos-2.webp", alt: "Reinstalación WC", title: "Reinstalación de WC" },
    { src: "assets/img/galeria/trabajos-3.webp", alt: "Filtración de agua", title: "Reparación de filtración de agua" },
    { src: "assets/img/galeria/trabajos-4.webp", alt: "Instalación llave de paso", title: "Instalación de llave de paso" },
    { src: "assets/img/galeria/trabajos-5.webp", alt: "Instalación' de red de gas", title: "Instalación de red de gas" },
    { src: "assets/img/galeria/trabajos-6.webp", alt: "Cambio de tapa de alcantarillado", title: "Cambio de tapa de alcantarillado" },
    // { src: "assets/img/galeria/trabajos-7.webp", alt: "Filtración de agua", title: "Reparación de filtración de agua" }
  ]
};
