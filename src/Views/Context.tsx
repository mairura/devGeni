import { createContext } from "react";

export interface IProjects {
  _id: number;
  proj_name: String;
  description: String;
  team: String[];
  tech_stack: String[];
  link: String;
}

export interface ISingleDev {
  name: string;
  short_name: string;
  profile_link: string;
  profile_img_link: string;
  projects: string[];
  tech_stack: string[];
}

export interface BaseContext {
  projects: Array<IProjects>;
  devs: Array<ISingleDev>;
}

export const ProjectContext = createContext<BaseContext>({
  projects: [],
  devs: [],
});
