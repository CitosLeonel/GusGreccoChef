async function loadLanguage(lang) {
  try {
    const response = await fetch(`/locales/${lang}.json`);
    if (!response.ok) throw new Error(`No se encontró el archivo ${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = key.split(".").reduce((obj, k) => obj?.[k], translations);
      if (text) el.textContent = text;
    });

    document.querySelectorAll(".lang-switcher button").forEach((btn) => {
      btn.style.opacity = btn.textContent.toLowerCase() === lang ? "1" : "0.6";
    });

    // Reinicializar Flatpickr si existe
    const dateInput = document.querySelector("#preferred-dates");
    if (dateInput && dateInput._flatpickr) {
      dateInput._flatpickr.destroy();
      flatpickr(dateInput, {
        mode: "range",
        dateFormat: "d/m/Y",
        minDate: "today",
        locale: lang,
      });
    }

    localStorage.setItem("lang", lang);
  } catch (error) {
    console.error(error);
  }
}

const savedLang = localStorage.getItem("lang") || "en";
loadLanguage(savedLang);
