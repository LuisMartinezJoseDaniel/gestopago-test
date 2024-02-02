import { Producto } from "@/interfaces/product";

export const filterByUniqueId = (
  array: Producto[],
  idName: keyof Producto["attributes"]
): Producto[] => {
  const idSet = new Set<string>();
  return array.filter((objeto) => {
    const idValue = objeto.attributes[idName];

    if (typeof idValue === "string" && !idSet.has(idValue)) {
      idSet.add(idValue);
      return true;
    }
    return false;
  });
};
