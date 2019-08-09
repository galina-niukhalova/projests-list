import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import SpacingContainer from "components/SpacingContainer";
import colorPalette from "styles/colorPalette";

function NewRepository({ history }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/available_repositories")
      .then(({ data }) => setRepositories(data))
      .catch(error => console.log(error));
  }, []);

  if (repositories.length === 0)
    return (
      <SpacingContainer margin="1.6rem 4rem">
        No more available repositories
      </SpacingContainer>
    );

  return (
    <NewRepository.List>
      {repositories.map(repository => renderRepository(repository))}
    </NewRepository.List>
  );

  function renderRepository(repository) {
    const { id, name } = repository;

    return (
      <NewRepository.Item key={id} onClick={() => addRepository(repository)}>
        {name}
      </NewRepository.Item>
    );
  }

  function addRepository(repository) {
    axios
      .post("http://localhost:4000/added_repositories", repository)
      .then(() =>
        axios.delete(
          `http://localhost:4000/available_repositories/${repository.id}`
        )
      )
      .then(() => history.push("/repositories"))
      .catch(error => console.log(error));
  }
}

NewRepository.List = styled.ul`
  padding: 0;
`;

NewRepository.Item = styled.li`
  list-style: none;
  margin-bottom: 0.8rem;
  padding-bottom: 0.4rem;
  font-size: 1.4rem;
  border-bottom: 1px solid ${colorPalette.grey};
  width: 20rem;
  cursor: pointer;
`;

export default withRouter(NewRepository);
