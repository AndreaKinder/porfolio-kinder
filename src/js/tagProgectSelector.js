document.querySelectorAll(".skill-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".progects-container").forEach(chip => chip.classList.remove("non"));
      document.querySelectorAll(".skill-chip").forEach(chip => chip.classList.remove("active"));
      document.querySelectorAll(".project-card").forEach(progect => progect.style.display = "none");
      chip.classList.add("active");
      document.querySelectorAll(`.${chip.id}`).forEach(progect => progect.style.display = "block");
    });
  });