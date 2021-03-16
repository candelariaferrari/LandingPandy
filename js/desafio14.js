$("#dgrafico").append(`<button class="ver"> Diseño Gráfico </button>`);

    $(".ver").click(function (e) {
        let listaProducts = [];
        $(()=>{
        $.getJSON("./data/productos.json",(respuesta)=>{
            listaProducts = respuesta ;
            console.log(JSON.stringify(listaProducts)); 
            let cantxFila   = 4 ;  
            for (let index = 0; index < 4; index+=cantxFila){
              // CREAMOS EL DIV CON CLASE "row", QUE ES LA FILA DEL GRID
              $("#dgrafico").append(`<div class="cproducto" id="fila${listaProducts[index].id}"></div><hr>`);
              // LLAMADA A LA FUNCIÓN QUE NOS PERMITE AGREGAR ROBOTS POR FILA
              crearFilaProducto(listaProducts,index,cantxFila); 
            }           
        })
    })
})

function crearComponentesProductos(producto){
    return `
            <div>
              <h4>${producto.nombre}</h4>
              <h2>${producto.precio}</h2>
              <button id="addProduct${producto.id}">AGREGA</button>
            </div>`;
}

function crearFilaProducto(lista, indiceActual, cantidad){
    for (let index = 0; index < cantidad ; index++) {
      let nuevoIndice = indiceActual + index;
      if( nuevoIndice < lista.length){
        $(`#fila${lista[indiceActual].id}`).append(crearComponentesProductos(lista[nuevoIndice]));
      }
    }
  }


 
/*     let servicios = [];
document.addEventListener('DOMContentLoaded', cargaInicial);
/* -------------------------------------------------------------------------- 
/*             FUNCION CON AJAX PARA RENDERIZAR LA DB Y EL CARRITO            
/* -------------------------------------------------------------------------- 
function cargaInicial() {
    $.ajax({
        url: 'database.json',
        success: function (data) {
            console.log(data)
            servicios = data;
            renderServicios();
            renderCarrito();
        },
        error: function (error, jqXHR, status) {
            console.log(error);
        }
    }
    )
} */