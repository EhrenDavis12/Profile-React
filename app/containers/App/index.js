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

import NotFoundPage from 'containers/Domains/NotFound/NotFoundPage/Loadable';
import AboutMePage from 'containers/Domains/AboutMe/AboutMePage/Loadable';
import PortfolioPage from 'containers/Domains/Portfolio/PortfolioPage/Loadable';
import ContactMePage from 'containers/Domains/ContactMe/ContactMePage/Loadable';
import ViewMessagesPage from 'containers/Domains/ViewMessages/ViewMessagesPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
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
