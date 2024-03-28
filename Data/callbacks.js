function devuelvoUsuario() {
    return 'Camilo';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);

 function devuelvoFrase(comida) {
    return 'Hoy quiero comer: ' + comida;
 };

 function hablar (comida, cb) {
    return cb(comida);
 };
 
 var fraseFinal = hablar('Pizza', devuelvoFrase);
 console.log(fraseFinal)