import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { APIContextProvider } from '../../providers/Videos/ApiContext'
import Nav from '../Navigation/Nav';
import AuthProvider from '../../providers/Auth';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import HomePage from '../../pages/Home';
import Layout from '../Layout';
import Player from '../Videos/Player';
import { FavoritesProvider } from '../../providers/Favorites/Favorites.provider';

function App() {
  const [ searchKey, setSearchKey ] = useState("Wizeline");
  const [ query, setQuery ] = useState(searchKey);

  const search = event => {
    event.preventDefault();
    setQuery(searchKey);
  }

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
                <Route exact path="/favorites">
                  <SecretPage />
                </Route>
                <Route path="/favorites/:id">
                  <Player from={'favorites'}/>
                </Route>
                <Route path="/:id">
                  <Player from={'root'}/>
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
