import { Context } from "oak/mod.ts";

export async function responseTime(ctx: Context, next: () => Promise<unknown>) {
  const start = Date.now();
  await next();
  const delta = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${delta}ms`);
}
