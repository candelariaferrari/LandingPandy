let carritopackHtml = document.getElementById("packsCargados"); // contendor de futura lista creada del carrito


function crearCarrito() {
    let padrePack = document.getElementById("packsCargados"); // contenedor de pack
    let itemsCarrito = JSON.parse(localStorage.getItem("carritoPack"));
    itemsCarrito.forEach(item => { // para crear cada pack 
        let nodo = document.createElement('div');
        nodo.innerHTML = `<div class="items">
                            <div class="item">Nombre: <strong>${item.nombre}</strong> </div>
                            <div class="item">Precio: <strong>$${item.precio * item.cantidad}</strong> </div> 
                            <div class="item">Cantidad: <strong>${item.cantidad}</strong></div>
                            <button id="${item.nombre}" class="btn eliminar" type="button"> eliminar</button>
                         </div>`;
        padrePack.appendChild(nodo);
    });

}
crearCarrito();
/* 
 ----- NO ME FUNCIONA ---- 

<button id="${item.nombre}" class="btn eliminar" type="button" onclick='borradoDePack(${itemsCarrito.indexOf(item)}'></button> 



function borradoDePack(index) {
    itemsCarrito[index].cantidad = itemsCarrito[index].cantidad - 1;
    if (itemsCarrito[index].cantidad <= 0) {
        itemsCarrito.splice(index, 1)
    }
    crearCarrito();
}
*/