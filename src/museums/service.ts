import { IMuseumRepository, IMuseumService } from "./types.ts";

interface IServiceDependencies {
  museumRepository: IMuseumRepository;
}

export class Service implements IMuseumService {
  museumRepository: IMuseumRepository;

  constructor({ museumRepository }: IServiceDependencies) {
    this.museumRepository = museumRepository;
  }

  async findAll() {
    return await this.museumRepository.findAll();
  }

  // async findOne(id: string) {
  //   return await this.museumRepository.findOne(id);
  // }
}
