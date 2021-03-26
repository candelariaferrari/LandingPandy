
/* PRODUCTOS */ 
$("#tituloProductos").prepend('<h3 style="display: none"> Productos que ofrecemos </h3>');
$("h3").fadeOut("slow",function(){
    $("h3").fadeIn(500);
});


let carritoPackProductos = []; // para la funcion carrito
let carritopackHtmlProductos = document.getElementById("mensajeAgregados"); // contendor de futura lista creada del carrito
 /* boton dg */ 
$(document).ready(function(){ 
   /* DG */ 
  $('.dg').on('click',function(){
     $('#startFormDG').toggle();
  });

   /* DW  */ 
  $('.dw').on('click',function(){
    $('#startFormDW').toggle();
  }); 

   /* UX/UI  */ 
  $('.ux').on('click',function(){
    $('#startFormUX').toggle();
  }); 

  /* AV */ 
  $('.av').on('click',function(){
    $('#startFormAV').toggle();
  }); 

 

  for (let productosDG of dataProductosDG) {
    disenoGrafico(productosDG);
  };
  
  function disenoGrafico(productosDG) {
    $("#contenidoProductosDG").append(`<div class="producto">
                                      <input value = ${productosDG.id} hidden>
                                      <h5 class="tituloProducto">${productosDG.nombre}</h5>
                                      <p> $${productosDG.precio}</p>
                                      <button class="agregarProducto">Agregar</button>
                                    </div>`);                         
  };

  for (let productosDW of dataProductosDW) {
    disenoWeb(productosDW);
    };
    function disenoWeb(productosDW) {
      $("#contenidoProductosDW").append(`<div class="producto">
                                        <input value = ${productosDW.id} hidden>
                                        <h5 class="tituloProducto">${productosDW.nombre}</h5>
                                        <p> $${productosDW.precio}</p>
                                        <button class="agregarProducto">Agregar</button>
                                      </div>`);                                
                                    };

  for (let productosUX of dataProductosUX) {
    disenoUx(productosUX);
    };
    function disenoUx(productosUX) {
      $("#contenidoProductosUX").append(`<div class="producto">
                                        <input value = ${productosUX.id} hidden>
                                        <h5 class="tituloProducto">${productosUX.nombre}</h5>
                                        <p> $${productosUX.precio}</p>
                                        <button class="agregarProducto">Agregar</button>
                                      </div>`);                               
                                    };

  for (let productosAV of dataProductosAV) {
    disenoAV(productosAV);
    };
    function disenoAV(productosAV) {
      $("#contenidoProductosAV").append(`<div class="producto">
                                        <input value = ${productosAV.id} hidden>
                                        <h5 class="tituloProducto">${productosAV.nombre}</h5>
                                        <p> $${productosAV.precio}</p>
                                        <button class="agregarProducto">Agregar</button>
                                      </div>`);                               
                                    };
});



const addToBuyCartButtons = document.querySelectorAll ('.agregarProducto');
addToBuyCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click',() => console.log ('click'));
});