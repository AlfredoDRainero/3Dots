import React, { useState } from "react";
import styled from "styled-components";

const SVGImage = styled.svg`
  width: 50px;
  height: 50px;
  z-index: 20;
  transition: fill 0.3s, transform 0.3s;
  fill: #DDDDDD;
  &:hover {
    fill: white;
    transform: scale(1.1);
    filter: drop-shadow(0 0 6px white); /* Agrega una sombra en el hover */
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

const InstagramSVG = (props) => {
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
        d="m 6.7568676,0.16605166 c -3.6341759,0 -6.59081594,2.95664004 -6.59081594,6.59081594 V 17.302173 c 0,3.634176 2.95664004,6.590816 6.59081594,6.590816 H 17.302173 c 3.634176,0 6.590816,-2.95664 6.590816,-6.590816 V 6.7568676 c 0,-3.6341759 -2.95664,-6.59081594 -6.590816,-6.59081594 z m 0,2.63632634 H 17.302173 c 2.180241,0 3.95449,1.7742477 3.95449,3.9544896 V 17.302173 c 0,2.180241 -1.774249,3.95449 -3.95449,3.95449 H 6.7568676 c -2.1802419,0 -3.9544896,-1.774249 -3.9544896,-3.95449 V 6.7568676 c 0,-2.1802419 1.7742477,-3.9544896 3.9544896,-3.9544896 z M 18.620336,4.1205412 A 1.3181631,1.3181631 0 0 0 17.302173,5.4387043 1.3181631,1.3181631 0 0 0 18.620336,6.7568676 1.3181631,1.3181631 0 0 0 19.938499,5.4387043 1.3181631,1.3181631 0 0 0 18.620336,4.1205412 Z M 12.02952,5.4387043 c -3.6341755,0 -6.5908157,2.9566402 -6.5908157,6.5908157 0,3.634176 2.9566402,6.590816 6.5908157,6.590816 3.634176,0 6.590816,-2.95664 6.590816,-6.590816 0,-3.6341755 -2.95664,-6.5908157 -6.590816,-6.5908157 z m 0,2.6363264 c 2.180242,0 3.95449,1.7742477 3.95449,3.9544893 0,2.180242 -1.774248,3.95449 -3.95449,3.95449 -2.1802416,0 -3.9544893,-1.774248 -3.9544893,-3.95449 0,-2.1802416 1.7742477,-3.9544893 3.9544893,-3.9544893 z"
        style={{ strokeWidth: "1.31816" }}
      />
    </SVGImage>
  );
};

export default InstagramSVG;

