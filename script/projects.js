// Make sure this script block is not duplicated
const dataProjects = {
  english: [
    {
      Title: "An app for the elderly",
      Tags: "UX & Product Design",
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
      VideoSrc:
        "https://res.cloudinary.com/dqjnz6aki/video/upload/v1767969259/Resumo_ljgvip.mp4",
      VideoAfterPage: 7,
      Obs: "",
    },
    {
      Title: "System Thinking in Complex Socio-Spatial Contexts",
      Tags: "UX Research",
      ImgLink: "img/covers/Narratives of Bacao.png",
      ProjectLink: "./projectDetails.html?lang=english&index=2",
      Year: "",
      ImgUrl: "img/Bacao/en",
      PageNumbers: 8,
      VideoSrc:
        "https://res.cloudinary.com/dqjnz6aki/video/upload/v1767966723/RA_famti7.mp4",
      VideoAfterPage: 6,
      Obs: "",
    },
    {
      Title: "A Touchscreen Real State UX ",
      Tags: "UX & Product Design | Unreal Engine Development",
      ImgLink: "img/covers/Premier.png",
      ProjectLink: "./projectDetails.html?lang=english&index=3",
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
    // {
    //   Title: "A local produce e-commerce",
    //   Tags: "UI Design | React JS Programming",
    //   ImgLink: "img/covers/Umbu.png",
    //   ProjectLink: "./projectDetails.html?lang=english&index=3",
    //   Year: "2024",
    //   ImgUrl: "img/Umbu/en",
    //   PageNumbers: 7,
    //   Obs: "",
    //   Link: `<a href="https://aju-ecommerce.firebaseapp.com/" target="_blank">Go to the Website</a>`,
    // },
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
      VideoSrc:
        "https://res.cloudinary.com/dqjnz6aki/video/upload/v1767969259/Resumo_ljgvip.mp4",
      VideoAfterPage: 7,
      Obs: "",
    },
    {
      Title: "Pensamento sistêmico em contextos socio-espaciais complexos",
      Tags: "Pesquisa UX",
      ImgLink: "img/covers/Narratives of Bacao.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=2",
      Year: "",
      ImgUrl: "img/Bacao/pt",
      PageNumbers: 8,
      VideoSrc:
        "https://res.cloudinary.com/dqjnz6aki/video/upload/v1767966723/RA_famti7.mp4",
      VideoAfterPage: 6,
      Obs: "",
    },
    {
      Title: "Uma interface para o mercado imobiliário",
      Tags: "UX & Product Design | Desenvolvimento Unreal Engine",
      ImgLink: "img/covers/Premier.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=2",
      Year: "",
      ImgUrl: "img/Premier/pt",
      PageNumbers: 10,
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
    // {
    //   Title: "E-commerce de um hortifrut",
    //   Tags: "UI design | Programação React JS",
    //   ImgLink: "img/covers/Umbu.png",
    //   ProjectLink: "./projectDetails.html?lang=portuguese&index=3",
    //   Year: "2024",
    //   ImgUrl: "img/Umbu/pt",
    //   PageNumbers: 7,
    //   Obs: "",
    //   Link: `<a href="https://aju-ecommerce.firebaseapp.com/" target="_blank">Visite o site</a>`,
    // },
  ],
};

// 2. FUNÇÕES DA GALERIA (HOME)
const generateProjectCards = (projects) => {
  return projects
    .map(
      (project) => `
    <a class="cardProject transition-link" href="${project.ProjectLink}">
      <div>
        <img src="${project.ImgLink}" alt="${project.Title}" onerror="this.src='img/covers/default.png';" />
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

function updateGallery(language) {
  const boxCards = document.getElementById("boxCards");
  if (boxCards) {
    boxCards.innerHTML = generateProjectCards(dataProjects[language]);
  }
}

// 3. FUNÇÕES DE DETALHES DO PROJETO
const populateProjectPage = (project) => {
  const titleEl = document.getElementById("projectTitle");
  const tagsEl = document.getElementById("projectTags");
  const yearEl = document.getElementById("projectYear");
  const obsEl = document.getElementById("projectObs");
  const projectPagesDiv = document.getElementById("projectPages");

  if (titleEl) titleEl.textContent = project.Title;
  if (tagsEl) tagsEl.textContent = project.Tags;
  if (yearEl) yearEl.textContent = project.Year;
  if (obsEl) obsEl.textContent = project.Obs;

  if (projectPagesDiv) {
    projectPagesDiv.innerHTML = "";

    for (let i = 1; i <= project.PageNumbers; i++) {
      // Adiciona Imagem
      const img = document.createElement("img");
      img.src = `../${project.ImgUrl}/${i}.png`;
      img.style.width = "100%";
      img.style.display = "block";
      projectPagesDiv.appendChild(img);

      // Adiciona Vídeo se houver
      if (project.VideoSrc && project.VideoAfterPage === i) {
        const videoContainer = document.createElement("div");
        videoContainer.className = "dynamic-video-container";

        const isYouTube =
          project.VideoSrc.includes("youtube") ||
          project.VideoSrc.includes("youtu.be");

        if (isYouTube) {
          // Mantém a lógica do YouTube como estava
          const iframe = document.createElement("iframe");
          let videoId = src.includes("v=")
            ? src.split("v=")[1].split("&")[0]
            : src.split("/").pop();
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          iframe.frameBorder = "0";
          iframe.allow =
            "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
          videoContainer.appendChild(iframe);
        } else {
          // Lógica para o Cloudinary/MP4 com controles normais
          const video = document.createElement("video");
          video.src = project.VideoSrc;

          video.controls = true; // ATIVA OS CONTROLES (Play, Pause, Volume)
          video.muted = false; // Permite que o vídeo comece com som (já que o usuário vai dar play)
          video.playsInline = true;
          video.style.width = "100%";
          video.style.display = "block";

          // REMOVEMOS os listeners de mouseenter e mouseleave que davam o play automático

          videoContainer.appendChild(video);
        }
        projectPagesDiv.appendChild(videoContainer);
      }
    }
  }
};

const loadProjectPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const language = urlParams.get("lang") || "english";
  const index = urlParams.get("index");

  if (index !== null) {
    const project = dataProjects[language][parseInt(index, 10)];
    if (project) populateProjectPage(project);
  }
};

// 4. INICIALIZAÇÃO (A parte mais importante para não dar erro)
function init() {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english";

  // Se estiver na HOME (onde tem o box de cards)
  if (document.getElementById("boxCards")) {
    updateGallery(selectedLanguage);
  }

  // Se estiver na página de DETALHES (onde tem o título do projeto)
  if (window.location.pathname.includes("projectDetails.html")) {
    loadProjectPage();
  }
}

// Rodar tudo quando o DOM carregar
document.addEventListener("DOMContentLoaded", init);
