import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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
    transform: translateX(-120%);
    opacity: 1;
  }
  50% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 1;
  }
`;

const zoom = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(2);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 1;
  }
`;

const Div = styled.div`
  text-align: right;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: black;
  opacity: 0.2;
`;

const Letra1 = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Century Gothic Bold", sans-serif;
  font-size: 400px;
  font-weight: bold;
  animation: ${bounce} 10s linear infinite;
  white-space: pre-wrap;
  line-height: 300px;
`;

const Letra2 = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Century Gothic Bold", sans-serif;
  font-size: 300px;
  font-weight: bold;
  animation: ${slideUp} 10s linear infinite;
  white-space: pre-wrap;
  line-height: 240px;
`;

const Letra3 = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Century Gothic Bold", sans-serif;
  font-size: 200px;
  font-weight: bold;
  animation: ${slideDown} 10s linear infinite;
  white-space: pre-wrap;
`;

const Letra4 = styled.div`
  text-align: left;
  width: 100%;
  height: 100%;
  font-family: "Century Gothic Bold", sans-serif;
  font-size: 200px;
  font-weight: bold;
  animation: ${slideDown} 10s linear infinite;
`;

const Letra5 = styled.div`
  text-align: left;
  color: #ff434e;
  width: 100%;
  height: 100%;
  font-family: "arial Bold";
  font-size: 200px;
  font-weight: bold;
  animation: ${zoom} 10s linear infinite;
`;

const BackgroundL = () => {
  const [totalDivs, setTotalDivs] = useState(32);

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

  const getRandomLetra = () => {
    const randomX = Math.floor(Math.random() * 5) + 1;
    switch (randomX) {
      case 1:
        return (
          <Letra1>
            2 <Letra2>D<Letra3>D</Letra3></Letra2>
          </Letra1>
        );
      case 2:
        return (
          <Letra2>
            D<Letra3>D</Letra3>
          </Letra2>
        );
      case 3:
        return (
          <Letra3>
            E<Letra1>E</Letra1>
          </Letra3>
        );
      case 4:
        return (
          <Letra1>
            V<Letra3>E<Letra2>S</Letra2></Letra3>
          </Letra1>
        );
      case 5:
        return <Letra2>S</Letra2>;
      default:
        return "";
    }
  };

  return (
    <>
      {[...Array(totalDivs)].map((_, index) => (
        <Div key={index}>{getRandomLetra()}</Div>
      ))}
    </>
  );
};

export default BackgroundL;
