import { MongoClient } from "mongodb";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URL);
try {
  await mongoClient.connect();
  console.log(chalk.blue.bold("Data Base ON"));
  db = mongoClient.db(process.env.MONGO_DB);
} catch (e) {
  console.log(chalk.red.bold("Data Base OUT", e));
}
export default db;