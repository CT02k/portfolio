import { Hono } from "hono";
import {
  ProjectsService,
  projectsService,
} from "../services/projects-service.js";
import { ProjectsResponseSchema } from "../types.js";

export const createProjectsRoutes = (
  service: ProjectsService = projectsService,
) => {
  const routes = new Hono();

  routes.get("/", (c) => {
    const data = service.getProjects();
    return c.json(ProjectsResponseSchema.parse(data));
  });

  return routes;
};

const projectsRoutes = createProjectsRoutes();

export default projectsRoutes;
