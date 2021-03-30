import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { Context } from '../../context';
import { Container } from './styled';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';

const ThemeSwitch = () => {
  const { dispatch } = useContext(Context);
  const handleOnChange = (e) => {
    dispatch({
      type: 'CHANGE_THEME',
      payload: e.target.checked,
    });
  };
  return (
    <Container>
      <SunIcon />
      <Switch
        defaultChecked={false}
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        onChange={handleOnChange}
      />
      <MoonIcon />
    </Container>
  );
};

export default ThemeSwitch;
