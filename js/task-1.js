const categoriesList = document.querySelector('#categories');

const ulList = document.querySelectorAll("li.item");
console.log(`Number of categories:${ulList.length}`);
ulList.forEach(element => { 
  const title = element.querySelectorAll("h2").textContent;
  console.log(`Categories: ${title}`)
  const elementCount = element.querySelectorAll("li").length;
  console.log(`Elements: ${elementCount}`)
});