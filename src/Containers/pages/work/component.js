import React, { useEffect, useRef } from "react";
import "./work.css";
import TextToPath from "../../../Components/TextToPath/TextToPath";
import { gsap, Power3 } from "gsap";
import { PROJECTS } from "./selector";
import ProjectCard from "../../../Components/projects-card";
import { Container } from "react-bootstrap";
import SmoothScroll from "../../../Components/smooth-scroll";

const Work = () => {

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            gsap.fromTo(
                element,
                2,
                {
                    opacity: 0,
                    y: 300,
                    ease: Power3.easeOut,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: Power3.easeOut,
                }
            );
        }
    }, [ref])



    return (
         <SmoothScroll>
            <div className="ourWorks">
                <div className="work_wrapper">
                    <h1 className="hero_work">
                        Every project is solely made from scratch with reusable components, different javascript frameworks and css libraries.
                    </h1>
                    <TextToPath
                        text={"Portfolio"}
                    />
                </div>

                <Container sm={12}>
                    <div className="projectsContainer" ref={ref}>
                        <div className="projects" >
                            {
                                PROJECTS.map((project, index) => (
                                    <ProjectCard
                                        key={index}
                                        index={index}
                                        project={project}
                                    />
                                ))
                            }

                        </div>
                    </div>
                </Container>
            </div>

        </SmoothScroll >
    )
}

export default Work;