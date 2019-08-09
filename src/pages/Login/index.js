import React from "react";
import { withRouter } from "react-router-dom";

import FlexContainer from "components/FlexContainer";
import Button from "components/Button";

function Login({ history }) {
  return (
    <FlexContainer alignItems="center" justifyContent="center" height="100vh">
      <Button onClick={login}>Login</Button>
    </FlexContainer>
  );

  function login() {
    history.push('/repositories')
  }
}

export default withRouter(Login);
