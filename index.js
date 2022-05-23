import express from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import homeRouter from "./routes/homeRouter.js";


//express config
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());


//routes
app.use(homeRouter);
app.use("/", express.static(path.resolve(__dirname, "tmp", "uploads")));

//open server
app.listen(process.env.PORT, () => console.log(chalk.green.bold("Server ON" + process.env.PORT)));