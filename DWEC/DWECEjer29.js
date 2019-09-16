let numeros = [1,2,3,4,5];
let numeros2 = [ ];

for (let i=0;i<5;i++){
    numeros2=prompt("Introduce un numero ",numeros2);
    console.log(numeros2);
}

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

function esPar (numeros){
    numeros.forEach(function (numero) {
        if (a%2 == 0 ){
            return numero;
        }
    })
}
console.log(esPar())

