import React from 'react';
import styled from 'styled-components';

const RoundedButton = styled.button`

  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #FF434E; /* Color de fondo por defecto */
  color: #dddddd; /* Color del texto */
  cursor: pointer;
  box-shadow: 0px 0px 20px #FF434E; /* Sombra leve hacia afuera */
  transition: background-color 0.3s; /* Transición de color al pasar el cursor */
  width:200px;
  height:50px;

  &:hover {
    background-color: #28485f; /* Color de fondo al pasar el cursor */
    box-shadow: 0px 0px 20px  #28485f; /* Sombra leve hacia afuera */
    border-radius: 10px;
  }
`;

const ButtonRounded = ({ buttonText }) => {
  return (
    <RoundedButton>
      {buttonText}
    </RoundedButton>
  );
}

export default ButtonRounded;