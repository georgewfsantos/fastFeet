import React from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import AvatarInput from '~/pages/Deliverers/AvatarInput';
import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Title } from './styles';

export default function NewDeliverer() {
  async function handleSubmit(data) {
    try {
      await api.post('/deliverers', data);
      toast.success('Dados cadastrados com sucesso');
      history.push('/deliverers');
    } catch (err) {
      toast.error(
        'Não foi possível cadastrar o entregador. Por favor verifique os dados e tente novamente'
      );
    }
  }
  return (
    <Container>
      <Title>Cadastrando entregadores</Title>
      <Form onSubmit={handleSubmit}>
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
          <AvatarInput name="avatar_id" />
          <label htmlFor="name">Nome </label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome do entregador"
          />

          <label htmlFor="email">Email </label>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Digite o email do entregador"
          />
        </div>
      </Form>
    </Container>
  );
}
