var listaDeCompras = [];
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga";
console.log(listaDeCompras.length);
//listaDeCompras[1]
//var elementoDelArray = listaDeCompras[1];
//console.log(elementoDelArray);

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

//Métodos: Push, Unshift, Pop y Shift
var colores = ['amarillo', 'azul'];
colores.push('rojo');
colores.unshift('verde')
colores.pop();
colores.shift();
console.log(colores);

//Includes
var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dalí']
var incluyeDali = pintores.includes('Monet');
console.log(incluyeDali);

//Every
var numeros = [10, 6, 8, 9];
var cumplenCondicion = numeros.every((num) => {
    return num > 5 });
    console.log(cumplenCondicion);

//Split
var palabra = "Henri";
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);

//Join
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

//forEach
var numerosA = [1, 2, 3, 4];
numerosA.forEach(num => console.log(num));
numerosA.forEach (num => {
    if (num === 3) 
        console.log(num)
    }
);

//Map
var numerosB = [1, 2, 3, 4];
var masUno = numerosB.map((num) => {
    return num + 1;
});
console.log(masUno);

//Bucle For
var arr0 = [1, 2, 3, 4, 5]; //(Variable de iteraciín; período de iteración; cierre de iteración)
for (let i = 0; i < arr0.length; i++) {
    console.log(arr0[i]);
}

function encontrarLetraP(string) {
    var letras = string.split('');
    for(let i = 0; i < letras.length; i++) {
        if (letras[i] === "p") {
        console.log("Si contiene la letra p");
        }
    }
}
encontrarLetraP("JavaScript");
encontrarLetraP("Henry");

//Bucle While
var arr1 = [];
while (arr1.length < 5) {
arr1.push('BOOM');
}
console.log(arr1);