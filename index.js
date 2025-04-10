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

app.listen(3000, ()=>console.log('Server up and running . . . '));
