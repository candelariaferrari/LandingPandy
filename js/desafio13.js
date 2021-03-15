
// desafio 13
$("#tituloProductos").prepend('<h3 style="display: none"> Productos que ofrecemos </h3>');
$("h3").fadeOut("slow",function(){
    $("h3").fadeIn(500, function(){
      $("#contenidoProductos").slideUp(0,function(){
        $("#contenidoProductos").slideDown(500, function(){
          $(".tituloProducto").css({
                              color: '#F2C12E',
                              "background-color":'#F2f2f2',
                              padding: '10px',
                              "border-radius":'10px'})
                              }); 
      });
    });
});





//creamos una estructura para cada producto
for (let producto of datosProductos) {
    //con la funcion generarHTML por cada producto, pasamos la info por parámetro
    generarHTML(producto);
  }
  //creamos la estructura html
  function generarHTML(producto) {
    $("#contenidoProductos").append(`<div class="producto">
                                      <input value =${producto.id} hidden>
                                      <h5 class="tituloProducto" style="color:transparent">${producto.nombre}</h5>
                                      <p> $${producto.precio}</p>
                                      <button class="agregarProducto">Agregar</button>
                                    </div>`);
                                    
                                    
  }



  $(document).ready(function () {
    $(".agregarProducto").click(function (e) {
      let idProductoActual = $(e.target).parent().children()[0].value;
      //BUSCAMOS LA INFORMACIÔN DEL AMIGO SELECCIONADO EN NUESTRO ARRAY DE DATOS
      const infoProducto = datosProductos.find(servicio => servicio.id == idProductoActual);
      //AGREGAMOS LA SELECCION A OTRA ARRAY CON LA INTENCION DE DISTINGUIR SELECCIONADOS Y NO SELECCIONADOS
      productosAGREGADOS.push(infoProducto);
      //SALIDA DE LA INFORMACIÒN DEL AMIGO SELECCIONADO POR EL USUARIO
      $("#notificacionProductos").html(`<h2>Producto agregado: ${infoProducto.nombre}</h2>
                                  <h3> Total de producto agregados: ${productosAGREGADOS.length} </h3>`);
    });
  
  /*   $('h5').click(function (e) {
      //USO DE TRIGGER PARA DISPARAR EL MISMO COMPORTAMIENTO CON AL CLICKEAR EL BOTON "AGREGAR" 
      $(e.target).parent().children().last().trigger('click');
    }); */
  
  });