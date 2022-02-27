import React, { useEffect, useRef, useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import TextToPath from '../../../Components/TextToPath/TextToPath';
import { MY_EXPERIENCE } from './selector';
import "./sttyles.css";

const Experience = ({
    section
}) => {
    const { destination = {} } = section || {};
    const liRef = useRef([]);
    const tabRef = useRef([]);
    const [selectedTab, setselectedTab] = useState(0);
    const currentTab = MY_EXPERIENCE[selectedTab];

    useEffect(() => {
        if (liRef && liRef.current && currentTab) {
            liRef.current.forEach((li) => {
                if (li !== null) {
                    li.style.setProperty("--color-surface", currentTab.detail.color)
                }
            })
        }
    }, [currentTab])

    const onTabClick = (item) => {
        setselectedTab(item.index)
        tabRef.current[item.index].style.setProperty("--active-tab-color", item.detail.color)
    }

    return (
        <div className="wrapper">
            {
                destination.index === 2 && 
                <div >
                     <TextToPath
                text={"Experience"}
            />
                </div>
           }
            <div className="container">
                <div className="experience__container">
                    <Tab.Container id="left-tab-exmaple" defaultActiveKey={1}>
                        <Row>
                            <Col sm={3} >
                                <Nav variant="pills" className="flex-column ">
                                    <Nav.Item className="">
                                        {
                                            MY_EXPERIENCE.map((item, index) => (
                                                <Nav.Link key={index} eventKey={item.key} onClick={() => onTabClick(item)} ref={(el) => { tabRef.current[index] = el; }}>
                                                    {item.title}
                                                </Nav.Link>
                                            ))
                                        }
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey={currentTab.key} >
                                        <div className="CompanyName">
                                            <span>{currentTab.detail.role} @ </span>
                                            <span className="position" >
                                                <a
                                                    href={currentTab.detail.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ color: currentTab.detail.color }}
                                                >
                                                    {currentTab.detail.company}
                                                </a>
                                            </span>
                                            <div className="years">
                                                {currentTab.detail.duration}
                                            </div>
                                            <div className="learnt">
                                                {
                                                    currentTab.detail.whatIHaveLearnt.map((learnt, index) => (
                                                        <li className="learntList" key={index} ref={(el) => { liRef.current[index] = el; }}>
                                                            {learnt}
                                                        </li>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default Experience;
