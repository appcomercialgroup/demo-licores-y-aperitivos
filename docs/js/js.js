// Creamos un nuevo objeto Date, que representará la fecha actual
var fechaActual = new Date();

// Array con los nombres de los meses
var nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Obtenemos el índice del mes actual
var indiceMesActual = fechaActual.getMonth();

// Obtenemos el nombre del mes actual utilizando el array de nombres de meses
var nombreMesActual = nombresMeses[indiceMesActual];

let txtMesActual = document.querySelector(".mesactual");
txtMesActual.textContent = nombreMesActual;

// let cervezaFosforescente = document.querySelector(".cerveza-fosforescente");

// let get_style = window.getComputedStyle(cervezaFosforescente);
// // console.log(cervezaFosforescente);
// console.log(get_style);
