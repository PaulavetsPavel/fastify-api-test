const fastify = require("fastify");
const serverOptions = {
  logger: true,
};

const app = fastify(serverOptions);

app.addHook("onRoute", function inspector(routeOptions) {
  console.log(routeOptions);
});
app.addHook("onRegister", function inspector(plugin, pluginOptions) {
  console.log("Chapter 2, Plugin System and Boot Process");
});
app.addHook("onReady", async function preLoading() {
  console.log("onReady");
});
app.addHook("onClose", function manageClose(done) {
  console.log("onClose");
  done();
});

app
  .listen({
    port: 8000,
    host: "0.0.0.0",
  })
  .then((addres) => {
    console.log("Start");
  });
