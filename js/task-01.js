const categories = document.getElementsByClassName("item");

console.dir(`Number of categories: ${categories.length}`);

for (let category of categories) {
  console.log(`Category: ${category.getElementsByTagName("h2")[0].innerHTML}`);
  console.log(`Elements: ${category.getElementsByTagName("li").length}`);
}
