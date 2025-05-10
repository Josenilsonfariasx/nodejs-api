import fastify from "fastify";
import { db } from "./database";

const app = fastify();

app.get("/db", async () => {
  const tables = await db("sqlite_schema").select("*");
  return tables;
});

app.listen({ port: 3333 }, () => {
  console.log("HTTP server running!");
});
