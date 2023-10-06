import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap, Power1 } from "gsap";

const StyledSVG = styled.div`
  /* Estilos personalizados para tu SVG aquí */
  //background-color: red;
  display: flex;
  justify-content: left;
  align-items: top;
`;

const SVGComponent = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Obtener los elementos del SVG por sus IDs o clases (ajusta esto según tu SVG)
    const rect = document.getElementById("rect4-1-1");
    const text1 = document.getElementById("text1");
    const text3 = document.getElementById("text3");
    const text4 = document.getElementById("text4");

    tl.from(rect, { y: -100, opacity: 0, duration: 0.5, ease: Power1.easeOut })
      .from(
        text1,
        { y: -200, opacity: 0, duration: 0.5, ease: Power1.easeOut },
        "-=0.2"
      )
      .from(
        text3,
        { y: -100, opacity: 0, duration: 0.5, ease: Power1.easeOut },
        "-=0.2"
      )
      .from(
        text4,
        { y: -100, opacity: 0, duration: 0.5, ease: Power1.easeOut },
        "-=0.2"
      );
  }, []);

  return (
    <StyledSVG>
      <svg
        width="100"
        height="100"
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g  id="layer1">
          <text
            xmlSpace="preserve"
            style={{
              fontWeight: "bold",
              fontSize: "90.9982px",
              fontFamily: "'Century Gothic'",
              inkscapeFontSpecification: "'Century Gothic Bold'",
              letterSpacing: "7.10927px",
              fill: "#dddddd",
              stroke: "#dddddd",
              strokeWidth: "1.62293",
              strokeLinecap: "round",
              fillOpacity: 1,
              strokeOpacity: 1,
            }}
            x="22.61692"
            y="169.06427"
            id="text3"
            transform="scale(1.0689499,0.93549752)"
          >
            <tspan
              
              id="tspan3"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "bold",
                fontStretch: "normal",
                fontSize: "90.9982px",
                fontFamily: "arial",
                inkscapeFontSpecification: "arial Bold",
                letterSpacing: "7.10927px",
                strokeWidth: "1.62292",
                fill: "#dddddd",
                fillOpacity: 1,
                stroke: "#dddddd",
                strokeOpacity: 1,
              }}
              x="22.61692"
              y="169.06427"
            >
              VS
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "bold",
              fontStretch: "normal",
              fontSize: "60.6657px",
              fontFamily: "'Century Gothic'",
              inkscapeFontSpecification: "'Century Gothic Bold'",
              fill: "#e14c5f",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: "1.04917",
            }}
            x="27.79484"
            y="99.538177"
            id="text4-0-0"
            transform="scale(1.0689499,0.93549753)"
          >
            <tspan
              
              id="tspan4-2-0"
              style={{
                fontSize: "60.6657px",
                fill: "#e14c5f",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "1.04917",
              }}
              x="27.79484"
              y="99.538177"
            >
              ...
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontWeight: "bold",
              fontSize: "90.9982px",
              fontFamily: "'Century Gothic'",
              inkscapeFontSpecification: "'Century Gothic Bold'",
              letterSpacing: "7.10927px",
              fill: "#dddddd",
              stroke: "#dddddd",
              strokeWidth: "1.62293",
              strokeLinecap: "round",
              fillOpacity: 1,
              strokeOpacity: 1,
            }}
            x="15.662047"
            y="87.131508"
            id="text1"
            transform="scale(1.0689499,0.93549752)"
          >
            <tspan
             
              id="tspan1"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "bold",
                fontStretch: "normal",
                fontSize: "90.9982px",
                fontFamily: "arial",
                inkscapeFontSpecification: "arial Bold",
                letterSpacing: "7.10927px",
                strokeWidth: "1.62292",
                fill: "#dddddd",
                fillOpacity: 1,
                stroke: "#dddddd",
                strokeOpacity: 1,
              }}
              x="15.662047"
              y="87.131508"
            >
              DE
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "34.1244px",
              fontFamily: "arial",
              inkscapeFontSpecification: "arial",
              fill: "#dddddd",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: "1.29875",
            }}
            x="35.414551"
            y="70.883568"
            id="text4"
            transform="scale(1.1683324,0.85592079)"
          >
            <tspan
              
              id="tspan7281-5-0-1-8-4-2-5-9-4"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "bold",
                fontStretch: "normal",
                fontSize: "34.1244px",
                fontFamily: "'Century Gothic'",
                inkscapeFontSpecification: "'Century Gothic Bold'",
                fill: "#dddddd",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "1.29875",
              }}
              x="35.414551"
              y="70.883568"
            >
              2
            </tspan>
          </text>
        </g>
      </svg>
    </StyledSVG>
  );
};

export default SVGComponent;
