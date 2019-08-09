import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";

import FlexContainer from "components/FlexContainer";
import SpacingContainer from "components/SpacingContainer";
import Button from "components/Button";
import Title from "components/Title";
import colorPalette from "styles/colorPalette";

function Repositories({ history }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/added_repositories")
      .then(({ data }) => setRepositories(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <FlexContainer>
      <SpacingContainer marginRight="4rem">
        <Button onClick={() => history.push("repositories/new")}>+</Button>
      </SpacingContainer>
      <FlexContainer flexFlow="column nowrap">
        <Title>Repositories</Title>
        <Repositories.List>
          {repositories.map(repository => renderRepository(repository))}
        </Repositories.List>
      </FlexContainer>
    </FlexContainer>
  );

  function renderRepository({ id, name }) {
    return <Repositories.Item key={id}>{name}</Repositories.Item>;
  }
}

Repositories.List = styled.ul`
  padding: 0;
`;

Repositories.Item = styled.li`
  list-style: none;
  margin-bottom: 0.8rem;
  padding-bottom: 0.4rem;
  font-size: 1.4rem;
  border-bottom: 1px solid ${colorPalette.grey};
`;

export default withRouter(Repositories);
