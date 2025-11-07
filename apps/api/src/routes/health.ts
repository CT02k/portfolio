import { Hono } from "hono";

const healthRoutes = new Hono();

healthRoutes.get("/", (c) =>
  c.json({
    status: "ok",
    service: "portfolio-api",
    timestamp: new Date().toISOString(),
  }),
);

export default healthRoutes;
