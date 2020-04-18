import React, { useState } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import { MdCreate, MdDelete } from 'react-icons/md';
import history from '~/services/history';

import Actions from '~/components/Actions';

import { Container } from './styles';
import api from '~/services/api';

export default function ListItem({ addressee }) {
  const [visible, setVisible] = useState(false);

  function handleEdit(id) {
    history.push(`addressees/${id}/edit`);
  }

  async function handleDelete(id) {
    const permition = window.confirm(
      'Tem certeza de que deseja excluir  os dados deste destinatário ?'
    );

    if (permition) {
      try {
        await api.delete(`/addressees/${id}/delete`);
        toast.success('Dados excluídos com sucesso');
        setVisible(false);
      } catch (error) {
        toast.error(
          'Não foi possível excluir o destinatário. Por favor, verifique os dados e tente novamente'
        );
      }
    }
  }

  return (
    <Container>
      <div id="deliverer_id">{`#${addressee.id}`}</div>

      <div id="name">{addressee.name}</div>
      <div id="email">{`${addressee.street}, ${addressee.number}, ${addressee.city} -${addressee.state}`}</div>

      <div id="actions">
        <button type="button" onClick={() => setVisible(!visible)}>
          ...
        </button>
        <Actions visible={visible}>
          <>
            <button type="button" onClick={() => handleEdit(addressee.id)}>
              <MdCreate size={10} color="#4D85EE" />
              Editar
            </button>
            <button type="button" onClick={() => handleDelete(addressee.id)}>
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
  addressee: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    street: PropTypes.string,
    number: PropTypes.number,
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
};
