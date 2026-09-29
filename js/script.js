const btnCargar = document.getElementById('btn-cargar');
const btnTema = document.getElementById('btn-tema');
const contenedor = document.getElementById('contenedor-tarjetas');


btnCargar.addEventListener('click', () => {
  fetch('datos.json')
    .then(respuesta => {
    return respuesta.json();
    })
    .then(datos => {
      let contenidoHTML = '';
      for (const item of datos) {
        contenidoHTML += 
          '<div class="card">'+ 
            "<h2>"+item.titulo+"</h2>"+
            "<p>"+item.descripcion+"</p>"+
            '<p class="categoria">Categoría: ' + item.categoria + '</p>' +
            '<p>Duración: ' + item.temporadas + '</p>' +
            "</div>";
      }
      contenedor.innerHTML = contenidoHTML;
    });

});

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('cine');
});