import data from './data/lol/lol.js';
import { filters, sortDifficulty, filterDifficulty, statsDifficulty } from './data.js';


// // // selecciona el elemento HTML con el id "listChampions" y lo almacena en la variable listChampions
const listChampions = document.querySelector("#listChampions"); 
//value: convierte los datos del objeto en un array de campeones.
const champion = Object.values(data.data);
const champions = Array.from(champion);

const showAllChampions = (data) => {
  listChampions.innerHTML = "";
  data.forEach((e) => {
    listChampions.innerHTML += `
    <article class='champion-card'>
  <img src=${e.img} alt=${e.name}>
  <div class="container-name">
    <h2 class="champion-name">${e.name}</h2>
    <p class="champion-key">${e.key}</p>
    <p class="champion-difficulty">${e.info.difficulty}</p>
  </div>
  </article>
`;
  });
};

//boton que muestra champions 
const buttonChampions = document.querySelector("#champions");
buttonChampions.addEventListener("click", () => {
  return showAllChampions(champions);
});

//console.log(showAllChampions(champions));
////////////////Mostrar personajes según su Rol
const roles = document.querySelectorAll(".role-dropdown-menu");
//console.log(roles);
const arrayRoles = Array.from(roles);
// se inicia vacia para que luego de iterar de se llene con el id del elemento al que se hace clic
let idElement = "";
arrayRoles.forEach((e) => {
  e.addEventListener("click", () => {
    idElement = e.id;
    const chosenRole = filters.filterRole(champions, idElement);
    showAllChampions(chosenRole);
    //console.log(chosenRole);
  });
});

/////////////Mostrar personaje según su nombre
showAllChampions(champions);
const input = document.getElementById("search");
input.addEventListener("change", e => {
  // propiedad value: almacena el valor actual del input
  //e.target : elemento donde se hace clic <input type="search" id="search" placeholder="Search" />
  const inputValue = e.target.value;
  const searchName = filters.filterName(champions, inputValue);
  showAllChampions(searchName);
  //console.log(searchName);
});
//****muestra la funcion de DATA****
// const showSuma = average(champions);
// console.log(showSuma);

///////////Mostar personajes segun su difficultad
const showDifficulty = document.querySelectorAll(".champion-difficulty-dropdown");
showDifficulty.forEach( e => {
  e.addEventListener('click', event => {
    const orderChampions = sortDifficulty(champions);
    const sort = event.target.id;
    //console.log(filterDifficulty(orderChampions, sort));
    const championsDifficulty = (filterDifficulty(orderChampions, sort));
    //console.log(championsDifficulty);
    showAllChampions(championsDifficulty);
    // const averageDifficulty = average(championsDifficulty);
    // console.log(averageDifficulty);
    const showAverage = statsDifficulty(champions, championsDifficulty);
    console.log(showAverage);
  });
});

//****muestra la funcion de DATA****


//////////////////////////////////////////Mostrar personajes por dificultad Usando APPEND
// const showDifficulty = document.querySelectorAll(".btn-champion-difficulty-dropdown");
// const showLevel =  document.createElement('ul');
// showDifficulty.forEach( e => {
//   showLevel.innerHTML = "";
//  e.addEventListener('click', e => {
//   showLevel.innerHTML = `
//   <ul class="list-champion-difficultdropdown" >
//   <li class="champion-difficulty-dropdown" id="low">${e.id}</li>
//   <progress id="file" max="100"value="3"></progress>
//   <p>3%</p>
//   <li class="champion-difficulty-dropdown" id="medium">Medium</li>
//   <progress id="file" max="100" value="6"></progress>
//   <p>6%</p>
//   <li class="champion-difficulty-dropdown" id="high">High</li>
//   <progress id="file" max="100" value="9"></progress>
//   <p>9%</p>
//   </ul>
//   `;

//    const orderChampions = sortDifficulty(champions);
//    const sort = e.target.id;
//    //console.log(filterDifficulty(orderChampions, sort));
//    const championsDifficulty = (filterDifficulty(orderChampions, sort));
//    showAllChampions(championsDifficulty);

// //   mostrar promedio nivel LOW
// const averageChampions = average(championsDifficulty);
// console.log(averageChampions);
//  });
// });
// showDifficulty.append(showLevel);
// showLevel.setAttribute.add('class', 'id');
/////////////////////////
////////////////////////




// ***                  ***
// *****  N O T A S  ******
// ***                  ***

// -Atributos de una propiedad ----> Estos atributos definen cómo se puede acceder a la propiedad (¿se puede leer?, ¿se puede escribir?)
         
// -Atributos de valor ----> se pueden cambiar 
//                          (y solo si se puede escribir en la propiedad)
//
//-Operador += ---> sum = sum + valor 

