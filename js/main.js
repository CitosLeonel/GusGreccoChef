document.addEventListener("DOMContentLoaded", function () {
  // ---- Teléfono ---- //
  const phoneInputField = document.querySelector("#phone");
  if (phoneInputField) {
    const phoneInput = window.intlTelInput(phoneInputField, {
      initialCountry: "ar",
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

  // ---- Swiper JS ---- //
  const swiper = new Swiper(".swiper", {
    // Parámetros opcionales
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
