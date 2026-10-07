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
    ctaResume: "Quer conhecer minha trajetória? Leia meu",
    linkResumeLabel: "CURRÍCULO",
    ctaContact: "Tem uma ideia em mente? Adoraria ouvir de você.",
    btnContact: "CONTATO",
    resumeLink:
      "https://drive.google.com/file/d/1tHo0kqhXiEm3Hh5AZbUpR4S1chOZVff-/view",
  },
};

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

function initBlobCursor() {
  const stage = document.querySelector(".blob-stage");
  const wraps = [...document.querySelectorAll(".blob-wrap")];
  if (!stage || !wraps.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const target = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    active: false,
  };
  const current = { x: target.x, y: target.y, hole: 0 };
  const wrapState = wraps.map(() => ({ x: 0, y: 0 }));

  const holeSize = () => Math.min(260, Math.max(160, window.innerWidth * 0.2));

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    target.x = event.clientX;
    target.y = event.clientY;
    target.active = true;
  });

  document.documentElement.addEventListener("mouseleave", () => {
    target.active = false;
  });

  function tick() {
    current.x += (target.x - current.x) * 0.14;
    current.y += (target.y - current.y) * 0.14;
    const nextHole = target.active ? holeSize() : 0;
    current.hole += (nextHole - current.hole) * 0.12;

    stage.style.setProperty("--mx", `${current.x}px`);
    stage.style.setProperty("--my", `${current.y}px`);
    stage.style.setProperty("--hole", `${current.hole}px`);

    wraps.forEach((wrap, index) => {
      const blob = wrap.querySelector(".blob");
      const box = blob.getBoundingClientRect();
      const cx = box.left + box.width / 2 - wrapState[index].x;
      const cy = box.top + box.height / 2 - wrapState[index].y;
      const dx = cx - current.x;
      const dy = cy - current.y;
      const dist = Math.hypot(dx, dy) || 1;
      const radius = Math.max(box.width, box.height) * 0.42 + current.hole * 0.55;

      let tx = 0;
      let ty = 0;
      if (target.active && dist < radius) {
        const force = (1 - dist / radius) * 64;
        tx = (dx / dist) * force;
        ty = (dy / dist) * force;
      }

      wrapState[index].x += (tx - wrapState[index].x) * 0.1;
      wrapState[index].y += (ty - wrapState[index].y) * 0.1;
      wrap.style.setProperty("--rx", `${wrapState[index].x}px`);
      wrap.style.setProperty("--ry", `${wrapState[index].y}px`);
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded", () => {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english";
  applyTexts(data[selectedLanguage]);
  initBlobCursor();
});
