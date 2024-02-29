function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  // Obtener la fecha actual
  let fechaActual = new Date();
  
  // Obtener el año actual
  let anioActual = fechaActual.getFullYear();
  
  // Convertir la fecha de nacimiento a un objeto Date
  let fechaNac = new Date(fechaNacimiento);
  
  // Obtener el año de nacimiento
  let anioNac = fechaNac.getFullYear();
  
  // Calcular la diferencia de años entre la fecha actual y la fecha de nacimiento
  let edad = anioActual - anioNac;
  
  // Verificar si la persona es mayor de edad
  if (edad > 18) {
    return true;
  } else if (edad === 18) { // Verificar si la persona cumple 18 años en el año actual
    // Obtener el mes y el día de nacimiento
    let mesNac = fechaNac.getMonth();
    let diaNac = fechaNac.getDate();
    // Obtener el mes y el día actual
    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDate();
    // Verificar si la fecha de nacimiento ya ocurrió este año
    if (mesNac < mesActual || (mesNac === mesActual && diaNac <= diaActual)) {
      return true;
    }
  }
  // Si la persona no es mayor de edad, retornar false
  return false;
}

module.exports = esMayorDeEdad;