const createBtn = document.querySelector("[data-create]");
createBtn.addEventListener("click", handleCreate);
const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.addEventListener("click", handleDestroy);

function handleCreate() {
  const input = document.querySelector("#controls input");
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = "";
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
    size += 10;
  }

  boxesContainer.innerHTML = box;
}

function handleDestroy() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
