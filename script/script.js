document.addEventListener("click", (event) => {
  const link = event.target.closest("a.transition-link");
  if (!link) return;
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return;
  }

  // Cursor's browser (and some file:// views) block JS navigation after
  // preventDefault, so let the browser follow the href normally.
  if (location.protocol === "file:") return;

  const targetUrl = link.href;
  if (!targetUrl || targetUrl === location.href) return;

  const content = document.getElementById("content");
  if (!content) return;

  event.preventDefault();
  content.classList.add("fade-out");

  setTimeout(() => {
    window.location.assign(targetUrl);
  }, 180);
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    const content = document.getElementById("content");
    if (content) content.classList.remove("fade-out");
  }
});
