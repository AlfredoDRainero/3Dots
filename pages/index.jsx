import React from "react";
import { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background-color: #dddddd;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  left:0;
  top:0;
  position:absolute;
  gap: 1px;
  height: calc(100vh - 2px ); //- 20px ); /* Usar 100vh para ocupar el 100% de la altura de la ventana */
  width: calc(100vw - 2px);// - 20px); //32px);
  //max-width: 1023px;
  // margin-right: 25px;
  @media (max-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50%);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 1;
  }
  50% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-120%);
    opacity: 0;
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateX(-120%); /* Cambiado a valor negativo para iniciar desde arriba */
    opacity: 1;
  }
  50% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%); /* Cambiado a valor positivo para moverse hacia abajo */
    opacity: 1;
  }
`;

const zoom = keyframes`
  0% {
    transform: scale(1); /* Tamaño normal */
    opacity: 0;
  }
  50% {
    transform: scale(2); /* Zoom al 120% del tamaño normal */
    opacity: 1;
  }
  100% {
    transform: scale(3); /* Volver al tamaño normal */
    opacity: 1;
  }
`;


const Div = styled.div`
  text-align: right;
  border: 1px solid #888888;
  width: 100%;
  height: 100%;
  overflow: hidden;
  //white-space: nowrap;
  color: #212932;
`;


// ------ NOMBRE ---------
const Letra1 = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Century Gothic Bold", sans-serif; /* Fuente Century Gothic Bold */
  font-size: 400px; /* Tamaño de fuente 72px */
  font-weight: bold;
  animation: ${bounce} 20s linear infinite; /* Aplicar la animación */
  white-space: pre-wrap;
  line-height: 300px;
`;

const Letra2 = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Century Gothic Bold", sans-serif; /* Fuente Century Gothic Bold */
  font-size: 300px; /* Tamaño de fuente 72px */
  font-weight: bold;
  animation: ${slideUp} 10s linear infinite; /* Aplicar la animación */
  white-space: pre-wrap;
  line-height: 240px;
`;

const Letra3 = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Century Gothic Bold", sans-serif; /* Fuente Century Gothic Bold */
  font-size: 200px; /* Tamaño de fuente 72px */
  font-weight: bold;
  animation: ${slideDown} 10s linear infinite; /* Aplicar la animación */
  white-space: pre-wrap;
`;

const Letra4 = styled.div`
  text-align: left;
  width: 100%;
  height: 100%;
  font-family: "Century Gothic Bold", sans-serif; /* Fuente Century Gothic Bold */
  font-size: 200px; /* Tamaño de fuente 72px */
  font-weight: bold;
  animation: ${slideDown} 15s linear infinite; /* Aplicar la animación */
`;

const Letra5 = styled.div`
  text-align: left;
  color:#FF434E;
  width: 100%;
  height: 100%;
  font-family: "arial Bold"; /* Fuente Century Gothic Bold */
  font-size: 200px; /* Tamaño de fuente 72px */
  font-weight: bold;
  animation: ${zoom} 15s linear infinite; /* Aplicar la animación */
  
`;

const HomePage = () => {
  const [totalDivs, setTotalDivs] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      const isWideScreen = window.innerWidth >= 1023;
      setTotalDivs(isWideScreen ? 32 : 16);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Container>
        {[...Array(totalDivs)].map((_, index) => {
          let content;
          let additionalStyles = {};
          switch (index) {
            case 9:
              content = <Letra1>2</Letra1>;
              /* additionalStyles = {
              animation: "moveDown 2s linear",
              position: "relative",
              top: "100px", // Ajusta la cantidad de desplazamiento
            };*/
              break;
            case 10:
              content = <Letra2>D<Letra3>D</Letra3></Letra2>;
              break;
            case 12:
              content = <Letra5>...</Letra5>;
              break;
            case 19:
              content = <Letra3>E E E E E E E<Letra1>E E E</Letra1></Letra3>;
              break;
            case 20:
              content = <Letra1>V V V</Letra1>;
              break;
            case 21:
              content = <Letra2>S S S S</Letra2>;
              break;
            case 30:
              content = <Letra4>.</Letra4>;
              break;
            default:
              content = "";
              break;
          }

          return <Div key={index} style={additionalStyles}>{content}</Div>;
        })}
      </Container>
    </div>
  );
};

export default HomePage;
