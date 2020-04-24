import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './styles';

export default function DeliveredCircle({filled}) {
  return <Container filled={filled} />;
}

DeliveredCircle.propTypes = {
  filled: PropTypes.bool.isRequired,
};
