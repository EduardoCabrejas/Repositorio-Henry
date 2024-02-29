function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  date = new Date(fecha);
  const year = 2022; // Definir el año que deseas verificar
  const month = 0; // Definir el mes que deseas verificar (enero es 0)
  const day = 1; // Definir el día que deseas verificar
  
  if( date.getFullYear() == year &&
      date.getMonth() == month &&
      date.getDate() == day ) {
      return true;
  } else {
      return false;
  }
}

module.exports = esFechaValida;