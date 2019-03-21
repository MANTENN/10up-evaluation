import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home, { About, P404 } from '../pages';

const Routes = ({ pages }) => (
  <Router>
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      { pages.map(({ id, slug }) => <Route key={id} path={`/${slug}`} render={props => <About {...props} id={id} />} />)}
      <Route component={P404} />
    </Switch>
  </Router>
);

Routes.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.Int,
      slug: PropTypes.string,
    }),
  ),
};

Routes.defaultProps = {
  pages: [],
};

export default Routes;
