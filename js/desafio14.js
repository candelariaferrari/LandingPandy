$("#dg").append(`<button class="ver"> Diseño Gráfico </button>`);


    $(".ver").click(function (e) {
        let listaRobots = [];

        $(()=>{
        $.getJSON("./data/productos.json",(respuesta)=>{
            listaRobots = respuesta ;
            let cantxFila   = 1 ;  
            for (let index = 0; index < listaRobots.length; index+=cantxFila){
            $("#contenidoGeneradoRobots").append(`<div id="fila${listaRobots[index].id}"></div><hr>`);
            crearFilaRobot(listaRobots,index,cantxFila);
            }
            $('button[id^="amigo"]').click((e) =>{
            let indiceAmigo = parseInt(e.target.id.substr(5).toUpperCase()) - 1;
            //  SIMULAMOS UN POST DE LA INFORMACION DEL AMIGO (EMPLEAMOS EL API JSONPLACEHOLDER PARA ENVIAR INFORMACION Y RECIBIR RESPUESTA)
            $.post("https://jsonplaceholder.typicode.com/posts",listaRobots[indiceAmigo],function(data, status){
                // SI LA PETICION SE CUMPLE
                if(status === "success"){
                // CARGAMOS EN EL DOM LA RESPUESTA A LA PETICIÓN POST
                $("#notificacion").html(`<h4>INFORMACION ENVIADA</h4><h6>  - nombre: ${data.nombre} - nombre: ${data.precio} </h6>`);
                //MOSTRAMOS LA NUEVA NOTIFICACION CON TOGGLE Y LA OCULTAMOS
                $("#notificacion").toggle("slow").delay(600).toggle("slow");
                }
            });
            });
            // USAMOS LA ANIMACION TOGGLE PARA OCULTAR NOTIFICACIÓN
            $("#notificacion").toggle("slow",()=>{
            //CUANDO NOTIFICACION ESTA OCULTA MOSTRAMOS CON TOGGLE CONTENDOR DE INFORMACION GENERADA
            $("#contenidoGeneradoRobots").toggle("slow");
            });
        });
        });
        //FUNCIÓN QUE PERMITE CREAR LA FILA DE ROBOTS, CONTROLANDO LOS INDICES DE LA LISTA EN RELACION AL LENGHT
        function crearFilaRobot(lista, indiceActual, cantidad){
        for (let index = 0; index < cantidad ; index++) {
            let nuevoIndice = indiceActual + index;
            if( nuevoIndice < lista.length){
            $(`#fila${lista[indiceActual].id}`).append(crearComponenteRobot(lista[nuevoIndice]));
            }
        }
        }
        //FUNCION QUE DEFINE LA ESTRUCTURA DEL HTML A AGREGAR LA INFORMACION DE UN ROBOT AL DOCUMENTO
        function crearComponenteRobot(robot){
        return `
                <div>
                    <h4>${robot.nombre}</h4>
                    <h6>$${robot.precio}</h6>
                    <button id="amigo${robot.id}">AGREGA</button>
                </div>`;
        }
         
    })
