//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

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