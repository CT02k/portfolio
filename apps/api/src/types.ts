import { z } from "zod";

export const StudySchema = z.object({
  title: z.string(),
  description: z.string(),
  credentials: z
    .object({
      url: z.string().url(),
      id: z.string(),
    })
    .optional(),
  year: z.string(),
});

export const WorkSchema = z.object({
  title: z.string(),
  description: z.string(),
  year: z.string(),
});

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
});

export const InfoResponseSchema = z.object({
  studies: z.array(StudySchema),
  works: z.array(WorkSchema),
});

export const ProjectsResponseSchema = z.object({
  projects: z.array(ProjectSchema),
});

export type InfoResponse = z.infer<typeof InfoResponseSchema>;
export type ProjectsResponse = z.infer<typeof ProjectsResponseSchema>;
