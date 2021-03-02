/* header */ 
/* crear boton */ 
const botonPrueba = document.getElementById('cboton');
const boton = document.createElement('button');

botonPrueba.appendChild(boton);

boton.textContent = 'Empezamos?'

 /* boton conocenos */ 
 $(document).ready(function(){ 
  $('button').on('click',function(){
     $('#startForm').toggle();
  });
});

var dataFormulario;

let  formulario = document.getElementById("formularioEmpezamos");
formulario.onsubmit = (event) => {
    event.preventDefault (); // evita el comportamiento por defecto del form de "volver a cargar la pag"
    // para enviar la info del formulario 
    let dataFormulario = {
        nombre: event.target.children[0].value,
    }
    let padre = document.getElementById("notificacion"); // salida 
    padre.innerHTML = `Gracias ${dataFormulario.nombre}, estamos listos para empezar!`;
    console.log(dataFormulario); // para ver la info del formulario 
    localStorage.setItem("nombre", dataFormulario.nombre);
    return formulario;
}





/* PACKS */ 
const subPack = document.getElementById('subtitlePacks');
const subtituloPack = document.createElement('div');

subPack.appendChild(subtituloPack);
//NO ME SALIO 
subtituloPack.textContent = localStorage.getItem("nombre") + " Elegí el pack que mas se adapte a vos!",

class productoPack {
    constructor(datosPacks) {
        this.id = datosPacks.id;
        this.nombre = datosPacks.nombre;
        this.precio = parseFloat(datosPacks.precio);
    }
}
let carritoPack = []; // para la funcion carrito
let padrePack = document.getElementById("contenedorPacks"); // contenedor de pack
let carritopackHtml = document.getElementById("packsCargados"); // contendor de futura lista creada del carrito
// funcion para crear un elemento del dom 
function crearElementoPack() {
    datosPacks.forEach(pack => { // para crear cada pack 
        let nodo = document.createElement('div')
        nodo.innerHTML =  `<div class="cpack">
                                <h3 class="nombreP"> ${pack.nombre}</h3>
                                <p class="productosP"> ${pack.productosPacks}</p>
                                <h4 class="precioP"> $${pack.precio}</h4>
                            </div>
                            <button id="${pack.nombre}" onclick="addToCart(${datosPacks.indexOf(pack)})" class="btnAgregarP"> Agregar al carrito </button>
                            `;                        // para saber que index es
        padrePack.appendChild(nodo);                       
    })

}


crearElementoPack();

function addToCart(index) { // funcion para el push carrito y sumar la cantidad 
    let pack = datosPacks[index];
    if (carritoPack.length > 0) {
        let noExiste = true;
        for (let i = 0; i < carritoPack.length; i++) { //si no se agrega
            if (pack.nombre === carritoPack[i].nombre) {
                carritoPack[i].cantidad++;
                noExiste = false;
            }
        }
        if (noExiste) { //si se agrega (.push)
            pack.cantidad = 1;
            carritoPack.push(pack);
        }
    } else {
        pack.cantidad = 1;
        carritoPack.push(pack)
    }
    renderCarritoPack();
    localStorage.setItem("pack", pack.nombre);
    localStorage.setItem("cantidad", pack.cantidad);
    localStorage.setItem("precio", pack.precio);


 
}
//FUNCION RENDERIZAR CARRITO (GRAFICAR EL ARRAY)
function renderCarritoPack() {
    carritopackHtml.innerHTML = '';
    if (carritoPack.length > 0) {
        carritoPack.forEach(pack => {
            carritopackHtml.innerHTML += `
            <div>
            <h3 class="nombreP"> ${pack.nombre}</h3>
            <h4 class="precioP">${pack.precio * pack.cantidad}</h4>
            <h5>${pack.cantidad}</h5>
            <button id="${pack.nombre}" class="btnAgregarP" type="button" onclick='borradoDePack(${carritoPack.indexOf(pack)})'>Elimnar producto</button>
            </div>
            `
        })
    }
    localStorage.getItem("pack");
    localStorage.getItem("cantidad");
    localStorage.getItem("precio");

}

// PARA BORRAR (borra de a uno y cuando llega a cero lo quita de la lista)
function borradoDePack(index) {
    carritoPack[index].cantidad = carritoPack[index].cantidad - 1;
    if (carritoPack[index].cantidad <= 0) {
        carritoPack.splice(index, 1)
    }
    renderCarritoPack();
}


  /* TRABAJOS*/ 
for(let trabajo of datosTrabajos){
    generarHTMLjQuery(trabajo);
  }
  
  //FUNCION PARA GENERAR HTML USANDO jQUERY
  function generarHTMLjQuery(trabajo){
    $('#contenedorTrabajos').prepend(`<div>
                                    <img src="${trabajo.imagen}">
                                    <h3>${trabajo.nombre}</h3>
                                    <h2>${trabajo.descripcion}</h2>
                                  </div>`);
  }
  
  window.addEventListener('load', () => {
    console.log("trabajo");
  })
  


