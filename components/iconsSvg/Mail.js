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

const MailSVG = (props) => {
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
        d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"
      />
    </SVGImage>
  );
};

export default MailSVG;
