import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SVGImage = styled.svg`
  z-index: 20;
  transition: fill 0.3s, transform 0.3s;
  fill: #DDDDDD;
  &:hover {
    fill: white;
    transform: scale(1.1);
    filter: drop-shadow(0 0 6px white);
  }

  /* Animación constante */
  @keyframes constantScale {
    0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.5);
    }
  }

  /* Aplicar la animación con un intervalo de 5 segundos */
  animation: constantScale 1s infinite; /* 5 segundos, se repite infinitamente */
`;

const ArrowDownSVG = (props) => {
  return (
    <SVGImage
      xmlns="http://www.w3.org/2000/svg"
      id="arrow-circle-down"
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
    >
      <g>
        <path d="M.44,10.982a1.5,1.5,0,0,1,2.121,0l7.671,7.672h0a2.5,2.5,0,0,0,3.536,0l7.671-7.672A1.5,1.5,0,1,1,23.561,13.1l-7.672,7.672a5.5,5.5,0,0,1-7.778,0L.439,13.1a1.5,1.5,0,0,1,0-2.118Z" />
        <path d="M.44,1.439a1.5,1.5,0,0,1,2.121,0l9.085,9.086h0a.5.5,0,0,0,.707,0L21.439,1.44a1.5,1.5,0,0,1,2.122,2.119L14.475,12.64a3.505,3.505,0,0,1-4.95,0L.439,3.559a1.5,1.5,0,0,1,0-2.12Z" />
      </g>
    </SVGImage>
  );
};

export default ArrowDownSVG;

