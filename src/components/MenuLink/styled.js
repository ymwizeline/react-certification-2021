import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Go = styled(Link)`
  height: 60px;
  font-size: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
