import sql from "mssql";
import "dotenv/config";

export const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export const promise = new sql.ConnectionPool(sqlConfig)
  .connect()
  .then((pool) => {
    console.log("📦 Conectado a SQL Server");
    return pool;
  })
  .catch((err) => console.error("❌ Error de conexión a SQL Server", err));


