const profilePictureInput = document.getElementById(
  "profile-picture"
) as HTMLInputElement;

profilePictureInput.addEventListener("click", function (event: Event) {
  event.preventDefault();

  console.log("Choose file button clicked");
});

const toggleSkillsButton = document.getElementById(
  "toggle-skills-btn"
) as HTMLButtonElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;

toggleSkillsButton.addEventListener("click", () => {
  if (skillsInput.classList.contains("hidden")) {
    skillsInput.classList.remove("hidden");
    toggleSkillsButton.textContent = "Hide Skills";
  } else {
    skillsInput.classList.add("hidden");
    toggleSkillsButton.textContent = "Show Skills";
  }
});

const generateButton = document.getElementById(
  "generate-btn"
) as HTMLButtonElement;

generateButton.addEventListener("click", () => {
  console.log("Generate button clicked");
});
