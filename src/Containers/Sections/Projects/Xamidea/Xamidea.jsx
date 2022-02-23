import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Xamidea.css";

import X from "../../../../Assets/images/Xamidea/X.png";
import laptop from "../../../../Assets/images/Xamidea/laptop.png";
import { parallaxScrolling } from '../../../../utils/animation'

function Xamidea({
  section
}) {
  const REFS = React.useRef([]);
  const images = [
    {
      src: X,
      id: "logo",
      style: {
        maxWidth: "100%",
        top: 0,
        right: "0%",
        height: "100%"
      }
    },
    {
      src: laptop,
      id: "laptop",
      animation: true,
      style: {
        maxWidth: "100%",
        right: "-15%",
        maxHeight: "100%",
        bottom: "18%",

      }
    }
  ];


  React.useEffect(() => {
    const isSecondSection = section && parseInt(section.destination.index) === 2;
    if (isSecondSection && parseInt(section.origin.index) < parseInt(section.destination.index)) {
      parallaxScrolling({
        element: REFS.current.laptop,
        duration: .9,
        from:  {
          opacity: 0,
          y: 400,
        },
        to: {
          y: 0,
          opacity: 1,
        },
      })
    }

    if (isSecondSection && parseInt(section.origin.index) > parseInt(section.destination.index)) {
      parallaxScrolling({
        element: REFS.current.laptop,
        duration: .9,
        from:  {
          opacity: 0,
          y: -400,
        },
        to: {
          y: 0,
          opacity: 1,
        },
      })
    }



  }, [section])
  return (
    <div className="xamidea__Section">
      <div className="container">
        <Row className="projects__row">
          <Col xs={{ span: 6 }} className="aboutApp">
            <div className="reveal__heading">
              <span className="first__heading span">
                Learning Resourse Center
              </span>
              <span className="second__heading span">Live Classrooms</span>
            </div>
            <div className="project__heading reveal__heading">
              The complete exam preparation system
            </div>
            <span className="project__Detail reveal__heading">
              The educational process has undergone a sea of change in the last
              few years and has become more demanding than ever before. For more
              than two decades, Xamidea has helped thousands of students prepare
              for exams by providing hand-picked questions and solutions
              strictly in accordance with the CBSE syllabus.
            </span>
            <div className="reveal__heading check">Check it out</div>
          </Col>
          <Col xl={{ span: 6 }} xs={6} className="project__image">
            <div className="img__container">
              {images.map((img, index) => {
                return (
                  <img
                    ref={(el) => { REFS.current[img.id] = el; }}
                    key={index}
                    alt="xamidea"
                    id={img.id}
                    src={img.src}
                    style={{...img.style, position: "absolute"}}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Xamidea;
