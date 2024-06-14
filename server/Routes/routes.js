import { Router } from "express";
import { homeRoute } from "../Controller/db-controller.js";

const routes = Router();

routes.get("/", homeRoute);

export default routes;
