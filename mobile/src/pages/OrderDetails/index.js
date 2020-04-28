import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HeaderBackground from '~pages/Deliveries/Components/HeaderBackground';

import {
  Container,
  DeliveryInfo,
  TitleView,
  TitleText,
  AddresseView,
  AddreseeTitle,
  AddresseeName,
  AddressView,
  AddressTitle,
  Address,
  ProductView,
  ProductTitleText,
  Product,
  DeliveryStatusView,
  StatusTitle,
  Status,
  DatesView,
  StartDateView,
  StartDateTitle,
  StartDate,
  DeliveredDateView,
  DeliveredDateTitle,
  DeliveredDate,
  OptionView,
  ProblemView,
  Option,
  ProblemDetailView,
  ConfirmView,
} from './styles';

export default function OrderDetails() {
  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <HeaderBackground />
      <Container>
        <DeliveryInfo>
          <TitleView>
            <Icon name="local-shipping" size={30} color="#7D40E7" />
            <TitleText>Informações da entrega</TitleText>
          </TitleView>

          <AddresseView>
            <AddreseeTitle>DESTINATÁRIO</AddreseeTitle>
            <AddresseeName>Ludwig van Beethoven</AddresseeName>
          </AddresseView>

          <AddressView>
            <AddressTitle>ENDEREÇO DE ENTREGA</AddressTitle>
            <Address>Rua Beethoven, 1729, Diadema-SP, 09960-580</Address>
          </AddressView>

          <ProductView>
            <ProductTitleText>PRODUCT</ProductTitleText>
            <Product>Yamaha SX7</Product>
          </ProductView>
        </DeliveryInfo>

        <DeliveryStatusView>
          <TitleView>
            <Icon name="event" size={30} color="#7D40E7" />
            <TitleText>Situação da entrega</TitleText>
          </TitleView>
          <StatusTitle>STATUS</StatusTitle>
          <Status>Pendente</Status>

          <DatesView>
            <StartDateView>
              <StartDateTitle>DATA DE RETIRADA</StartDateTitle>
              <StartDate>14/01/2020</StartDate>
            </StartDateView>

            <DeliveredDateView>
              <DeliveredDateTitle>DATA DE ENTREGA</DeliveredDateTitle>
              <DeliveredDate>--/--/--</DeliveredDate>
            </DeliveredDateView>
          </DatesView>
        </DeliveryStatusView>

        <OptionView>
          <ProblemView>
            <Icon name="highlight-off" size={30} color="#E74040" />
            <Option>Informar Problema</Option>
          </ProblemView>

          <ProblemDetailView>
            <Icon name="error-outline" size={30} color="#E7BA40" />
            <Option>Visualizar Problema</Option>
          </ProblemDetailView>

          <ConfirmView>
            <Icon name="check-circle" size={30} color="#7D40E7" />
            <Option>Confirmar Entrega</Option>
          </ConfirmView>
        </OptionView>
      </Container>
    </>
  );
}
