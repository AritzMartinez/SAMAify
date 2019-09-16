let array = new Array(3);

array[0] = new Array(3);
array[1] = new Array(3);
array[2] = new Array(3);

array[0][0] =3 ; array[0][1] =5; array[0][2] =8;
array[1][0] =4 ; array[1][1] =4; array[1][2] =8;


for(let i=0; i<2; i++) {
    //Bucle que recorre el array que está en la posición i
    for(let j=0; j<3; j++) {
        console.log(array[i][j])
    }
}