import React, { useEffect, useRef } from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import AsyncInput from '~/components/AsyncInput';

import customStyles from '~/components/AsyncInput/customStyles';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Title } from './styles';

export default function EditDeliverer() {
  const { delivererId } = useParams();

  const formRef = useRef(null);

  useEffect(() => {
    async function loadDelivererInfo() {
      const response = await api.get(`/deliverers/${delivererId}`);

      formRef.current.setData(response.data);

      formRef.current.setFieldValue('name', {
        value: response.data.name,
        label: response.data.name,
      });

      formRef.current.setFieldValue('email', {
        value: response.data.email,
        label: response.data.email,
      });
    }
    loadDelivererInfo();
  }, [delivererId]);

  async function handleSubmit({ name, email }) {
    try {
      await api.put(`/deliverers/${delivererId}/update`, {
        name,
        email,
      });

      toast.success('Dados atualizados com sucesso');
      history.push('/deliverers');
    } catch (error) {
      toast.error(
        'Não foi possível atualizar os dados. Verifique-os e tente novamente'
      );
    }
  }

  async function loadDelivererName(inputValue, callback) {
    const response = await api.get('/deliverers', {
      params: {
        delivererName: inputValue,
      },
    });

    const data = response.data.map(deliverer => ({
      value: deliverer.name,
      label: deliverer.name,
    }));

    callback(data);
  }

  async function loadDelivererEmail(inputValue, callback) {
    const response = await api.get('/deliverers', {
      params: {
        delivererName: inputValue,
      },
    });

    const data = response.data.map(deliverer => ({
      value: deliverer.email,
      label: deliverer.email,
    }));

    callback(data);
  }

  return (
    <Container>
      <Title>Edição de encomendas</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="underTitle">
          <button
            type="button"
            onClick={() => history.goBack()}
            id="backButton"
          >
            <MdChevronLeft size={20} color="#fff" />
            VOLTAR
          </button>
          <button type="submit">
            <MdCheck size={20} color="#fff" />
            SALVAR
          </button>
        </div>

        <div className="white-wrapper">
          <label htmlFor="name">Nome</label>
          <AsyncInput
            type="text"
            name="name"
            loadOptions={loadDelivererName}
            placeholder="Digite o nome do entregador"
            styles={[customStyles, { width: '100%' }]}
            theme={theme => ({
              ...theme,
              borderRadius: 4,
              colors: {
                ...theme.colors,
                primary25: '#ceb3ff',
                primary: '#7d40e7',
              },
            })}
          />

          <label htmlFor="email" id="email" name="email">
            Email
          </label>
          <AsyncInput
            type="text"
            name="email"
            loadOptions={loadDelivererEmail}
            placeholder="Digite o nome do entregador"
            styles={[customStyles, { width: '100%' }]}
            theme={theme => ({
              ...theme,
              borderRadius: 4,
              colors: {
                ...theme.colors,
                primary25: '#ceb3ff',
                primary: '#7d40e7',
              },
            })}
          />
        </div>
      </Form>
    </Container>
  );
}
