import fastify from "fastify";
import { db } from "./database";
import { env } from "./env";

const app = fastify();

app.get("/db", async () => {
  const tables = await db("sqlite_schema").select("*");
  return tables;
});

app.listen({ port: env.PORT }, () => {
  console.log(`HTTP server running! http://localhost:${env.PORT}`);
});
