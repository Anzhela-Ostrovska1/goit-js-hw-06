const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredient = document.querySelector("#ingredients");

const a = ingredients.map((element) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;
  ingredient.append(li);
});

console.dir(ingredient);
