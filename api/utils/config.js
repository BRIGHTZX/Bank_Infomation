import pg from "pg";

export const PgConnect = () => {
  const { Pool } = pg;
  const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
    password: process.env.DATABASE_PASSWORD,
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
