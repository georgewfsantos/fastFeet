import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import HeaderBackground from '~/pages/Deliveries/Components/HeaderBackground';
import IssueItem from '~/pages/ViewDeliveryIssues/IssueItem';

import api from '~services/api';

import {Container, IssueList, ListContainer} from './styles';

export default function ViewDeliveryIssues({route}) {
  const {id} = route.params;
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function loadIssues() {
      const response = await api.get(`/orders/${id}/delivery_issues`);

      setIssues(response.data);
      console.tron.log(issues);
    }
    loadIssues();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#7d40e7" barStyle="light-content" />
      <HeaderBackground />
      <Container>
        <ListContainer>
          <IssueList
            data={issues}
            keyExtractor={(issue) => String(issue.id)}
            renderItem={({item: issue}) => <IssueItem issue={issue} />}
          />
        </ListContainer>
      </Container>
    </>
  );
}
