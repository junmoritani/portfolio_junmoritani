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
      Title: "Immersive Real Estate UX",
      Tags: "UX & Product Design | Unreal Engine Development",
      ImgLink: "img/covers/Sensia.png",
      ProjectLink: "./projectDetails.html?lang=english&index=1",
      Year: "",
      ImgUrl: "img/Sensia/en",
      PageNumbers: 13,
      // VideoSrc: "https://www.youtube.com/watch?v=aHfw6IjgFaM",
      // VideoAfterPage: 3,
      Obs: "",
    },
    // {
    //   Title: "Augmented reality website for social transformation",
    //   Tags: "UX research | UI design",
    //   ImgLink: "img/covers/Narratives of Bacao.png",
    //   ProjectLink: "./projectDetails.html?lang=english&index=2",
    //   Year: "",
    //   ImgUrl: "",
    //   PageNumbers: 0,
    //   Obs: "",
    // },
    {
      Title: "A Touchscreen Real State UX ",
      Tags: "UX & Product Design | Unreal Engine Development",
      ImgLink: "img/covers/Premier.png",
      ProjectLink: "./projectDetails.html?lang=english&index=2",
      Year: "2023",
      ImgUrl: "img/Premier/en",
      PageNumbers: 10,
      Obs: "",
    },
    // {
    //   Title: "Mixed Realities in the architectural design process",
    //   Tags: "UX research",
    //   ImgLink: "img/covers/MR Archtecture.png",
    //   ProjectLink: "./projectDetails.html?lang=english&index=4",
    //   Year: "",
    //   ImgUrl: "",
    //   PageNumbers: 0,
    //   Obs: "",
    // },
    {
      Title: "A local produce e-commerce",
      Tags: "UI Design | React JS Programming",
      ImgLink: "img/covers/Umbu.png",
      ProjectLink: "./projectDetails.html?lang=english&index=3",
      Year: "2024",
      ImgUrl: "img/Umbu/en",
      PageNumbers: 7,
      Obs: "",
      Link: `<a href="https://aju-ecommerce.firebaseapp.com/" target="_blank">Go to the Website</a>`,
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
      Title: "UX Imersiva para Empreendimentos Imobiliários",
      Tags: "UX & Product Design | Desenvolvimento Unreal Engine",
      ImgLink: "img/covers/Sensia.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=1",
      Year: "",
      ImgUrl: "img/Sensia/pt",
      PageNumbers: 13,
      // VideoSrc: "https://www.youtube.com/watch?v=aHfw6IjgFaM",
      // VideoAfterPage: 3,
      Obs: "",
    },
    // {
    //   Title: "Website de realidade aumentada para transformação social",
    //   Tags: "UX research | UI design",
    //   ImgLink: "img/covers/Narratives of Bacao.png",
    //   ProjectLink: "./projectDetails.html?lang=portuguese&index=2",
    //   Year: "",
    //   ImgUrl: "",
    //   PageNumbers: 0,
    //   Obs: "",
    // },
    {
      Title: "Uma interface para o mercado imobiliário",
      Tags: "UX & Product Design | Desenvolvimento Unreal Engine",
      ImgLink: "img/covers/Premier.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=2",
      Year: "",
      ImgUrl: "img/Premier/pt",
      PageNumbers: 12,
      Obs: "",
    },
    // {
    //   Title: "Realidades mistas no processo de projeto arquitetônico",
    //   Tags: "UX research",
    //   ImgLink: "img/covers/MR Archtecture.png",
    //   ProjectLink: "./projectDetails.html?lang=portuguese&index=4",
    //   Year: "",
    //   ImgUrl: "",
    //   PageNumbers: 0,
    //   Obs: "",
    // },
    {
      Title: "E-commerce de um hortifrut",
      Tags: "UI design | Programação React JS",
      ImgLink: "img/covers/Umbu.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=3",
      Year: "2024",
      ImgUrl: "img/Umbu/pt",
      PageNumbers: 7,
      Obs: "",
      Link: `<a href="https://aju-ecommerce.firebaseapp.com/" target="_blank">Visite o site</a>`,
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

// const populateProjectPage = (project) => {
//   document.getElementById("projectTitle").textContent = project.Title;
//   document.getElementById("projectTags").textContent = project.Tags;
//   document.getElementById("projectYear").textContent = project.Year;
//   document.getElementById("projectObs").textContent = project.Obs;
//   document.getElementById("projectSite").innerHTML = project.Link;

//   const projectPagesDiv = document.getElementById("projectPages");
//   projectPagesDiv.innerHTML = "";

//   for (let i = 1; i <= project.PageNumbers; i++) {
//     const img = document.createElement("img");
//     img.src = `../${project.ImgUrl}/${i}.png`;
//     img.alt = `Page ${i}`;
//     projectPagesDiv.appendChild(img);
//   }
// };

// const loadProjectPage = () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const language = urlParams.get("lang") || "english";
//   const projectIndex = parseInt(urlParams.get("index"), 10) || 0;

//   const project = getProjectData(language, projectIndex);
//   populateProjectPage(project);
// };

const populateProjectPage = (project) => {
  // Verifica se os elementos existem antes de tentar preencher (evita erros no console)
  const titleEl = document.getElementById("projectTitle");
  const tagsEl = document.getElementById("projectTags");
  const yearEl = document.getElementById("projectYear");
  const obsEl = document.getElementById("projectObs");
  const siteEl = document.getElementById("projectSite");
  const projectPagesDiv = document.getElementById("projectPages");

  if (titleEl) titleEl.textContent = project.Title;
  if (tagsEl) tagsEl.textContent = project.Tags;
  if (yearEl) yearEl.textContent = project.Year;
  if (obsEl) obsEl.textContent = project.Obs;
  if (siteEl) siteEl.innerHTML = project.Link ? project.Link : "";

  if (projectPagesDiv) {
    projectPagesDiv.innerHTML = ""; // Limpa o container

    for (let i = 1; i <= project.PageNumbers; i++) {
      // 1. Adiciona a Imagem
      const img = document.createElement("img");
      img.src = `../${project.ImgUrl}/${i}.png`;
      img.alt = `Page ${i}`;
      img.style.width = "100%";
      img.style.display = "block";
      projectPagesDiv.appendChild(img);

      // 2. Insere o Vídeo se for a página correta
      if (project.VideoSrc && project.VideoAfterPage === i) {
        const videoContainer = document.createElement("div");
        videoContainer.className = "dynamic-video-container";

        const iframe = document.createElement("iframe");
        iframe.src = project.VideoSrc;
        iframe.frameBorder = "0";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        videoContainer.appendChild(iframe);
        projectPagesDiv.appendChild(videoContainer);
      }
    }
  }
};

// ESTA FUNÇÃO PRECISA ESTAR ATIVA:
const loadProjectPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const language = urlParams.get("lang") || "english";
  const projectIndex = parseInt(urlParams.get("index"), 10) || 0;

  const project = getProjectData(language, projectIndex);
  if (project) {
    populateProjectPage(project);
  }
};

// Corrige a chamada aqui também
function loadLanguagePreference() {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english";
  updateContent(selectedLanguage);

  // Se estivermos na página de detalhes, carrega o projeto
  if (window.location.pathname.includes("projectDetails.html")) {
    loadProjectPage();
  }
}

window.onload = loadProjectPage;
