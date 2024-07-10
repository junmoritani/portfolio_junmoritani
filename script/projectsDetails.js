const projectsDetails = {
//   english: [
//     {
//       Title: "An app for the elderly",
//       Tags: "UX research | UI design",
//       Year: "2023",
//       ImgUrl: "img/Lacos/en",
//       PageNumbers: 21,
//       Obs: "this was a group project and everyone participated in all tasks of the process",
//     },
//     {
//       Title: "An interface for the real estate market",
//       Tags: "UX research | UI design | Unreal Engine Development",
//       ImgUrl: "img/SeteSois/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//     {
//       Title: "Augmented reality website for social transformation",
//       Tags: "UX research | UI design",
//       ImgUrl: "img/Lacos/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//     {
//       Title: "An interface for the real estate market",
//       Tags: "UX research | UI design | Unreal Engine Development",
//       ImgUrl: "img/Lacos/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//     {
//       Title: "Augmented Reality in specialized training",
//       Tags: "3D modeling | UX research",
//       ImgUrl: "img/Lacos/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//     {
//       Title: "Mixed Realities in the architectural design process",
//       Tags: "UX research",
//       ImgUrl: "img/Lacos/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//   ],
//   portuguese: [
//     {
//       Title: "Um aplicativo para idosos",
//       Tags: "UX research | UI design",
//       ImgUrl: "img/Lacos/pt",
//       PageNumbers: 21,
//       Obs: "",
//     },
//     {
//       Title: "Uma interface para o mercado imobiliário",
//       Tags: "UX research | UI design | Desenvolvimento Unreal Engine",
//       ImgUrl: "img/SeteSois/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//     {
//       Title: "Website de realidade aumentada para transformação social",
//       Tags: "UX research | UI design",
//       ImgUrl: "img/SeteSois/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//     {
//       Title: "Uma interface para o mercado imobiliário",
//       Tags: "UX research | UI design | Desenvolvimento Unreal Engine",
//       ImgUrl: "img/SeteSois/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//     {
//       Title: "Realidade aumentada em treinamento especializado",
//       Tags: "Modelagem 3D | UX research",
//       ImgUrl: "img/SeteSois/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//     {
//       Title: "Realidades mistas no processo de projeto arquitetônico",
//       Tags: "UX research",
//       ImgUrl: "img/SeteSois/en",
//       PageNumbers: 21,
//       Obs: "",
//     },
//   ],
// };

// const getProjectData = (language, projectIndex) => {
//   return projectsDetails[language][projectIndex];
// };

// const populateProjectPage = (project) => {
//   document.getElementById("projectTitle").textContent = project.Title;
//   document.getElementById("projectTags").textContent = project.Tags;
//   document.getElementById("projectYear").textContent = project.Year;
//   document.getElementById("projectObs").textContent = project.Obs;

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

// window.onload = loadProjectPage;
