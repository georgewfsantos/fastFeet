import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import {
  MdFiberManualRecord,
  MdCreate,
  MdDelete,
  MdVisibility,
} from 'react-icons/md';
import history from '~/services/history';

import Actions from '~/components/Actions';

import { Container } from './styles';
import api from '~/services/api';

export default function ListItem({ order }) {
  const [visible, setVisible] = useState(false);

  function handleEdit(id) {
    history.push(`orders/${id}/editOrder`);
  }

  async function handleDelete(id) {
    const permition = window.confirm(
      'Tem certeza de que deseja cancelar esta encomenda ?'
    );

    if (permition) {
      try {
        await api.delete(`/orders/${id}/delete`);
        toast.success('Ordem cancelada com sucesso');
        setVisible(false);
      } catch (error) {
        toast.error(
          'Não foi possível cancelar a encomenda. Por favor, verifique os dados e tente novamente'
        );
      }
    }
  }

  /* function handleDetails(id) {
    history.push(`/orders/${id}/details`);
  } */

  return (
    <Container
      key={order.id}
      color={order.color}
      colorOpacity={order.colorOpacity}
    >
      <div id="order_id">{`#${order.id}`}</div>
      <div id="addressee">{order.addressee.name}</div>
      <div id="deliverer">
        <Avatar
          name={order.deliverer.name}
          size="40"
          round
          color={order.avatarColors.bgColor}
          fgColor={order.avatarColors.fontColor}
          style={{
            margin: 5,
          }}
        />
        {order.deliverer.name}
      </div>
      <div id="city">{order.addressee.city}</div>
      <div id="state">{order.addressee.state}</div>
      <div id="status">
        <span>
          <MdFiberManualRecord />
          {order.status}
        </span>
      </div>
      <div id="actions">
        <button type="button" onClick={() => setVisible(!visible)}>
          ...
        </button>
        <Actions visible={visible}>
          <>
            <button type="button" onClick={() => {}}>
              <MdVisibility size={10} color="#7d40e7" />
              Visualizar
            </button>

            <button type="button" onClick={() => handleEdit(order.id)}>
              <MdCreate size={10} color="#4D85EE" />
              Editar
            </button>
            <button type="button" onClick={() => handleDelete(order.id)}>
              <MdDelete size={10} color="#DE3B3B" />
              Excluir
            </button>
          </>
        </Actions>
      </div>
    </Container>
  );
}

ListItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    color: PropTypes.string,
    colorOpacity: PropTypes.string,
    avatarColors: PropTypes.shape({
      bgColor: PropTypes.string,
      fontColor: PropTypes.string,
    }),
    addressee: PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
    }),
    deliverer: PropTypes.shape({
      name: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};
