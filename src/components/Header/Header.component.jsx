import React from 'react';
import styled from 'styled-components';
import MenuToggle from '../MenuToggle';
import SearchBar from '../SearchBar';

const StyledHeader = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 8px 30px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.secondary};

  @media (max-width: 768px) {
    padding: 8px 15px;
  }
`;

const HeaderGroup1 = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  height: 100%;
  width: 350px;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderGroup1>
        <MenuToggle />
        <SearchBar />
      </HeaderGroup1>
    </StyledHeader>
  );
};

export default Header;
