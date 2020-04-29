import React from 'react';
import format from 'date-fns/format';
import pt from 'date-fns/locale/pt-BR';

import {Container, IssueText} from './styles';

export default function IssueItem({issue}) {
  return (
    <Container>
      <IssueText>{issue.description}</IssueText>
      <IssueText>
        {format(new Date(issue.createdAt), 'dd/MM/yyyy', {locale: pt})}
      </IssueText>
    </Container>
  );
}
