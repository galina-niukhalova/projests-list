import React from "react";
import styled from "styled-components";

function Title({ children }) {
  return <Title.Container>{children}</Title.Container>;
}

Title.Container = styled.h1`
  font-size: 2.4rem;
  margin-top: 1.6rem;
`;

export default Title;
