// BurgerButton.jsx
import React, { useState } from "react";
import styled from "styled-components";

const BurgerButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  position: absolute;
  cursor: pointer;
  //background-color: red;
  z-index: 4;
  right: 10px; /* Posición desde la derecha */
  top: 10px; /* Posición desde arriba */
  margin-right: 50px;
  margin-top: 30px;
`;

const Line2 = styled.div`
  width: 40px;
  height: 5px;
  background-color: #dddddd;
  position: absolute;
  left: 50%; 
  top: 50%; 
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(${(props) => (props.data.isActive ? props.data.rotation : 0)}deg);
  transition: transform 0.3s;
`;




const BurgerButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <BurgerButtonWrapper className={isActive ? "active" : ""} onClick={toggleMenu}>
     <Line2 data={{ isActive, rotation: -45 }} />
     <Line2 data={{ isActive, rotation: 45 }} />
    </BurgerButtonWrapper>
  );
};

export default BurgerButton;
