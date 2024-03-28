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

//FUNCIONES
var misFunciones = {
  saludar: function() {
    console.log("Hola Mundo!");
  }
}
misFunciones.saludar();

var persona = { //Persona = Objeto | Nombre y Edad = Propiedades | 
                //Saludar&&CumplirAños = Método
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

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
console.log(atuendos.manos);

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas[propUno]= ['Frutas', 'Vegetales'];
  comidas[propDos] = ['Hamburguesas', 'Papas Fritas'];
};
diferenciaDeNotaciones('saludables', 'noSaludables');
console.log(comidas);

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');
console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

//RECORRIDO
var mundo = {continentes: 7, paises: 195, oceanos: 7};
for (let prop in mundo) {
  console.log('Esta es la propiedad: ', prop);
  console.log('Este es el valor: ', mundo[prop]); //BRACKET NOTATION
}

//CONTEXTO
//THIS
var mascota = {
  animal: 'Perro',
  raza: 'Ovejero Alemán',
  amistoso: true,
  dueño: 'María López',
  info: function() {
    console.log('Mi perro es un ' + this.raza);
  },
};

mascota.info();