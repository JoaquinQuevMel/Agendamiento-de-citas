document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Ocultar el formulario de login
    document.getElementById("login-section").style.display = "none";

    // Mostrar la sección de agendamiento
    document.getElementById("agenda-section").classList.remove("hidden");

    // Cargar el calendario por defecto (enero 2025)
    loadCalendar(0, 2025);
});

// Función para cargar el calendario
function loadCalendar(month, year) {
    const calendarDiv = document.getElementById("calendar");
    const daysInMonth = new Date(year, month + 1, 0).getDate();  // Número de días en el mes seleccionado
    const firstDayOfMonth = new Date(year, month, 1).getDay();  // El primer día de la semana del mes
    calendarDiv.innerHTML = ''; // Limpiar las opciones previas

    // Agregar encabezado con días de la semana
    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        calendarDiv.appendChild(dayElement);
    });

    // Crear espacios en blanco para los días previos al primer día del mes
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        calendarDiv.appendChild(emptyCell);
    }

    // Crear los días del mes
    for (let i = 1; i <= daysInMonth; i++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = i;
        dayCell.classList.add('calendar-day');
        dayCell.onclick = () => selectDate(i); // Establecer la fecha seleccionada cuando se hace clic
        calendarDiv.appendChild(dayCell);
    }

    // Mostrar el calendario
    document.getElementById("calendarContainer").classList.remove("hidden");

    // Actualizar el select de fechas con los días del mes
    const fechaSeleccionada = document.getElementById("fechaSeleccionada");
    fechaSeleccionada.innerHTML = ''; // Limpiar las opciones anteriores

    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `Día ${i}`;
        fechaSeleccionada.appendChild(option);
    }
}

// Función para seleccionar un día del calendario
function selectDate(day) {
    const fechaSeleccionada = document.getElementById("fechaSeleccionada");
    fechaSeleccionada.value = day;  // Actualizar el valor del campo con el día seleccionado
}

// Cambiar mes
document.getElementById("selectMes").addEventListener("change", function() {
    const selectedMonth = parseInt(this.value);
    const selectedYear = document.getElementById("selectAnio").value;
    loadCalendar(selectedMonth, selectedYear);
});

// Cambiar año
document.getElementById("selectAnio").addEventListener("change", function() {
    const selectedMonth = document.getElementById("selectMes").value;
    const selectedYear = this.value;
    loadCalendar(selectedMonth, selectedYear);
});

// Manejar la confirmación de la cita
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Ocultar el formulario de agendamiento
    document.getElementById("agenda-section").style.display = "none";

    // Mostrar el mensaje de confirmación
    document.getElementById("confirmationMessage").classList.remove("hidden");

    // Ocultar el calendario
    document.getElementById("calendarContainer").classList.add("hidden");
});
