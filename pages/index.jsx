import React from 'react';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: #dddddd;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1px;
  height: calc(100vh - 20px); /* Usar 100vh para ocupar el 100% de la altura de la ventana */
  width: calc(100vw - 20px) ;//32px);
  //max-width: 1023px;
  margin-right:25px;
  @media (max-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const Div = styled.div`
  //background-color: #dddddd;
  //padding: 16px;
  text-align: center;
  border: 1px solid black;
  width: 100%; /* Ocupar el 100% del ancho disponible */
  height: 100%; /* Ocupar el 100% del alto disponible */
`;

const HomePage = () => {
  const [totalDivs, setTotalDivs] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      const isWideScreen = window.innerWidth >= 1023;
      setTotalDivs(isWideScreen ? 32 : 16);
    };

    // Agregar un event listener para cambiar el totalDivs cuando se cambie el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize al cargar la página inicialmente
    handleResize();

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Container>
        {[...Array(totalDivs)].map((_, index) => (
          <Div key={index}>Div {index + 1}</Div>
        ))}
      </Container>
    </div>
  );
};


export default HomePage;