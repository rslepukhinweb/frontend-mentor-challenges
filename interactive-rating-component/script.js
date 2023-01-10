const circles = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
const ratingText = document.querySelector(".rating-text");
const thanks = document.querySelector(".thanks");
const cards = document.querySelectorAll(".card");

let rating;

circles.forEach((circle) => {
  circle.addEventListener("click", selectCircle);
});

function selectCircle(e) {
  clearCircles();
  e.target.classList.add("selected");
  rating = e.target.textContent;
}

function clearCircles() {
  circles.forEach((circle) => circle.classList.remove("selected"));
}

btn.addEventListener("click", submitRating);

function submitRating() {
  if (rating) {
    clearCards();
    ratingText.textContent = `You selected ${rating} out of 5`;
    thanks.classList.remove("hidden");
  }
}

function clearCards() {
  cards.forEach((card) => card.classList.remove("hidden"));
  cards[0].classList.add("hidden");
}
