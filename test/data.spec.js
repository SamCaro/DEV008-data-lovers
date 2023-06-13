import { statsDifficulty, filterDifficulty, filters } from "../src/data.js";
import data from "../src/data/lol/lol.js";


describe("filterRole", () => {
  const champions = Object.values(data.data);
  const testArray = [{ tags: ["abc"] }, { tags: ["bcd"] }, { tags: ["dfg"] }];
  it("should be a function", () => {
    console.log(filters.filterRole);

    expect(typeof filters.filterRole).toBe("function");
  });

  it('should be a new array with "Mage"', () => {
    // DADA la variable testArray con tres objetos como elementos
    // CUANDO le doy de parametros testArray y "bcd" a mi método filterRole
    const characterFiltered = filters.filterRole(champions, "Mage");
    // ENTONCES deberia retornar un nuevo array con el objeto del personaje que tenga el tag "bcd"
    
    expect(characterFiltered[0]).toStrictEqual(champions[1]);
  });

  it("does not have the same tag", () => {
 
    expect(filters.filterRole(testArray, "bcd")).not.toStrictEqual([
      { tags: ["dfg"] },
    ]);
  });
});

describe("Prueba de funcion filtrar por dificultad", () => {
  it("La funcion debe agrupar por cada nivel", () => {
    const sortDifficulty = [{ info: { difficulty: 5 } }, { info: { difficulty: 10 } }, { info: { difficulty: 3 } }];
    const level = 'medium';
    const filter = filterDifficulty(sortDifficulty, level);

    expect(filter).toEqual([{ info: { difficulty: 5 } }]);
  });

  it("La funcion debe agrupar de acuerdo al nivel de dificultad", () => {
    const sortDifficulty = [{ info: { difficulty: 2 }  }, { info: { difficulty: 1 } }, { info: { difficulty: 10 } }];
    const level = 'high';
    const resultado = filterDifficulty(sortDifficulty, level);

    expect(resultado).toEqual([]);
  });
});



describe("Prueba funcion obtener promedios", () => {
  it("La funcion debe mostrar un promedio", () => {
    const array = [1, 2, 3];
    const chosenDifficulty = [1, 2, 3];
    const promedio = statsDifficulty(array, chosenDifficulty);

    expect(promedio).toEqual(100);
  });

  it("La funcion debe retornar un promedio que sea numeros", () => {
    const array = [1, 2, 3];
    const chosenDifficulty = [1, 2, 3];
    const promedio = statsDifficulty(array, chosenDifficulty);

    expect(typeof promedio).toEqual("number");
  });
});




