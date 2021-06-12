import {
  Repository as MuseumRepository,
  Service as MuseumService,
} from "./museums/mod.ts";

const museumRepository = new MuseumRepository();
const museumService = new MuseumService({ museumRepository });

// TODO: remove temporary fixture
museumRepository.storage.set("1fbdd2a9-1b97-46e0-b450-62819e5772ff", {
  id: "1fbdd2a9-1b97-46e0-b450-62819e5772ff",
  name: "The Louvre",
  description:
    "The world's largest art museum and a historic monument in Paris, France.",
  location: {
    lat: "48.860294",
    lng: "2.33862",
  },
});

// console.log(
//   await museumService.findAll(),
// );

console.log(
  await museumService.findOne("1fbdd2a9-1b97-46e0-b450-62819e5772ff"),
);
