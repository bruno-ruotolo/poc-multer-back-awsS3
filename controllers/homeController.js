import chalk from "chalk";

import db from "../db.js";

export async function postHome(req, res) {
  let { imageBody } = res.locals;

  try {
    await db.collection("images").insertOne({ imageBody });
    res.status(200).send(imageBody);
  } catch (e) {
    res.status(200).send(chalk.red.bold(e))
  }

}


export async function getHome(req, res) {
  try {
    const images = await db.collection("images").find({}).toArray();
    res.status(200).send(images);
  } catch (e) {
    res.status(200).send(chalk.red.bold(e))
  }
}
