import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  height: calc(100vh - 70px);
  bottom: 0;
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.secondary};
  width: 10vw;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export { Container };
