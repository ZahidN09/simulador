//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    //Calculo de valor disponible
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    let saldo = calcularDisponible(ingresos, egresos);
    mostarEnSpan("spnDisponible", saldo);

    //Calculo de capacidad de pago
    let capacidadDePago = calcularCapacidadPago(saldo);
    mostarEnSpan("spnCapacidadPago", capacidadDePago);

    //Calculo de interés simple
    let monto = recuperarInt("txtMonto");
    let plazo = recuperarInt("txtPlazo");
    let tasa = recuperarInt("txtTasaInteres");
    let interes = calcularInteresSimple(monto, tasa, plazo);
    mostarEnSpan("spnInteresPagar", interes);

    //Calculo de total a pagar
    let total = calularTotalPagar(monto, interes);
    mostarEnSpan("spnTotalPrestamo", total);

    //Calculo de cuota mensual
    let cuota = calcularCuotaMensual(total, plazo);
    mostarEnSpan("spnCuotaMensual", cuota);

    //Analisis de crédito
    let estado = aprobarCredito(capacidadDePago, cuota);
    if (estado) {
        mostarEnSpanTxt("spnEstadoCredito", "CREDITO APROBADO");
    } else {
        mostarEnSpanTxt("spnEstadoCredito", "CREDITO RECHAZADO");
    }
}