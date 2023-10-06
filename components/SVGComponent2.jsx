import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap, Power1 } from "gsap";


const StyledSVG = styled.div`
 //background-color: red;
  /* Definir las variables para el ancho y el alto aquí */
  --svg-width: 400px;
  --svg-height: 100px;

  svg {
    width: var(--svg-width);
    height: var(--svg-height);
  }
`;

const SVGComponent2 = () => {

  return (
    <StyledSVG>
      <svg
        width="90.77079"
        height="21.204"
        viewBox="0 0 90.77079 21.204001"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="layer1" transform="translate(-0.6575461,-0.35936878)">
          <g
            id="g14"
            transform="matrix(3.7795276,0,0,3.7795276,-565.61198,-201.03481)"
          >
            <g id="g1" transform="translate(-0.841899,0.93544333)">
              <text
                style={{
                  
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "7.73359px",
                  fontFamily: "'Century Gothic'",
                  inkscapeFontSpecification: "'Century Gothic Bold'",
                  fill: "#dddddd",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.241676",
                }}
                x="137.68492"
                y="63.214417"
                id="text7283-4-3-1-7-0-4-4-1-2"
                transform="scale(1.0929721,0.91493644)"
              >
                <tspan
                  id="tspan7281-5-0-1-8-4-2-5-9-43"
                  x="137.68492"
                  y="63.214417"
                >
                  2Devs
                </tspan>
              </text>
              <text
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "8.32995px",
                  fontFamily: "Century Gothic, Arial, sans-serif",
                  fill: "#e14c5f",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.195233",
                }}
                x="165.41731"
                y="53.509296"
                id="text4-0-6"
              >
                <tspan id="tspan4-2-2" x="165.41731" y="53.509296">
                  ...
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </StyledSVG>
  );
};

export default SVGComponent2;
