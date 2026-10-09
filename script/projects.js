const dataProjects = {
  english: [
    {
      Title: "Laços — an app for older adults",
      Tags: "UX & Product Design",
      Role: "UX & product design · group course project",
      ImgLink: "img/covers/Lacos.png",
      ProjectLink: "./projectDetails.html?lang=english&index=0",
      Year: "Jul–Dec 2023",
      ImgUrl: "img/Lacos/en",
      PageNumbers: 21,
      Outcome:
        "A scheduling app that helps nursing-home residents stay connected with family.",
      Impact: "End-to-end research-to-UI over a six-month course.",
      Obs: "Group project: everyone took part in every stage of the process.",
    },
    {
      Title: "Sensia — immersive real estate UX",
      Tags: "UX & Product Design · Unreal Engine",
      Role: "UX & product design · Unreal development",
      ImgLink: "img/covers/Sensia.png",
      ProjectLink: "./projectDetails.html?lang=english&index=1",
      Year: "",
      ImgUrl: "img/Sensia/en",
      PageNumbers: 13,
      VideoSrc:
        "https://res.cloudinary.com/dqjnz6aki/video/upload/v1767969259/Resumo_ljgvip.mp4",
      VideoAfterPage: 7,
      Outcome:
        "An immersive sales experience for a residential development, built in Unreal Engine.",
      Impact: "Shipped as a spatial interface for the sales floor.",
      Obs: "",
    },
    {
      Title: "Narratives of Bação",
      Tags: "UX Research",
      Role: "UX research · systems thinking",
      ImgLink: "img/covers/Narratives of Bacao.png",
      ProjectLink: "./projectDetails.html?lang=english&index=2",
      Year: "",
      ImgUrl: "img/Bacao/en",
      PageNumbers: 8,
      VideoSrc:
        "https://res.cloudinary.com/dqjnz6aki/video/upload/v1767966723/RA_famti7.mp4",
      VideoAfterPage: 6,
      Outcome:
        "Participatory research and AR to surface local stories in a complex urban setting.",
      Impact: "A socio-spatial study turned into an interactive narrative.",
      Obs: "",
    },
    {
      Title: "Premier — touchscreen real estate UX",
      Tags: "UX & Product Design · Unreal Engine",
      Role: "UX & product design · Unreal development",
      ImgLink: "img/covers/Premier.png",
      ProjectLink: "./projectDetails.html?lang=english&index=3",
      Year: "2023",
      ImgUrl: "img/Premier/en",
      PageNumbers: 10,
      Outcome:
        "A showroom kiosk for exploring and presenting apartments on the sales floor.",
      Impact: "Touchscreen interface for in-person real estate sales.",
      Obs: "",
    },
  ],
  portuguese: [
    {
      Title: "Laços — um aplicativo para idosos",
      Tags: "UX & Product Design",
      Role: "UX e product design · projeto de curso em grupo",
      ImgLink: "img/covers/Lacos.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=0",
      Year: "Jul–Dez 2023",
      ImgUrl: "img/Lacos/pt",
      PageNumbers: 21,
      Outcome:
        "Um app de agendamento que aproxima moradores de casas de repouso e suas famílias.",
      Impact: "Pesquisa até interface em um curso de seis meses.",
      Obs: "Projeto em grupo: todas as pessoas participaram de todas as etapas.",
    },
    {
      Title: "Sensia — UX imersiva para o mercado imobiliário",
      Tags: "UX & Product Design · Unreal Engine",
      Role: "UX e product design · desenvolvimento Unreal",
      ImgLink: "img/covers/Sensia.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=1",
      Year: "",
      ImgUrl: "img/Sensia/pt",
      PageNumbers: 13,
      VideoSrc:
        "https://res.cloudinary.com/dqjnz6aki/video/upload/v1767969259/Resumo_ljgvip.mp4",
      VideoAfterPage: 7,
      Outcome:
        "Uma experiência imersiva de vendas para um empreendimento residencial, construída em Unreal Engine.",
      Impact: "Interface espacial para o ponto de venda.",
      Obs: "",
    },
    {
      Title: "Narrativas do Baixão",
      Tags: "Pesquisa UX",
      Role: "Pesquisa UX · pensamento sistêmico",
      ImgLink: "img/covers/Narratives of Bacao.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=2",
      Year: "",
      ImgUrl: "img/Bacao/pt",
      PageNumbers: 8,
      VideoSrc:
        "https://res.cloudinary.com/dqjnz6aki/video/upload/v1767966723/RA_famti7.mp4",
      VideoAfterPage: 6,
      Outcome:
        "Pesquisa participativa e RA para dar visibilidade a histórias locais em um contexto urbano complexo.",
      Impact: "Estudo socioespacial transformado em narrativa interativa.",
      Obs: "",
    },
    {
      Title: "Premier — UX touchscreen para o mercado imobiliário",
      Tags: "UX & Product Design · Unreal Engine",
      Role: "UX e product design · desenvolvimento Unreal",
      ImgLink: "img/covers/Premier.png",
      ProjectLink: "./projectDetails.html?lang=portuguese&index=3",
      Year: "2023",
      ImgUrl: "img/Premier/pt",
      PageNumbers: 10,
      Outcome:
        "Um totem de showroom para explorar e apresentar apartamentos no ponto de venda.",
      Impact: "Interface touchscreen para vendas presenciais.",
      Obs: "",
    },
  ],
};

const generateProjectCards = (projects) => {
  return projects
    .map(
      (project) => `
    <a class="cardProject transition-link" href="${project.ProjectLink}">
      <img src="${project.ImgLink}" alt="${project.Title}" onerror="this.src='img/covers/default.png';" />
      <div class="cardTitle">
        <div class="title">${project.Title}</div>
        <div class="outcome">${project.Outcome}</div>
        <div class="tags">${project.Tags}</div>
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

const populateProjectPage = (project) => {
  const titleEl = document.getElementById("projectTitle");
  const tagsEl = document.getElementById("projectTags");
  const yearEl = document.getElementById("projectYear");
  const roleEl = document.getElementById("projectRole");
  const outcomeEl = document.getElementById("projectOutcome");
  const impactEl = document.getElementById("projectImpact");
  const obsEl = document.getElementById("projectObs");
  const projectPagesDiv = document.getElementById("projectPages");

  if (titleEl) titleEl.textContent = project.Title;
  if (tagsEl) tagsEl.textContent = project.Tags;
  if (yearEl) {
    yearEl.textContent = project.Year;
    yearEl.hidden = !project.Year;
  }
  if (roleEl) roleEl.textContent = project.Role;
  if (outcomeEl) outcomeEl.textContent = project.Outcome;
  if (impactEl) {
    impactEl.textContent = project.Impact;
    impactEl.hidden = !project.Impact;
  }
  if (obsEl) {
    obsEl.textContent = project.Obs;
    obsEl.hidden = !project.Obs;
  }

  if (document.title) {
    document.title = `${project.Title} | Gustavo Jun`;
  }

  if (projectPagesDiv) {
    projectPagesDiv.innerHTML = "";

    for (let i = 1; i <= project.PageNumbers; i++) {
      const img = document.createElement("img");
      img.src = `${project.ImgUrl}/${i}.png`;
      img.alt = `${project.Title}, ${i} of ${project.PageNumbers}`;
      img.style.width = "100%";
      img.style.display = "block";
      projectPagesDiv.appendChild(img);

      if (project.VideoSrc && project.VideoAfterPage === i) {
        const videoContainer = document.createElement("div");
        videoContainer.className = "dynamic-video-container";
        const src = project.VideoSrc;
        const isYouTube = src.includes("youtube") || src.includes("youtu.be");

        if (isYouTube) {
          const iframe = document.createElement("iframe");
          const videoId = src.includes("v=")
            ? src.split("v=")[1].split("&")[0]
            : src.split("/").pop();
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          iframe.setAttribute("frameborder", "0");
          iframe.allow =
            "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
          iframe.title = project.Title;
          videoContainer.appendChild(iframe);
        } else {
          const video = document.createElement("video");
          video.src = src;
          video.controls = true;
          video.muted = false;
          video.playsInline = true;
          video.style.width = "100%";
          video.style.display = "block";
          videoContainer.appendChild(video);
        }
        projectPagesDiv.appendChild(videoContainer);
      }
    }
  }
};

const loadProjectPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  const language = urlLang || getSelectedLanguage();
  const index = urlParams.get("index");

  if (urlLang) {
    localStorage.setItem("selectedLanguage", urlLang);
  }

  if (index !== null) {
    const project = dataProjects[language][parseInt(index, 10)];
    if (project) populateProjectPage(project);
  }
};

function init() {
  const selectedLanguage = getSelectedLanguage();

  if (document.getElementById("boxCards")) {
    updateGallery(selectedLanguage);
  }

  if (window.location.pathname.includes("projectDetails.html")) {
    loadProjectPage();
  }
}

document.addEventListener("DOMContentLoaded", init);
