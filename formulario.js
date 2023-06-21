
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); //acceder a todos los inputs de formulario

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/
}


const campos = {
    nombre: false,
    correo: false,
    asunto: false
}


const validarFormulario = (e) => {
    switch(e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
    
        case "correo": 
            validarCampo(expresiones.correo, e.target, 'email');
                
        break;
    
        case "asunto":
            validarCampo(expresiones.asunto, e.target, 'asunto');

        break;
    } 
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')     //nos permite obtener el Id de un valor especifico
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        campos[campo] = false;
    }
}


inputs.forEach((input) => {   //for each por cada input ME EJECUTES UN CODIGO, la funcion: por cacda input quiero agregarle un eventListener como en el codigo Keyup (cuando se levanta la tecla y se ejecuta lo posterior a keyup) 
    input.addEventListener('keyup', validarFormulario );                   //funcion tipo flecha y se va a ejecutar por cada input
    input.addEventListener('blur', validarFormulario ) ;     
})


formulario.addEventListener('submit', (e) => {  //e = evento
    e.preventDefault();                  //siactualizo y presiono el boton de enviar, no pasa no se ejecute nada

    const terminos = document.getElementById('terminos')
    if(campos.nombre && campos.email && campos.asunto && terminos.checked) {

        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    }

});





