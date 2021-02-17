import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.form`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  margin-left: 30px;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainFade};
  color: ${(props) => props.theme.secondary};
  font-size: 1.2rem;
  border: none;
  outline: none;
  padding: 5px 20px 5px 45px;

  @media (max-width: 768px) {
    margin-left: 15px;
  }
`;

const MagnifyingGlassContainer = styled.div`
  position: absolute;
  font-size: 1.4rem;
  left: 40px;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <MagnifyingGlassContainer>
        <span role="img" aria-label="magnifying-glass">
          🔎
        </span>
      </MagnifyingGlassContainer>
      <StyledInput />
    </StyledSearchBar>
  );
};

export default SearchBar;
