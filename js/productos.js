
/* PRODUCTOS */ 
$("#tituloProductos").prepend('<h3 style="display: none"> Productos que ofrecemos </h3>');
$("h3").fadeOut("slow",function(){
    $("h3").fadeIn(500);
});





 /* boton dg */ 
 $(document).ready(function(){ 
  $('.dg').on('click',function(){
     $('#startFormDG').toggle();
  });
 


  /* DG */ 

  for (let productosDG of dataProductosDG) {
    generarHTML(productosDG);
  };
  function generarHTML(productosDG) {
    $("#contenidoProductosDG").append(`<div class="producto">
                                      <input value = ${productosDG.id} hidden>
                                      <h5 class="tituloProducto">${productosDG.nombre}</h5>
                                      <p> $${productosDG.precio}</p>
                                      <button class="agregarProductoDG">Agregar</button>
                                    </div>`);
                                    
                                    
  };
  /* $(".agregarProductoDG").click(function (e) {
      let idProductoActual = $(e.target).parent().children()[0].value;
      const infoProducto = dataProductosDG.find(servicio => servicio.id == idProductoActual);
      productosAGREGADOSDG.push(infoProducto);
      $("#notificacionProductosDG").html(`<h2>Producto agregado: ${infoProducto.nombre}</h2>
                                  <h3> Total de producto agregados: ${productosAGREGADOSDG.length} </h3>`);
  }); */

  /* FIN DG */


  /* DW  */ 
  $('.dw').on('click',function(){
    $('#startFormDW').toggle();
 });
  for (let productosDW of dataProductosDW) {
    generarHTML(productosDW);
  };
  function generarHTML(productosDW) {
    $("#contenidoProductosDW").append(`<div class="producto">
                                      <input value = ${productosDW.id} hidden>
                                      <h5 class="tituloProducto">${productosDW.nombre}</h5>
                                      <p> $${productosDW.precio}</p>
                                      <button class="agregarProductoDW">Agregar</button>
                                    </div>`);
                                    
                                    
  };
  
    /* $(".agregarProductoDW").click(function (e) {
      let idProductoActual = $(e.target).parent().children()[0].value;
      const infoProductoDW = dataProductosDG.find(servicio => servicio.id == idProductoActual);
      productosAGREGADOSDG.push(infoProductoDW);
      $("#notificacionProductosDW").html(`<h2>Producto agregado: ${infoProductoDW.nombre}</h2>
                                  <h3> Total de producto agregados: ${productosAGREGADOSDW.length} </h3>`);
    }); */

/* FIN DW */
});



