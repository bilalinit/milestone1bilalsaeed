var profilePictureInput = document.getElementById("profile-picture");
profilePictureInput.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Choose file button clicked");
});
var toggleSkillsButton = document.getElementById("toggle-skills-btn");
var skillsInput = document.getElementById("skills");
toggleSkillsButton.addEventListener("click", function () {
  if (skillsInput.classList.contains("hidden")) {
    skillsInput.classList.remove("hidden");
    toggleSkillsButton.textContent = "Hide Skills";
  } else {
    skillsInput.classList.add("hidden");
    toggleSkillsButton.textContent = "Show Skills";
  }
});
var generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", function () {
  console.log("Generate button clicked");
});
