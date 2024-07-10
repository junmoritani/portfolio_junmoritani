// Make sure this script block is not duplicated
const dataProjects = {
  english: [
    {
      Title: "An app for the elderly",
      Tags: "UX research | UI design",
      ImgLink: "img/covers/Lacos.png",
      ProjectLink: "./projectDetails.html?lang=english&index=0",
      Year: "2023",
      ImgUrl: "img/Lacos/en",
      PageNumbers: 21,
      Obs: "this was a group project and everyone participated in all tasks of the process",
    },
    {
      Title: "An interface for the real estate market",
      Tags: "UX research | UI design | Unreal Engine Development",
      ImgLink: "img/covers/Sensia.png",
      ProjectLink: "./projectDetails.html?lang=english&index=1",
      Year: "2022",
      ImgUrl: "img/Sensia/en",
      PageNumbers: 11,
      Obs: "",
    },
    {
      Title: "Augmented reality website for social transformation",
      Tags: "UX research | UI design",
      ImgLink: "img/covers/Narratives of Bacao.png",
      ProjectLink: "./projectDetails.html?lang=english&index=2",
      Year: "",
      ImgUrl: "",
      PageNumbers: 0,
      Obs: "",
    },
    {
      Title: "An interface for the real estate market",
      Tags: "UX research | UI design | Unreal Engine Development",
      ImgLink: "img/covers/SeteSois.png",
      ProjectLink: "./projectDetails.html?lang=english&index=3",
      Year: "2023",
      ImgUrl: "img/SeteSois/en",
      PageNumbers: 12,
      Obs: "",
    },
    {
      Title: "Mixed Realities in the architectural design process",
      Tags: "UX research",
      ImgLink: "img/covers/MR Archtecture.png",
      ProjectLink: "./projectDetails.html?lang=english&index=4",
      Year: "",
      ImgUrl: "",
      PageNumbers: 0,
      Obs: "",
    },
  ],
  portuguese: [
    {
      Title: "Um aplicativo para idosos",
      Tags: "UX research | UI design",
      ImgLink: "img/covers/Lacos.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=0",
      Year: "2023",
      ImgUrl: "img/Lacos/pt",
      PageNumbers: 21,
      Obs: "esse foi um projeto em grupo e todos participaram de todas as etapas do projeto",
    },
    {
      Title: "Uma interface para o mercado imobiliário",
      Tags: "UX research | UI design | Desenvolvimento Unreal Engine",
      ImgLink: "img/covers/Sensia.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=1",
      Year: "2022",
      ImgUrl: "img/Sensia/pt",
      PageNumbers: 11,
      Obs: "",
    },
    {
      Title: "Website de realidade aumentada para transformação social",
      Tags: "UX research | UI design",
      ImgLink: "img/covers/Narratives of Bacao.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=2",
      Year: "",
      ImgUrl: "",
      PageNumbers: 0,
      Obs: "",
    },
    {
      Title: "Uma interface para o mercado imobiliário",
      Tags: "UX research | UI design | Desenvolvimento Unreal Engine",
      ImgLink: "img/covers/SeteSois.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=3",
      Year: "2023",
      ImgUrl: "img/SeteSois/pt",
      PageNumbers: 12,
      Obs: "",
    },
    {
      Title: "Realidades mistas no processo de projeto arquitetônico",
      Tags: "UX research",
      ImgLink: "img/covers/MR Archtecture.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=4",
      Year: "",
      ImgUrl: "",
      PageNumbers: 0,
      Obs: "",
    },
  ],
};

const generateProjectCards = (projects) => {
  return projects
    .map(
      (project) => `
    <a class="cardProject transition-link" href="${project.ProjectLink}">
      <div>
        <img src="${project.ImgLink}" alt="cover${project.Title.replace(
        / /g,
        ""
      )}" onerror="this.onerror=null;this.src='img/covers/default.png';" />
        <div class="cardTitle">
          <div class="title">${project.Title}</div>
          <div class="tags">${project.Tags}</div>
        </div>
      </div>
    </a>
  `
    )
    .join("");
};

function updateContent(language) {
  const cardsHtml = generateProjectCards(dataProjects[language]);
  document.getElementById("boxCards").innerHTML = cardsHtml;
}

function loadLanguagePreference() {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english"; // Default to English if not set
  updateContent(selectedLanguage);
  loadProjectPage;
}

document.addEventListener("DOMContentLoaded", function () {
  loadLanguagePreference();
});

////////////////////////////////////////////////////////////////

const getProjectData = (language, projectIndex) => {
  return dataProjects[language][projectIndex];
};

const populateProjectPage = (project) => {
  document.getElementById("projectTitle").textContent = project.Title;
  document.getElementById("projectTags").textContent = project.Tags;
  document.getElementById("projectYear").textContent = project.Year;
  document.getElementById("projectObs").textContent = project.Obs;

  const projectPagesDiv = document.getElementById("projectPages");
  projectPagesDiv.innerHTML = "";

  for (let i = 1; i <= project.PageNumbers; i++) {
    const img = document.createElement("img");
    img.src = `../${project.ImgUrl}/${i}.png`;
    img.alt = `Page ${i}`;
    projectPagesDiv.appendChild(img);
  }
};

const loadProjectPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const language = urlParams.get("lang") || "english";
  const projectIndex = parseInt(urlParams.get("index"), 10) || 0;

  const project = getProjectData(language, projectIndex);
  populateProjectPage(project);
};

window.onload = loadProjectPage;
