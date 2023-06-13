import data from "./data/lol/lol.js";
import filters from "./data.js";

//Obteniedo el elemento section, donde va a estar todas las fichas
const listChampions = document.querySelector("#listChampions");
// Forma refactorizada de la variable 'champions' para acceder a los objetos de la data
const champions = Object.values(data.data);
console.log(champions);
// Acceder a los objetos de la data por la variable 'champions'
/*const champions = [];
for (const prop in data.data) {
  const championProp = data.data[prop]
  champions.push(championProp);
}*/

const showAllChampions = (data) => {
  listChampions.innerHTML = "";
  data.forEach((element) => {
    listChampions.innerHTML += `
    <article class='champion-card'>
  <img src=${element.img} alt=${element.name}>
  <div class="container-name">
    <h2 class="champion-name">${element.name}</h2>
    <p class="champion-key">${element.key}</p>
    <p class="champion-difficulty">${element.info.difficulty}</p>
  </div>
  </article>
`;
  });
};
showAllChampions(champions);
//Mostrar personajes según su rol
const roles = document.querySelectorAll(".role-dropdown-menu");
console.log(roles);
const arrayRoles = Array.from(roles);
let idElement = "";
arrayRoles.forEach((e) => {
  e.addEventListener("click", () => {
    idElement = e.id;
    const chosenRole = filters.filterRole(champions, idElement);
    showAllChampions(chosenRole);
    console.log(chosenRole);
  });
});
//Mostrar personaje según su nombre
const input = document.getElementById("search");
input.addEventListener("change", (e) => {
  const inputValue = e.target.value;
  const searchName = filters.filterName(champions, inputValue);
  showAllChampions(searchName);
  console.log(searchName);
});
//Mostrar ordenado dentro de cada dificultad
const difficulty = document.querySelectorAll(".champion-difficulty-dropdown");
console.log(difficulty);
difficulty.forEach((e) => {
  const levelDifficulty = e.id;
  e.addEventListener("click", () => {
    const chosenDifficulty = filters.sortDifficulty(champions, levelDifficulty);
    showAllChampions(chosenDifficulty);
    console.log(chosenDifficulty);
  });
});

// Repasar
// ¿Que son las variables y como se utilizan?
// Leer (sobre variables): https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/
// Leer operadores: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators
