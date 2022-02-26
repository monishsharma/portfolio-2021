import React, { useState } from "react";
import "./SectionView.css";
import Landing from "../Sections/Landing/Landing";
import About from "../Sections/About/About";
import Xamidea from "../Sections/Projects/Xamidea/Xamidea";
import ReactFullpage from '@fullpage/react-fullpage';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";



function SectionView({
  history
}) {

  const [nextSection, setnextSection] = useState(null);

  const onLeave = (origin, destination, direction) => {
    setnextSection({
      origin,
      destination
    });
  }

  React.useEffect(() => {
    const scrollIndex = history.location.scrollIndex;
    if (scrollIndex) {
      window.fullpage_api.moveTo(scrollIndex);
    }
  }, [history]);

  return (
    <React.Fragment>
      <ReactFullpage
      anchors={["", "about", "experience"]}
        navigation={true}
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        // lockAnchors={true}
        onLeave={onLeave}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Landing section = {nextSection} />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <Xamidea section = {nextSection} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SectionView));
