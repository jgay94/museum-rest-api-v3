import { Application } from "oak";
import { green, white } from "fmt/colors.ts";

interface IBootstrapDependencies {
  configuration: {
    port: number;
    hostname: string;
  };
}

export async function bootstrap(
  { configuration: { port, hostname } }: IBootstrapDependencies,
) {
  const app = new Application();

  app.use((ctx) => {
    ctx.response.body = "Hello world!";
  });

  app.addEventListener("error", (event) => {
    console.error("An error occurred: ", event.error);
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
