import { Request, Response } from "express";
import { showMarkedMenu } from "../utils/showMakedMenu";
import { petApi } from "../models/pet";

export const home = (req: Request, res: Response) => {
  const list = petApi.getAll();

  res.render("pages/main", {
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    menu: showMarkedMenu("all"),
    list,
  });
};

export const dogs = (req: Request, res: Response) => {
  const list = petApi.getFromType("dog");

  res.render("pages/main", {
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    menu: showMarkedMenu("dog"),
    list,
  });
};

export const cats = (req: Request, res: Response) => {
  const list = petApi.getFromType("cat");

  res.render("pages/main", {
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    menu: showMarkedMenu("cat"),
    list,
  });
};

export const fish = (req: Request, res: Response) => {
  const list = petApi.getFromType("fish");

  res.render("pages/main", {
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    menu: showMarkedMenu("fish"),
    list,
  });
};
