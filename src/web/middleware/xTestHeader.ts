import { Context, RouterMiddleware } from "oak/mod.ts";

export const xTestHeader: RouterMiddleware = async (
  ctx: Context,
  next: () => Promise<unknown>,
) => {
  ctx.response.headers.set("X-Test", "true");
  await next();
};
