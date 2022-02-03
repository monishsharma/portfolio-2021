import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./style.css";
import Map from "../../Assets/images/projects/covid/map.png";
import allCases from "../../Assets/images/projects/covid/allcases.png";
import { onScrollParallax } from '../../utils/animation';


function SectionDetail({
    selectedProject
}) {

    useEffect(() => {
        onScrollParallax({
            element: "#img1",
            animation: {
                y: -200
            },
            trigger: {
                scrollTrigger: {
                    trigger: ".projectChallenge",
                    scrub: true
                }
            }
        });
        onScrollParallax({
            element: "#img2",
            animation: {
                y: -200
            },
            trigger: {
                scrollTrigger: {
                    trigger: ".projectChallenge",
                    scrub: true
                }
            }
        });
    }, [])

    const showText = (text) => {
        let component;
        const splittedText = text.split(",");
        if (splittedText.length < 0) {
            component = <p  className="challenge__clientInfo">
                {text}
            </p>
        } else {
            component = <ul className="service__list">
                {
                    splittedText.map((txt, index) => (
                        <li className="service__list">{txt}</li>
                    ))
                }
            </ul>
        }

        return component;
    }

    return (
        <div className="covidContainer">
            <div className="projectChallenge">
                <Container>
                    <Row>
                        <Col xs={{ span: 6, offset: 1 }}>
                            <span className="text-label text-lineBefore spanColor">
                                {selectedProject.details.challenges.label}
                            </span>
                            <h2 className="challenegHeading">
                                {selectedProject.details.challenges.heading}
                            </h2>
                            <hr className="break" style={{backgroundColor: selectedProject.bgColor}} />
                            <p className="challengeP">
                                {selectedProject.details.challenges.para}
                            </p>
                        </Col>
                        <Col xs={{ span: 3, offset: 1 }}>
                            {
                                selectedProject.details.challenges.projectSource.map((source, index) => (
                                    <React.Fragment>
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
                    </Row>
                </Container>
                <section className="prjectChallenge_images">
                    <Container >
                        <Row>
                            <Col xs={{ span: 10, offset: 1 }} className="challenge__imageHolder">
                                {
                                    selectedProject.details.challenges.sectionImages.map((images, idx) => (
                                        <img id={images.id} src={images.img} alt="map" />
                                    ))
                                }
                                {/* <img id="img1" src={Map} alt="map" />
                                <img id="img2" src={allCases} alt="allCases" /> */}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default SectionDetail;
