//importamos el objeto `data`, que contiene las funciones `nombre-de-nuestra-funcion` y `maskify`//
import { expect } from "@jest/globals";
import filters from "../src/data.js";
import data from "../src/data/lol/lol.js";

describe("filters", () => {
  it("should be a object", () => {
    console.log(filters);
    expect(typeof filters).toBe("object");
  });
  const champions = Object.values(data.data);
  describe("filterRole", () => {
    it("should be a function", () => {
      console.log(filters.filterRole);
      expect(typeof filters.filterRole).toBe("function");
    });
    it('should be a new array with "Mage"', () => {
      // DADO  el rol seleccionado por el usuario
      // CUANDO tenga filtrado mi data
      const characterFilteredOne = filters.filterRole(champions, "Mage");
      // ENTONCES todos los personajes del nuevo array deben contener el tag "Mage"
      expect(characterFilteredOne.every((c) => c.tags.includes("Mage"))).toBe(true);
    });
  });
  describe("filterName", () => {
    it("should be a new array with the name written", () => {
      // DADO un input ingresado por el usuario
      const input = "Braum"
      // CUANDO lo ingreso a mi función
      const name = (champ) => champ.name.includes(input);
      //const onlyName = filters.filterName(array, input);
      //ENTONCES espero que se muestre en pantalla solo el personaje que tiene ese nombre
      expect(champions.some(name)).toBe(true)
    });
  });
  describe("sortDifficulty", () => {
    it("It should be an array sorted in descending order", () => {
      // DADA la variable champions
      // CUANDO se selecciona la dificultad se ordenan sus elementos
      const array = [{ info: { difficulty: 6 } }, { info: { difficulty: 3 } }, { info: { difficulty: 7 } }, { info: { difficulty: 2 } }];
      const characterOrdered = filters.sortDifficulty(array)
      //ENTONCES espero que se ordene de forma ascendente
      expect(characterOrdered[1]).toStrictEqual({ info: { difficulty: 3 } })
    });
  });
  describe("statsDifficulty", () => {
    it("the function should return an average", () => {
      const array = [1, 2, 3];
      const chosenDifficulty = [1, 2, 3];
      const promedio = filters.statsDifficulty(array, chosenDifficulty);
      expect(promedio).toEqual(100);
    });
    it("the average returned must be numbers", () => {
      const array = [1, 2, 3];
      const chosenDifficulty = [1, 2, 3];
      const promedio = filters.statsDifficulty(array, chosenDifficulty);
      expect(typeof promedio).toEqual("number");
    });
  });
  describe("filterDifficulty", () => {
    it("the function should group according to the level medium", () => {
      const sortDifficulty = [{ info: { difficulty: 5 } }, { info: { difficulty: 10 } }, { info: { difficulty: 3 } }];
      const level = 'medium';
      const filter = filters.filterDifficulty(sortDifficulty, level);
      expect(filter).toEqual([{ info: { difficulty: 5 } }]);
    });
    it("the function should group according to the level high", () => {
      const sortDifficulty = [{ info: { difficulty: 2 } }, { info: { difficulty: 1 } }, { info: { difficulty: 10 } }];
      const level = 'high';
      const resultado = filters.filterDifficulty(sortDifficulty, level);
      expect(resultado).toEqual([{ info: { difficulty: 10 } }]);
    });
  });
})




