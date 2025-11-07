import { Hono } from "hono";
import healthRoutes from "./routes/health.js";

export const createApp = () => {
  const app = new Hono();

  app.get("/", (c) =>
    c.json({
      name: "Portfolio API",
      message: "API is running",
    })
  );

  app.route("/health", healthRoutes);

  return app;
};
