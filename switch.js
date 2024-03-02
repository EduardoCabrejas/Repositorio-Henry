let expr = "Mangos";
switch (expr) {
    case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
    case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
    case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
    case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
    case "Mangos":
    case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
    default:
    console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}
console.log("¿Hay algo más que quisiera consultar?");

var foo0 = 0;
switch (foo0) {
case -1:
    console.log("1 negativo");
    break;
case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0);
  // NOTA: el "break" olvidado debería estar aquí
case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log(1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
case 2:
    console.log(2);
    break;
    default:
    console.log("default");
}

var foo1 = 5;
switch (foo1) {
case 2:
    console.log("2");
    break; // al encontrar este 'break' se continuará con el siguiente 'default:'
default:
    console.log("default de foo1");
  // fall-through
case 1:
    console.log("1");
}

var Animal = "Jirafa";
switch (Animal) {
case "Vaca":
case "Jirafa":
case "Perro":
case "Cerdo":
    console.log("Este animal subirá al Arca de Noé.");
case "Dinosaurio":
default:
    console.log("Este animal no lo hará.");
}

var foo2 = 1;
var output = "Salida: ";
switch (foo2) {
case 1:
    output += "¿Y ";
case 2:
    output += "Cuál ";
    output += "Es ";
case 3:
    output += "Tu ";
case 4:
    output += "Nombre";
case 5:
    output += "?";
    console.log(output);
    break;
case 6:
    output += "!";
    console.log(output);
    break;
default:
    console.log("Por favor, selecciona un valor del 1 al 6.");
}

var ironMaiden = "Iron Maiden";
switch (ironMaiden) {
    case "Iron Maiden":
        console.log("Iron Maiden");
        break;
    case "The Stranglers":
        console.log("The Stranglers");
        break;
    case "Rammstein":
        break;
}