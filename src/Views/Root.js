import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from 'Components/Header/Header';
import Wallpapers from 'Components/Wallpapers/Wallpapers';
import Favorite from 'Views/Favorite';

function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/Wallpapers">
          <Redirect to="/" />
        </Route>
        <Route exact path="/" component={Wallpapers} />
        <Route path="/fav" component={Favorite} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
