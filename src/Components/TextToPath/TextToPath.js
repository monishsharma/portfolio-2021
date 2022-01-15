import React from "react";
import "./TextToPath.css";

function TextToPath(props) {
  return (
    <svg>
      <symbol id="text-copy">
        <text
          transform="translate(100 50)"
          stroke-dasharray="100%"
          stroke-dashoffset="100%"
          id="text-copy1"
          text-anchor="middle"
          x="50%"
          y="50%"
          class="text--line"
        >
          {props.text}
        </text>
      </symbol>
      <g class="g-ants">
        <use href="#text-copy" class="text-copy" id="outline"></use>
        <use href="#text-copy" class="text-copy" id="fill"></use>
      </g>
    </svg>
  );
}

export default TextToPath;
