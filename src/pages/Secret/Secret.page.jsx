import React, { Suspense, lazy } from 'react';
// import CircularIndeterminate from '../../utils/Loading/ProgressCircle';
import Favorites from '../../components/Favorites/Favorites';

// const List = lazy(() => import('../../components/Videos/List'))

function SecretPage() {

  return (
      <Favorites></Favorites>
  );
}

export default SecretPage;
