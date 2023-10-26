import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftComponent = styled.div`
  padding-left: 100px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f3b49ff;
  flex-direction: column;
  font-family: "Century Gothic", sans-serif; /* Establece Century Gothic como la fuente principal */
  font-weight: normal; /* Establece el peso de la fuente en negrita (bold) */
  font-size: 30px;
  letter-spacing: 3px;
  color:#ffffff;
`;

const RightComponent = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  //background-color: brown;
  background-color: #2f3b49ff;
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
  const [currentIndex2, setCurrentIndex2] = useState(0.5);

  const [hovering, setHovering] = useState(false);

  const [animationPaused, setAnimationPaused] = useState(false);
  const [animationPaused2, setAnimationPaused2] = useState(false);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % 5;
    const interval = setInterval(() => {
      if (!animationPaused) {
        setCurrentIndex(nextIndex);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  useEffect(() => {
    const nextIndex2 = (currentIndex2 + 1) % 5;
    const interval2 = setInterval(() => {
      if (!animationPaused2) {
        setCurrentIndex2(nextIndex2);
      }
    }, 1200);
    return () => clearInterval(interval2);
  }, [currentIndex2, images2]);

  const handleMouseEnterImage = () => {
    setAnimationPaused(true);
  };

  const handleMouseLeaveImage = () => {
    setAnimationPaused(false);
  };

  const handleMouseEnterImage2 = () => {
    setAnimationPaused2(true);
  };

  const handleMouseLeaveImage2 = () => {
    setAnimationPaused2(false);
  };

  return (
    <AppContainer>
      <LeftComponent>
        <p
          style={{
            fontSize: "100px",
            fontWeight: "bold",
            letterSpacing: "1px",
            lineHeight: "1",
            marginBottom: "10px", // Reduce la distancia entre los párrafos
          }}
        >
          Innovating Digital Ideas Solutions
        </p>
        <p
          style={{
            fontSize: "20px",
            //fontWeight: "bold",
            letterSpacing: "1px",
            lineHeight: "1.2",
            marginBottom: "10px", // Reduce la distancia entre los párrafos
          }}
        >
     
          We are a company that is passionate about developing cutting-edge
          software to meet all of your digital needs.
        </p>
      </LeftComponent>
      <Section1
        onMouseEnter={() => setHovering(false)}
        onMouseLeave={() => setHovering(true)}
      >
        <Div1>
          <RightComponent>
            <CarouselContainer>
              <Carousel
                style={{ transform: `translateY(-${currentIndex * 33.33}%)` }}
              >
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      onMouseEnter={handleMouseEnterImage}
                      onMouseLeave={handleMouseLeaveImage}
                    />
                  </CarouselItem>
                ))}
              </Carousel>
            </CarouselContainer>
            <CarouselContainer3></CarouselContainer3>
            <CarouselContainer>
              <Carousel
                style={{ transform: `translateY(-${currentIndex2 * 33.33}%)` }}
              >
                {images2.map((image2, index) => (
                  <CarouselItem2 key={index}>
                    <Image2
                      src={image2}
                      alt={`Image ${index + 1}`}
                      onMouseEnter={handleMouseEnterImage2}
                      onMouseLeave={handleMouseLeaveImage2}
                    />
                    <HoverElement />
                  </CarouselItem2>
                ))}
              </Carousel>
            </CarouselContainer>
          </RightComponent>
        </Div1>
        {hovering && <Degrade />}
      </Section1>
    </AppContainer>
  );
};

const Section1 = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);

  grid-column-start: 1;
  grid-column-end: 2;
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
    rgba(47, 59, 73, 1),
    rgba(47, 59, 73, 0),
    rgba(47, 59, 73, 0),
    rgba(47, 59, 73, 1)
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
  flex: 0 0 41%;
  height: 300px;
  margin-left: auto;
`;

const Image = styled.img`
  width: 360px;
  height: 360px;
  transition: transform 0.5s;
  z-index: 1;
  filter: grayscale(100%);

  &:hover {
    transform: translateX(-40px);
    z-index: 14;
    filter: grayscale(0%);
  }
`;

const CarouselItem2 = styled.div`
  flex: 0 0 41%;
  height: 300px;
`;

const Image2 = styled.img`
  width: 360px;
  height: 360px;
  transition: transform 0.5s;
  z-index: 1;
  filter: grayscale(100%);

  &:hover {
    transform: translateX(40px);
    z-index: 14;
    filter: grayscale(0%);
  }
`;

export default Section2;
