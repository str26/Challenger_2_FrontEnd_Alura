const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); //acceder a todos los inputs de formulario

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letras y espacio, pueden llevar acentos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}