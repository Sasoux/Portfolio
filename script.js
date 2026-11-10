
/* =========================================
   1. AFFICHAGE AUTOMATIQUE DE L'ANNEE
========================================= */

// Récupération du pied de page
const footer = document.querySelector("footer");

// Remplacement de l'année par l'année actuelle
if (footer) {
    footer.innerHTML =
        `<p>© ${new Date().getFullYear()} Safae Jebbar - Portfolio personnel</p>`;
}


/* =========================================
   2. ANIMATION DES SECTIONS
========================================= */

// Récupération des sections du site
const sections = document.querySelectorAll(".section");

// Création de l'observateur
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

// Surveillance de chaque section
sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* =========================================
   3. ANNEE DANS LA CONSOLE
========================================= */

console.log("Portfolio de Safae Jebbar chargé avec succès !");

