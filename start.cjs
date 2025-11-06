const fastify = require("fastify");
const serverOptions = {
  logger: true,
};

const app = fastify(serverOptions);

app
  .listen({
    port: 8000,
    host: "0.0.0.0",
  })
  .then((addres) => {
    console.log("Start");
  });
