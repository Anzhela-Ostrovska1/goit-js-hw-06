const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

console.log(color);
changeColorBtn.addEventListener("click", colorValue);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorValue() {
  const colorValue = getRandomHexColor();
  color.textContent = colorValue;
  document.body.style.backgroundColor = colorValue;
}
