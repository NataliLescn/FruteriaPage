/*  Instrucciones del TPO2
    - Respondan a las preguntas por orden
    - Se valorará un código limpio, bien comentado, separado por comentarios en bloques, etc 
*/

/*  PREGUNTA 1_____________
    En este TPO2 tendremos que crear un frontend de una tienda de frutas* 

    *pueden modificarlo o cambiar la temática o hacer lo que quieran libremente
    
    Para ello disponemos ya del HTML y el CSS prearmado. Entonces desde JavaScript deberemos:

    1. Almacenar nuestros datos en un objeto e imprimir el nombre del grupo en la consola y en el nav:
        <div class="nombreGrupo"></div>

    2. Crear un array de objetos a partir de las frutas de la carpeta img (o de los elementos que prefieran, temática libre)

    3. Imprimir esos objetos por pantalla, deberemos agregar esa funcion a la funcion inicializadora.


/*  PREGUNTA 4_____________
    Creen una función para imprimir en pantalla los productos del array de objetos y agreguenla a la funcion inicializadora
    El html que deben agregar debe tener el siguiente esquema (para que se apliquen los estilos)

        <div class="product-card">
            <img src="" alt="">
            <h3></h3>
            <p>$</p>
            <button class="add-to-cart">Agregar a carrito</button>
        </div>
*/

    /*  OPCIONAL / PREGUNTA 5_____________
    Escriban una función filtro, por ejemplo, asociada a un evento keyup, que recoja los valores del campo input y ejecute con cada evento un filtro que actualice los productos
*/

     /*  OPCIONAL / PREGUNTAS 6 y 7_____________

    1. Elaboren la funcionalidad de carrito. Agreguen funcionalidad al boton de cada producto para introducir ese elemento en un contenedor de carrito e imprimirlo en el listado con id "cart-items"" del HTML

    El HTML que deben agregar debe seguir el siguiente esquema (para que se apliquen los estilos)

    <li class="item-block">
        <p class="item-name">nombreproducto - $precioproducto</p>
        <button class="delete-button">Eliminar</button>
    </li>

    2. Se valorará que se almacenen los productos del carrito en un localStorage
*/

    ///Como un mapa mental, escriban con sus palabras el razonamiento con el tienen pensado elaborar cada pregunta///
   ///Qué tienen pensado hacer en cada uno de estos pasos, qué métodos van a elegir y por qué///


    //Escriban acá su razonamiento y explicación de todo tu proceso//


////  RESOLUCIÓN   //////


////Variables///////////

///CREAMOS NUESTRAS VARIABLES LOCALES, QUE APARECEN EN EL INDEX.HTML PARA PODER TRABAJAR CON ELLAS PERO DESDE EL JAVASCRIPT////

let cuadriculaProductos = document.querySelector(".product-grid");
let barraBusqueda = document.querySelector(".search-bar");

let botonesCarrito = document.querySelectorAll(".add-to-cart");
let objetosCarrito = document.getElementById("cart-items");
let precioCarrito = document.getElementById("total-prize");
let contadorCarrito = document.getElementById("cart-counts");

let carrito = [];



///Ejercicio 2: Aquí se creo el array de los productos con los que trabajaremos. Almacenando datos como id, nombre, precio e imagen.

////Array de productos/////////////

let productosFruteria = [
    {id: 1, nombre: "arandano", precio: 5000, img: "img/arandano.jpg"},
    {id: 2, nombre: "banana", precio: 1000, img: "img/banana.jpg"},
    {id: 3, nombre: "frambuesa", precio: 4000, img: "img/frambuesa.png"},
    {id: 4, nombre: "frutilla", precio: 3000, img: "img/frutilla.jpg"},
    {id: 5, nombre: "kiwi", precio: 2000, img: "img/kiwi.jpg"},
    {id: 6, nombre: "mandarina", precio: 800, img: "img/mandarina.jpg"},
    {id: 7, nombre: "manzana", precio: 1500, img: "img/manzana.jpg"},
    {id: 8, nombre: "naranja", precio: 9000, img: "img/naranja.jpg"},
    {id: 9, nombre: "pera", precio: 3000, img: "img/pera.jpg"},
    {id: 10, nombre: "anana", precio: 5000, img: "img/anana.jpg"},
    {id: 11, nombre: "pomelo-amarillo", precio: 2000, img: "img/pomelo-amarillo.jpg"},
    {id: 12, nombre: "pomelo-rojo", precio: 3000, img: "img/pomelo-amarillo.jpg"},
    {id: 13, nombre: "sandia", precio: 5000, img: "img/sandia.jpg"},
];


/*  PREGUNTA 3_____________
    Agreguen a la funcion inicializadora init() una función para imprimir nombre del grupo en el nav y en la consola.
*/

    ///AGREGAMOS DICHA FUNCIONALIDAD AL FINALIZAR TODAS LAS DEMAS FUNCIONES Y LINEAS DE CÓDIGOS.///


//// PREGUNTA 4////

//////Mostrar productos/////////////// 

// FUNCIÓN PARA MOSTRAR LOS PRODUCTOS EN LA PÁGINA, UTILIZANDO EL ESQUEMA QUE APLICA A LOS ESTILOS DEL HTML////

function mostrarProductos(array) {

    let cartaProducto = ""; //Vamos a llamar nuestro string vacio

    for(let i = 0; i < array.length; i++) {
            cartaProducto += `
            <div class="product-card">
                <img src="${array[i].img}" alt="${array[i].nombre}">
                <h3>${array[i].nombre}</h3>
                <p>${array[i].precio}</p>
                <button class="add-to-cart" onclick="agregarCarrito(${array[i].id})">Agregar a carrito</button>
                </div>
                `;
    }
    cuadriculaProductos.innerHTML = cartaProducto;
    //console.log(cartaProducto)
}

/////PUNTO 6 Y 7 REALIZAMOS LA FUNCIONALIDAD CARRITO.

// Función para agregar un producto al carrito.

function agregarCarrito(id) {
    console.log(`id del producto: ${id}`)

    // fruta == productosFruteria[i] es un bucle for tradicional
    // fruta.id == productosFruteria[i].id en un bucle for tradicional 
    let frutaSeleccionada = productosFruteria.find(fruta => fruta.id === id);

    carrito.push(frutaSeleccionada);

    console.log(carrito);

    mostrarCarrito();
}

///Mostrar carrito//// 
///HACEMOS VISIBLE EL CARRITO EN LA PÁGINA////

function mostrarCarrito() {
    let carritoCompra = "";

    carrito.forEach((producto, indice) => {
        carritoCompra += `
        <li class="item-block">
            <p>${producto.nombre} - ${producto.precio}</p>
            <button class="delete-button" onclick="eliminarProducto(${indice})">Eliminar</button>
        </li>
        `;
    })

    objetosCarrito.innerHTML = carritoCompra; // Muestra los productos en el carrito
    actualizarContadorYPrecio();
}

//Se agregaron nuevas funciones PEDIDAS EN EL EJERCICIO como ser la de eliminar productos y otra para que al mismo tiempo se actualice el contador.

// Función para eliminar un producto del carrito

function eliminarProducto(indice) {
    // Eliminar el producto de la lista del carrito
    carrito.splice(indice, 1);
    
    // Volver a mostrar el carrito actualizado
    mostrarCarrito();
}

// Función para actualizar el contador y el precio total del carrito

function actualizarContadorYPrecio() {
    // Contar cuántos productos hay en el carrito
    contadorCarrito.textContent = carrito.length;

    // Calcular el precio total
    const total = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0);
    precioCarrito.textContent = `${total}`;
}

///PUNTO 3 ///
// Función inicializadora

function init() {
    // Acá irian las funciones de arranque de la aplicacion. No se olviden de invocar esta app

    console.log(productosFruteria.length); //Cantidad de elementos 

    console.log(productosFruteria);

    console.table(productosFruteria);

    mostrarProductos(productosFruteria);

    actualizarContadorYPrecio();

}

init();
