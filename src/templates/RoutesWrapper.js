import React from "react";
import { withRouter } from "react-router-dom";

import PageWrapper from "templates/PageWrapper";

function RoutesWrapper({ history, children }) {
  const isLogin = history.location.pathname === "/login";

  return isLogin ? children : <PageWrapper>{children}</PageWrapper>;
}

export default withRouter(RoutesWrapper);
