// BurgerButton.jsx
import React, { useState } from "react";
import styled from "styled-components";

const BurgerButtonWrapper = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background: none;
  position: relative;
  cursor: pointer;
`;

const Line1 = styled.div`
  width: 20px;
  height: 2px;
  background-color: gray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transition: transform 0.3s;
  border-radius: 2px;
  ${({ data }) => `
    transform: rotate(${data.rotation}deg) translateY(${data.isActive ? data.spacing / -8 : 5}px);
  `}
`;

const Line2 = styled.div`
  width: 20px;
  height: 2px;
  background-color: gray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transition: transform 0.3s;
  border-radius: 2px;
  ${({ data }) =>
    data.isActive ? `transform: rotate(${data.rotation}deg);` : "transform: rotate(0);"}
`;

const BurgerButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <BurgerButtonWrapper className={isActive ? "active" : ""} onClick={toggleMenu}>
      <Line1 data={{ isActive, rotation: 45, spacing: -4 }} />
      <Line2 data={{ isActive, rotation: -45 }} />
    </BurgerButtonWrapper>
  );
};

export default BurgerButton;
