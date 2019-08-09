import React from "react";
import styled from "styled-components";

import colorPalette from "styles/colorPalette";

const Button = ({ children, onClick }) => (
  <Button.Container onClick={onClick}>{children}</Button.Container>
);

Button.Container = styled.button`
  font-size: 1.6rem;
  padding: 0.8rem 2rem;
  width: 8rem;
  border-radius: 4px;
  border: 1px solid ${colorPalette.grey};
  background-color: ${colorPalette.white};
  margin-top: 1.6rem;
  cursor: pointer;
  outline: none;
  transform: translateY(0);
  transition: transform 0.2s;
  :active {
    transform: translateY(1px);
  }
`;

export default Button;
