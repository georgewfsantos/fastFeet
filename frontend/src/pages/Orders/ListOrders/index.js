import React, { useEffect, useState } from 'react';
import { Input } from '@rocketseat/unform';
import { MdAdd } from 'react-icons/md';

import ListItem from '~/pages/Orders/ListItem';

import getRandomColor from '~/utils/getRandomColor';

import api from '~/services/api';

import { Container, Title, ListHeader, OrderList } from './styles';

export default function ListOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders');

      response.data.forEach(order => {
        order.avatarColors = getRandomColor([
          '#F4EFFC',
          '#FCF4EE',
          '#EBFBFA',
          '#FFEEF1',
          '#F4F9EF',
          '#FCFCEF',
        ]);

        if (order.start_date === null) {
          order.status = 'PENDENTE';
          order.color = '#C1BC35';
          order.colorOpacity = '#F0F0DF';
        }
        if (order.start_date !== null) {
          order.status = 'RETIRADA';
          order.color = '#4D85EE';
          order.colorOpacity = '#BAD2FF';
        }
        if (order.start_date !== null && order.end_date !== null) {
          order.status = 'ENTREGUE';
          order.color = '#2CA42B';
          order.colorOpacity = '#DFF0DF';
        }
        if (order.canceled_at !== null) {
          order.status = 'CANCELADA';
          order.color = '#DE3B3B';
          order.colorOpacity = '#FAB0B0';
        }
      });

      setOrders(response.data);
    }
    loadOrders();
  }, []);

  return (
    <Container>
      <Title>Gerenciando encomendas</Title>
      <div className="underTitle">
        <Input
          id="buscar"
          name="buscar"
          placeholder="Buscar por entregadores"
        />
        <button type="button">
          <MdAdd size={20} color="#fff" />
          Cadastrar
        </button>
      </div>

      <OrderList>
        <ListHeader>
          <div className="order_id">ID</div>
          <div className="addressee">Destinatário</div>
          <div className="deliverer">Entregador</div>
          <div className="city">Cidade</div>
          <div className="state">Estado</div>
          <div className="status">Status</div>
          <div className="actions">Ações</div>
        </ListHeader>
        {orders.map(order => (
          <ListItem key={order.id} order={order} />
        ))}
      </OrderList>
    </Container>
  );
}
