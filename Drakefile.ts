import { desc, run, task } from "https://deno.land/x/drake/mod.ts";

desc("my first Drake task");
task("hello", [], function () {
  console.log("hello world!");
});

run();
