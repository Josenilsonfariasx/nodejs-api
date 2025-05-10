import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite",
    connection: {
      filename: "./db/app.db",
    },
    useNullAsDefault: true,
    migrations: {
      extension: "ts",
      directory: "./db/migrations",
    },
  },
  // You can add other environments like production, test, etc.
};

export default config;
