var array = [1, 2, 3];
console.log(array.toString()); // Devuelve "1,2,3"

var fecha = new Date();
console.log(fecha.toString()); // Devuelve una representación de cadena de la fecha y hora

var objeto = {
    nombre: "Juan",
    edad: 30,
    toString: function() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
};

  console.log(objeto.toString()); // Devuelve "Nombre: Juan, Edad: 30"

