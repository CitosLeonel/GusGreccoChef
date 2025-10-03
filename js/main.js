document.addEventListener('DOMContentLoaded', function () {
  // ---- Teléfono ----
  const phoneInputField = document.querySelector("#phone");
  if (phoneInputField) {
    const phoneInput = window.intlTelInput(phoneInputField, {
      initialCountry: "ar",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
  }

  // ---- Fechas (Flatpickr) ----
  const dateInput = document.querySelector("#preferred-dates");
  if (dateInput) {
    flatpickr(dateInput, {
      mode: "range",            // setear rango
      dateFormat: "d/m/Y",      // setear formato de fecha (ej: 05/05/2025)
      minDate: "today",         // Evita seleccionar fechas pasadas
      locale: "en"              // setear idioma
    });
  }
});
