import React from "react";
import styled, { css } from "styled-components";

const SpacingContainer = ({
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  display = "block",
  children,
  width
}) => (
  <SpacingContainer.Container
    margin={margin}
    marginTop={marginTop}
    marginRight={marginRight}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    padding={padding}
    paddingTop={paddingTop}
    paddingRight={paddingRight}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    display={display}
    width={width}
  >
    {children}
  </SpacingContainer.Container>
);

SpacingContainer.Container = styled.div`
  ${({
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    margin,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
    display,
    width
  }) => css`
    ${marginTop && `margin-top: ${marginTop};`}
    ${marginRight && `margin-right: ${marginRight};`}
    ${marginBottom && `margin-bottom: ${marginBottom};`}
    ${marginLeft && `margin-left: ${marginLeft};`}
    ${margin && `margin: ${margin};`}
    ${paddingTop && `padding-top: ${paddingTop};`}
    ${paddingRight && `padding-right: ${paddingRight};`}
    ${paddingBottom && `padding-bottom: ${paddingBottom};`}
    ${paddingLeft && `padding-left: ${paddingLeft};`}
    ${padding && `padding: ${padding};`}
    display: ${display};
    ${width && `width: ${width};`}
`}
`;

export default SpacingContainer;
