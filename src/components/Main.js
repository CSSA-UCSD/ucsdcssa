// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import Involvement from './pages/Involvement';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/team' component={Team}></Route>
      <Route exact path='/events' component={Events}></Route>
      <Route exact path='/involvement' component={Involvement}></Route>
    </Switch>
  );
}

export default Main;