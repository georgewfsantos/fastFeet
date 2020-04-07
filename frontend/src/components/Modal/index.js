import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

import './styles.css';

export default function Modal({ children }) {
  return (
    <Popup
      modal
      poisition="center center"
      contentStyle={{
        width: '460px',
        borderRadius: '4px',
        padding: '25px',
      }}
      overlayStyle={{
        background: 'rgba(0,0,0,0.4)',
        border: 'rgba(0,0,0,0.4)',
      }}
    >
      {children}
    </Popup>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
