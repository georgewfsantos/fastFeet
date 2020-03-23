import React, { useEffect, useState } from 'react';
import { Input } from '@rocketseat/unform';

import api from '~/services/api';

import { Container, Title, ListHeader, OrderList, ListItem } from './styles';

export default function ListOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders');

      response.data.forEach(order => {
        if (order.start_date) {
          order.status = 'RETIRADA';
          order.color = '#4D85EE';
        }
        if (order.start_date && order.end_date) {
          order.status = 'ENTREGUE';
          order.color = '#2CA42B';
        }
        if (order.canceled_at) {
          order.status = 'CANCELADA';
          order.color = '#DE3B3B';
        }
        if (!order.start_date) {
          order.status = 'PENDING';
          order.color = '#C1BC35';
        }
      });

      setOrders(response.data);
      console.log(response.data);
    }
    loadOrders();
  }, []);
  return (
    <Container>
      <Title>Gerenciando encomendas</Title>
      <Input id="buscar" name="buscar" />

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
          <ListItem key={order.id}>
            <div id="order_id">{`#${order.id}`}</div>
            <div id="addressee">{order.addressee.name}</div>
            <div id="deliverer">{order.deliverer.name}</div>
            <div id="city">{order.addressee.city}</div>
            <div id="state">{order.addressee.city}</div>
            <div id="status">
              <span color={order.color}>{order.status}</span>
            </div>
            <div id="actions">...</div>
          </ListItem>
        ))}
      </OrderList>
    </Container>
  );
}
