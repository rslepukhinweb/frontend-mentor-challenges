const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");
const paras = document.querySelectorAll(".question p");

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", rotateArrowAndDisplayAnswer);
});

function rotateArrowAndDisplayAnswer(e) {
  closeArrows();
  e.target.classList.add("arrow-rev");
  displayAnswer(e);
  highlightPara(e);
}

function closeArrows() {
  arrows.forEach((arrow) => arrow.classList.remove("arrow-rev"));
}

function displayAnswer(e) {
  closeAnswers();
  e.target.parentElement.nextSibling.nextSibling.classList.remove("hidden");
}

function closeAnswers() {
  answers.forEach((answer) => answer.classList.add("hidden"));
}

function highlightPara(e) {
  removeParas();
  e.target.previousSibling.previousSibling.classList.add("selected");
}

function removeParas() {
  paras.forEach((para) => para.classList.remove("selected"));
}
