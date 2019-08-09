import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Login from "pages/Login";
import NewRepository from "pages/NewRepository";
import Repositories from "pages/Repositories";
import RoutesWrapper from "templates/RoutesWrapper";

import colorPalette from "styles/colorPalette";
import { fontStyle } from "styles/fonts";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${colorPalette.white};
    color: ${colorPalette.base};
    font-family: ${fontStyle.default};
    font-size: 1.4rem;
  }
  button,
  a,
  span {
    font-family: ${fontStyle.default};
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <RoutesWrapper>
          <Route exact path="/repositories" component={Repositories} />
          <Route exact path="/repositories/new" component={NewRepository} />
          <Route exact path="/login" component={Login} />
        </RoutesWrapper>
      </Router>
    </Fragment>
  );
}

export default App;
