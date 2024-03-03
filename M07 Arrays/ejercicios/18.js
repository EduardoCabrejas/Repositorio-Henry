function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var array = [];
  for (var i = 52; i <= 70; i = i + 2) {
    array.push(i);
    if (num < 0) return "Se interrumpió la ejecución";
  }
  return array;
}
module.exports = breakStatement;
