
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
});

 /* boton dw */ 
 $(document).ready(function(){ 
  $('.dw').on('click',function(){
     $('#startFormDW').toggle();
  });
});



//creamos una estructura para cada producto
for (let productosDG of dataProductosDG) {
    //con la funcion generarHTML por cada producto, pasamos la info por parámetro
    generarHTML(productosDG);
  }
  //creamos la estructura html
  function generarHTML(productosDG) {
    $("#contenidoProductosDG").append(`<div class="producto">
                                      <input value = ${productosDG.id} hidden>
                                      <h5 class="tituloProducto">${productosDG.nombre}</h5>
                                      <p> $${productosDG.precio}</p>
                                      <button class="agregarProductoDG">Agregar</button>
                                    </div>`);
                                    
                                    
  }
/*   <img src="${productosDG.imagen}"/>
 */
  (document).ready(function () {
    $(".agregarProductoDG").click(function (e) {
      let idProductoActual = $(e.target).parent().children()[0].value;
      const infoProducto = dataProductosDG.find(servicio => servicio.id == idProductoActual);
      productosAGREGADOSDG.push(infoProducto);
      $("#notificacionProductosDG").html(`<h2>Producto agregado: ${infoProducto.nombre}</h2>
                                  <h3> Total de producto agregados: ${productosAGREGADOSDG.length} </h3>`);
    });
  

  
  });


 