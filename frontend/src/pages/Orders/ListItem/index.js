import React, { useState } from 'react';
import Avatar from 'react-avatar';

import {
  MdFiberManualRecord,
  MdCreate,
  MdDelete,
  MdVisibility,
} from 'react-icons/md';

import Actions from '~/components/Actions';

import { Container } from './styles';
import api from '~/services/api';

export default function ListItem({ order }) {
  const [visible, setVisible] = useState(false);

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
      <div id="state">{order.addressee.city}</div>
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
          <button type="button" onClick={() => {}}>
            <MdVisibility size={10} color="#7d40e7" />
            Visualizar
          </button>
          <button type="button" onClick={() => {}}>
            <MdCreate size={10} color="#4D85EE" />
            Editar
          </button>
          <button type="button" onClick={() => {}}>
            <MdDelete size={10} color="#DE3B3B" />
            Excluir
          </button>
        </Actions>
      </div>
    </Container>
  );
}
