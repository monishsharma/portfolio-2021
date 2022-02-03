import React from 'react';
import "./index.css";
import { Link } from "react-router-dom";

const ProjectCard = ({
    index,
    project,
    ...props
}) => {


    const onHoverHandler = (e, index, mouseEnter) => {
        const projectId = `project_${index}`
        const trigger = [...document.getElementsByClassName("project")];

        trigger.forEach((ele) => {
            if (mouseEnter) {
                if (ele.id !== projectId) {
                    ele.classList.add("nonFocusedProject")
                }
            } else {
                ele.classList.remove("nonFocusedProject")
            }

        })

    }

    return (
        <Link
            to={`/work/${project.path}`}
            id={`project_${index}`}
            className={`project ${project.shiftYaxis ? "shiftProjectYaxis" : ""}`}
            style={{
                background: `url(${project.img}), #000000`,
                backgroundSize: `${project.size}`,
                backgroundPosition: `${project.position}`,
                backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={(e) => onHoverHandler(e, index, true)}
            onMouseLeave={(e) => onHoverHandler(e, index, false)}
        // onClick={() => goToDetailsPage(project)}
        >
            <h4>
                {project.title}
            </h4>
        </Link>
    )
}

export default ProjectCard
