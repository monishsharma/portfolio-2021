import React from "react";

import "./TextToPath.css";

function TextToPath({
  text,
  style
}) {

  return (
    <React.Fragment>
        <div className="text-wrapper">
          <svg id="demo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="100%" height="250" >
            <text x="50%" y="50%" dy=".35em" textAnchor="middle" style={{...style}}>
             {text}
          </text>
          </svg>
        </div>
    </React.Fragment>

  );
}

export default TextToPath;
