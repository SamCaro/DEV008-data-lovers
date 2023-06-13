// estas funciones son de ejemplo
//export const example = () => {
//return 'example';
//};

//Filtrar personajes por rol
const filters = {
  filterRole: (array, tag) => {
    return array.filter((object) => object.tags.includes(tag));
  },
  filterName: (array, name) => {
    return array.filter((object) => object.name.includes(name));
  },
  sortDifficulty: (object, levelDifficulty) => {
    const modeSort = [...object].map(function (obj) {
      const level = obj.info.difficulty;
      if (levelDifficulty === "low") {
        return level >= 1 && level <= 4;
      } else if (levelDifficulty === "medium") {
        return level >= 5 && level <= 7;
      } else if (levelDifficulty === "high") {
        return level >= 8 && level <= 10;
      }
    });
    modeSort.sort((a, b) => {
      const m = a.info.difficulty;
      const n = b.info.difficulty;
      return m < n ? -1 : 1;
    });
  },
};

export default filters;

//Filtrar personajes por nombre
//Ordenar personajes por dificultad

/*function filterData(data, condition) {
  ctx.fillStyle = color;
  ctx.fillRect();
}


filterDifficulty: (array, levelDifficulty, modeSort) => {
    return array.filter((object) =>
      object.info.difficulty.includes(levelDifficulty)
    );
  },*/
