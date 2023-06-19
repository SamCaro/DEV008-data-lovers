import data from "./data/lol/lol.js";
import filters from "./data.js";

//Obteniedo el elemento section, donde va a estar todas las fichas
const listChampions = document.querySelector("#listChampions");
//const listDifficulty = document.querySelector(".list-champion-difficulty-dropdown")
// Forma refactorizada de la variable 'champions' para acceder a los objetos de la data
const champions = Object.values(data.data);
console.log(champions)
// Acceder a los objetos de la data por la variable 'champions'
const showAllChampions = (data) => {
  listChampions.innerHTML = "";
  data.forEach((element) => {
    listChampions.innerHTML += `
    <article class='champion-card'>
  <div class="champion-img">
  <img src=${element.img} alt=${element.name}>
  </div>
  <div class="container-name">
    <h2 class="champion-name">${element.name}</h2>
  </div>
  </article>
`;
  });
};
//Mostrar todos los personajes
const allChampions = document.getElementById("champion");
allChampions.addEventListener('click', () => showAllChampions(champions))
//Mostrar personajes según su rol
const roles = document.querySelectorAll(".menu__inside--rol");
const arrayRoles = Array.from(roles);
let idElement = "";
arrayRoles.forEach((e) => {
  e.addEventListener("click", () => {
    idElement = e.id;
    const chosenRole = filters.filterRole(champions, idElement);
    showAllChampions(chosenRole);
  });
});
//Mostrar personaje según su nombre
const input = document.getElementById("search");
input.addEventListener("change", (e) => {
  const inputValue = e.target.value;
  const searchName = filters.filterName(champions, inputValue);
  showAllChampions(searchName);
});
//Mostrar su dificultad ordenadamente
const difficulty = document.querySelectorAll(".menu__inside--difficulty");
difficulty.forEach((e) => {
  e.addEventListener("click", () => {
    const levelDifficulty = e.id;
    console.log(levelDifficulty)
    const sortedChampions = filters.sortDifficulty(champions)
    const chosenDifficulty = filters.filterDifficulty(sortedChampions, levelDifficulty);
    const totalResult = filters.statsDifficulty(champions, chosenDifficulty);
    showAllChampions(chosenDifficulty);
  });
});
//Mostrar porcentaje de barras
const barLow = document.getElementById("bar-low")
const barMedium = document.getElementById("bar-medium")
const barHigh = document.getElementById("bar-high")
const textLow = document.querySelector("#text-low");
const textMedium = document.querySelector("#text-medium");
const textHigh = document.querySelector("#text-high");
difficulty.forEach((e) => {
  const levelDifficulty = e.id;
  const chosenDifficulty = filters.filterDifficulty(champions, levelDifficulty);
  const totalResult = filters.statsDifficulty(champions, chosenDifficulty);
  if (levelDifficulty === "low") {
    barLow.value = totalResult;
    textLow.innerHTML = `${totalResult}%`;
  } else if (levelDifficulty === "medium") {
    barMedium.value = totalResult;
    textMedium.innerHTML = `${totalResult}%`;
  } else {
    barHigh.value = totalResult;
    textHigh.innerHTML = `${totalResult}%`;
  }
  console.log(totalResult)
})





// Repasar
// ¿Que son las variables y como se utilizan?
// Leer (sobre variables): https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/
// Leer operadores: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators
