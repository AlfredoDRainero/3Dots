import React from 'react';
import styled from 'styled-components';

const RoundedButton = styled.button`
  position: relative;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 20px;
  background-color: #FF434E;
  color: #dddddd;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 200px;
  height: 50px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivA = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #28485f;
  border-radius: 50%;
  transition: width 0.5s, height 0.5s;
  z-index: 3;
  left: 15%;
  top: 50%;
  transform: translate(-50%, -50%);
`;


const Texto = styled.p`
  z-index: 10;
  position: absolute;
  transition: transform 0.5s;
  //left: 0;
  padding-left: 10px;
  ${RoundedButton}:hover & {
    transform: translateX(20px);
  }
  color:white;
`;


const Flecha = styled.p`
  z-index: 10;
  position: absolute;
  transition: transform 0.2s;
  left: -30px;
  font-weight: bold;
  font-size: 30px;
  top:-27px;
  //padding-left: 10px;

  ${RoundedButton}:hover & {
    transform: translateX(50px);
  }
  color:white;
`;


const RoundedButtonWithCircle = styled(RoundedButton)`
  &:hover ${DivA} {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    
    transition: width 0.5s, height 0.5s, background-color 0s;
    background-color: #28485f;
  }
`;

const ButtonRounded = ({ buttonText }) => {
  return (
    <RoundedButtonWithCircle>
      <DivA />
      <Texto>{buttonText}</Texto>
      <Flecha>→</Flecha>
    </RoundedButtonWithCircle>
  );
};

export default ButtonRounded;
