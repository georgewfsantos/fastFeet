import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import ListItem from '~/pages/Deliverers/ListDeliverers/ListItem';
import Input from '~/components/Input';

import getRandomColor from '~/utils/getRandomColor';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Title, ListHeader, OrderList } from './styles';

export default function ListDeliverers() {
  const [deliverers, setDeliverers] = useState([]);

  useEffect(() => {
    async function loadDeliverers() {
      const response = await api.get('/deliverers');

      response.data.forEach(deliverer => {
        deliverer.avatarColors = getRandomColor([
          '#F4EFFC',
          '#FCF4EE',
          '#EBFBFA',
          '#FFEEF1',
          '#F4F9EF',
          '#FCFCEF',
        ]);
      });

      setDeliverers(response.data);
    }

    loadDeliverers();
  }, []);

  function handleNew() {
    history.push('/deliverers/new');
  }

  async function handleSearch(searchTerm) {
    try {
      const response = await api.get(
        `/deliverers?delivererName=${searchTerm.buscar}`
      );

      response.data.forEach(deliverer => {
        deliverer.avatarColors = getRandomColor([
          '#F4EFFC',
          '#FCF4EE',
          '#EBFBFA',
          '#FFEEF1',
          '#F4F9EF',
          '#FCFCEF',
        ]);
      });

      setDeliverers(response.data);
    } catch (err) {
      toast.error('Nenhum entregador com este nome foi encontrado');
    }
  }

  return (
    <Container>
      <Title>Gerenciando entregadores</Title>
      <div className="underTitle">
        <Form onSubmit={handleSearch}>
          <Input
            id="buscar"
            name="buscar"
            placeholder="Buscar por entregadores"
          />
        </Form>
        <button type="button" onClick={handleNew}>
          <MdAdd size={20} color="#fff" />
          CADASTRAR
        </button>
      </div>
      <OrderList>
        <ListHeader>
          <div className="deliverer_id">ID</div>
          <div className="avatar">Foto</div>
          <div className="name">Name</div>
          <div className="email">Email</div>
          <div className="actions">Ações</div>
        </ListHeader>
        {deliverers.map(deliverer => (
          <ListItem key={deliverer.id} deliverer={deliverer} />
        ))}
      </OrderList>
    </Container>
  );
}
