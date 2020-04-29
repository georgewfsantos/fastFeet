import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import pt from 'date-fns/locale/pt-BR';
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

export default function OrderDetails({route, navigation}) {
  const {delivery} = route.params;
  const [status, setStatus] = useState('');

  console.tron.log(delivery);

  const completeAddress = `${delivery.addressee.street}, ${delivery.addressee.number}, ${delivery.addressee.city}-${delivery.addressee.state}, ${delivery.addressee.zip_code}`;

  useEffect(() => {
    if (delivery.start_date === null) {
      setStatus('Pendente');
    } else if (delivery.start_date && delivery.end_date !== null) {
      setStatus('Entregue');
    } else {
      setStatus('Retirada');
    }
  }, []);

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
            <AddresseeName>{delivery.addressee.name}</AddresseeName>
          </AddresseView>

          <AddressView>
            <AddressTitle>ENDEREÇO DE ENTREGA</AddressTitle>
            <Address>{completeAddress}</Address>
          </AddressView>

          <ProductView>
            <ProductTitleText>PRODUCT</ProductTitleText>
            <Product>{delivery.product}</Product>
          </ProductView>
        </DeliveryInfo>

        <DeliveryStatusView>
          <TitleView>
            <Icon name="event" size={30} color="#7D40E7" />
            <TitleText>Situação da entrega</TitleText>
          </TitleView>
          <StatusTitle>STATUS</StatusTitle>
          <Status>{status}</Status>

          <DatesView>
            <StartDateView>
              <StartDateTitle>DATA DE RETIRADA</StartDateTitle>
              <StartDate>
                {format(new Date(delivery.start_date), 'dd/MM/yyyy', {
                  locale: pt,
                })}
              </StartDate>
            </StartDateView>

            <DeliveredDateView>
              <DeliveredDateTitle>DATA DE ENTREGA</DeliveredDateTitle>
              <DeliveredDate>
                {delivery.end_date
                  ? format(new Date(delivery.end_date), 'dd/MM/yyyy', {
                      locale: pt,
                    })
                  : '--/--/--'}
              </DeliveredDate>
            </DeliveredDateView>
          </DatesView>
        </DeliveryStatusView>

        <OptionView>
          <ProblemView
            onPress={() =>
              navigation.navigate('Informar problema', {id: delivery.id})
            }>
            <Icon name="highlight-off" size={30} color="#E74040" />
            <Option>Informar Problema</Option>
          </ProblemView>

          <ProblemDetailView
            onPress={() =>
              navigation.navigate('Visualizar problemas', {id: delivery.id})
            }>
            <Icon name="error-outline" size={30} color="#E7BA40" />
            <Option>Visualizar Problemas</Option>
          </ProblemDetailView>

          <ConfirmView
            onPress={() =>
              navigation.navigate('Confirmar entrega', {id: delivery.id})
            }>
            <Icon name="check-circle" size={30} color="#7D40E7" />
            <Option>Confirmar Entrega</Option>
          </ConfirmView>
        </OptionView>
      </Container>
    </>
  );
}

OrderDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      delivery: PropTypes.shape({
        id: PropTypes.number,
        product: PropTypes.string,
        addresse: PropTypes.shape({
          name: PropTypes.string,
          street: PropTypes.string,
          number: PropTypes.number,
          city: PropTypes.string,
          state: PropTypes.string,
          zip_code: PropTypes.string,
        }),
        start_date: PropTypes.instanceOf(Date),
        end_date: PropTypes.instanceOf(Date),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
