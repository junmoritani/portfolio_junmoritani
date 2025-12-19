const data = {
  english: {
    intro: "I'm Gustavo Jun,",
    bio: "A Brazilian UX Designer with a background in architecture and urban planning. <br/>I'm passionate about exploring physical and digital tools to create intuitive interfaces and foster meaningful user interactions.",
    ctaProjects: "Take a look at what I've been building in",
    btnProjects: "MY PROJECTS",
    ctaResume: "Curious about my story? Read my full",
    linkResumeLabel: "RESUME",
    ctaContact: "Have an idea in mind? I’d love to hear from you.",
    btnContact: "REACH OUT",
    resumeLink:
      "https://drive.google.com/file/d/1i4hoCdiApISO0dPAnDTQgt3JNQEbulOr/view",
  },
  portuguese: {
    intro: "Sou Gustavo Jun,",
    bio: "Um UX Designer brasileiro com formação em arquitetura e urbanismo.<br/>Sou apaixonado por explorar ferramentas físicas e digitais para criar interfaces intuitivas e promover interações significativas.",
    ctaProjects: "Dê uma olhada no que venho construindo em",
    btnProjects: "MEUS PROJETOS",
    ctaResume: "Curioso sobre minha história? Leia meu",
    linkResumeLabel: "CURRÍCULO",
    ctaContact: "Tem uma ideia em mente? Adoraria ouvir de você.",
    btnContact: "CONTATO",
    resumeLink:
      "https://drive.google.com/file/d/1tHo0kqhXiEm3Hh5AZbUpR4S1chOZVff-/view",
  },
};

function updateContent(language) {
  localStorage.setItem("selectedLanguage", language);
  const langData = data[language]; // Simplifica o acesso aos dados

  // Elementos do DOM
  const contentDiv = document.getElementById("main-content");

  const elIntro = document.getElementById("text-intro");
  const elBio = document.getElementById("text-bio");

  const elCtaProjects = document.getElementById("text-cta-projects");
  const elBtnProjects = document.getElementById("btn-projects");

  const elCtaResume = document.getElementById("text-cta-resume");
  const elLinkResume = document.getElementById("link-resume");

  const elCtaContact = document.getElementById("text-cta-contact");
  const elBtnContact = document.getElementById("btn-contact");

  // Inicia animação de saída
  contentDiv.classList.add("fade-out");

  setTimeout(() => {
    // Atualiza Textos
    elIntro.innerHTML = langData.intro;
    elBio.innerHTML = langData.bio;

    elCtaProjects.innerHTML = langData.ctaProjects;
    elBtnProjects.innerHTML = langData.btnProjects;

    elCtaResume.innerHTML = langData.ctaResume;
    elLinkResume.innerHTML = langData.linkResumeLabel;
    elLinkResume.href = langData.resumeLink; // Atualiza o link do PDF

    elCtaContact.innerHTML = langData.ctaContact;
    elBtnContact.innerHTML = langData.btnContact;

    // Remove animação de saída (fade in)
    contentDiv.classList.remove("fade-out");
  }, 500);
}

function loadLanguagePreference() {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english";
  const switcher = document.getElementById("switcher");

  // Sincroniza o botão switch com o localStorage
  if (selectedLanguage === "portuguese") {
    switcher.checked = true;
  } else {
    switcher.checked = false;
  }

  updateContent(selectedLanguage);
}

document.getElementById("switcher").addEventListener("change", function () {
  if (this.checked) {
    updateContent("portuguese");
  } else {
    updateContent("english");
  }
});

window.onload = loadLanguagePreference;
