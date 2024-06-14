import express from "express";
import cors from "cors";
import routes from "./Routes/routes.js";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 4000;

const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Your site is live on http://localhost:${PORT}`);
});
