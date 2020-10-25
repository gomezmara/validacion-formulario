const inputUsuario = document.querySelector('#inputUsuario');
const inputClave = document.querySelector('#inputClave');

document.querySelector('#formulario').onsubmit = function() {
    if (inputUsuario.value === "") {
        alert("Ingrese usuario");
        return false;
    }

    if (inputUsuario.value.indexOf("@") === -1) {
        alert("El usuario debe tener arroba");
        return false;
    }

    if (inputClave.value === "") {
        alert("Ingrese clave");
        return false;
    } 
    
    return true;
};