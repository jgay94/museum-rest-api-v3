import { bootstrap } from "./web/server.ts";
import { load as loadConfiguration } from "./config/mod.ts";
import {
  Repository as MuseumRepository,
  Service as MuseumService,
} from "./museums/mod.ts";

const config = await loadConfiguration();

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

if (import.meta.main) {
  bootstrap({
    configuration: {
      secure: true,
      port: config.web.port,
      hostname: config.web.hostname,
      allowedOrigins: config.cors.allowedOrigins,
      ssl: {
        certFile: config.ssl.certificate,
        keyFile: config.ssl.key,
      },
    },
    services: {
      museums: museumService,
    },
  });
}
