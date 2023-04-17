import React, { useEffect, useRef, useState } from "react";

const EllipseAnimation: React.FC = () => {
  return (
    <>
      <svg viewBox="0 0 200 200">
        <path
          d="M 100,50
    a 60,30 0 1,0 0,80
    a 60,30 0 1,0 0,-80"
          stroke="lightgrey"
          fill="none"
          id="theMotionPath"
        />
        <circle r="5" fill="#FF4500">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath xlinkHref="#theMotionPath" />
          </animateMotion>
        </circle>
      </svg>
    </>
  );
};

export default EllipseAnimation;
