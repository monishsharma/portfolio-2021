import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { initProjectDetailAnimation } from "../../../utils/animation";

import './Landing.css';

function Landing() {

  const text = React.useRef();

  useEffect(() => {
        initProjectDetailAnimation({
          element: text.current,
          duration: 1,
          animation: [
            {
              scale: 0
            },
            {
              scale: 1
            }
          ]
        })
  }, [])

  return (
    <div className="landing">
      <div className="container" style={{ width: "100%", height: "100%" }}>
        <Row style={{ width: "100%", height: "100%" }}>
          <Col xs={{ span: 10, offset: 1 }} className="author__background">
            <div className="landing__holder">
              <h1 className="reveal__heading" ref={text}>
                Hi, I'm a Front End Developer living in Gurgaon, India. I Build
                user interfaces.
              </h1>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Landing;
