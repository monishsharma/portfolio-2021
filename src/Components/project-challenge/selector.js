import { PROJECTS } from '../../constant/projects'

export const getPrevNextProj = (selectedProject) => {
    let prevProjectIndex;
    let nextProjectIndex;
    if (selectedProject.index === 0) {
        prevProjectIndex = PROJECTS.length - 1;
        nextProjectIndex = selectedProject.index + 1;
    } else if (selectedProject.index === (PROJECTS.length - 1)) {
        prevProjectIndex = selectedProject.index - 1;
        nextProjectIndex = 0;
    } else {
        prevProjectIndex = selectedProject.index - 1;
        nextProjectIndex = selectedProject.index + 1;
    }
    return {
        prevProject: PROJECTS[prevProjectIndex],
        nextProject: PROJECTS[nextProjectIndex]
    }

}