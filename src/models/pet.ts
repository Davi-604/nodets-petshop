import { data } from "../data/data";
import { AvaiblePets } from "../types/AvaiblePets";
import { Pet } from "../types/Pet";

export const petApi = {
  getAll: (): Pet[] => {
    return data;
  },
  getFromType: (type: AvaiblePets): Pet[] => {
    return data.filter((item) => item.type === type);
  },
  getFromName: (name: string) => {
    return data.filter(
      (item) => item.name.toLocaleLowerCase().indexOf(name.toLowerCase()) > -1
    );
  },
};
