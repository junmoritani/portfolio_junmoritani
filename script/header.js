let data = {
  english: {
    projects: "PROJECTS",
    contact: "CONTACT",
    resume: "RESUME",
    resumeLink:
      "https://drive.google.com/file/d/1i4hoCdiApISO0dPAnDTQgt3JNQEbulOr/view",
  },
  portuguese: {
    projects: " PROJETOS",
    contact: "CONTATO",
    resume: "CURRÍCULO",
    resumeLink:
      "https://drive.google.com/file/d/1tHo0kqhXiEm3Hh5AZbUpR4S1chOZVff-/view",
  },
};

function updateContent(language) {
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  const resume = document.getElementById("resume");

  // Fetch data for the selected language
  const dataProjects = data[language].projects;
  const dataContact = data[language].contact;
  const dataResume = data[language].resume;
  const dataResumeLink = data[language].resumeLink;
  projects.innerHTML = dataProjects;
  contact.innerHTML = dataContact;
  resume.innerHTML = dataResume;
  resume.href = dataResumeLink;
}

// Function to load language preference on page load
function loadLanguagePreference() {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english"; // Default to English if not set
  updateContent(selectedLanguage);
}

// Call loadLanguagePreference on page load
window.onload = loadLanguagePreference;
