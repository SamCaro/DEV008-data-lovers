//import { template } from "@babel/core";


export const filters = {

  filterRole: (array, tag) => {
    return array.filter((object) => object.tags.includes(tag));
  },
  filterName: (array, name) => {
    return array.filter((object) => object.name.includes(name));
  },
};

// ordenar Champions 
export const sortDifficulty = (array) => {
  return array.sort((a, b) => a.info.difficulty - b.info.difficulty);
};


//filtrar Dificultad y asignarle un nivel
export function filterDifficulty(sortDifficulty, level) {
  
  if (level === "low") {
    return sortDifficulty.filter((obj) => obj.info.difficulty <= 4);
  }
  else if (level === "medium") {
    return sortDifficulty.filter((obj) => obj.info.difficulty > 4 && obj.info.difficulty <= 7);
  }
  return sortDifficulty.filter((obj) => obj.info.difficulty > 7);
}

///////////////PROMEDIO dificultad de todos los campeones ---> METODO REDUCE
export function statsDifficulty(array, chosenDifficulty) { 
  const total = chosenDifficulty.length;
  return Math.round((total / array.length) * 100);
}





///////////////PROMEDIO dificultad de cada uno los campeones ---> METODO REDUCE
export function average(array) { 
  const difficultyAverage = array.map((obj) => obj.info.difficulty); 
  const sum = difficultyAverage.reduce((total, difficulty) => total + difficulty, 0);
  return Math.round(sum / difficultyAverage.length);
}



///////////////PROMEDIO dificultad de cada uno los campeones ---> METODO forEach
// export function average(filterDifficulty) {
//   let sum = 0;


//   filterDifficulty.forEach(function (obj) {
//     sum += obj.info.difficulty;
//   });

//   return Math.round(sum / filterDifficulty.length);
// };

/////////////////
//////////////////



// **tips 
// *array de numeros 
// *no se pueden comparar array con string 
// includes = funcion de un array por eso lleva punto type.incluides
// HTML <progress> barra 
// template strem 

// test para funciones de promedio
// 1 que agrupe por cada nivel de dificultad 
// 
// 3 obtener los resultados por cada nivel 
// 4 compare y siempre de como resultado numeros no string 
