//importamos el objeto `data`, que contiene las funciones `nombre-de-nuestra-funcion` y `maskify`//
import filters from "../src/data.js";
import data from "../src/data/lol/lol.js";

describe("filters", () => {
  it("should be a object", () => {
    console.log(filters);
    expect(typeof filters).toBe("object");
  });

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
      // DADA la siguiente variable con tres objetos como elementos
      // CUANDO le doy parametros
      expect(filters.filterRole(testArray, "bcd")).not.toStrictEqual([
        { tags: ["dfg"] },
      ]);
    });
  });
 });

// it('debería retornar el nombre ', () => {
//   expect().toBe(true);
// });

/*  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/
