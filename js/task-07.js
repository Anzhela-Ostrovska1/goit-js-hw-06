const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
sizeControl.addEventListener("input", changeSize);

function changeSize(event) {
  console.log(event);
  text.style.fontSize = `${event.target.value}px`;
}
