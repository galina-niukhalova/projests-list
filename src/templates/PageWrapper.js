import React, { Fragment } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import MenuBar from "components/MenuBar";

function PageWrapper({ children, history }) {
  return (
    <Fragment>
      <MenuBar history={history} />
      <PageWrapper.Container>{children}</PageWrapper.Container>
    </Fragment>
  );
}

PageWrapper.Container = styled.div`
  margin: 5.6rem 4rem 1.6rem 4rem;
`;

export default withRouter(PageWrapper);
