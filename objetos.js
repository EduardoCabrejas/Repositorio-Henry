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
