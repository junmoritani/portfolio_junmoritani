let data = {
  english: {
    presentation: `Hello! I'm Gustavo Jun, a Brazilian interface developer with a
    background in architecture and urban planning, seeking new work
    experiences. <br /><br />Check out my portfolio for a glimpse of
    <span class="linkText button"><a class="transition-link button" href="projects.html">MY PROJECTS</a> </span>,
    blending academic and professional pursuits. My focus is on
    creating interactive interfaces in both digital and physical
    environments. I'm passionate about using technology to enhance
    interactions and foster richer dialogues between people.
    <br /><br />Feel free to
    <span class="linkText"><a class="transition-link" href="contato.html">REACH OUT</a></span>
    for potential collaborations.`,
    resume: "MY RESUME",
    projects: "MY PROJECTS",
    resumeLink:
      "https://drive.google.com/file/d/1i4hoCdiApISO0dPAnDTQgt3JNQEbulOr/view",
  },
  portuguese: {
    presentation: `Olá! Sou Gustavo Jun, um desenvolvedor de interface com
    formado em arquitetura e urbanismo, buscando novas experiências de
    trabalho. <br /><br />Confira meu portfólio para ter um vislumbre dos
    <span class="linkText button"><a class="transition-link button" href="projects.html">MEUS PROJETOS</a> </span>,
    mesclando atividades acadêmicas e profissionais. Meu foco é na
    criação de interfaces interativas em ambientes digitais e/ou físicos.
    Sou apaixonado por usar a tecnologia para melhorar as interações e
    promover diálogos mais ricos entre as pessoas.
    <br /><br />Sinta-se à vontade para
    <span class="linkText"><a class="transition-link" href="contato.html">ENTRAR EM CONTATO</a></span>
    para possíveis colaborações.`,
    resume: "MEU CURRÍCULO",
    projects: "MEUS PROJETOS",
    resumeLink:
      "https://drive.google.com/file/d/1tHo0kqhXiEm3Hh5AZbUpR4S1chOZVff-/view",
  },
};

function updateContent(language) {
  localStorage.setItem("selectedLanguage", language);

  const contentDiv = document.getElementById("main-content");
  const DivPresentation = document.getElementById("presentation");
  const btResume = document.getElementById("btResume");
  const btProjects = document.getElementById("btProjects");
  const welcomePortuguese = document.getElementById("welcome-portuguese");
  const welcomeEnglish = document.getElementById("welcome-english");
  const linkResume = document.getElementById("linkResume");
  contentDiv.classList.add("fade-out");

  welcomePortuguese.classList.remove("selected");
  welcomeEnglish.classList.remove("selected");

  // Wait for the fade-out transition to complete
  setTimeout(() => {
    // const content = data[language].presentation;
    const presentation = data[language].presentation;
    const resume = data[language].resume;
    const projects = data[language].projects;
    const dataResumeLink = data[language].resumeLink;
    btResume.innerHTML = resume;
    linkResume.href = dataResumeLink;
    btProjects.innerHTML = projects;
    DivPresentation.innerHTML = presentation;
    contentDiv.classList.remove("fade-out");

    if (language === "english") {
      welcomeEnglish.classList.add("selected");
    } else {
      welcomePortuguese.classList.add("selected");
    }
  }, 500); // Duration of the transition should match the CSS transition duration
}

function loadLanguagePreference() {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english"; // Default to English if not set
  updateContent(selectedLanguage);
}

// Event listeners for the language switch links
document.getElementById("welcome-portuguese").addEventListener("click", () => {
  updateContent("portuguese");
});

document.getElementById("welcome-english").addEventListener("click", () => {
  updateContent("english");
});

// Initialize the default language
// updateContent("english");
window.onload = loadLanguagePreference;
