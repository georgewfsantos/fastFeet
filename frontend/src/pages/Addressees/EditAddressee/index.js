import React, { useEffect, useRef } from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Title } from './styles';

export default function EditAddressee() {
  const { addresseeId } = useParams();

  const formRef = useRef(null);

  useEffect(() => {
    async function loadAddresseeInfo() {
      const response = await api.get(`/addressees/${addresseeId}`);

      formRef.current.setData({
        name: response.data.name,
        address: {
          street: response.data.street,
          number: response.data.number,
          complement: response.data.complement,
          city: response.data.city,
          state: response.data.state,
          zip_code: response.data.zip_code,
        },
      });
    }
    loadAddresseeInfo();
  }, [addresseeId]);

  async function handleSubmit(data) {
    try {
      await api.put(`/addressees/${addresseeId}/update`, data);

      toast.success('Dados atualizados com sucesso');
      history.push('/addressees');
    } catch (error) {
      toast.error(
        'Não foi possível atualizar os dados. Verifique-os e tente novamente'
      );
    }
  }

  return (
    <Container>
      <Title>Edição de destinatários</Title>
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
          <Input id="name" type="text" name="name" />

          <Scope path="address">
            <div className="three-inputs">
              <div className="group" id="street-input">
                <label htmlFor="street" id="street" name="street">
                  Rua
                </label>
                <Input id="street" type="text" name="street" />
              </div>

              <div className="group" id="number-input">
                <label htmlFor="number" id="number" name="number">
                  Número
                </label>
                <Input id="number" type="text" name="number" />
              </div>

              <div className="group" id="complement-input">
                <label htmlFor="complement" id="complement" name="complement">
                  Complement
                </label>
                <Input id="complement" type="text" name="complement" />
              </div>
            </div>

            <div className="three-inputs-bottom">
              <div className="group" id="city-input">
                <label htmlFor="city" id="city" name="city">
                  Cidade
                </label>
                <Input id="city" type="text" name="city" />
              </div>

              <div className="group">
                <label htmlFor="state" id="state" name="state">
                  Estado
                </label>
                <Input id="state" type="text" name="state" />
              </div>

              <div className="group">
                <label htmlFor="zip_code" id="zip_code" name="zip_code">
                  CEP
                </label>
                <Input id="zip_code" type="text" name="zip_code" />
              </div>
            </div>
          </Scope>
        </div>
      </Form>
    </Container>
  );
}
