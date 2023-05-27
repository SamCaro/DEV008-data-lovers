import data from './data/lol/lol.js';
import { } from './data.js';

//Obteniedo los valores de la propiedad hija
const listChampions = document.querySelector("#listChampions");
// Forma refactorizada de la variable 'property' para acceder a los objetos de la data
const property = Object.values(data.data)
// Acceder a los objetos de la data por la variable 'property'
/*const property = [];
for (const prop in data.data) {
  const championProp = data.data[prop]
  property.push(championProp);
}*/
property.forEach((champion) => {
  //const champion = property[index]; Preguntar por qué no es necesaria esta linea
  allChampions(champion);
});
// mostrar cada uno de los personajes
function allChampions(champion) {
  const article = document.createElement('article');
  article.classList.add('champion-sheet');
  article.innerHTML = `
  <article class="champion-sheet">
   <img src=${champion.img} alt=${champion.name}>
   <div class="container-name">
     <h2 class="champion-name">${champion.name}</h2>
     <p class="champion-key">${champion.key}</p>
   </div>
  </article>
 `;
  listChampions.append(article);
}




















/* 
const nameChampion = data.filter(function(champion)){
    return champion.name === 'Aatrox';
    
  }
  console.log(nameChampion);*/

/*const formulario = document.getElementById("form")
formulario.addEventListener("submit", () => {
  const buscador = document.getElementById("buscador")
})
*/
