function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  var esEntero = numero === Math.floor(numero);
  return esEntero;
}
/* if (Number.isInteger(numero)) return true;
  return false;
}*/

module.exports = esNumeroEntero;
