import { serve, ServerRequest } from "http/server.ts";

interface IBootstrapDependencies {
  configuration: {
    port: number;
    hostname: string;
  };
}

export async function bootstrap(
  { configuration: { port, hostname } }: IBootstrapDependencies,
) {
  const server = serve({ port, hostname });

  function handleMuseums(request: ServerRequest) {
    request.respond({ body: JSON.stringify({ museums: [] }), status: 200 });
  }

  console.log(`Server now running at http://${hostname}:${port}`);

  for await (const request of server) {
    // const params = new URLSearchParams(request.url.substr(1));
    // const name = params.get("name");

    if (request.url === "/api/museums" && request.method === "GET") {
      handleMuseums(request);
      continue;
    }

    // request.respond({ body: `Hello ${name ?? "world"}`, status: 200 });
    console.log(`${request.method} ${request.url}`);
  }
}
