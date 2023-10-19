import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftComponent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightComponent = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Oculta el desbordamiento de las imágenes */
  background-color: brown;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: gray;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Section2 = () => {
  const image = 'imagen.jpg';
  const [scroll, setScroll] = useState(window.innerHeight - 200);

  useEffect(() => {
    const imageHeight = (window.innerHeight / 2) + 200;
    const scrollSpeed = 1; // Velocidad de desplazamiento

    const animateScroll = () => {
      setScroll(scroll => {
        const newScroll = scroll - scrollSpeed;

        // Cuando la imagen llega a la parte superior, reiniciamos su posición
        if (newScroll <= -imageHeight) {
          return window.innerHeight - 200; // Reinicia desde abajo
        }

        return newScroll;
      });
    };

    const interval = setInterval(animateScroll, 5);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppContainer>
      <LeftComponent>
        <p>Texto centrado</p>
      </LeftComponent>
      <RightComponent>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ImageContainer
            style={{
              transform: `translateY(${scroll}px)`,
            }}
          >
            {image ? <img src={image} alt={`Imagen`} /> : <div style={{ background: 'gray' }}></div>}
          </ImageContainer>
        </div>
      </RightComponent>
    </AppContainer>
  );
};

export default Section2;
