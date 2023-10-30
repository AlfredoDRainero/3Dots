import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonRounded from "../components/button";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  //background-color: red;
  /*div {
    border: 1px solid white;
  }*/
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30% 70%;

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

const P2 = styled.div`
  justify-self: center;
  align-self: end;
  flex-direction: column;
  font-family: "Century Gothic", sans-serif; /* Establece Century Gothic como la fuente principal */
  font-weight: bold; /* Establece el peso de la fuente en negrita (bold) */
  font-size: 60px;
  letter-spacing: 3px;
  color: #ffffff;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  text-align: center;
  width: 70%;
  height: auto;
  letter-spacing: 1px;
  line-height: 1.2;
  margin-bottom: 10px;
  color:#dddddd;
  
`;

const Section3 = () => {
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
        <P2>Discover the Power of Our Web, App and software Solutions.</P2>
      </LeftComponent>
      <RightComponent>
        <ChildDiv>
          <GrandChild1></GrandChild1>
          <GrandChild2>
            <p>Experience Seamless Integration and User-Friendly Design.</p>
          </GrandChild2>
          <GrandChild3>
          {/*  <p>
              Our innovative product or service streamlines your workflow and
              enhances productivity.
            </p>*/}
          </GrandChild3>
          <GrandChild4>
            <ButtonRounded buttonText={"Learn More"}/>
          </GrandChild4>
        </ChildDiv>
        <ChildDiv>
          <GrandChild1></GrandChild1>
          <GrandChild2>
            <p>Unlock the Potential of Our Cutting-Edge Technology.</p>
          </GrandChild2>
          <GrandChild3>
           {/* <p>
              Our solution is designed to meet your unique needs and deliver
              exceptional results.
  </p>*/}
          </GrandChild3>
          <GrandChild4>
            <ButtonRounded buttonText={"Sign Up"}/>
          </GrandChild4>
        </ChildDiv>
        <ChildDiv>
          <GrandChild1></GrandChild1>
          <GrandChild2>
            <p>
              Transform Your Business with Our Comprehensive Suite of Tools.
            </p>
          </GrandChild2>
          <GrandChild3>
           {/* <p>
              Our platform empowers you to achieve your goals and stay ahead of
              the competition.
            </p>*/}
          </GrandChild3>
          <GrandChild4>
            <ButtonRounded buttonText={"Get Started"}/>
            
          </GrandChild4>
        </ChildDiv>
      </RightComponent>
    </AppContainer>
  );
};

const RightComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: center;
`;

const ChildDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 20%  10%;
  //background-color: gray;
  height: 80%;
  width: 80%;
  margin: 2%;
  //border: 1px solid white;
`;

const GrandChild1 = styled.div`
  border: 1px solid white;
  margin: 0% 0% 3% 0%;
    transition: transform 0.3s;
   &:hover {
    fill: white;
    transform: scale(1.1);
    filter: drop-shadow(0 0 6px #dddddd);
  }
`;

const GrandChild4 = styled.div`
  font-family: "Century Gothic", sans-serif; /* Establece Century Gothic como la fuente principal */
  font-weight: normal; /* Establece el peso de la fuente en negrita (bold) */
  font-size: 15px;
  letter-spacing: 1px;
  color: #ffffff;
  text-align: center;
  //border: 1px solid white;
  margin: 0% 0% 0% 0%;
    button {
    letter-spacing: 1px;
    line-height: 1.2;
    font-size: 20px;
    font-family: "Century Gothic", sans-serif; /* Establece Century Gothic como la fuente principal */
    font-weight: bold; /* Establece el peso de la fuente en negrita (bold) */
    font-size: 18px;
    letter-spacing: 3px;
    border: 2px solid #28485f;
    background-color: black;
  }
`;

const GrandChild2 = styled.div`
  font-family: "Century Gothic", sans-serif; /* Establece Century Gothic como la fuente principal */
  font-weight: bold; /* Establece el peso de la fuente en negrita (bold) */
  font-size: 20px;
  letter-spacing: 1px;
  color: #ffffff;
  text-align: center;
  //border: 1px solid white;
  margin: 0% 0% 3% 0%;
`;
const GrandChild3 = styled.div`
  font-family: "Century Gothic", sans-serif; /* Establece Century Gothic como la fuente principal */
  font-weight: normal; /* Establece el peso de la fuente en negrita (bold) */
  font-size: 15px;
  letter-spacing: 1px;
  color: #ffffff;
  text-align: center;
  //border: 1px solid white;
  margin: 0% 0% 0% 0%;
`;

const Image = styled.img`
  width: 360px;
  height: 360px;
  transition: transform 0.5s;
  z-index: 1;
`;

const Image2 = styled.img`
  width: 360px;
  height: 360px;
  transition: transform 0.5s;
  z-index: 1;
`;

export default Section3;
