import { IMuseumRepository, Museum } from "./mod.ts";
import { CreateMuseum } from "./types.ts";
import { v4 as _uuid } from "https://deno.land/std/uuid/mod.ts";

export class Repository implements IMuseumRepository {
  storage = new Map<string, Museum>();

  async findAll() {
    return [...this.storage.values()];
  }

  async findOne(id: string) {
    const museum = this.storage.get(id);
    return museum ?? Promise.reject(new Error("Museum not found"));
  }

  async addOne(museum: CreateMuseum) {
    const newMuseum = {
      id: _uuid.generate(),
      ...museum,
      createdAt: new Date(),
    };
    this.storage.set(museum.name, { ...newMuseum });

    return newMuseum;
  }
}
