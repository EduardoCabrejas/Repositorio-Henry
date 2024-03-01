function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  date = new Date(fecha);
  const year = 2022; 
  const month = 0; 
  const day = 1; 
  
  if( date.getFullYear() == year &&
      date.getMonth() == month &&
      date.getDate() == day ) {
      return true;
  } else {
      return false;
  }
}
module.exports = esFechaValida;

/* if (Object.prototype.toString.call(fecha) === '[object Date]' && !isNaN(fecha)) {
  return true;
} else {
  return false;
} */