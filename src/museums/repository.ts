import { IMuseumRepository, Museum } from "./types.ts";

export class Repository implements IMuseumRepository {
  private storage = new Map<string, Museum>();

  async findAll() {
    return [...this.storage.values()];
  }

  async findOne(id: string) {
    return this.storage.get(id);
  }
}
