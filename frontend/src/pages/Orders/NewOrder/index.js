import React from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import { Container, Title } from './sytles';

export default function NewOrder() {
  return (
    <Container>
      <Title>Gerenciando encomendas</Title>
      <div className="underTitle">
        <button type="button" onClick={() => {}} id="backButton">
          <MdChevronLeft size={20} color="#fff" />
          Cadastrar
        </button>
        <button type="button" onClick={() => {}}>
          <MdCheck size={20} color="#fff" />
          Cadastrar
        </button>
      </div>
    </Container>
  );
}
