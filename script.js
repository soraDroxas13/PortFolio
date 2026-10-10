/* =========================================================
   LES DONNÉES : construites à partir de ton CV.
   Les champs laissés vides ("") sont volontaires : le site
   n'affiche rien plutôt qu'un lien cassé.
   ========================================================= */
const portfolioData = {
  // --- Identité ---
  name: "Yossa Fasseu Dominique",
  title: "Développeur Web Full-Stack Junior",
  specialty: "Développement web full-stack",
  tagline: "Je conçois et développe des applications web, du front-end au back-end.",
  photo: "images/img1.jpeg", // plus tard : "images/photo.jpg" (voir les explications plus bas)

  // --- Section "À propos" (reformulée à partir de ton profil) ---
  about: {
    paragraphs: [
      "Développeur web junior passionné par la conception et le développement d'applications web. J'ai des compétences en front-end et en back-end, notamment avec Angular, Java, Spring Boot, Laravel, PHP et Python.",
      "Je participe à des projets qui vont de l'analyse des besoins à la conception de la base de données et au développement des fonctionnalités. Curieux, autonome et motivé, je souhaite évoluer au sein d'une équipe technique et créer des solutions numériques adaptées aux besoins des utilisateurs."
    ],
    highlights: [
      { label: "Formation", value: "DUT Informatique, IUT de Douala" },
      { label: "Localisation", value: "Douala, Cameroun" },
      { label: "Langues", value: "Français, Anglais (A2), Allemand (B1)" }
    ]
  },

  // --- Compétences (les 4 catégories de ton CV) ---
  skills: [
    { category: "Langages", items: ["Java", "PHP", "Python", "JavaScript", "HTML", "CSS"] },
    { category: "Frameworks", items: ["Spring Boot", "Angular", "Laravel"] },
    { category: "Base de données", items: ["MySQL"] },
    { category: "Outils", items: ["Git", "GitHub", "VS Code", "Postman"] }
  ],

  // --- Projets (liens à ajouter quand tu les auras) ---
  projects: [
    {
      title: "Lokali",
      description: "Plateforme de mise en relation entre clients et prestataires locaux.",
      tags: ["Angular", "Spring Boot", "MySQL"],
      image: "",
      github: "",  // à compléter : lien du dépôt GitHub de ce projet
      demo: ""
    },
    {
      title: "FireWatch",
      description: "Système de détection et de suivi des risques d'incendie.",
      tags: ["Angular", "IoT", "Arduino"],
      image: "",
      github: "",
      demo: ""
    },
    {
      title: "To-Do List",
      description: "Application desktop de création et de gestion de tâches.",
      tags: ["Python", "Tkinter", "JSON"],
      image: "",
      github: "",
      demo: ""
    },
    {
      title: "Budgeto",
      description: "Application de gestion des revenus, dépenses et transactions.",
      tags: ["PHP", "MySQL", "JavaScript"],
      image: "",
      github: "",
      demo: ""
    }
  ],

  // --- Parcours (du plus récent au plus ancien) ---
  timeline: [
    {
      period: "Janvier 2026 – Avril 2026",
      title: "Développeur Web",
      place: "SkySoft, Douala",
      description: "Rédaction de cahiers des charges techniques, conception de l'architecture et des bases de données, développement de fonctionnalités front-end et back-end, analyse des besoins fonctionnels."
    },
    {
      period: "2025 – 2026",
      title: "DUT Informatique",
      place: "IUT de Douala",
      description: "Formation en informatique."
    },
    {
      period: "Juillet 2025 – Août 2025",
      title: "Développeur Web",
      place: "VisionPub, Douala",
      description: "Conception et développement de fonctionnalités web (front-end et back-end), analyse des besoins fonctionnels, partage de connaissances techniques avec les développeurs juniors."
    },
    {
      period: "2023 – 2024",
      title: "Baccalauréat, série C",
      place: "Lycée Bilingue de Bojongo, Douala",
      description: ""
    }
  ],

  // --- Liens sociaux (seul GitHub figure sur ton CV) ---
  social: [
    { label: "GitHub", url: "https://github.com/soraDroxas13" }
  ],

  // --- Coordonnées ---
  contact: {
    email: "yossasora@gmail.com",
    phone: "+237 653 75 65 03",
    location: "Douala, Cameroun"
  }
};

/* =========================================================
   2. OUTIL : calculer les initiales à partir du nom
   "Jean Dupont" devient "JD". Sert si aucune photo n'est fournie.
   ========================================================= */
function getInitials(name) {
  return name
    .split(" ")                 // coupe le nom en mots
    .filter(Boolean)            // enlève les mots vides
    .map(word => word[0])       // garde la première lettre de chaque mot
    .slice(0, 2)                // 2 lettres maximum
    .join("")                   // recolle les lettres
    .toUpperCase();
}

/* =========================================================
   3. FONCTIONS D'AFFICHAGE
   Chaque fonction : trouve une "boîte" dans le HTML grâce à son id,
   puis y insère du contenu construit à partir de portfolioData.
   ========================================================= */

// --- Titre de l'onglet, logo, pied de page ---
function renderGlobal() {
  // Change le titre de l'onglet du navigateur
  document.title = `${portfolioData.name} | Portfolio`;

  // Logo dans la barre de navigation
  document.getElementById("logo").textContent = portfolioData.name;

  // Pied de page avec l'année actuelle calculée automatiquement
  const year = new Date().getFullYear();
  document.getElementById("footer-content").textContent =
    `© ${year} ${portfolioData.name}. Tous droits réservés.`;
}

// --- Section d'accueil ---
function renderHero() {
  const hero = document.getElementById("hero-content");

  // Les `backticks` permettent d'écrire du HTML sur plusieurs lignes
  // et d'y insérer des valeurs avec ${...}
  hero.innerHTML = `
    <p class="hero-badge">${portfolioData.specialty}</p>
    <h1 class="hero-title">
      Salut, je suis <span class="accent-text">${portfolioData.name}</span>
    </h1>
    <h2 class="hero-subtitle">${portfolioData.title}</h2>
    <p class="hero-text">${portfolioData.tagline}</p>
    <div class="hero-buttons">
      <a href="#projets" class="btn btn-primary">Voir mes projets</a>
      <a href="#contact" class="btn btn-outline">Me contacter</a>
    </div>
  `;
}

// --- Section "À propos" ---
function renderAbout() {
  const about = document.getElementById("about-content");

  // Photo si elle existe, sinon un cercle avec les initiales
  const avatar = portfolioData.photo
    ? `<img src="${portfolioData.photo}" alt="Photo de ${portfolioData.name}" class="avatar" />`
    : `<div class="avatar avatar-initials">${getInitials(portfolioData.name)}</div>`;

  // .map() transforme chaque paragraphe de la liste en une balise <p>
  // .join("") recolle tous les morceaux en un seul texte
  const paragraphs = portfolioData.about.paragraphs
    .map(text => `<p>${text}</p>`)
    .join("");

  // Même principe pour les petits faits (formation, localisation...)
  const highlights = portfolioData.about.highlights
    .map(item => `
      <li>
        <span class="highlight-label">${item.label}</span>
        <span class="highlight-value">${item.value}</span>
      </li>
    `)
    .join("");

  about.innerHTML = `
    <div class="about-grid">
      <div class="about-side">${avatar}</div>
      <div class="about-text">
        ${paragraphs}
        <ul class="highlights">${highlights}</ul>
      </div>
    </div>
  `;
}

// --- Section "Compétences" ---
function renderSkills() {
  const container = document.getElementById("skills-content");

  // Pour chaque catégorie, on crée une carte contenant ses compétences
  container.innerHTML = portfolioData.skills
    .map(group => {
      // Chaque compétence devient une petite "étiquette" (tag)
      const tags = group.items
        .map(item => `<span class="tag">${item}</span>`)
        .join("");

      return `
        <article class="skill-card">
          <h3 class="skill-category">${group.category}</h3>
          <div class="tag-list">${tags}</div>
        </article>
      `;
    })
    .join("");
}

// --- Section "Projets" ---
function renderProjects() {
  const container = document.getElementById("projects-content");

  container.innerHTML = portfolioData.projects
    .map(project => {
      // Image du projet si elle existe, sinon un bloc violet décoratif
      const image = project.image
        ? `<img src="${project.image}" alt="Aperçu du projet ${project.title}" class="project-image" loading="lazy" />`
        : `<div class="project-image project-placeholder">&lt;/&gt;</div>`;

      // Les technologies utilisées, affichées sous forme d'étiquettes
      const tags = project.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join("");

      // Le lien GitHub s'affiche seulement s'il est renseigné
      // target="_blank" ouvre un nouvel onglet ; rel="noopener" est une bonne pratique de sécurité
      const githubLink = project.github
        ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link">Code</a>`
        : "";

      // Même principe pour la démo : pas de lien = pas de bouton
      const demoLink = project.demo
        ? `<a href="${project.demo}" target="_blank" rel="noopener" class="project-link">Démo</a>`
        : "";

      return `
        <article class="project-card">
          ${image}
          <div class="project-body">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="tag-list">${tags}</div>
            <div class="project-links">${githubLink}${demoLink}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

// --- Section "Parcours" (frise chronologique) ---
function renderTimeline() {
  const container = document.getElementById("timeline-content");

  container.innerHTML = portfolioData.timeline
    .map(entry => `
      <div class="timeline-item">
        <!-- Le petit point violet sur la ligne verticale est dessiné en CSS -->
        <span class="timeline-period">${entry.period}</span>
        <h3 class="timeline-title">${entry.title}</h3>
        <p class="timeline-place">${entry.place}</p>
        ${entry.description ? `<p class="timeline-description">${entry.description}</p>` : ""}
      </div>
    `)
    .join("");
}

// --- Section "Contact" ---
// --- Section "Contact" (avec formulaire mailto) ---
function renderContact() {
  const container = document.getElementById("contact-content");
  const { email, phone, location } = portfolioData.contact; // on "sort" les valeurs de l'objet

  // Le téléphone et la localisation s'affichent seulement s'ils sont renseignés
  const phoneItem = phone
    ? `<li><span class="contact-label">Téléphone</span><a href="tel:${phone}">${phone}</a></li>`
    : "";

  const locationItem = location
    ? `<li><span class="contact-label">Localisation</span><span>${location}</span></li>`
    : "";

  // Un bouton par réseau social présent dans portfolioData.social
  const socialLinks = portfolioData.social
    .map(link => `
      <a href="${link.url}" target="_blank" rel="noopener" class="social-link">${link.label}</a>
    `)
    .join("");

  container.innerHTML = `
    <div class="contact-grid">

      <!-- Colonne de gauche : coordonnées (aussi utile si le formulaire ne marche pas) -->
      <div class="contact-info">
        <p class="contact-intro">
          Une question, une opportunité de stage ou un projet à construire ensemble ?
          Remplis le formulaire ou écris-moi directement.
        </p>
        <ul class="contact-list">
          <li><span class="contact-label">Email</span><a href="mailto:${email}">${email}</a></li>
          ${phoneItem}
          ${locationItem}
        </ul>
        <div class="social-links">${socialLinks}</div>
      </div>

      <!-- Colonne de droite : le formulaire -->
      <form class="contact-form" id="contact-form" novalidate>
        <div class="form-group">
          <label for="contact-name">Nom</label>
          <input type="text" id="contact-name" name="name" placeholder="Ton nom" required />
        </div>

        <div class="form-group">
          <label for="contact-email">Email</label>
          <input type="email" id="contact-email" name="email" placeholder="ton.email@exemple.com" required />
        </div>

        <div class="form-group">
          <label for="contact-subject">Sujet</label>
          <input type="text" id="contact-subject" name="subject" placeholder="Objet de ton message" required />
        </div>

        <div class="form-group">
          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="5" placeholder="Écris ton message ici..." required></textarea>
        </div>

        <!-- Zone où l'on affichera les erreurs ou la confirmation -->
        <p class="form-status" id="form-status" role="status"></p>

        <button type="submit" class="btn btn-primary">Envoyer le message</button>
      </form>

    </div>
  `;

  // Une fois le formulaire créé dans la page, on active son comportement
  setupContactForm();
}

// --- Comportement du formulaire de contact ---
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  // On exécute ce code quand le visiteur clique sur "Envoyer"
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // empêche le rechargement de la page, on gère tout nous-mêmes

    // On récupère ce que le visiteur a écrit (.trim() retire les espaces inutiles)
    const name = form.elements["name"].value.trim();
    const senderEmail = form.elements["email"].value.trim();
    const subject = form.elements["subject"].value.trim();
    const message = form.elements["message"].value.trim();

    // --- Vérifications simples ---
    if (!name || !senderEmail || !subject || !message) {
      showStatus("Merci de remplir tous les champs.", "error");
      return; // on s'arrête ici : rien n'est envoyé
    }

    // Vérifie que l'email ressemble à un email (texte@texte.texte)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(senderEmail)) {
      showStatus("L'adresse email n'a pas l'air valide.", "error");
      return;
    }

    // --- Construction du message ---
    // On ajoute le nom et l'email du visiteur dans le corps pour pouvoir lui répondre
    const body =
      `${message}\n\n` +
      `---\n` +
      `Nom : ${name}\n` +
      `Email : ${senderEmail}`;

    // encodeURIComponent transforme les espaces, accents et retours à la ligne
    // en caractères sûrs pour une adresse web. Sans cela, le lien casserait.
    const mailtoLink =
      `mailto:${portfolioData.contact.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // On demande au navigateur d'ouvrir ce lien : la messagerie s'ouvre
    window.location.href = mailtoLink;

    showStatus(
      "Ta messagerie devrait s'ouvrir avec le message prêt à envoyer. " +
      "Sinon, écris-moi directement à l'adresse indiquée.",
      "success"
    );
  });

  // Petite fonction utilitaire : affiche un message sous le formulaire
  function showStatus(text, type) {
    status.textContent = text;
    status.className = `form-status ${type}`; // la classe "error" ou "success" change la couleur
  }
}

// --- Menu mobile (burger) ---
function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-links");

  // Ouvre ou ferme le menu, et met à jour les attributs d'accessibilité
  function setMenu(isOpen) {
    menu.classList.toggle("open", isOpen);                 // ajoute/retire la classe "open"
    toggle.setAttribute("aria-expanded", String(isOpen));  // "true" ou "false"
    toggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  }

  // Un clic sur le burger inverse l'état actuel du menu
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  // Un clic sur un lien du menu le referme (sinon il cacherait la section visée)
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMenu(false));
  });

  // La touche Échap ferme aussi le menu
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") setMenu(false);
  });
}

// --- Animations d'apparition au défilement ---
function setupReveal() {
  // Respect des préférences : si le visiteur a demandé moins d'animations
  // (réglage du système) ou si le navigateur est trop ancien, on n'anime rien.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  // Les éléments qui doivent apparaître en douceur
  const targets = document.querySelectorAll(
    ".section-title, .about-grid, .skill-card, .project-card, .timeline-item, .contact-grid"
  );

  // L'observateur surveille quand un élément entre dans l'écran
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;   // pas encore visible : on ne fait rien

        const el = entry.target;
        el.classList.add("visible");         // déclenche l'animation CSS
        observer.unobserve(el);              // une seule fois par élément

        // Une fois l'animation finie, on nettoie. Sinon ces classes pourraient
        // entrer en conflit avec les effets de survol des cartes.
        setTimeout(() => {
          el.classList.remove("reveal", "visible");
          el.style.transitionDelay = "";
        }, 1200);
      });
    },
    { threshold: 0.15 }  // se déclenche quand 15 % de l'élément est visible
  );

  targets.forEach(el => {
    // Petit décalage selon la position de l'élément parmi ses frères :
    // les cartes d'une même grille apparaissent l'une après l'autre.
    const index = Array.from(el.parentElement.children).indexOf(el);
    el.style.transitionDelay = `${Math.min(index, 5) * 80}ms`;

    el.classList.add("reveal");  // état de départ : invisible et légèrement décalé
    observer.observe(el);
  });
}

/* =========================================================
   4. DÉMARRAGE : on appelle les fonctions d'affichage
   (on en ajoutera d'autres aux étapes suivantes)
   ========================================================= */
renderGlobal();
renderHero();
renderAbout();
renderSkills();
renderProjects();
renderTimeline();
renderContact();

setupMobileMenu();
setupReveal();