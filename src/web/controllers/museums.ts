import { RouterContext } from "oak/router.ts";
import {
  IMuseumService,
  Repository as MuseumRepository,
  Service as MuseumService,
} from "../../museums/mod.ts";

const museumRepository = new MuseumRepository();
const museumService = new MuseumService({ museumRepository });

/**
 * @route GET /api/v1/museums
 * @description get all museums
 */
// export async function getAll(ctx: RouterContext): Promise<void> {
//   ctx.response.body = {
//     museums: await museumService.findAll(),
//   };
// }

export async function getAll(museums: IMuseumService, ctx: RouterContext) {
  ctx.response.body = {
    museums: await museums.findAll(),
  };
}
