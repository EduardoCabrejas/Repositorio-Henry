function diasEnMes(mes) {
    // La función recibe un mes(número) por argumento.
    // Determine cúantos días tiene el mes correspondiente a ese número.
    // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
    // Tu código:
    var dias;
    if (mes < 1 || mes > 12) {
        return 0;
    }
    if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
        dias = 31;
    } else if ([4, 6, 9, 11].includes(mes)) {
        dias = 30;
    } else if (mes === 2) {
        dias = 28;
    }
    return dias;
}