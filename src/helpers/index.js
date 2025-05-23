const Formateardinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 3
    });
    return formatter.format(valor);
}


const Calcularpagototal = (cantidad, plazo) => { 
    let total = 0;
    let interes = 0;

    // CANTIDAD -----------------------------------------------------------------------
    if(cantidad < 5000){
        total = cantidad * 1.5;
    } else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4;
    } else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    }

    // PLAZO -------------------------------------------------------------------------
    
    if (plazo === 6) {
        interes = 0.10;
    } else if (plazo === 12) {
        interes = 0.20;
    } else if (plazo === 18) {
        interes = 0.30;
    } else if (plazo === 24) {
        interes = 0.40;
    }

    total = cantidad * (1 + interes);

    return total;
 }



export {Formateardinero, 
        Calcularpagototal
    }