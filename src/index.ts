import "dotenv/config";
import express from "express";
import "module-alias/register";

import handleMqtt from "@/handler";
import { readFileSync } from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const packageJsonPath = path.join(__dirname, "..", "package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

app.get("/health", (req, res) => {
  return res.status(200).json({ status: "ok", version: packageJson.version });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

console.log("--------------------------------------------");
console.log(`Started v${packageJson.version}! 🚀`);
console.log("--------------------------------------------");
handleMqtt();
