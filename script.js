// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');
// función para voltear la tarjeta cuando se hace clic en el botón "Ver Detalles"
function voltearTarjeta() {
    tarjeta.classList.toggle('flipped');
}