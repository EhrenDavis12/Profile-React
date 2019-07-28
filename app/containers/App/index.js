/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'Domains/NotFound/NotFoundPage/Loadable';
import AboutMePage from 'Domains/AboutMe/containers/MainPage/Loadable';
import PortfolioPage from 'Domains/Portfolio/PortfolioPage/Loadable';
import ContactMePage from 'Domains/ContactMe/container/Loadable';
import ViewMessagesPage from 'Domains/ViewMessages/container/Loadable';
import Navigation from 'Domains/Navigation/container/Loadable';

import GlobalStyle from '../../global-styles';
import './styles.css';

export default function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={AboutMePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactMePage} />
        <Route exact path="/messages" component={ViewMessagesPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
