let numDni;
let letraDni;
numDni=prompt("Introduce el  numero de dni ",numDni);
letraDni=prompt("Introduce la letra",letraDni);

if (numDni>99999999 || numDni<0 ){
    console.log("El numero proporcionado no es correcto")
}

function adivinaLetra(){
    let cadena="TRWAGMYFPDXBNJZSQVHLCKE"
    let posicion = numDni%23
    let letra = cadena.substring(posicion,posicion+1);
    return letra;
}
console.log(adivinaLetra());