function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
    if (i == 3) break;
    i++;
    }
    return i * x ;
}
console.log(comprobarBreak(5));