/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import LogoutPage from 'containers/LogoutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Box from 'components/Box';
import theme from 'components/ThemeProvider/theme';
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated,
} from 'services/firebase/authHelper';

export default function App() {
  return (
    <Box pt={theme.headerHeight}>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header siteTitle="React.js Boilerplate" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={UserIsAuthenticated(AboutPage)} />
        <Route path="/login" component={UserIsNotAuthenticated(LoginPage)} />
        <Route path="/logout" component={UserIsAuthenticated(LogoutPage)} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Box>
  );
}
