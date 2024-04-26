import { Request, Response, query } from "express";
import { showMarkedMenu } from "../utils/showMakedMenu";
import { petApi } from "../models/pet";

export const search = (req: Request, res: Response) => {
  const query = req.query.q as string;
  if (!req.query.q) {
    res.redirect("/");
    return;
  }

  const list = petApi.getFromName(query);

  res.render("pages/main", {
    menu: showMarkedMenu(""),
    list,
    query,
  });
};
