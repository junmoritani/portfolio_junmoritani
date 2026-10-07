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

function setLanguage(language) {
  localStorage.setItem("selectedLanguage", language);
  applyDocumentLang(language);
  updateLangButtons(language);
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
    if (params.get("lang") !== language) {
      params.set("lang", language);
      location.search = params.toString();
    }
  }
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
