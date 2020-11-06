import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import SmallGallery from './components/smallGallery/SmallGallery';
import Header from './components/header/Header';
import Gallery from './pages/Gallery';

const App = () => (
  <Router>
    <Header />
    <SmallGallery />

    <Switch>
      <Route path="/about-us">
        <Home />
      </Route>

      <Route path="/contact">
        <Home />
      </Route>

      <Route path="/products">
        <Home />
      </Route>

      <Route path="/gallery">
        <Gallery />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
