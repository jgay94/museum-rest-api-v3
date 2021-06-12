import { IMuseumRepository, IMuseumService, Museum } from "./mod.ts";

interface IServiceDependencies {
  museumRepository: IMuseumRepository;
}

export class Service implements IMuseumService {
  museumRepository: IMuseumRepository;

  constructor({ museumRepository }: IServiceDependencies) {
    this.museumRepository = museumRepository;
  }

  async findAll() {
    console.log("Getting all museums...");
    return await this.museumRepository.findAll();
  }

  async findOne(id: string) {
    console.log(`Getting museum by id: ${id}`);
    return await this.museumRepository.findOne(id);
  }
}
