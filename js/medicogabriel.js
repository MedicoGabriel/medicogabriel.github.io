document.addEventListener('DOMContentLoaded', () => {
    // Mostrar un mensaje de bienvenida
    const nombre = prompt("Hola, ¿Cuál es tu nombre?");
    if (nombre) {
        alert("Bienvenido/a " + nombre + " a la página del Dr. Gabriel Trujillo Escobar");
    }

    // Manejar el clic en el botón de citas virtuales
    const citaVirtualButton = document.getElementById('Virtual-Medical-Appointments');
    citaVirtualButton.addEventListener('click', () => {
        alert("Para concertar una cita virtual, por favor comuníquese a los siguientes números:\nEE.UU.: +1 (000) 000-00-00\nColombia: +57 (305) 373-70-17");
    });

    // Manejar el clic en los botones de terapia
    const botonesTerapia = document.querySelectorAll('.terapia');
    botonesTerapia.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const terapia = event.target.innerText;
            alert("Has seleccionado " + terapia);
        });
    });
});
