import pg from "pg";
const { Pool } = pg;

export const PgConnect = () => {
  const pool = new Pool({
    user: "akkaracha",
    host: "dpg-crrqg48gph6c738k4n80-a.singapore-postgres.render.com",
    database: "potuguese_bank",
    password: "4SThEdtwjeWEsd87JPDU724TIJwqVSFa",
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  pool
    .connect()
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};
