/* SELECCIONAR LOS ELEMENTOS DEL DOM */

const lechuga = document.getElementById('lechuga');
const cebolla = document.getElementById('cebolla');
const albahaca = document.getElementById('albahaca');
const tomate = document.getElementById('tomate');
const mybody = document.getElementById('myBody');

lechuga.addEventListener('click', () => {
  mybody.style.backgroundImage = "url('imagenes/lechuga.jpeg')";
});

cebolla.addEventListener('click', () => {
  mybody.style.backgroundImage = "url('imagenes/cebolla.jpg')";
});

albahaca.addEventListener('click', () => {
  mybody.style.backgroundImage = "url('imagenes/albahaca.jpeg')";
});

tomate.addEventListener('click', () => {
  mybody.style.backgroundImage = "url('imagenes/tomate.jpg')";
});

