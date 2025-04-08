// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');
const tarjetaFrontal = tarjeta.querySelector(".frontal");
const tarjetaPosterior = tarjeta.querySelector(".posterior");
// Función para voltear la tarjeta
function voltearTarjeta() {
    tarjetaFrontal.style.transform = "rotateY(180deg)";
    tarjetaPosterior.style.transform = "rotateY(0deg)";
}
// función para volver a la cara frontal
function retornarTarjeta() {
    tarjetaFrontal.style.transform = "rotateY(0deg)";
    tarjetaPosterior.style.transform = "rotateY(180deg)";
}

verDetallesButton.addEventListener("click", voltearTarjeta);
volverButton.addEventListener("click", retornarTarjeta);
