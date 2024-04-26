import { AvaiblePets } from "./AvaiblePets";

export type Pet = {
  type: AvaiblePets;
  image: string;
  name: string;
  color: string;
  sex: string;
};
