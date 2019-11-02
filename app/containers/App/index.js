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

import NotFoundPage from 'containers/NotFound/NotFoundPage/Loadable';
import AboutMePage from 'containers/AboutMeContent/Loadable';
/* import PortfolioPage from 'containers/Portfolio/PortfolioPage/Loadable';
import ContactMePage from 'containers/ContactMe/container/Loadable';
import ViewMessagesPage from 'containers/ViewMessages/container/Loadable'; */
import Navigation from 'containers/Navigation/container/Loadable';

import BackGround from 'components/BackGrounds/BackGround';

import GlobalStyle from '../../global-styles';
import './styles.css';

export default function App() {
  return (
    <BackGround>
      <Navigation />
      <Switch>
        <Route exact path="/" component={AboutMePage} />
        {/* <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactMePage} />
        <Route exact path="/messages" component={ViewMessagesPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BackGround>
  );
}
