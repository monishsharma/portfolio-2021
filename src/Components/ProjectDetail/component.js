/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import TextToPath from '../TextToPath/TextToPath';
import { useParams } from "react-router-dom";
import { initProjectDetailAnimation, onScrollParallax } from '../../utils/animation';
import SmoothScroll from '../smooth-scroll';
import { getSelectedProject } from '../../utils/get-selected-project';



const ProjectDetails = () => {

    const imageRef = useRef([]);
    const { id } = useParams();
    const [selectedProject, setSelectedProject] = useState(null);   

    useEffect(() => {
        if (id) {
            setSelectedProject(getSelectedProject(id));
        }
    }, [id]);

    useEffect(() => {
        if (selectedProject && imageRef) {
            selectedProject.projectImages.map((project, index) => {
                initProjectDetailAnimation({
                    element: imageRef.current[index],
                    delay: project.delay
                });
                onScrollParallax({
                    element: imageRef.current[index],
                    animation: project.animation,
                })
            });
            initProjectDetailAnimation({
                element: ".hr",
                delay: 3,
                animation: [
                    {
                        opacity: 0,
                        y: 100
                    },
                    {
                        opacity: 1,
                        y: 0
                    }
                ]
            })
        }
    }, [selectedProject, imageRef])

    useEffect(() => {
        if (selectedProject) {
            initProjectDetailAnimation({
                element: ".project_heading h1",
                duration: 3,
                animation: [
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                    }
                ]
            });
            onScrollParallax({
                element: ".project_heading h1",
                animation: [
                    {
                        y: 0
                    },
                    {
                        y: -1000
                    }
                ]
            });
        }
    }, [selectedProject])


    return (
        selectedProject &&
        <SmoothScroll>
            <div className="projectDetail" >
                <div className="project_container" style={{ background: selectedProject.bgColor }} >
                    <div className="project_heading">
                        <h1 className="project_heading_h1">{selectedProject.title}</h1>
                    </div>
                    <div className="project_images">
                        {
                            selectedProject.projectImages.map((proj, index) => (
                                <React.Fragment key={index}>
                                    <img
                                        id={`img_${proj.id}`}
                                        src={proj.image}
                                        alt={proj.title}
                                        style={{ ...proj.style }}
                                        ref={(el) => { imageRef.current[proj.id] = el; }}
                                    />
                                </React.Fragment>
                            ))
                        }
                        <TextToPath
                            style={{ letterSpacing: selectedProject.letterSpacing }}
                            text={selectedProject.text}
                        />
                        <hr className="hr" />
                    </div>
                </div>
                <selectedProject.component selectedProject={selectedProject} />
            </div>
        </SmoothScroll>
    )
}

export default ProjectDetails
