import React, { useState } from "react";
import styled from "styled-components";


const SVGImage = styled.svg`
  width: 50px; /* Ancho deseado */
  height: 50px; /* Alto deseado */
  z-index: 20;
  transition: fill 0.3s, transform 0.3s;
  fill: #DDDDDD;
  &:hover {
    fill: white;
    transform: scale(1.1);
    filter: drop-shadow(0 0 6px white);
  }
    /* Animación para clic */
    &.animateOnClick {
    animation: clickScale 0.1s; /* Aplicar la animación al hacer clic */
  }

  @keyframes clickScale {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;

const LinkedInSVG = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  // Función para manejar el clic y aplicar la animación
  const handleOnClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000); // Desactivar la animación después de 1 segundo
  };

  return (
    <SVGImage
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    onClick={handleOnClick}
    className={isClicked ? "animateOnClick" : ""}
    >
    
    <path
      d="m19.150779,19.013959 h -3.007 v -4.709 c 0,-1.123 -0.02,-2.568 -1.564,-2.568 -1.566,0 -1.806,1.223 -1.806,2.487 v 4.79 H 9.7677786 V 9.3299594 h 2.8870004 v 1.3229996 h 0.04 c 0.589,-1.0059996 1.683,-1.6069996 2.848,-1.5639996 3.048,0 3.609,2.0049996 3.609,4.6119996 z M 6.3747786,8.0059594 c -0.964,0 -1.745,-0.781 -1.745,-1.745 0,-0.964 0.781,-1.745 1.745,-1.745 0.964,0 1.745,0.781 1.745,1.745 0,0.964 -0.781,1.745 -1.745,1.745 v 0 m 1.503,11.0079996 h -3.01 V 9.3299594 h 3.01 z M 20.649779,1.7239594 H 3.3567786 c -0.817,-0.009 -1.487,0.646 -1.497,1.463 V 20.550959 c 0.01,0.818 0.68,1.473 1.497,1.464 H 20.649779 c 0.819,0.01 1.492,-0.645 1.503,-1.464 V 3.1859594 c -0.012,-0.819 -0.685,-1.474 -1.503,-1.463"
    />
  </SVGImage>
);
}

export default LinkedInSVG;
