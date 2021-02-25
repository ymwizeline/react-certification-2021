import React from 'react';
import StyledMoon from './styled';

const Moon = ({ size = 20 }) => {
  return (
    <StyledMoon size={size}>
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <path d="M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z" />
      </g>
    </StyledMoon>
  );
};

export default Moon;
