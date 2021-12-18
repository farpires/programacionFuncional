//Higher-order functions 
function crearCorreo(proveedorDeCorreo){
    return function(nombreDeUsuario){
        return `${nombreDeUsuario}@${proveedorDeCorreo}.com`;
    }
}

let crearCorreoGmail = crearCorreo('gmail');
let crearCorreoOutlook = crearCorreo('outlook');

console.log(crearCorreoGmail('Fabio'));
console.log(crearCorreoOutlook('Fabio'));