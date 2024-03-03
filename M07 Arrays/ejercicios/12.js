function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  if (arrayOfNums.length === 0) {
    return 0;
  }
  let suma = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    suma += arrayOfNums[i];
  }
  return suma;
}


module.exports = agregarNumeros;
