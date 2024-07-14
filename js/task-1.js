const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((element) => {
  const heading = element.querySelector("h2");
  console.log(`Category: ${heading.textContent}`);
  const items = element.querySelectorAll("li");
  console.log(`Elements: ${items.length}`);
});
