import type { InfoResponse, ProjectsResponse } from "../../../api/src/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export async function apiRequest<TResponse>(
  path: string,
  init?: RequestInit
): Promise<TResponse> {
  const response = await fetch(`${API_BASE_URL}${path}`, init);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as TResponse;
}

export type { InfoResponse, ProjectsResponse };
