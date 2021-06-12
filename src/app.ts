import * as http from "https://deno.land/std/http/server.ts";
import {
  Repository as MuseumRepository,
  Service as MuseumService,
} from "./museums/mod.ts";

const PORT = 8080;
const HOSTNAME = "0.0.0.0";
const server = http.serve({ port: PORT, hostname: HOSTNAME });

const museumRepository = new MuseumRepository();
const museumService = new MuseumService({ museumRepository });

// TODO: remove temporary fixtures
museumService.addOne({
  name: "The Louvre",
  description:
    "The world's largest art museum and a historic monument in Paris, France.",
  location: {
    lat: "48.860294",
    lng: "2.33862",
  },
});
museumService.addOne({
  name: "The Smithsonian",
  description:
    "The Smithsonian Institution is the world's largest museum, education, and research complex.",
  location: {
    lat: "31.573594",
    lng: "5.60037",
  },
});

console.log(
  await museumService.findAll(),
);

console.log(`Server now running at http://${HOSTNAME}:${PORT}`);

for await (const request of server) {
  request.respond({ body: "Hello world!", status: 200 });
  console.log(request);
}
