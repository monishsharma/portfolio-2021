/* eslint-disable array-callback-return */
import { PROJECTS } from '../constant/projects';

export const getSelectedProject = (id) => {
    let selectedProject = null ;
    PROJECTS.map(project => {
        if (project.key === id) {
            selectedProject = project;
        }
    })
    return selectedProject;
}