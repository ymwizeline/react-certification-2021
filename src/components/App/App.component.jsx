import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContextProvider from '../../context';
import GlobalStyle from './styled';
import AuthProvider from '../../providers/Auth';
import ThemeProvider from '../../providers/Theme';
import HomePage from '../../pages/Home';
import Favorites from '../../pages/Favorites';
import VideoDetails from '../../pages/VideoDetails';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AuthProvider>
          <ThemeProvider>
            <GlobalStyle />
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Private exact path="/favorites">
                  <Favorites />
                </Private>
                <Route exact path="/video/:id" component={VideoDetails} />
                <Private exact path="/video/:id/:favorite" component={VideoDetails} />
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </ThemeProvider>
        </AuthProvider>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
