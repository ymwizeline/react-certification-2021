import React from 'react';
import styled from 'styled-components';

const StyledMenuToggle = styled.button`
  margin: 10px;
  cursor: pointer;

  span {
    display: block;
    width: 22px;
    height: 3px;
    margin-bottom: 4px;
    margin-top: 4px;
    position: relative;
    border-radius: 3px;
    background: ${(props) => props.theme.secondary};
  }
`;

const MenuToggle = () => {
  return (
    <StyledMenuToggle as="div">
      <span />
      <span />
      <span />
    </StyledMenuToggle>
  );
};

export default MenuToggle;
