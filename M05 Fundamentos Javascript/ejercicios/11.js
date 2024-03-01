function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
    var fechaActual = new Date(); //Fecha Actual
    var anioActual = fechaActual.getFullYear(); //Año actual
    var fechaNac = new Date(fechaNacimiento); //Convertir fecha de nac. a un objeto date.
    var anioNac = fechaNac.getFullYear(); //Año de nacimiento
    var edad = anioActual - anioNac; //Calcular diferencia entre fecha actual y fecha de nac.
  if (edad > 18) { //Verificar si la persona es mayor de edad
    return true;
  } else if (edad === 18) { // Verificar si la persona cumple 18 años en el año actual
    var mesNac = fechaNac.getMonth(); //Mes de nac.
    var diaNac = fechaNac.getDate(); //Dia de nac.
    // Obtener el mes y el día actual
    var mesActual = fechaActual.getMonth(); //Mes actual
    var diaActual = fechaActual.getDate(); //Dia actual
    if (mesNac < mesActual || (mesNac === mesActual && diaNac <= diaActual)) {
      return true; // Verificar si la fecha de nacimiento ya ocurrió este año
    }
  }
    return false; // Si la persona no es mayor de edad, retornar false
}
module.exports = esMayorDeEdad;

/* var fechaActual = new Date();
  var fechaNacimientoDate = new Date(fechaNacimiento);
  var diferenciaDeYears = fechaActual.getFullYear() - fechaDeNacimientoDate.getFullYear();
  if (diferenciaDeYears < 18) return false;
  return true;
} */