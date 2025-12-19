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

// Função para atualizar os elementos (usada no load inicial e no clique)
function applyTexts(langData) {
  document.getElementById("text-intro").innerHTML = langData.intro;
  document.getElementById("text-bio").innerHTML = langData.bio;
  document.getElementById("text-cta-projects").innerHTML = langData.ctaProjects;
  document.getElementById("btn-projects").innerHTML = langData.btnProjects;
  document.getElementById("text-cta-resume").innerHTML = langData.ctaResume;
  document.getElementById("link-resume").innerHTML = langData.linkResumeLabel;
  document.getElementById("link-resume").href = langData.resumeLink;
  document.getElementById("text-cta-contact").innerHTML = langData.ctaContact;
  document.getElementById("btn-contact").innerHTML = langData.btnContact;
}

function updateContent(language) {
  localStorage.setItem("selectedLanguage", language);
  const langData = data[language];
  const contentDiv = document.getElementById("main-content");

  contentDiv.classList.add("fade-out");

  setTimeout(() => {
    applyTexts(langData);
    contentDiv.classList.remove("fade-out");
  }, 500);
}

function loadLanguagePreference() {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english";
  const switcher = document.getElementById("switcher");

  if (switcher) {
    // Sincroniza o switch
    switcher.checked = selectedLanguage === "portuguese";

    // Adiciona o ouvinte de evento aqui dentro, garantindo que o elemento existe
    switcher.addEventListener("change", function () {
      updateContent(this.checked ? "portuguese" : "english");
    });
  }

  // Aplica os textos imediatamente sem animação
  applyTexts(data[selectedLanguage]);
}

// Única chamada necessária para iniciar tudo
document.addEventListener("DOMContentLoaded", loadLanguagePreference);

if (typeof swup !== "undefined") {
  swup.hooks.on("page:view", () => {
    loadLanguagePreference();
  });
}
