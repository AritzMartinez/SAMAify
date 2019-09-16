var a;
a=prompt("Introduce un numero ",a);
console.log(parImpar(a));
function parImpar(a){
    if (a%2 == 0 ){
        return "Par";
    }else {
        return "Impar";
    }
}