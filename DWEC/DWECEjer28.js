let n1;
let cuenta;
n1=prompt("Introduce una palabra",n1);
function bocales(n1) {
    for (let i = 0; i <n1.length; i++) {
        let caracter = n1.charAt(i);
        if (caracter =="a" ||caracter =="e" ||caracter =="i" ||caracter =="o" ||caracter =="u"){
            return cuenta++
        }
    }
}
console.log(bocales())

