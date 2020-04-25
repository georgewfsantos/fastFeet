import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import UserAvatar from 'react-native-user-avatar';
import DeliveryItem from '~/pages/Deliveries/Components/DeliveryItem';
import OptionButton from '~/pages/Deliveries/Components/OptionButton';

import api from '~/services/api';

import {
  Container,
  InfoView,
  UserInfo,
  AvatarImage,
  WelcomeView,
  WelcomeText,
  Name,
  ViewProfileButton,
  ListHeader,
  Title,
  Options,
  DeliveryList,
} from './styles';

export default function Deliveries({navigation}) {
  const delivererInfo = useSelector((state) => state.user.profile);
  const [deliveries, setDeliveries] = useState([]);
  const [activePending, setActivePending] = useState(false);
  const [activeDelivered, setActiveDelivered] = useState(false);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`/deliverer/${delivererInfo.id}/orders`);

      setActivePending(true);
      setDeliveries(response.data);
    }
    loadDeliveries();
  }, []);

  async function handleShowPending() {
    const response = await api.get(`/deliverer/${delivererInfo.id}/orders`);

    setActivePending(true);
    setActiveDelivered(false);
    setDeliveries(response.data);
  }

  async function handleShowDelivered() {
    const response = await api.get(
      `/deliverer/${delivererInfo.id}/delivered_orders`
    );

    setActiveDelivered(!activeDelivered);
    setActivePending(false);
    setDeliveries(response.data);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <InfoView>
          <UserInfo>
            {delivererInfo?.avatar?.url ? (
              <AvatarImage source={{uri: delivererInfo.avatar.url}} />
            ) : (
              <UserAvatar
                size="70"
                name={delivererInfo.name}
                color="#E3DCF5"
                textColor="#A28FD0"
              />
            )}
            <WelcomeView>
              <WelcomeText>Bem-vindo de volta,</WelcomeText>
              <Name>{delivererInfo?.name}</Name>
            </WelcomeView>
          </UserInfo>
          <ViewProfileButton
            onPress={() =>
              navigation.navigate('Dashboard', {screen: 'Meu Perfil'})
            }>
            <Icon name="input" size={25} color="#E74040" />
          </ViewProfileButton>
        </InfoView>
        <ListHeader>
          <Title>Entregas</Title>
          <Options>
            <OptionButton onPress={handleShowPending} active={activePending}>
              Pendentes
            </OptionButton>
            <OptionButton
              onPress={handleShowDelivered}
              active={activeDelivered}>
              Entregues
            </OptionButton>
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

Deliveries.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
