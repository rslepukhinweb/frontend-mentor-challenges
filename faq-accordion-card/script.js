const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", rotateArrowAndDisplayAnswer);
});

function rotateArrowAndDisplayAnswer(e) {
  closeArrows();
  e.target.classList.add("arrow-rev");
  displayAnswer(e);
}

function closeArrows() {
  arrows.forEach((arrow) => arrow.classList.remove("arrow-rev"));
}

function displayAnswer(e) {
  closeAnswers();
  // e.target.parentElement.nextSiblingElement.classList.remove("hidden");
  e.target.parentElement.nextSibling.nextSibling.classList.remove("hidden");
}

function closeAnswers() {
  answers.forEach((answer) => answer.classList.add("hidden"));
}
