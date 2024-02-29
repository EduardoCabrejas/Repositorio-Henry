function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  if (texto === '') {
    return texto; 
  }
  return texto.split('').reverse().join('');
}

module.exports = invertirTexto;