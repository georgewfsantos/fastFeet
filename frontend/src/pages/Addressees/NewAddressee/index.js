import React, { useRef } from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import { toast } from 'react-toastify';

import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Title } from './styles';

export default function NewAddressee() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      await api.post('/addressees', {
        name: data.name,
        street: data.address.street,
        number: data.address.number,
        complement: data.address.complement,
        city: data.address.city,
        state: data.address.state,
        zip_code: data.address.zip_code,
      });

      toast.success('Cadastro realizado com sucesso.');
      history.push('/addressees');
    } catch (error) {
      toast.error(
        'Não foi possível cadastrar os dados. Verifique-os e tente novamente'
      );
    }
  }

  return (
    <Container>
      <Title>Cadastro de destinatários</Title>
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
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Digite o nome do destinatário"
          />

          <Scope path="address">
            <div className="three-inputs">
              <div className="group" id="street-input">
                <label htmlFor="street" id="street" name="street">
                  Rua
                </label>
                <Input
                  id="street"
                  type="text"
                  name="street"
                  placeholder="Digite o nome da rua"
                />
              </div>

              <div className="group" id="number-input">
                <label htmlFor="number" id="number" name="number">
                  Número
                </label>
                <Input
                  id="number"
                  type="number"
                  name="number"
                  placeholder="Digite o número"
                />
              </div>

              <div className="group" id="complement-input">
                <label htmlFor="complement" id="complement" name="complement">
                  Complement
                </label>
                <Input
                  id="complement"
                  type="text"
                  name="complement"
                  placeholder="Digite um complemento"
                />
              </div>
            </div>

            <div className="three-inputs-bottom">
              <div className="group" id="city-input">
                <label htmlFor="city" id="city" name="city">
                  Cidade
                </label>
                <Input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Digite a cidade"
                />
              </div>

              <div className="group">
                <label htmlFor="state" id="state" name="state">
                  Estado
                </label>
                <Input
                  id="state"
                  type="text"
                  name="state"
                  placeholder="Digite o estado"
                />
              </div>

              <div className="group">
                <label htmlFor="zip_code" id="zip_code" name="zip_code">
                  CEP
                </label>
                <Input
                  id="zip_code"
                  type="text"
                  name="zip_code"
                  placeholder="Digite o CEP"
                />
              </div>
            </div>
          </Scope>
        </div>
      </Form>
    </Container>
  );
}
