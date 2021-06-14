import { Application, Router } from "oak/mod.ts";
import { green, white } from "fmt/colors.ts";
import { IMuseumService } from "../museums/mod.ts";
import * as middleware from "./middleware/mod.ts";
import { oakCors } from "cors/mod.ts";
// import router from "./routes/router.ts";

interface IBootstrapDependencies {
  configuration: {
    port: number;
    hostname: string;
    allowedOrigins: string[];
  };
  services: {
    museums: IMuseumService;
  };
}

export async function bootstrap({
  configuration: {
    port,
    hostname,
    allowedOrigins,
  },
  services: {
    museums,
  },
}: IBootstrapDependencies) {
  const app = new Application();
  const router = new Router({
    prefix: "/v1",
  });

  router.get("/museums", middleware.xTestHeader, async (ctx) => {
    ctx.response.body = {
      museums: await museums.findAll(),
    };
  });

  app.use(oakCors({
    origin: allowedOrigins,
  }));

  app
    .use(middleware.errorHandler)
    .use(middleware.logger)
    .use(middleware.responseTime);

  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.addEventListener("error", (event) => {
    console.error("An error occurred:", event.error);
  });

  app.addEventListener("listen", ({ secure, hostname, port }) => {
    const protocol = secure ? "https://" : "http://";
    const url = `${protocol}${hostname ?? "localhost"}:${port}`;
    console.log(
      `${green("Listening on:")} ${white(url)}`,
    );
  });

  await app.listen({ port, hostname });
}
