import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './styles';

export default function StartedCircle({filled}) {
  return <Container filled={filled} />;
}

StartedCircle.propTypes = {
  filled: PropTypes.bool.isRequired,
};
