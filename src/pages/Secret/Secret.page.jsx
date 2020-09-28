import React, { Suspense, lazy } from 'react';
// import CircularIndeterminate from '../../utils/Loading/ProgressCircle';
import List from '../../components/Videos/List';

// const List = lazy(() => import('../../components/Videos/List'))

function SecretPage() {

  return (
      <List></List>
  );
}

export default SecretPage;
