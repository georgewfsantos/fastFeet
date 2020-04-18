import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import ListItem from '~/pages/Addressees/ListAddressees/ListItem';
import Input from '~/components/Input';

import getRandomColor from '~/utils/getRandomColor';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Title, ListHeader, OrderList } from './styles';

export default function ListAddressees() {
  const [addressees, setAddressees] = useState([]);

  useEffect(() => {
    async function loadAddressees() {
      const response = await api.get('/addressees');

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

      setAddressees(response.data);
    }

    loadAddressees();
  }, []);

  function handleNew() {
    history.push('/addressees/new');
  }

  async function handleSearch(searchTerm) {
    try {
      const response = await api.get(
        `/addressees?addresseeName=${searchTerm.buscar}`
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

      setAddressees(response.data);
    } catch (err) {
      toast.error('Nenhum destinatário com este nome foi encontrado');
    }
  }

  return (
    <Container>
      <Title>Gerenciando destinatários</Title>
      <div className="underTitle">
        <Form onSubmit={handleSearch}>
          <Input
            id="buscar"
            name="buscar"
            placeholder="Buscar por destinatários"
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
          <div className="name">Name</div>
          <div className="email">Endereço</div>
          <div className="actions">Ações</div>
        </ListHeader>
        {addressees.map(addressee => (
          <ListItem key={addressee.id} addressee={addressee} />
        ))}
      </OrderList>
    </Container>
  );
}
