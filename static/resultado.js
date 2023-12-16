/*window.onload = function() {
    const parametros = new URLSearchParams(window.location.search);
    const membresiaPagada = parametros.get('membresiaPagada');


    const imagenEstado = document.getElementById('imagenEstado');
    const estadoMembresia = document.getElementById('estadoMembresia');

    if (membresiaPagada === 'true') {
        imagenEstado.src = '../static/images/tick.png';
        estadoMembresia.textContent = 'Estás al día con el pago de la membresía.';
    } else {
        imagenEstado.src = '../static/images/cross.png';
        estadoMembresia.textContent = 'No estás al día con el pago de la membresía.';
    }
};

// Para verificar si la URL actual contiene los parámetros esperados
/*const parametros = new URLSearchParams(window.location.search);
console.log('Parámetros actuales en la URL:', parametros.toString());

// Obtener el valor de membresiaPagada
const membresiaPagada = parametros.get('membresiaPagada');
console.log('Valor de membresiaPagada:', membresiaPagada);

// Realizar alguna lógica basada en el valor de membresiaPagada
if (membresiaPagada === 'true') {
    console.log('La membresía está pagada.');
} else if (membresiaPagada === 'false') {
    console.log('La membresía no está pagada.');
} else {
    console.log('Valor inesperado para membresiaPagada.');
}
*/
