import { Router } from "oak/mod.ts";
import * as museumController from "../controllers/museums.ts";

const router = new Router({
  prefix: "/v1",
});

router
  .get("/museums", museumController.getAll);

export default router;
