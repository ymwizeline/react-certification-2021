import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 50%;
`;

export const Frame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 700px;
  border: 0;
`;
