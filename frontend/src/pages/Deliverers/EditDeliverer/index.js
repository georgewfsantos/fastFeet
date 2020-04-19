import React, { useEffect, useRef, useState } from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import Input from '~/components/Input';
import AvatarInput from '~/pages/Deliverers/AvatarInput';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Title } from './styles';

export default function EditDeliverer() {
  const { delivererId } = useParams();
  const [file, setFile] = useState();
  const formRef = useRef(null);

  useEffect(() => {
    async function loadDelivererInfo() {
      const response = await api.get(`/deliverers/${delivererId}`);

      setFile(response.data.avatar);

      formRef.current.setFieldValue('name', response.data.name);

      formRef.current.setFieldValue('email', response.data.email);
    }
    loadDelivererInfo();
  }, [delivererId]);

  async function handleSubmit(data) {
    try {
      await api.put(`/deliverers/${delivererId}/update`, data);

      toast.success('Dados atualizados com sucesso');
      history.push('/deliverers');
    } catch (error) {
      toast.error(
        'Não foi possível atualizar os dados. Verifique-os e tente novamente'
      );
    }
  }

  return (
    <Container>
      <Title>Edição de entregadores</Title>
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
          <AvatarInput name="avatar_id" fileObj={file} />
          <label htmlFor="name">Nome</label>
          <Input type="text" name="name" />

          <label htmlFor="email" id="email" name="email">
            Email
          </label>
          <Input className="bottomInput" type="text" name="email" />
        </div>
      </Form>
    </Container>
  );
}
