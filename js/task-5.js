const colorBtn = document.querySelector(".change-color");

colorBtn.addEventListener("click", handleColorChange);

function handleColorChange(event) {
  const bgColor = document.querySelector("body");
  const spanColor = document.querySelector(".color");
  const hex = getRandomHexColor();
  bgColor.style.backgroundColor = hex;
  spanColor.textContent = hex;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
