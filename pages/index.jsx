import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";

import SVGComponent from "../components/SVGComponent";
import SVGComponent2 from "../components/SVGComponent2";

//import BackgroundL from "../components/BackgroundLetras";

import BurgerButton from "../components/BurguerButton";

import WaveParticleComponent from "../components/WaveParticle";
import Cube from "../components/cube";

import ThreeBox from "../components/cube";

// icons svg js
import LinkedInSVG from "../components/iconsSvg/linkedIn";
import InstagramSVG from "../components/iconsSvg/Instagram";
import WhatsAppSVG from "../components/iconsSvg/Whatsapp";
import MailSVG from "../components/iconsSvg/Mail";

// esto se utiliza para cuando tenes problemas de hidratacion
import dynamic from "next/dynamic";
const BackgroundL = dynamic(() => import("../components/BackgroundLetras"), {
  ssr: false,
});

const MainContainer = styled.div`
  /*background-color: #dddddd;
  background: rgb(73, 72, 77);
  background: radial-gradient(
    circle at 50% 10%,
    rgba(73, 72, 77, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );*/
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  left: 0;
  top: 0;
  position: absolute;
  z-index: 1;
`;

const Section1 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  //left: 0;
  //top: 0;
  //position: absolute;
  z-index: 1;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //text-align: center;
  place-self: center; /* Centrar en ambos ejes */
`;

const Div3 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
`;

const Div4 = styled.div`
  color: white;
  font-family: "Century Gothic";
  width: 30%;
  font-size: 20px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-self: center;
`;

const Section2 = styled.div`
  color: white;
  //background-color: #dddddd;
  //background: rgb(73, 72, 77);
  background: radial-gradient(
    circle at 50% 10%,
    
    #2f3b49ff 100%,
    rgba(73, 72, 77, 1) 0%
  );
  //background-color: #2f3b49ff;
  font-family: "Century Gothic";
  width: 100%;
  height: 100vh;
  font-size: 20px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  //flex-direction: column;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  place-self: center;
`;

const SVGImage = styled.img`
  width: 50px; /* Ancho deseado */
  height: 50px; /* Alto deseado */
  z-index: 20;
  fill: white;
  //background-color: blue;
  transition: background-color 0.3s; /* Agrega una transición suave */

  &:hover {
    background-color: red; /* Cambia el fondo a rojo en el hover */
  }
`;

const SocialBar = styled.div`
gap:40px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  //background-color: red;
  width:10%;
  margin:5vw;
  justify-self: left;
  align-self: center;
  //height:80vh;
  z-index: 10;
`;


const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Section1>
  
          <BurgerButton />
   <SocialBar>
   
   <LinkedInSVG  fill="#DDDDDD" width={50} height={50} />
<InstagramSVG fill="#DDDDDD" width={50} height={50}/>
  <WhatsAppSVG fill="#DDDDDD" width={50} height={50}/>
<MailSVG fill="#DDDDDD" width={50} height={50}/>
  
   
  
 
 
   </SocialBar>
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
            <SVGComponent2    />
            <Slogan> Building Digital Experiences </Slogan>
            <Div4></Div4>
          </Div2>
          

       
        </Section1>
        <Section2>
          <Div1>
            <p style={{ width: "50%" }}>
              Welcome. We are a company that is passionate about developing
              cutting-edge software to meet all of your digital needs. We are
              here to make your ideas a reality, from web and mobile
              applications to PC solutions. Our development team is ready to
              create personalized solutions that will boost your business and
              improve the user experience. Join us on our journey to digital
              success and innovation.
            </p>
          </Div1>
          <Div1>
            
          </Div1>
        </Section2>

      
        {/*<Container2>
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
