const filters = {
  //Filtrar personajes por roles
  filterRole: (array, tag) => {
    return array.filter((object) => object.tags.includes(tag));
  },
  // Filtra personjes por nombres
  filterName: (array, name) => {
    return array.filter((object) => object.name.includes(name));
  },
  // Filtra la dificultad según el personaje
  filterDifficulty: (sortDifficulty, level) => {
    if (level === "low") {
      return sortDifficulty.filter((obj) => obj.info.difficulty <= 4);
    }
    else if (level === "medium") {
      return sortDifficulty.filter((obj) => obj.info.difficulty > 4 && obj.info.difficulty <= 7);
    }
    return sortDifficulty.filter((obj) => obj.info.difficulty > 7);
  },
  // Ordena los personajes
  sortDifficulty: (array) =>
    array.sort((a, b) => {
      return a.info.difficulty - b.info.difficulty;
    }),
  //Muestra la cantidad de personajes según la dificultad 
  statsDifficulty: (array, chosenDifficulty) => {
    const totalDifficulty = chosenDifficulty.length
    const stats = Math.round((totalDifficulty / array.length) * 100);
    return stats;
  }
}

export default filters;