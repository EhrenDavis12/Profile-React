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

import NotFoundPage from 'containers/Pages/NotFoundPage/Loadable';
import AboutMePage from 'containers/Pages/AboutMePage/Loadable';
import PortfolioPage from 'containers/Pages/PortfolioPage/Loadable';
// import ContactMePage from 'containers/Pages/ContactMePage/Loadable';
import ContactMePanel from 'containers/Pages/ContactMePanel/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AboutMePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactMePanel} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
