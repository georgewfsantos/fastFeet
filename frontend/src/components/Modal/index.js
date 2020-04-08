import React from 'react';
import { MdVisibility } from 'react-icons/md';
import Popup from 'reactjs-popup';

import PropTypes from 'prop-types';

export default function Modal({ children }) {
  return (
    <Popup
      trigger={
        <button type="button">
          <MdVisibility size={10} color="#7d40e7" />
          Visualizar
        </button>
      }
      modal
      position="center center"
      contentStyle={{
        width: '450px',
        borderRadius: '4px',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        strong: { fontSize: '14px' },
      }}
      overlayStyle={{
        background: 'rgb(0, 0, 0, 0.7)',
        border: 'rgb(0, 0, 0, 0.7)',
      }}
    >
      {children}
    </Popup>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
