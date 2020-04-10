import React from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import AsyncInput from '~/components/AsyncInput';
import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Title } from './sytles';

export default function NewOrder() {
  async function handleSubmit({ product, deliverer, addressee }) {
    try {
      await api.post('/orders', {
        deliverer_id: deliverer,
        addressee_id: addressee,
        product,
      });

      toast.success('Encomenda cadastrada com sucesso !');
      history.push('/orders');
    } catch (error) {
      toast.error(
        'Não foi possível cadastrar a encomenda. Verifique os dados e tente novamente'
      );
    }
  }

  const customStyles = {
    container: provided => ({
      ...provided,
      display: 'inline-block',
      width: '405px',
      minHeight: '1px',
      textAlign: 'left',
      alignItems: 'center',
      marginTop: '15px',
    }),
    control: provided => ({
      ...provided,
      border: '1px solid #dddddd',
      borderRadius: '4px',
      minHeight: '1px',
      height: '45px',
    }),
    input: provided => ({
      ...provided,
      minHeight: '1px',
      height: '45px',
      alignItems: 'center',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      minHeight: '1px',
      paddingTop: '0',
      paddingBottom: '0',
      color: '#757575',
    }),
    indicatorSeparator: provided => ({
      ...provided,
      minHeight: '1px',
      height: '24px',
    }),
    clearIndicator: provided => ({
      ...provided,
      minHeight: '1px',
    }),
    valueContainer: provided => ({
      ...provided,
      minHeight: '1px',
      height: '40px',
      paddingTop: '0',
      paddingBottom: '0',
      alignItems: 'center',
    }),
    singleValue: provided => ({
      ...provided,
      minHeight: '1px',
      paddingBottom: '2px',
    }),

    placeholder: provided => ({
      ...provided,
      alignItems: 'center',
    }),
  };

  async function loadAddressees(inputValue, callback) {
    const response = await api.get('/addressees', {
      params: {
        addresseeName: inputValue,
      },
    });

    const data = response.data.map(addressee => ({
      value: addressee.id,
      label: addressee.name,
    }));

    callback(data);
  }

  async function loadDeliverers(inputValue, callback) {
    const response = await api.get('/deliverers', {
      params: {
        delivererName: inputValue,
      },
    });

    const data = response.data.map(deliverer => ({
      value: deliverer.id,
      label: deliverer.name,
    }));

    callback(data);
  }

  return (
    <Container>
      <Title>Cadastrando encomendas</Title>
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
          <div className="input-group">
            <div className="label-input-group">
              <label htmlFor="addressee">Destinatário</label>
              <AsyncInput
                type="text"
                name="addressee"
                loadOptions={loadAddressees}
                placeholder="Digite o nome do destinatário"
                styles={customStyles}
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
            <div className="label-input-group">
              <label htmlFor="deliverer" id="deliverer" name="deliverer">
                Deliverer
              </label>
              <AsyncInput
                type="text"
                name="deliverer"
                loadOptions={loadDeliverers}
                placeholder="Digite o nome do entregador"
                styles={customStyles}
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
          </div>
          <label htmlFor="product">Nome do produto</label>
          <Input
            type="text"
            id="product"
            name="product"
            placeholder="Produto"
          />
        </div>
      </Form>
    </Container>
  );
}
