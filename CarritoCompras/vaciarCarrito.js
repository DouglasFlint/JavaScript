


// Variable para vaciar la lista

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 


// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

// Elimina los elementos del carrito en el DOM
function vaciarCarrito() {
    // forma rapida 
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}
