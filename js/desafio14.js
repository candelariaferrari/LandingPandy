$("#dg").append(`<button class="ver"> Diseño Gráfico </button>`);

    $(".ver").click(function (e) { //succes representa el exito del get 
        let listaProducts =[]
        $.get("../data/productos.json", function(e){
            console.log(listaProducts)
        });
         
    })


 
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