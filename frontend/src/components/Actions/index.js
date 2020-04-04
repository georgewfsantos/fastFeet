import React from 'react';
import PropTypes from 'prop-types';

import { Container, ActionList } from './styles';

export default function Actions({ visible, children }) {
  return (
    <Container>
      <ActionList visible={visible}>{children}</ActionList>
    </Container>
  );
}

Actions.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.element,
};

Actions.defaultProps = {
  visible: false,
  children: PropTypes.element,
};
