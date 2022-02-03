import React, { useState } from "react";
import "./SectionView.css";
import Landing from "../Sections/Landing/Landing";
import About from "../Sections/About/About";
import Xamidea from "../Sections/Projects/Xamidea/Xamidea";
import ReactFullpage from '@fullpage/react-fullpage';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";



function SectionView() {

  const [nextSection, setnextSection] = useState(null);

  const onLeave = (origin, destination, direction) => {
    setnextSection({
      origin,
      destination
    });
  }

  return (
    <React.Fragment>
      <ReactFullpage
        navigation={true}
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        lockAnchors={true}
        onLeave={onLeave}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div class="section">
                <Landing section = {nextSection} />
              </div>
              <div class="section">
                <About />
              </div>
              <div class="section">
                <Xamidea section = {nextSection} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

      {/* <div id="fullpage">
        <div class="section">
          <Landing />
        </div>
        <div class="section">
          <About />
        </div>
        <div class="section">
          <Xamidea />
        </div>
      </div> */}
    </React.Fragment>
  );
}

const mapStateToProps = ({
  UI: {
    navDrawer
  }
}) => ({
  navDrawer
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SectionView);
