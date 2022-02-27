import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { getPrevNextProj } from './selector';
import "./style.css";


function ProjectChallenge({
    history,
    selectedProject
}) {

    const element = useRef(null);
    const { prevProject, nextProject } = getPrevNextProj(selectedProject);

    const showText = (text) => {
        let component;
        const splittedText = text.split(",");
        if (splittedText.length < 0) {
            component = <p className="challenge__clientInfo">
                {text}
            </p>
        } else {
            component = <ul className="service__list">
                {
                    splittedText.map((txt, index) => (
                        <li key={index} className="service__list">{txt}</li>
                    ))
                }
            </ul>
        }

        return component;
    }

    const LeftColumnn = () => {
        return (
            <Col xs={{ span: 6, offset: 1 }}>
                <span className="text-label text-lineBefore spanColor">
                    {selectedProject.details.challenges.label}
                </span>
                <h2 className="challenegHeading">
                    {selectedProject.details.challenges.heading}
                </h2>
                <hr className="break" style={{ backgroundColor: selectedProject.bgColor }} />
                <p className="challengeP">
                    {selectedProject.details.challenges.para}
                </p>
            </Col>
        )
    }

    const rightColumn = () => {
        return (
            <Col xs={{ span: 3, offset: 1 }}>
                {
                    selectedProject.details.challenges.projectSource.map((source, index) => (
                        <React.Fragment key={index}>
                            <span className="text-label  spanColor">
                                {source.subTitle}
                            </span>
                            {
                                source.demoLink ?
                                    <p className="challenge__clientInfo">
                                        <a className="sources" target="_blank" href={source.demoLink} rel="noreferrer">
                                            {source.anchorText}
                                        </a>
                                    </p>
                                    :
                                    showText(source.text)
                            }
                        </React.Fragment>
                    ))
                }

            </Col>
        )
    }


const onClickHandler = (item) => {
    history.replace(`/work/${item.path}`)
}
    return (
        <div className="covidContainer">
            <div className="projectChallenge">
                <Container>
                    <Row>
                        {
                            LeftColumnn()
                        }
                        {
                            rightColumn()
                        }
                    </Row>
                </Container>
                {selectedProject.details.challenges.sectionImages && <section className="prjectChallenge_images">
                    <Container >
                        <Row>
                            <Col xs={{ span: 10, offset: 1 }} className="challenge__imageHolder">
                                {
                                    selectedProject.details.challenges.sectionImages.map((images, idx) => (
                                        <img key={idx} id={images.id} src={images.img} alt="map" style={{ ...images.style }} />
                                    ))
                                }
                            </Col>
                        </Row>
                    </Container>

                </section>}
            </div>
            <div className="next_project">
                <Container>
                    <Row>
                        <Col sm={{span: 10, offset:1}} className="nav__holder">
                                <div ref={element} className="prev" style={{backgroundImage: `url(${prevProject.img})`}} onClick={() => onClickHandler(prevProject)} >
                                    <span className="text-brand text-label" style={{color: prevProject.bgColor}}>Back to</span>
                                    <h2 className="nav__h2">{prevProject.title}</h2>
                                    <button className="checkitout">Check it out</button>
                                </div>
                                <div ref={element} className="prev next" style={{backgroundImage: `url(${nextProject.img})`}} onClick={() => onClickHandler(nextProject)} >
                                    <span className="text-brand text-label" style={{color: nextProject.bgColor}}>Up Next</span>
                                    <h2 className="nav__h2">{nextProject.title}</h2>
                                    <button className="checkitout">Check it out</button>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default withRouter(ProjectChallenge);
