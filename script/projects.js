// Make sure this script block is not duplicated
const dataProjects = {
  english: [
    {
      Title: "An app for the elderly",
      Tags: "UX research | UI design",
      ImgLink: "img/covers/Lacos.png",
      ProjectLink: "./projects/prj-lacos.html"
    },
    {
      Title: "An interface for the real estate market",
      Tags: "UX research | UI design | Unreal Engine Development",
      ImgLink: "img/covers/Sensia.png",
      ProjectLink: "./projects/prj-sensia.html"
    },
    {
      Title: "Augmented reality website for social transformation",
      Tags: "UX research | UI design",
      ImgLink: "img/covers/Narratives of Bacao.png",
      ProjectLink: "./projects/prj-bacao.html"
    },
    {
      Title: "An interface for the real estate market",
      Tags: "UX research | UI design | Unreal Engine Development",
      ImgLink: "img/covers/SeteSois.png",
      ProjectLink: "./projects/prj-setesois.html"
    },
    {
      Title: "Augmented Reality in specialized training",
      Tags: "3D modeling | UX research",
      ImgLink: "img/covers/PLAID.png",
      ProjectLink: "./projects/prj-plaid.html"
    },
    {
      Title: "Mixed Realities in the architectural design process",
      Tags: "UX research",
      ImgLink: "img/covers/MR Archtecture.png",
      ProjectLink: "./projects/prj-mrarq.html"
    }
  ],
  portuguese: [
    {
      Title: "Um aplicativo para idosos",
      Tags: "UX research | UI design",
      ImgLink: "img/covers/Lacos.png",
      ProjectLink: "./projects/prj-lacos.html"
    },
    {
      Title: "Uma interface para o mercado imobiliário",
      Tags: "UX research | UI design | Desenvolvimento Unreal Engine",
      ImgLink: "img/covers/Sensia.png",
      ProjectLink: "./projects/prj-sensia.html"
    },
    {
      Title: "Website de realidade aumentada para transformação social",
      Tags: "UX research | UI design",
      ImgLink: "img/covers/Narratives of Bacao.png",
      ProjectLink: "./projects/prj-bacao.html"
    },
    {
      Title: "Uma interface para o mercado imobiliário",
      Tags: "UX research | UI design | Desenvolvimento Unreal Engine",
      ImgLink: "img/covers/SeteSois.png",
      ProjectLink: "./projects/prj-setesois.html"
    },
    {
      Title: "Realidade aumentada em treinamento especializado",
      Tags: "Modelagem 3D | UX research",
      ImgLink: "img/covers/PLAID.png",
      ProjectLink: "./projects/prj-plaid.html"
    },
    {
      Title: "Realidades mistas no processo de projeto arquitetônico",
      Tags: "UX research",
      ImgLink: "img/covers/MR Archtecture.png",
      ProjectLink: "./projects/prj-mrarq.html"
    }
  ]
};

const generateProjectCards = (projects) => {
  return projects.map((project) => `
    <a class="cardProject transition-link" href="${project.ProjectLink}">
      <div>
        <img src="${project.ImgLink}" alt="cover${project.Title.replace(/ /g, '')}" onerror="this.onerror=null;this.src='img/covers/default.png';" />
        <div class="cardTitle">
          <div class="title">${project.Title}</div>
          <div class="tags">${project.Tags}</div>
        </div>
      </div>
    </a>
  `).join('');
};


function updateContent(language) {
  const cardsHtml = generateProjectCards(dataProjects[language]);
  document.getElementById('boxCards').innerHTML = cardsHtml;
}

function loadLanguagePreference() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "english"; // Default to English if not set
  updateContent(selectedLanguage);
}

document.addEventListener("DOMContentLoaded", function() {
  loadLanguagePreference();
});