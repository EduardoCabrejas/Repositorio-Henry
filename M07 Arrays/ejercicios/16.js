function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesFaltantes = ['Marzo', 'Noviembre', 'Enero'];
  var mesesEncontrados = [];
  for (let i = 0; i < mesesFaltantes.length; i++) {
    if (!array.includes(mesesFaltantes[i])) {
      return "No se encontraron los meses pedidos";
    } else {
      mesesEncontrados.push(mesesFaltantes[i]);
    }
  }
  return mesesEncontrados;
}
module.exports = mesesDelAño;
