import { IMuseumRepository, Museum } from "./mod.ts";

export class Repository implements IMuseumRepository {
  storage = new Map<string, Museum>();

  async findAll() {
    return [...this.storage.values()];
  }

  async findOne(id: string) {
    const museum = this.storage.get(id);
    return museum ?? Promise.reject(new Error("Museum not found"));
  }
}
