import React from "react";
import styled, { css } from "styled-components";

const FlexContainer = ({
  children,
  alignItems = "stretch",
  display = "flex",
  flexFlow = "row nowrap",
  justifyContent = "flex-start",
  height = "auto",
  width = "auto"
}) => (
  <FlexContainer.Component
    alignItems={alignItems}
    display={display}
    flexFlow={flexFlow}
    justifyContent={justifyContent}
    height={height}
    width={width}
  >
    {children}
  </FlexContainer.Component>
);

FlexContainer.Component = styled.div`
  ${({ alignItems, display, flexFlow, justifyContent, height, width }) => css`
    align-items: ${alignItems};
    display: ${display};
    flex-flow: ${flexFlow};
    justify-content: ${justifyContent};
    height: ${height};
    width: ${width};
  `}
`;

export default FlexContainer;
