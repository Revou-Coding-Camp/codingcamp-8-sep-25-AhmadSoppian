document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("[data-collapse-toggle]");
  const targetId = toggleBtn.getAttribute("data-collapse-toggle");
  const target = document.getElementById(targetId);

  toggleBtn.addEventListener("click", () => {
    target.classList.toggle("hidden");
  });
});
