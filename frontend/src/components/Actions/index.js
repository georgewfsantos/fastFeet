import React from 'react';
import { MdCreate, MdDelete } from 'react-icons/md';

import { Container, ActionList } from './styles';

export default function Actions() {
  return (
    <Container>
      <ActionList>
        <button type="button" onClick={() => {}}>
          <MdCreate size={10} color="#4D85EE" />
          Editar
        </button>
        <button type="button" onClick={() => {}}>
          <MdDelete size={10} color="#DE3B3B" />
          Excluir
        </button>
      </ActionList>
    </Container>
  );
}
