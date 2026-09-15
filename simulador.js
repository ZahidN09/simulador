//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
    let cmpIngresos = document.getElementById("txtIngresos");
    let ingresos = parseFloat(cmpIngresos.value);

    let cmpEgresos = document.getElementById("txtEgresos");
    let egresos = parseFloat(cmpEgresos.value);

    let saldo = calcularDisponible(ingresos,egresos);

    let lblDisponibleValor = document.getElementById("spnDisponible");
    lblDisponibleValor.textContent = saldo.toFixed(2);

    let capacidadDePago = calcularCapacidadPago(saldo);
    let lblCapacidadValor = document.getElementById("spnCapacidadPago");
    lblCapacidadValor.textContent = capacidadDePago.toFixed(2);
}