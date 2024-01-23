import { create } from "zustand";

import type { Project } from "../types";
import { projects } from "../constants";

type ProjectState = {
  projects: Array<Project>;
  curentProject: Project;
};

type ProjectAction = {
  setCurrentProject: (project: Project) => void;
};

export const useProject = create<ProjectState & ProjectAction>()((set) => ({
  projects,
  curentProject: projects[0],

  setCurrentProject: (project) => set({ curentProject: project }),
}));
