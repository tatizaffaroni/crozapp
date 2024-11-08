window.onload = function() {
// Obtener el valor de los parámetroa de la URL
const urlParams = new URLSearchParams(window.location.search);
const titulo = urlParams.get('titulo');
const paciente = urlParams.get('paciente');
const diagnostico = urlParams.get('diagnostico');
const tratamiento = urlParams.get('tratamiento');
const cuota1 = urlParams.get('cuota1');
const cuota2 = urlParams.get('cuota2');
const cuota3 = urlParams.get('cuota3');
const cuota4 = urlParams.get('cuota4');
const cuota5 = urlParams.get('cuota5');
const cuota6a12 = urlParams.get('cuota6a12');
const tyc1 = urlParams.get('tyc1');
const tyc2 = urlParams.get('tyc2');
const tyc3 = urlParams.get('tyc3');
const fecha = urlParams.get('fecha');


// Cambiar el título de la página
document.title = titulo;  // Actualiza la pestaña del navegador

// Modifica los valores en el html según su ID
document.getElementById('titulo').innerText = titulo;
document.getElementById('paciente').innerText = paciente;
document.getElementById('diagnostico').innerText = diagnostico;
document.getElementById('tratamiento').innerText = tratamiento;
document.getElementById('cuota1').innerText = cuota1;
document.getElementById('cuota2').innerText = cuota2;
document.getElementById('cuota3').innerText = cuota3;
document.getElementById('cuota4').innerText = cuota4;
document.getElementById('cuota5').innerText = cuota5;
document.getElementById('cuota6a12').innerText = cuota6a12;
document.getElementById('tyc1').innerText = tyc1;
document.getElementById('tyc2').innerText = tyc2;
document.getElementById('tyc3').innerText = tyc3;
document.getElementById('fecha').innerText= fecha;
};

