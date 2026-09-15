//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
const APORTE_SOLCA = 100;

function calcularDisponible(ingresos, egresos) {
    if (ingresos > egresos) {
        return ingresos - egresos;
    } else {
        return 0;
    }
}

function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.5;
}

function calcularInteresSimple(monto,tasa,plazoAnios){
    return plazoAnios*monto*tasa/100;
}

function calularTotalPagar(monto,interes){
    return monto + interes + APORTE_SOLCA;
}