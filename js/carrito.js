

function crearCarrito() {
    let padrePack = document.getElementById("packsCargados"); // contenedor de pack
    let itemsCarrito = JSON.parse(localStorage.getItem("carritoPack"));
    itemsCarrito.forEach(item => { // para crear cada pack 
        let nodo = document.createElement('div');
        nodo.innerHTML = `<div class="items">
                            <p class="packs"> Id Producto ${item.nombre} Precio ${item.precio}</p>
                         </div>

                            `; // para saber que index es
        padrePack.appendChild(nodo);
    });

}




crearCarrito();