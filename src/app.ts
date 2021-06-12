import { Service as MuseumService } from "./museums/service.ts";

const museumService = new MuseumService({
  museumRepository: {
    findAll: async () => [],
  },
});

console.log(await museumService.findAll());
