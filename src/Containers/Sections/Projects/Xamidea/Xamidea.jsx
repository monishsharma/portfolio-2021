import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Xamidea.css";

import X from "../../../../Assets/images/Xamidea/X.png";
import LOGO from "../../../../Assets/images/Xamidea/logo.png";
import cap from "../../../../Assets/images/Xamidea/cap.png";
import laptop from "../../../../Assets/images/Xamidea/laptop.png";
import { parallaxScrolling } from '../../../../utils/animation'

function Xamidea() {
  const [images, setimages] = useState([
    {
      src: X,
      width: "60%",
      id: "X",
      top: 0,
      right: "-26%",
    },
    {
      src: laptop,
      width: "100%",
      id: "laptop",
      bottom: "18%",
      right: "-8%",
    },
    {
      src: cap,
      width: "50%",
      id: "cap",
      top: "-10%",
      left: 0,
    },
  ]);
  const x = React.useRef(null);

  React.useEffect(() => {
    parallaxScrolling(x.current)
  }, [x])
  return (
    <div className="xamidea__Section" ref = {x}>
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
            <div className="reveal__heading" style={{ margin: "1.5rem 0" }}>
              <img src={LOGO} style={{ width: "25%", height: "50%" }} />
            </div>
            <div className="reveal__heading check">Check it out</div>
          </Col>
          <Col xl={{ span: 6 }} xs={6} className="project__image">
            <div className="img__container">
              {images.map((img, index) => {
                return (
                  <img
                    id={img.id}
                    src={img.src}
                    style={{
                      width: img.width,
                      position: "absolute",
                      top: img.top,
                      right: img.right,
                      bottom: img.bottom,
                    }}
                    alt="image"
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
