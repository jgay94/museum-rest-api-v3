import { RouterContext } from "oak/mod.ts";
import {
  Repository as MuseumRepository,
  Service as MuseumService,
} from "../../museums/mod.ts";

const museumRepository = new MuseumRepository();
const museumService = new MuseumService({ museumRepository });

/**
 * @route GET /v1/tasks
 * @description Get all tasks
 */
export async function getAll(ctx: RouterContext) {
  const museums = await museumService.findAll();

  ctx.response.status = 200;
  ctx.response.body = {
    success: true,
    museums: museums,
  };
}
