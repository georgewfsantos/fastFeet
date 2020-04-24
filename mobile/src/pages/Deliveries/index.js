import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserAvatar from 'react-native-user-avatar';
import DeliveryItem from '~/pages/Deliveries/Components/DeliveryItem';

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
  const deliverer_id = useSelector((state) => state.user.profile.id);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`/orders`);

      setDeliveries(response.data);
    }
    loadDeliveries();
  }, []);

  async function handleShowPending() {
    const response = await api.get(`/deliverer/${deliverer_id}/orders`);

    setDeliveries(response.data);
  }

  async function handleShowDelivered() {
    const response = await api.get(
      `/deliverer/${deliverer_id}/delivered_orders`
    );

    setDeliveries(response.data);
  }

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
            <PendingButton onPress={handleShowPending}>
              <PendingButtonText>Pendentes</PendingButtonText>
            </PendingButton>
            <DeliveredButton onPress={handleShowDelivered}>
              <DeliveredButtonText>Entregues</DeliveredButtonText>
            </DeliveredButton>
          </Options>
        </ListHeader>

        <DeliveryList
          data={deliveries}
          keyExtractor={(delivery) => String(delivery.id)}
          renderItem={({item: delivery}) => (
            <DeliveryItem delivery={delivery} />
          )}
        />
      </Container>
    </>
  );
}
