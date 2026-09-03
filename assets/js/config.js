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
  whatsappMessage: "Hola, vi su página gasfiteriadomicilio.cl y quisiera consultar por un servicio de gasfitería a domicilio en Santiago.",

  /*
    Fotografías de las tarjetas de servicios.
    Cuando tengas las imágenes, guárdalas en assets/img/servicios/ y completa las rutas.
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
    // { src: "assets/img/galeria/trabajo-01.webp", alt: "Reparación de fuga de agua en Santiago", title: "Reparación de fuga" }
  ]
};
