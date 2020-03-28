import React, { useEffect, useState } from 'react';
import { Input } from '@rocketseat/unform';
import { MdFiberManualRecord } from 'react-icons/md';
import { darken } from 'polished';

import Avatar from 'react-avatar';
// import Actions from '~/components/Actions';

import getRandomColor from '~/utils/getRandomColor';

import api from '~/services/api';

import { Container, Title, ListHeader, OrderList, ListItem } from './styles';

export default function ListOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders');

      response.data.forEach(order => {
        order.random = getRandomColor([
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
      <Input id="buscar" name="buscar" placeholder="Buscar por entregadores" />

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
          <>
            <ListItem
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
                  color={order.random.randomColor}
                  fgColor={darken(0.2, order.random.randomFontColor)}
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
                <button type="button">...</button>
                {/* <Actions /> */}
              </div>
            </ListItem>
          </>
        ))}
      </OrderList>
    </Container>
  );
}
