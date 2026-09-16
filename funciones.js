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
    return montoDisponible * 0.3;
}

function calcularInteresSimple(monto,tasa,plazoAnios){
    return plazoAnios*monto*tasa/100;
}

function calularTotalPagar(monto,interes){
    return monto + interes + APORTE_SOLCA;
}

function calcularCuotaMensual(total,plazoAnios){
    return total/(plazoAnios*12);
}

function aprobarCredito(capacidadPago,cuotaMensual){
    return capacidadPago > cuotaMensual;
}

function validarFormulario() {
    let valido = true;

    const limpiarError = (id) => {
        document.getElementById('error-' + id).textContent = '';
        document.getElementById(id).classList.remove('input-error');
    };

    const mostrarError = (id, mensaje) => {
        document.getElementById('error-' + id).textContent = mensaje;
        document.getElementById(id).classList.add('input-error');
        valido = false;
    };

    const ids = ['txtIngresos', 'txtEgresos', 'txtMonto', 'txtPlazo', 'txtTasaInteres'];
    ids.forEach(id => limpiarError(id));

    // Validar txtIngresos: Float (0.00 - 1,000,000.00)
    let valor = document.getElementById('txtIngresos').value.trim();
    if (valor === '') {
        mostrarError('txtIngresos', 'Este campo es obligatorio');
    } else if (!/^\d+(\.\d{1,2})?$/.test(valor)) {
        mostrarError('txtIngresos', 'Solo se permiten números con hasta dos decimales');
    } else {
        let num = parseFloat(valor);
        if (num < 0.00 || num > 1000000.00) {
            mostrarError('txtIngresos', 'El valor debe estar entre 0.00 y 1,000,000.00');
        }
    }

    // Validar txtEgresos: Float (0.00 - 1,000,000.00)
    valor = document.getElementById('txtEgresos').value.trim();
    if (valor === '') {
        mostrarError('txtEgresos', 'Este campo es obligatorio');
    } else if (!/^\d+(\.\d{1,2})?$/.test(valor)) {
        mostrarError('txtEgresos', 'Solo se permiten números con hasta dos decimales');
    } else {
        let num = parseFloat(valor);
        if (num < 0.00 || num > 1000000.00) {
            mostrarError('txtEgresos', 'El valor debe estar entre 0.00 y 1,000,000.00');
        }
    }

    // Validar txtMonto: Float (100.00 - 500,000.00)
    valor = document.getElementById('txtMonto').value.trim();
    if (valor === '') {
        mostrarError('txtMonto', 'Este campo es obligatorio');
    } else if (!/^\d+(\.\d+)?$/.test(valor)) {
        mostrarError('txtMonto', 'Solo se permiten números');
    } else {
        let num = parseFloat(valor);
        if (num < 100.00 || num > 500000.00) {
            mostrarError('txtMonto', 'El valor debe estar entre 100.00 y 500,000.00');
        }
    }

    // Validar txtPlazo: INT (1 - 30)
    valor = document.getElementById('txtPlazo').value.trim();
    if (valor === '') {
        mostrarError('txtPlazo', 'Este campo es obligatorio');
    } else if (!/^\d+$/.test(valor)) {
        mostrarError('txtPlazo', 'Solo se permiten números enteros');
    } else {
        let num = parseInt(valor, 10);
        if (num < 1 || num > 30) {
            mostrarError('txtPlazo', 'El valor debe estar entre 1 y 30');
        }
    }

    // Validar txtTasaInteres: Float (0.10 - 100.00)
    valor = document.getElementById('txtTasaInteres').value.trim();
    if (valor === '') {
        mostrarError('txtTasaInteres', 'Este campo es obligatorio');
    } else if (!/^\d+(\.\d+)?$/.test(valor)) {
        mostrarError('txtTasaInteres', 'Solo se permiten números');
    } else {
        let num = parseFloat(valor);
        if (num < 0.10 || num > 100.00) {
            mostrarError('txtTasaInteres', 'El valor debe estar entre 0.10 y 100.00');
        }
    }

    return valido;
}