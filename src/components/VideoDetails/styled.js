import styled from 'styled-components';

const containersMargin = '10px';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(70% - 2 * ${containersMargin});
  margin: ${containersMargin};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SimilarContainer = styled.div`
  width: calc(30% - 2 * ${containersMargin});
  margin: ${containersMargin};

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h2`
  text-align: left;
  color: ${({ theme }) => theme.main};
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 10px;
  cursor: pointer;
`;
