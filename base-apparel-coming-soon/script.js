const btn = document.querySelector("button");
const input = document.querySelector("input");
const textBox = document.querySelector(".text-box");

const para = document.createElement("p");
para.classList.add("para");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!input.value) {
    para.innerText = "Please provide a valid email";
    textBox.append(para);
  } else {
    para.innerText = "Thank you!";
    textBox.append(para);
    input.value = "";
  }
});
