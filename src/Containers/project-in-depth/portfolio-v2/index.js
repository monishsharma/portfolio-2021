import React from 'react';
import ProjectChallenge from '../../../Components/project-challenge';


function PortfolioV2Component({
    selectedProject
}) {


    return (
        <React.Fragment>
            {
            selectedProject && 
                <>
                    <ProjectChallenge  selectedProject={selectedProject} />
                </>
            }
        </React.Fragment>
    )
}

export default PortfolioV2Component
