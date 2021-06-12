// deno-lint-ignore-file require-await
import { IMuseumService } from "./types.ts";

export class Service implements IMuseumService {
  async findAll() {
    return [];
  }

  async findOne(id: string) {
    // ...
  }
}
