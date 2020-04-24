import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserAvatar from 'react-native-user-avatar';
import DeliveryItem from '~/pages/Deliveries/DeliveryItem';

import api from '~/services/api';

import {
  Container,
  InfoView,
  UserInfo,
  WelcomeView,
  WelcomeText,
  Name,
  ViewProfileButton,
  ListHeader,
  Title,
  Options,
  PendingButton,
  PendingButtonText,
  DeliveredButton,
  DeliveredButtonText,
  DeliveryList,
} from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const response = api.get('/orders');

    setDeliveries(response.data);
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <InfoView>
          <UserInfo>
            <UserAvatar size="70" name="Myself Iam" color="#DECEF7" />
            <WelcomeView>
              <WelcomeText>Bem-vindo de volta,</WelcomeText>
              <Name>Gaspar Antunes</Name>
            </WelcomeView>
          </UserInfo>
          <ViewProfileButton>
            <Icon name="input" size={25} color="#E74040" />
          </ViewProfileButton>
        </InfoView>
        <ListHeader>
          <Title>Entregas</Title>
          <Options>
            <PendingButton>
              <PendingButtonText>Pendentes</PendingButtonText>
            </PendingButton>
            <DeliveredButton>
              <DeliveredButtonText>Entregues</DeliveredButtonText>
            </DeliveredButton>
          </Options>
        </ListHeader>

        <DeliveryList
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item: delivery}) => <DeliveryItem data={delivery} />}
        />
      </Container>
    </>
  );
}
