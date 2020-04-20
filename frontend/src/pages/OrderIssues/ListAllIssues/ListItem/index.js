import React, { useState } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import { MdDelete } from 'react-icons/md';

import Actions from '~/components/Actions';
import Modal from '~/components/Modal';

import { Container } from './styles';
import api from '~/services/api';

export default function ListItem({ issue }) {
  const [visible, setVisible] = useState(false);

  async function handleCancelOrder(id) {
    const permition = window.confirm(
      'Tem certeza de que deseja excluir  os dados deste destinatário ?'
    );

    if (permition) {
      try {
        await api.delete(`/orders/${id}/delete`);
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
      <div id="issue_id">{`#${issue.id}`}</div>

      <div id="description">{issue.description}</div>

      <div id="actions">
        <button type="button" onClick={() => setVisible(!visible)}>
          ...
        </button>
        <Actions visible={visible}>
          <>
            <Modal>
              <>
                <strong>Descrição do Problema</strong>
                <p>{issue.description}</p>
              </>
            </Modal>
            <button type="button" onClick={() => handleCancelOrder(issue.id)}>
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
  issue: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};
