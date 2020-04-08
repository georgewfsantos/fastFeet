import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { toast } from 'react-toastify';
import format from 'date-fns/format';
import pt from 'date-fns/locale/pt-BR';

import PropTypes from 'prop-types';

import { MdFiberManualRecord, MdCreate, MdDelete } from 'react-icons/md';
import history from '~/services/history';

import Actions from '~/components/Actions';

import { Container } from './styles';
import api from '~/services/api';
import Modal from '~/components/Modal';

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

  return (
    <Container
      // key={order.id}
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
            <Modal>
              <>
                <strong>Informações sobre a encomenda</strong>
                <small>{`${order.addressee.street}, ${order.addressee.number}`}</small>
                <small>{`${order.addressee.city},${order.addressee.state} `}</small>
                <small id="zip">{order.addressee.zip_code}</small>

                <strong id="dates">Datas</strong>
                <small>
                  {format(new Date(order.start_date), 'dd/MM/yyyy', {
                    locale: pt,
                  })}
                </small>
                <small>{order.end_date ? order.end_date : 'n/a'}</small>
                <small>Assinatura do destinatário</small>
              </>
            </Modal>

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
    start_date: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]),
    end_date: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]),
    status: PropTypes.string,
    color: PropTypes.string,
    colorOpacity: PropTypes.string,
    avatarColors: PropTypes.shape({
      bgColor: PropTypes.string,
      fontColor: PropTypes.string,
    }),
    deliverer: PropTypes.shape({
      name: PropTypes.string,
    }),
    addressee: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.number,
      city: PropTypes.string,
      zip_code: PropTypes.string,
      state: PropTypes.string,
    }),
  }).isRequired,
};
