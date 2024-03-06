import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";

// esto se utiliza para cuando tenes problemas de hidratacion
//import dynamic from "next/dynamic";





const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  left: 0;
  top: 0;
  position: absolute;
  z-index: 1;
  background-color: #dddddd;
`;



const HomePage = () => {
  return (
    <>
      <MainContainer>
       asdasd
      </MainContainer>
    </>
  );
};

export default HomePage;
