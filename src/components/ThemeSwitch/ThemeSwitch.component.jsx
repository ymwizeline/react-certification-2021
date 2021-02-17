import React from 'react';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeSwitch = () => {
  return (
    <SwitchContainer>
      <MoonIcon />
      <Switch
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <SunIcon />
    </SwitchContainer>
  );
};

export default ThemeSwitch;
