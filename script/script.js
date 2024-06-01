// const swup = new Swup();

// script.js
document.addEventListener("DOMContentLoaded", (event) => {
  const transitionLinks = document.querySelectorAll(".transition-link");

  transitionLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetUrl = e.currentTarget.href; // Use e.currentTarget instead of e.target
      const content = document.getElementById("content");

      content.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Match the duration of the CSS transition
    });
  });

  // Fade in effect when the page loads
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      const content = document.getElementById("content");
      content.classList.remove("fade-out");
    }
  });
});
