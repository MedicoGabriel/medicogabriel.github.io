document.addEventListener('DOMContentLoaded', () => {
    // Mostrar un mensaje de bienvenida
    const nombre = prompt("Hola, ¿Cuál es tu nombre?");
    if (nombre) {
        alert("Bienvenido/a " + nombre + " a la página del Dr. Gabriel Trujillo Escobar");
    }

    // Manejar el clic en los botones de terapia
    const botonesTerapia = document.querySelectorAll('.terapia');
    botonesTerapia.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const terapia = event.target.innerText;
            alert("Has seleccionado " + terapia);
        });
    });
});

