import { PROJECTS } from '../Containers/pages/work/selector';

export const getSelectedProject = (id) => {
    let selectedProject = null ;
    PROJECTS.map(project => {
        if (project.key === id) {
            selectedProject = project;
        }
    })
    return selectedProject;
}