import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

import UserPreferencesProvider from '../../providers/UserPreferences';
import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../providers/Video';
import { useGapi } from '../../utils/hooks/useGapi';

import { ThemedApp } from './App.themed';
import DivLoader from './App.styled';
// import HomePage from '../../pages/Home';
// import LoginPage from '../../pages/Login';
// import NotFound from '../../pages/NotFound';
// import SecretPage from '../../pages/Secret';
// import Private from '../Private';
// import Fortune from '../Fortune';
// import Layout from '../Layout';
// import { random } from '../../utils/fns';

function App() {
  const gapi = useGapi();

  // const currentTheme = isLightTheme ? lightTheme : darkTheme;

  if (!gapi) {
    return (
      <DivLoader>
        <Loader type="Circles" width={50} height={50} color="#556cd6" visible />
      </DivLoader>
    );
  }

  return (
    <AuthProvider>
      {({ user }) => (
        <VideoProvider>
          <UserPreferencesProvider user={user}>
            <ThemedApp>
              <div>App</div>
            </ThemedApp>
          </UserPreferencesProvider>
        </VideoProvider>
      )}
    </AuthProvider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
