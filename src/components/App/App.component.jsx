import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { APIContextProvider } from '../../providers/Videos/ApiContext'
import Nav from '../Navigation/Nav';
import AuthProvider from '../../providers/Auth';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import HomePage from '../../pages/Home';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import Player from '../Videos/Player';
import { FavoritesProvider } from '../../providers/Favorites/Favorites.provider';
import Favorites from '../Favorites/Favorites';

function App() {
  const [ searchKey, setSearchKey ] = useState("Wizeline");
  const [ query, setQuery ] = useState(searchKey);

  const search = event => {
    event.preventDefault();
    setQuery(searchKey);
  }

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <APIContextProvider query={query}>
          <FavoritesProvider>
            <Nav searchKey={searchKey} setSearchKey={setSearchKey} submitSearch={search}/>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route path="/favorites">
                  <SecretPage />
                </Route>
                <Route path="/:id">
                  <Player/>
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </FavoritesProvider>
        </APIContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
