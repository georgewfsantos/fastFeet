import React from 'react';

import { Container, ActionList } from './styles';

export default function Actions({ visible, children }) {
  return (
    <Container>
      <ActionList visible={visible}>{children}</ActionList>
    </Container>
  );
}
