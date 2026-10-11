const dataHeader = {
  english: {
    projects: "PROJECTS",
    contact: "CONTACT",
    resume: "RESUME",
    goback: "BACK TO PROJECTS",
    langGroup: "Language",
    resumeLink:
      "https://drive.google.com/file/d/1i4hoCdiApISO0dPAnDTQgt3JNQEbulOr/view",
  },
  portuguese: {
    projects: "PROJETOS",
    contact: "CONTATO",
    resume: "CURRÍCULO",
    goback: "VOLTAR AOS PROJETOS",
    langGroup: "Idioma",
    resumeLink:
      "https://drive.google.com/file/d/1tHo0kqhXiEm3Hh5AZbUpR4S1chOZVff-/view",
  },
};

function getSelectedLanguage() {
  return localStorage.getItem("selectedLanguage") || "english";
}

function applyDocumentLang(language) {
  document.documentElement.lang = language === "portuguese" ? "pt-BR" : "en";
}

function updateLangButtons(language) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === language;
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    btn.classList.toggle("is-active", isActive);
  });
  document.querySelectorAll(".lang-switch").forEach((group) => {
    group.setAttribute("aria-label", dataHeader[language].langGroup);
  });

  const switcher = document.getElementById("switcher");
  if (switcher) {
    switcher.checked = language === "portuguese";
    switcher.setAttribute(
      "aria-label",
      dataHeader[language].langGroup
    );
  }
}

function updateContentHeader(language) {
  const pack = dataHeader[language];
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  const resume = document.getElementById("resume");
  const goback = document.getElementById("goback");

  if (projects) projects.textContent = pack.projects;
  if (contact) contact.textContent = pack.contact;
  if (resume) {
    resume.textContent = pack.resume;
    resume.href = pack.resumeLink;
  }
  if (goback) goback.textContent = pack.goback;
}

function getLangAnimTargets() {
  return [
    ...document.querySelectorAll(
      "#text-intro, #text-bio, .cta-section p, #projects, #contact, #resume, #goback, #boxCards .cardTitle, #title, #label-name, #label-email, #label-message, #btSubmit, #msgInfo, .case-header, #projectObs"
    ),
  ];
}

function applyLanguageContent(language) {
  updateContentHeader(language);

  if (typeof applyTexts === "function" && document.getElementById("text-intro")) {
    applyTexts(data[language]);
  }

  if (typeof updateGallery === "function" && document.getElementById("boxCards")) {
    updateGallery(language);
  }

  if (
    typeof updateContentContact === "function" &&
    document.getElementById("form-contact")
  ) {
    updateContentContact(language);
  }

  if (location.pathname.includes("projectDetails.html")) {
    const params = new URLSearchParams(location.search);
    params.set("lang", language);
    const nextSearch = `?${params.toString()}`;
    if (location.search !== nextSearch) {
      history.replaceState({}, "", `${location.pathname}${nextSearch}`);
    }
    if (typeof loadProjectPage === "function") {
      loadProjectPage();
    }
  }
}

function playLangSwap(targets, onSwap) {
  targets.forEach((el) => {
    el.classList.add("lang-swap", "is-out");
    el.classList.remove("is-in");
  });

  window.setTimeout(() => {
    onSwap();
    const nextTargets = getLangAnimTargets();
    nextTargets.forEach((el, index) => {
      el.classList.remove("is-out", "is-in", "lang-swap");
      void el.offsetWidth;
      el.classList.add("lang-swap", "is-in");
      el.style.setProperty("--lang-delay", `${Math.min(index, 8) * 35}ms`);
      el.addEventListener(
        "animationend",
        (event) => {
          if (event.target !== el) return;
          el.classList.remove("lang-swap", "is-in");
          el.style.removeProperty("--lang-delay");
        },
        { once: true }
      );
    });
  }, 170);
}

function setLanguage(language) {
  localStorage.setItem("selectedLanguage", language);
  applyDocumentLang(language);
  updateLangButtons(language);

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = getLangAnimTargets();
  const apply = () => applyLanguageContent(language);

  if (reduced || !targets.length) {
    apply();
    return;
  }

  playLangSwap(targets, apply);
}

document.addEventListener("DOMContentLoaded", () => {
  const language = getSelectedLanguage();
  applyDocumentLang(language);
  updateContentHeader(language);
  updateLangButtons(language);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang !== getSelectedLanguage()) {
        setLanguage(btn.dataset.lang);
      }
    });
  });

  const switcher = document.getElementById("switcher");
  if (switcher) {
    switcher.addEventListener("change", function () {
      setLanguage(this.checked ? "portuguese" : "english");
    });
  }
});
