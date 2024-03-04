var persona = { //Persona = Objeto | Nombre y Edad = Propiedades | 
                //Saludar&&CumplirAños = Funciones
    nombre: "Juan",
    edad: 30,
    saludar: function() {
    console.log("Hola, mi nombre es " + this.nombre + ".");
    },
    cumplirAños: function() {
    this.edad++;
    console.log("¡Feliz cumpleaños! Ahora tengo " + this.edad + " años.");
    }
};

  persona.saludar(); // Salida: "Hola, mi nombre es Juan."
  persona.cumplirAños(); // Salida: "¡Feliz cumpleaños! Ahora tengo 31 años."

  var deportes = {
    conBalon : ["Football", "Basketball", "Rugby"],
    sinBalon : ["Boxeo", "Surf", "Trekking"],

  };

// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
console.log(atuendos.manos);

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

// DIFERENCIA
var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas[propUno] = ["Frutas", "Vegetales"];
  comidas[propDos] = ["Hamburguesas", "Papas Fritas"];
};
diferenciaDeNotaciones('Saludables', 'NoSaludables');
console.log(comidas);

