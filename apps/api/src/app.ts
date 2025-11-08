import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import healthRoutes from "./routes/health.js";
import infoRoutes from "./routes/info.js";
import projectsRoutes from "./routes/projects.js";

export const createApp = () => {
  const app = new Hono();

  app.use("*", cors());
  app.use("*", logger());

  app.get("/", (c) =>
    c.json({
      name: "Portfolio API",
      message: "API is running",
    }),
  );

  app.route("/health", healthRoutes);
  app.route("/info", infoRoutes);
  app.route("/projects", projectsRoutes);

  return app;
};

const app = createApp();

export type AppType = typeof app;

export default app;
