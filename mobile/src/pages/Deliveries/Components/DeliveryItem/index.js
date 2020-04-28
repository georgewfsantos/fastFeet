import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import format from 'date-fns/format';
import pt from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';

import StartedCircle from '~/pages/Deliveries/Components/StartedCircle';
import DeliveredCircle from '~/pages/Deliveries/Components/DeliveredCircle';

import {
  Container,
  Title,
  Name,
  FlowBar,
  FirstCircle,
  Line,
  StatusDescription,
  StatusText,
  Footer,
  DateView,
  DateText,
  CreatedDate,
  CityView,
  CityText,
  City,
  DetailButton,
  DetailButtonText,
} from './styles';

export default function DeliveryItem({delivery, navigation}) {
  return (
    <Container>
      <Title>
        <Icon name="local-shipping" size={30} color="#7D40E7" />
        <Name>{delivery.product}</Name>
      </Title>
      <FlowBar>
        <FirstCircle />
        <Line />
        <StartedCircle filled={delivery.start_date !== null} />
        <Line />
        <DeliveredCircle filled={delivery.end_date !== null} />
      </FlowBar>
      <StatusDescription>
        <StatusText>Aguardando Retirada</StatusText>
        <StatusText>Retirada</StatusText>
        <StatusText>Entregue</StatusText>
      </StatusDescription>
      <Footer>
        <DateView>
          <DateText>Data</DateText>
          <CreatedDate>
            {format(new Date(delivery.createdAt), 'dd/MM/yyy', {locale: pt})}
          </CreatedDate>
        </DateView>
        <CityView>
          <CityText>Cidade</CityText>
          <City>{delivery.addressee.city}</City>
        </CityView>
        <DetailButton
          onPress={() =>
            navigation.navigate('Detalhes da encomenda', {id: delivery.id})
          }>
          <DetailButtonText>Ver detalhes</DetailButtonText>
        </DetailButton>
      </Footer>
    </Container>
  );
}

DeliveryItem.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    start_date: PropTypes.instanceOf(Date),
    end_date: PropTypes.instanceOf(Date),
    createdAt: PropTypes.instanceOf(Date),
    addressee: PropTypes.shape({
      city: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
