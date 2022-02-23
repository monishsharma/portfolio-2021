import React  from "react";
import "./About.css";

// IMAGES //

import bootstrap from "../../../Assets/images/stacks/bootstrap.png";
import css from "../../../Assets/images/stacks/cdd.png";
import html from "../../../Assets/images/stacks/hrml.png";
import JS from "../../../Assets/images/stacks/js.png";
import react from "../../../Assets/images/stacks/react.png";
import vue from "../../../Assets/images/stacks/vue.png";
import redux from "../../../Assets/images/stacks/redux.png";
import sass from "../../../Assets/images/stacks/sass.png";

// END //

import { Col, Row } from "react-bootstrap";

function About() {
  const skills = [
    { img: html, title: "HTML" },
    { img: css, title: "css" },
    { img: JS, title: "JS" },
    { img: bootstrap, title: "bootstrap" },
    { img: react, title: "react" },
    { img: vue, title: "vue" },
    { img: redux, title: "redux" },
    { img: sass, title: "sass" },
  ];

  return (
    <React.Fragment>
      <div className=" landing">
        <div className="container">
          <Row style={{ width: "100%", height: "100%" }}>
            <div className="container">
              <Col xs={{ span: 10, offset: 1 }}>
                <div className="about__holder">
                  <h4 className="reveal__heading">
                    Currently Working as Software Engineer @ Cars24
                  </h4>
                  <p className="reveal__heading">
                    Skip the long and repeating codes. I focus on building
                    reusable code & components.
                  </p>
                  <div className="about__section reveal__heading">
                    I enjoy creating things for the web whether that be
                    websites, applications or anything. My goal is build a
                    perfect responsive web-app what provide pixel-perfect
                    performing experience at the user end. Just after graduating
                    from Jaypee University of Engineering & Technology, I joined
                    the development team at XAMIDEA where I started working on
                    some modern front end libraries and started developing
                    powerful web apps.
                  </div>
                  <div className="stack reveal__heading">
                    {skills.map((img, index) => {
                      return (
                        <React.Fragment>
                          <img
                            src={img.img}
                            alt={img.title}
                            key={index}
                            title={img.title}
                            className="stack__img"
                          />
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
