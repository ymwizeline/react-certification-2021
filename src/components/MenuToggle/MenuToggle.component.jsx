import React from 'react';
import styled from 'styled-components';

const StyledMenuToggle = styled.button`
  margin: 10px;
  cursor: pointer;

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 6px;
    margin-top: 6px;
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
