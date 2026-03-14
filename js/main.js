document.addEventListener("DOMContentLoaded", function () {
  // ---- Teléfono ---- //
  const phoneInputField = document.querySelector("#phone");
  if (phoneInputField) {
    const phoneInput = window.intlTelInput(phoneInputField, {
      initialCountry: "es",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
  }

  // ---- Fechas (Flatpickr) ---- //
  const dateInput = document.querySelector("#preferred-dates");
  if (dateInput) {
    flatpickr(dateInput, {
      mode: "range",
      dateFormat: "d/m/Y",
      minDate: "today",
      locale: "en",
    });
  }
});
