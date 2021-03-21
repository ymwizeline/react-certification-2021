import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  margin-bottom: 15px;
  cursor: pointer;

  &:hover h3 {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    max-width: 180px;
    margin: 0 15px 15px 0;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: normal;
  margin-top: 0;
  color: ${({ theme }) => theme.main};
`;
