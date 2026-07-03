const listElement = document.querySelector("#categories");
const listItemsElements = document.querySelectorAll(".item");

const listHtmlElements = () => {
  console.log(`Number of categories: ${listItemsElements.length}`);

  listItemsElements.forEach((el, id, arr) => {
    console.log(`Category: ${el.children[0].textContent}`);
    console.log(`Elements: ${el.children[1].children.length}`);
  });
};

listHtmlElements();
