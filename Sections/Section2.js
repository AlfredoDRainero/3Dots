import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonRounded from "../components/button";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: red;
  /*div {
    border: 1px solid white;
  }*/
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;

const LeftComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1.5fr, 1fr, 1fr);
  row-gap: 40px;
  background-color: #212932;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const P1 = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: flex-end;
  background-color: #212932;
  flex-direction: column;
  font-family: "Century Gothic", sans-serif;
  font-weight: normal;
  font-size: 30px;
  letter-spacing: 3px;
  color: #ffffff;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 100px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1;
  width: 70%;
  height: 100%;
`;

const P2 = styled.div`
  justify-self: center;
  align-self: start;
  background-color: #212932;
  flex-direction: column;
  font-family: "arial", sans-serif; /* Establece Century Gothic como la fuente principal */
  font-weight: normal; /* Establece el peso de la fuente en negrita (bold) */
  
  letter-spacing: 3px;
  color: #ffffff;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 20px;
  width: 70%;
  height: auto;
  letter-spacing: 1px;
  line-height: 1.2;
  margin-bottom: 10px;
 // background-color: red;
`;

const P3 = styled.div`
  button {
    letter-spacing: 1px;
    line-height: 1.2;
    font-size: 20px;
    font-family: "Century Gothic", sans-serif; /* Establece Century Gothic como la fuente principal */
    font-weight: bold; /* Establece el peso de la fuente en negrita (bold) */
    font-size: 18px;
    letter-spacing: 3px;
  }
  justify-self: center;
  //align-self: end;
  flex-direction: column;
  color: #ffffff;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 70%;
  //height: auto;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr; /* Ajusta el número de columnas según tu diseño */
  justify-items: start; /* Alinea los elementos hijos a la derecha */
  

`;


const Slice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  //background-color: brown;
  background-color: #212932;
`;

const Div1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  z-index: 1;
`;

const HoverElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  background: transparent;
  z-index: 0;
  pointer-events: none;
`;

const Section2 = () => {
  const images = [
    "/screenworks/imagen1.jpg",
    "/screenworks/imagen2.jpg",
    "/screenworks/imagen3.jpg",
    "/screenworks/imagen4.jpg",
    "/screenworks/imagen5.jpg",
    "/screenworks/imagen1.jpg",
    "/screenworks/imagen2.jpg",
  ];

  const images2 = [
    "/screenworks/imagen1.jpg",
    "/screenworks/imagen2.jpg",
    "/screenworks/imagen3.jpg",
    "/screenworks/imagen4.jpg",
    "/screenworks/imagen5.jpg",
    "/screenworks/imagen7.jpg",
    "/screenworks/imagen8.jpg",
    "/screenworks/imagen1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0.6);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % 5;
    const interval = setInterval(() => {
      setCurrentIndex(nextIndex);
    }, 1200);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  useEffect(() => {
    const nextIndex2 = (currentIndex2 + 1) % 5;
    const interval2 = setInterval(() => {
      setCurrentIndex2(nextIndex2);
    }, 1200);
    return () => clearInterval(interval2);
  }, [currentIndex2, images2]);

  return (
    <AppContainer>
      <LeftComponent>
        <P1>Innovating Digital Ideas Solutions</P1>
        <P2>
          We are a company that is passionate about developing cutting-edge
          software to meet all of your digital needs.
        </P2>
        <P3>
          <ButtonRounded buttonText={"LET'S TALK"} />
        </P3>
      </LeftComponent>
      <RightComponent>
        <Div1>
          <Slice>
            <CarouselContainer>
              <Carousel
                style={{ transform: `translateY(-${currentIndex * 33.33}%)` }}
              >
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image src={image} alt={`Image ${index + 1}`} />
                  </CarouselItem>
                ))}
              </Carousel>
            </CarouselContainer>

            <CarouselContainer>
              <Carousel
                style={{ transform: `translateY(-${currentIndex2 * 33.33}%)` }}
              >
                {images2.map((image2, index) => (
                  <CarouselItem2 key={index}>
                    <Image2 src={image2} alt={`Image ${index + 1}`} />
                    <HoverElement />
                  </CarouselItem2>
                ))}
              </Carousel>
            </CarouselContainer>
          </Slice>
        </Div1>
        <Degrade />
      </RightComponent>
    </AppContainer>
  );
};

const RightComponent = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);

  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const Degrade = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  z-index: 2;

  width: 100%; /* Sin comillas */
  height: 100vh; /* Sin comillas */
  background: linear-gradient(
    to bottom,
    rgba(33, 41, 50, 1),
    rgba(33, 41, 50, 0.5),
    rgba(33, 41, 50, 0),
    rgba(33, 41, 50, 0),
    rgba(33, 41, 50, 0),
    rgba(33, 41, 50, 0.5),
    rgba(33, 41, 50, 1)
  );
  transition: opacity 0.3s; /* Agregar transición de opacidad */

  &:hover {
    //opacity: 0; /* Opacidad al hacer hover */
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
`;

const CarouselContainer3 = styled.div`
  width: 22px;
  position: relative;
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const CarouselItem = styled.div`
  //flex: 0 0 39.1%;
  height: 300px;
  margin-left: auto;
  margin-bottom: 60px;
  margin-top: 5px;
`;

const Image = styled.img`
  width: 360px;
  height: 360px;
  transition: transform 0.5s;
  z-index: 1;
`;

const CarouselItem2 = styled.div`
  //flex: 0 0 39.1%;
  height: 300px;
  //margin-left: auto;
  margin-bottom: 60px;
  margin-top: 5px;
  margin-left: 5px;
`;

const Image2 = styled.img`
  width: 360px;
  height: 360px;
  transition: transform 0.5s;
  z-index: 1;
`;

export default Section2;
