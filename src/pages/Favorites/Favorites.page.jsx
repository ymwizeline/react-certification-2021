import React from 'react';
import { useFavorites } from '../../utils/hooks/useFavorites';
import { Section, Title } from '../Home/styled';
import Content from '../../components/Content';

const Favorites = () => {
  const favorites = useFavorites();
  return (
    <Section className="favorites">
      <Title>Favorites</Title>
      {favorites && Object.values(favorites).length ? (
        <Content items={Object.values(favorites)} />
      ) : (
        <p>No favorites for now...</p>
      )}
    </Section>
  );
};

export default Favorites;
