const validation = document.querySelector("#validation-input");
validation.addEventListener("blur", onInputChange);
function onInputChange() {
  if (
    validation.value.length === parseInt(validation.getAttribute("data-length"))
  ) {
    validation.classList.remove("invalid");
    validation.classList.add("valid");
  } else {
    validation.classList.add("invalid");
  }
}
