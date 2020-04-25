import React from 'react';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';

export default function Button({children, active, ...rest}) {
  return (
    <Container {...rest}>
      <Text active={active}>{children}</Text>
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
