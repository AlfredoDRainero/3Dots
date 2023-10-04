import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";

import SVGComponent from "../components/SVGComponent";

//import BackgroundL from "../components/BackgroundLetras";

import BurgerButton from "../components/BurguerButton";

import WaveParticleComponent from "../components/WaveParticle";

// esto se utiliza para cuando tenes problemas de hidratacion
import dynamic from "next/dynamic";
const BackgroundL = dynamic(() => import("../components/BackgroundLetras"), {
  ssr: false,
});

const MainContainer = styled.div`
  background-color: #dddddd;
  background: rgb(73, 72, 77);
  background: radial-gradient(
    circle at 50% 10%,
    rgba(73, 72, 77, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  left: 0;
  top: 0;
  position: absolute;
  z-index: 1;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  left: 0;
  top: 0;
  position: absolute;
  gap: 1px;
  height: calc(100vh - 2px);
  width: calc(100vw - 2px);
  @media (max-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  z-index: 1;
`;

const Container2 = styled.div`
  display: grid;
  height: calc(100vh - 2px);
  width: calc(100vw - 2px);
  z-index: 2;
`;

const Div = styled.div`
  text-align: right;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: black;
  opacity: 0.2;
`;

const Slogan = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  color: #dddddd;
  z-index: 2;
  font-family: "Century Gothic", sans-serif; /* Establece Century Gothic como la fuente principal */
  font-weight: bold; /* Establece el peso de la fuente en negrita (bold) */
  font-size: 50px;
  letter-spacing: 3px;
`;

const Div1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
`;

const Div2 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
`;

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <BurgerButton />
        <Div1>
          <WaveParticleComponent
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "black",
            }}
          />
        </Div1>
        <Div2>
          <SVGComponent />
          <Slogan> Building Digital Experiences </Slogan>
        </Div2>

        {/* <Container2>
          <SVGComponent />
          
        </Container2>
        <Container>
          <BackgroundL />
  </Container>*/}
      </MainContainer>
    </>
  );
};

export default HomePage;
