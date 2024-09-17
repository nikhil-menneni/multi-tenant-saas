import { Sequelize } from "sequelize";

const connection = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: console.log,
});

export async function testConnection() {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
}

export default function getConnection() {
  return connection;
}
