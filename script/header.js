let dataHeader = {
  english: {
    projects: "PROJECTS",
    contact: "CONTACT",
    resume: "RESUME",
    goback: "BACK TO PROJECTS",
    resumeLink:
      "https://drive.google.com/file/d/1i4hoCdiApISO0dPAnDTQgt3JNQEbulOr/view",
  },
  portuguese: {
    projects: " PROJETOS",
    contact: "CONTATO",
    resume: "CURRÍCULO",
    goback: "VOLTE AOS PROJETOS",
    resumeLink:
      "https://drive.google.com/file/d/1tHo0kqhXiEm3Hh5AZbUpR4S1chOZVff-/view",
  },
};

function updateContentHeader(language) {
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  const resume = document.getElementById("resume");
  const goback = document.getElementById("goback");

  // Fetch data for the selected language
  const dataProjects = dataHeader[language].projects;
  const dataContact = dataHeader[language].contact;
  const dataResume = dataHeader[language].resume;
  const dataGoback = dataHeader[language].goback;
  const dataResumeLink = dataHeader[language].resumeLink;
  projects.innerHTML = dataProjects;
  contact.innerHTML = dataContact;
  resume.innerHTML = dataResume;
  goback.innerHTML = dataGoback;
  resume.href = dataResumeLink;
  console.log(language);
}

// Function to load language preference on page load
function loadLanguagePreferenceHeader() {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english"; // Default to English if not set
  updateContentHeader(selectedLanguage);
}

// Call loadLanguagePreference on page load
// window.onload = loadLanguagePreferenceHeader;
document.addEventListener("DOMContentLoaded", function () {
  loadLanguagePreferenceHeader();
});
