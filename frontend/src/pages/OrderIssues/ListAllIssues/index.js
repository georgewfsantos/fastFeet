import React, { useEffect, useState } from 'react';

import ListItem from '~/pages/OrderIssues/ListAllIssues/ListItem';

import api from '~/services/api';

import { Container, Title, ListHeader, OrderList } from './styles';

export default function ListAllIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function loadIssues() {
      const response = await api.get('/orders/delivery_issues');

      setIssues(response.data);
    }

    loadIssues();
  }, []);

  return (
    <Container>
      <Title>Gerenciando destinatários</Title>

      <OrderList>
        <ListHeader>
          <div className="issue_id">ID</div>
          <div className="description">Problema</div>

          <div className="actions">Ações</div>
        </ListHeader>
        {issues.map(issue => (
          <ListItem key={issue.id} issue={issue} />
        ))}
      </OrderList>
    </Container>
  );
}
