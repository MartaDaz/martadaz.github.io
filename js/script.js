// Translations for different languages
const translations = {
    en: {
        aboutMeTitle: "About Me",
        aboutMeText: "Hi, I'm Sergio, I work as a Data Engineer while also teaching BigData and AI. Feel free to explore my work below and contact me to share experiences!",
        contactTitle: "Contact",
        contactText: 'You can reach out to me on <a href="https://www.linkedin.com/in/sergiocoutocatoira/" target="_blank">LinkedIn</a>.',
        articlesTitle: "Articles",
        teachingTitle: "Masters where I teach",
        conferencesTitle: "Conferences",
        conferenceDama: "December 2023 - Moving from Local Scripts to Data Products - From minute 53",
        conferenceCodely: "January 2025 - Building a Self Serving Dataplatform - Talk at Codely TV",
        footerTddext: "2025 Sergio Couto Catoira"
    },
    es: {
        aboutMeTitle: "Sobre Mí",
        aboutMeText: "Hola, soy Sergio, un ingeniero de datos apasionado con un gran interés en los datos y en las historias que cuentan. ¡No dudes en explorar mi trabajo a continuación!",
        contactTitle: "Contacto",
        contactText: 'Puedes contactarme en <a href="https://www.linkedin.com/in/sergiocoutocatoira/" target="_blank">LinkedIn</a>.',
        articlesTitle: "Artículos",
        teachingTitle: "Masters en los que participo como profesor",
        conferencesTitle: "Charlas",
        conferenceDama: "December 2023 - Moving from Local Scripts to Data Products - From minute 53",
        conferenceCodely: "January 2025 - Building a Self Serving Dataplatform - Talk at Codely TV",
        footerText: "2025 Sergio Couto Catoira"
    },
    gl: {
        aboutMeTitle: "Sobre min",
        aboutMeText: "Ola, son Sergio, traballo como Enxeñeiro de Datos e como profesor de BigData & IA. Non dubides en explorar o meu traballo e contactar comigo para intercambiar coñecementos!",
        contactTitle: "Contacto",
        contactText: 'Podes contactar comigo en <a href="https://www.linkedin.com/in/sergiocoutocatoira/" target="_blank">LinkedIn</a>.',
        articlesTitle: "Artigos",
        teachingTitle: "Masters nos que participo como profesor",
        conferencesTitle: "Charlas nas que participei",
        conferenceDama: "Decembro 2023 - Moving from Local Scripts to Data Products - A partires do minuto 53",
        conferenceCodely: "Xaneiro 2025 - Building a Self Serving Dataplatform - Charla en Codely TV",
        footerText: "2025 Sergio Couto Catoira"
    }
};

// Function to change the language
function changeLanguage(lang) {
    document.getElementById("about-me-title").textContent = translations[lang].aboutMeTitle;
    document.getElementById("about-me-text").textContent = translations[lang].aboutMeText;
    document.getElementById("contact-title").textContent = translations[lang].contactTitle;
    document.getElementById("contact-text").innerHTML = translations[lang].contactText;
    document.getElementById("articles-title").textContent = translations[lang].articlesTitle;
    document.getElementById("teaching-title").textContent = translations[lang].teachingTitle;
    document.getElementById("conferences-title").textContent = translations[lang].conferencesTitle;
    document.getElementById("conferences-dama").textContent = translations[lang].conferenceDama;
    document.getElementById("conferences-codely").textContent = translations[lang].conferenceCodely;

    // Save the selected language
    localStorage.setItem("preferredLanguage", lang);
}

// Load the saved language on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("preferredLanguage") || "en"; // Default to English
    changeLanguage(savedLang);

    // Add event listeners to the flags
    const flags = document.querySelectorAll(".language-switcher a");
    flags.forEach(flag => {
        flag.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the link from navigating
            const lang = this.getAttribute("data-lang");
            changeLanguage(lang);
        });
    });
});
