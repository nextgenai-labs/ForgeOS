import { Config } from "../src";

const config = new Config();

config.set("APP_NAME", "ForgeOS");

console.log(config.get("APP_NAME"));

console.log(config.has("APP_NAME"));
