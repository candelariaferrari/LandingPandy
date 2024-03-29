/* header */ 
/* crear boton */ 
const botonPrueba = document.getElementById('cboton');
const boton = document.createElement('button');

botonPrueba.appendChild(boton);

boton.textContent = 'Empezamos?'

 /* boton conocenos */ 
 $(document).ready(function(){ 

  $('button').on('click',function(){
     $('#startFormInicio').toggle();
  });
});


var dataFormulario;
var nombrePrueba = "";

let  formulario = document.getElementById("formularioEmpezamos");

document.documentElement.style.position = "fixed";
document.documentElement.style.width = "100vw";

formulario.onsubmit = (event) => {
    event.preventDefault (); // evita el comportamiento por defecto del form de "volver a cargar la pag"
    // para enviar la info del formulario
    nombrePrueba = "ojsdfla"; 
    let dataFormulario = {
        nombre: event.target.children[0].value,
        
    }
    
    let padre = document.getElementById("notificacion"); // salida 
    if(dataFormulario.nombre != "") {
        padre.innerHTML = `Gracias ${dataFormulario.nombre}, estamos listos para empezar!`;
        localStorage.setItem("nombre", dataFormulario.nombre);
        $('.carrusel-inner').fadeOut(3000);
        document.documentElement.style.position = "static";

    }else {
        padre.innerHTML = `Necesitamos tu nombre ! `;

        
    };
   
   
    /* PACKS */ 
    const subPack = document.getElementById('subtitlePacks');
    const subtituloPack = document.createElement('div');

    subPack.appendChild(subtituloPack);

    subtituloPack.textContent = localStorage.getItem("nombre") + " Elegí el pack que mas se adapte a vos!";

    /* SERVICIOS */ 
    const subServicios = document.getElementById('textServicios');
    const subtituloServicios = document.createElement('div');

    subServicios.appendChild(subtituloServicios);

    subtituloServicios.textContent = localStorage.getItem("nombre") + " podemos llevar tu negocio al siguiente nivel.";

    


}





/* packs */

class productoPack {
    constructor(datosPacks) {
        this.id = datosPacks.id;
        this.nombre = datosPacks.nombre;
        this.precio = parseFloat(datosPacks.precio);
    }
}
let carritoPack = []; // para la funcion carrito
let padrePack = document.getElementById("contenedorPacks"); // contenedor de pack
let carritopackHtml = document.getElementById("mensajeAgregados"); // contendor de futura lista creada del carrito
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
$(document).ready(function(){ 
    $('.btnAgregarP').on('click',function(){
       $('#mensajeAgregados').toggle(2000);
    });
  });
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
    localStorage.setItem("carritoPack", JSON.stringify(carritoPack));

 
}
//FUNCION RENDERIZAR CARRITO (GRAFICAR EL ARRAY)
function renderCarritoPack() {
    carritopackHtml.innerHTML = '';
    if (carritoPack.length > 0) {
        carritoPack.forEach(pack => {
            //alert("Agregado a carrito" + pack.nombre)
            carritopackHtml.innerHTML += `
            <h3 class="nombreP"> Agregado a carrito ${pack.nombre}</h3>
            `
        })
    }
}
  /* <h4 class="precioP">${pack.precio * pack.cantidad}</h4>
            <h5>${pack.cantidad}</h5>
            <button id="${pack.nombre}" class="btnAgregarP" type="button" onclick='borradoDePack(${carritoPack.indexOf(pack)})'>Elimnar producto</button> */
// PARA BORRAR (borra de a uno y cuando llega a cero lo quita de la lista)
/* function borradoDePack(index) {
    carritoPack[index].cantidad = carritoPack[index].cantidad - 1;
    if (carritoPack[index].cantidad <= 0) {
        carritoPack.splice(index, 1)
    }
    renderCarritoPack();
} */

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
  

/* CONTACTO */ 
var nombrecontacto;
var mail;
var celular;
var motivo;
var consultaTexto;
class consultas {
  constructor(nombrecontacto, mail, celular, motivo, consultaTexto) {
    this.nombrecontacto = nombrecontacto;
    this.mail = mail;
    this.celular = celular;
    this.motivo = motivo;
    this.consultaTexto = consultaTexto;
  }
};

function enviarConsulta() {
  let nombrecontacto = document.getElementById("nombreId").value;
  let email = document.getElementById("mailId").value;
  let cel = document.getElementById("celId").value;
  let motivo = document.getElementById("motivoId").value;
  let consultaTexto = document.getElementById("consultaId").value;
  console.log(nombrecontacto + " " + email + " " + cel + " " + motivo + " "+ consultaTexto);
  const consultaEnviada = new consultas(nombrecontacto, email, cel, motivo, consultaTexto);
  console.log(consultaEnviada);
  sessionStorage.setItem("nombre", consultaEnviada.nombrecontacto);
  sessionStorage.setItem("celular", consultaEnviada.cel);
  sessionStorage.setItem("email", consultaEnviada.email);
  sessionStorage.setItem("motivo", consultaEnviada.motivo);
  sessionStorage.setItem("consulta", consultaEnviada.consultaTexto);
 
}
$('#notificacionContacto').hide();
$('#busquedaForm').submit(function (e) { 
    e.preventDefault();
    $('#notificacionContacto').html(`<div class="alert" role="alert">
                                        Gracias! su consulta fue enviada con exito. 
                                    </div>`);
    $('#notificacionContacto').fadeIn(2000, function(){
        $('#notificacionContacto').delay(4000)
        $('#notificacionContacto').fadeOut(1000);
    });
});


