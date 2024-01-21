import env from "env-var";
export default {
  JWT_SECRET: env.get("JWT_SECRET").default("secret").asString(),
  HTTP_PORT: env.get("HTTP_PORT").default(3000).asPortNumber(),
  RABBITMQ_USER: env.get("RABBITMQ_USER").default("username").asString(),
  RABBITMQ_PASSWORD: env.get("RABBITMQ_PASSWORD").default("password").asString(),
  RABBITMQ_HOST: env.get("RABBITMQ_HOST").default("localhost").asString(),
  RABBITMQ_PORT: env.get("RABBITMQ_PORT").default(5672).asString(),
  GRPC_CLIENT_API_STORE: env.get("GRPC_CLIENT_API_STORE").default('localhost:50001').asString(),
}


