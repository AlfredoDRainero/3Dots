import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap, Power1 } from "gsap";

const StyledSVG = styled.div`
  //background-color: red;
  /* Definir las variables para el ancho y el alto aquí */
  --svg-width: 350px;
  --svg-height: 150px;
  z-index: 3;
  svg {
    width: var(--svg-width);
    height: var(--svg-height);
  }
  transform: scale(1.2);
`;

const SVGComponent = () => {
  return (
    <StyledSVG>
      <svg
        width="610mm"
        height="260mm"
        viewBox="0 0 610 260"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="134.98218"
          y="71.648537"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "406.202px",
            fontFamily: "Century Gothic",
            fill: "#e14c5f",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: "9.52031",
          }}
        >
          <tspan x="134.98218" y="71.648537">
            ...
          </tspan>
        </text>
        <text
          x="2.2637494"
          y="269.10172"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            //fontSize: "7.73359px",
            fontFamily: "'Century Gothic'",
            inkscapeFontSpecification: "'Century Gothic Bold'",
            fontSize: "208.124px",
            fontFamily: "arial",
            fill: "#ffffff",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: "6.50397",
          }}
        >
          <tspan x="2.2637494" y="249.10172">
            3Dots
          </tspan>
        </text>
      </svg>
    </StyledSVG>
  );
};

export default SVGComponent;
