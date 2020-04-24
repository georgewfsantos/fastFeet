import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
  Name,
  FlowBar,
  Circle,
  Line,
  StatusDescription,
  StatusText,
  Footer,
  DateView,
  DateText,
  Date,
  CityView,
  CityText,
  City,
  DetailButton,
  DetailButtonText,
} from './styles';

export default function DeliveryItem() {
  return (
    <Container>
      <Title>
        <Icon name="local-shipping" size={30} color="#7D40E7" />
        <Name>Encomenda 01</Name>
      </Title>
      <FlowBar>
        <Circle />
        <Line />
        <Circle />
        <Line />
        <Circle />
      </FlowBar>
      <StatusDescription>
        <StatusText>Aguardando Retirada</StatusText>
        <StatusText>Retirada</StatusText>
        <StatusText>Entregue</StatusText>
      </StatusDescription>
      <Footer>
        <DateView>
          <DateText>Data</DateText>
          <Date>14/01/2020</Date>
        </DateView>
        <CityView>
          <CityText>Cidade</CityText>
          <City>Diadema</City>
        </CityView>
        <DetailButton>
          <DetailButtonText>Ver detalhes</DetailButtonText>
        </DetailButton>
      </Footer>
    </Container>
  );
}
