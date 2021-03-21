import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  height: calc(100vh - 70px);
  bottom: 0;
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.secondary};
  width: fit-content;
  text-align: left;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Go = styled(Link)``;

export { Container, Go };
