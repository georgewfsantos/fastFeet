import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({ isPrivate, ...rest }) {
  const { signed } = store.getState().auth;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/addressees" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Layout>
      <Route {...rest} />
    </Layout>
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
