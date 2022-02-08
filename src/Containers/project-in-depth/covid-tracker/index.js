import React from 'react';
import ProjectChallenge from '../../../Components/project-challenge';


function CovidTracker({
    selectedProject
}) {


    return (
        <React.Fragment>
            {selectedProject && <ProjectChallenge key={"challenges"} selectedProject={selectedProject} />}
        </React.Fragment>
    )
}

export default CovidTracker
