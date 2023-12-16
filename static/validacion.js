document.getElementById('buscarForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;

    fetch('/buscar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId }),
    })
    .then(response => response.text())  // Cambiamos a response.text() en lugar de response.json()
    .then(data => {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = data;  // Insertamos el HTML directamente en el DIV resultado
    })
    .catch(error => {
        console.error('Error:', error);
    });
});






/* document.getElementById('buscarForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;

    fetch('/buscar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            handleServerError(data.error);
        } else {
            handleMembresiaData(data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function handleServerError(errorMessage) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Error: ${errorMessage}</p>`;
}

function handleMembresiaData(data) {
    const resultadoDiv = document.getElementById('resultado');
    const userId = document.getElementById('userId').value;
    window.location.href = `/buscar?userId=${userId}&estado_pago=${data.estado_pago}`;
}
*/

