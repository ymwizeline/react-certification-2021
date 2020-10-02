import React, { Suspense, lazy } from 'react';
// import CircularIndeterminate from '../../utils/Loading/ProgressCircle';
import List from '../../components/Videos/List';

// const List = lazy(() => import('../../components/Videos/List'))

function HomePage() {

  return (
      <List/>
  );
}

export default HomePage;
