import { createContext } from "react";

export interface IProjects {
  id: number;
  proj_name: String;
  description: String;
  team: String[];
  tech_stack: String[];
  link: String;
}

export interface BaseContext {
  projects: Array<IProjects>;
}
export const ProjectContext = createContext<BaseContext>({ projects: [] });
