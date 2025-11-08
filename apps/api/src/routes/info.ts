import { Hono } from "hono";
import { infoService, type InfoProvider } from "../services/info-service.js";
import { InfoResponseSchema } from "../types.js";

export const createInfoRoutes = (service: InfoProvider = infoService) => {
  const routes = new Hono();

  routes.get("/", (c) => {
    const data = service.getInfo();
    return c.json(InfoResponseSchema.parse(data));
  });

  return routes;
};

const infoRoutes = createInfoRoutes();

export default infoRoutes;
