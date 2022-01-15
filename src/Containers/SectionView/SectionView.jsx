import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./SectionView.css";
import { initFullpage, initGSAP } from "../../utils/animation";
import Landing from "../Sections/Landing/Landing";
import About from "../Sections/About/About";
import Xamidea from "../Sections/Projects/Xamidea/Xamidea";


function SectionView() {
  useEffect(() => {
    initFullpage();
  }, []);

  return (
    <React.Fragment>
      <div id="fullpage">
        <div class="section">
          <Landing />
        </div>
        <div class="section">
          <About />
        </div>
        <div class="section">
          <Xamidea />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SectionView;
