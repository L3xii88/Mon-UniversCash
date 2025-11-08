/* =====================================
   MON UNIVERS CASH - SCRIPT.JS (Version finale)
   Fonctions :
   - Apparition fluide du contenu
   - Menu actif selon la section visible
   - Gestion du menu déroulant
   Auteur : Alexis Dumont - 2025
===================================== */

// === Met à jour le lien actif du menu selon la section ===
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const link = document.querySelector(`.navbar a[href="#${section.id}"]`);
    if (!link) return;

    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// === Apparition fluide du contenu au scroll ===
function revealOnScroll() {
  const elements = document.querySelectorAll(".section, .card, .compagnie-card");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

// Afficher tout dès le chargement de la page
window.addEventListener("load", () => {
  // Afficher immédiatement tout le contenu
  document.querySelectorAll(".section, .card, .compagnie-card")
    .forEach(el => el.classList.add("visible"));

  // Initialiser l’effet d’apparition fluide
  revealOnScroll();
});

window.addEventListener("scroll", revealOnScroll);

// === Effet sur les liens du menu au clic ===
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    navLinks.forEach(l => l.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// === Styles dynamiques injectés ===
const style = document.createElement("style");
style.innerHTML = `
  /* Apparition douce des éléments */
  .section, .card, .compagnie-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Lien actif du menu */
  .navbar a.active {
    border-bottom: 2px solid #fff;
    padding-bottom: 3px;
  }

  /* Effet au survol du sous-menu */
  .dropdown-content a:hover {
    background-color: #fff4cc;
    color: #f5a623;
  }
`;
document.head.appendChild(style);


// ===== Effet dégradé sur le header au scroll =====
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===== MENU BURGER MOBILE =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Gestion des sous-menus sur mobile
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(drop => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("open");
  });
});

console.log("✅ Mon Univers Cash - Script.js chargé avec succès");
