import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import { MdCreate, MdDelete } from 'react-icons/md';
import history from '~/services/history';

import Actions from '~/components/Actions';

import { Container } from './styles';
import api from '~/services/api';

export default function ListItem({ deliverer }) {
  const [visible, setVisible] = useState(false);

  function handleEdit(id) {
    history.push(`deliverers/${id}/edit`);
  }

  async function handleDelete(id) {
    const permition = window.confirm(
      'Tem certeza de que deseja excluir  os dados deste entregador ?'
    );

    if (permition) {
      try {
        await api.delete(`/deliverers/${id}/delete`);
        toast.success('Dados excluídos com sucesso');
        setVisible(false);
      } catch (error) {
        toast.error(
          'Não foi possível excluir o entregador. Por favor, verifique os dados e tente novamente'
        );
      }
    }
  }

  return (
    <Container>
      <div id="deliverer_id">{`#${deliverer.id}`}</div>

      <div id="avatar">
        {deliverer.avatar?.url ? (
          <img src={deliverer.avatar?.url} alt="Insert " />
        ) : (
          <Avatar
            name={deliverer.name}
            size="40"
            round
            color={deliverer.avatarColors.bgColor}
            fgColor={deliverer.avatarColors.fontColor}
          />
        )}
      </div>
      <div id="name">{deliverer.name}</div>
      <div id="email">{deliverer.email}</div>

      <div id="actions">
        <button type="button" onClick={() => setVisible(!visible)}>
          ...
        </button>
        <Actions visible={visible}>
          <>
            <button type="button" onClick={() => handleEdit(deliverer.id)}>
              <MdCreate size={10} color="#4D85EE" />
              Editar
            </button>
            <button type="button" onClick={() => handleDelete(deliverer.id)}>
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
  deliverer: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
    color: PropTypes.string,
    avatarColors: PropTypes.shape({
      bgColor: PropTypes.string,
      fontColor: PropTypes.string,
    }),
  }).isRequired,
};
