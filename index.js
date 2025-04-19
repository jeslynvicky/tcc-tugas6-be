// untuk ngejalanin server backend

import express from "express";
import cors from "cors";
import Route from "./routes/Route.js";

const app = express();
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.render("index"));
app.use(Route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}...`));

