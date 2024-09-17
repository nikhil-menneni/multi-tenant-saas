import * as dotenv from "dotenv";
dotenv.config();
import Fastify from "fastify";
import { testConnection } from "./db";

const PORT = Number(process.env.PORT) || 5000;

const fastify = Fastify({ logger: true });

fastify.get("/", (req, res) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await testConnection();
    fastify.listen({ port: PORT });
  } catch (error: any) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
