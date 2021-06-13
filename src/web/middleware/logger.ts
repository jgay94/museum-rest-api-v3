import { Context } from "oak/mod.ts";
import { white } from "fmt/colors.ts";

export async function logger(ctx: Context, next: () => Promise<unknown>) {
  await next();
  const responseTime = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${ctx.response.status} ${ctx.request.method} ${ctx.request.url} ${
      white("took")
    } ${responseTime}.`,
  );
}
