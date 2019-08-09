import React, { useState } from "react";
import styled from "styled-components";

import colorPalette from "styles/colorPalette";
import { ReactComponent as Account } from "assets/account.svg";
import FlexContainer from "components/FlexContainer";

function MenuBar({ history }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuBar.Container>
      <FlexContainer
        alignItems="center"
        justifyContent="flex-end"
        height="100%"
      >
        <AccountIcon onClick={toggleMenu} />
      </FlexContainer>
      {isOpen && (
        <Menu>
          <Menu.Item onClick={logout}>Logout</Menu.Item>
        </Menu>
      )}
    </MenuBar.Container>
  );

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function logout() {
    history.push("/login");
  }
}

MenuBar.Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: white;
  z-index: 100;
  padding: 0 2.4rem;
  border-bottom: 1px solid ${colorPalette.grey};
`;

const AccountIcon = styled(Account)`
  width: 2rem;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  top: 4.8rem;
  right: 2.4rem;
  padding: 1.6rem 2.4rem;
  border-radius: 4px;
  border: 1px solid ${colorPalette.grey};
`;

Menu.Item = styled.div`
  cursor: pointer;
`;

export default MenuBar;
