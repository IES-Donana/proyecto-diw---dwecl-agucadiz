const patrones = {
    nombre: 'Introduzca al menos un nombre. Max: 2 nombres',
    apellidos: 'Introduzca al menos un apellido. Max: 2 apellidos',
    email: 'Formado válido: xxx@yyy.zzz',
};

//variables
let inputs = document.getElementsByTagName('input');
let save = document.getElementById('enviar');
let formulario = document.getElementById("form");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let email = document.getElementById('email');
let text = document.getElementById("text");
let todoValido = 0;
textarea.disabled = true;

//eventos
nombre.addEventListener("blur", validarInput);
apellidos.addEventListener("blur", validarInput);
email.addEventListener("blur", validarInput);
email.addEventListener("keypress", mayusAlert);
enviar.addEventListener("click", validarform);
enviar.addEventListener("click", validartext);






