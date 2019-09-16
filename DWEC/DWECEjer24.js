let n1
n1=prompt("Introduce un numero ",n1);

function factorial(n1) {
    let total = 1;
    for (i=1;i<=n1;i++){
        total*=i;
    }
    return total;
}
console.log(factorial(n1));