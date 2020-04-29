import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import HeaderBackground from '~/pages/Deliveries/Components/HeaderBackground';

import api from '~/services/api';

import {Container, IssueInput, SubmitButton, SubmitButtonText} from './styles';

export default function AddDeliveryIssue({route, navigation}) {
  const {id} = route.params;

  const [description, setDescription] = useState('');

  async function handleSubmit() {
    const response = await api.post(`/orders/${id}/delivery_issues`, {
      description,
    });

    setDescription('');

    navigation.navigate('Entregas');
  }

  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <HeaderBackground />
      <Container>
        <IssueInput
          multiline
          numberOfLines={50}
          placeholder="Descreva aqui o problema que ocorreu na entrega"
          placeholderTextColor="#999999"
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
        />
        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </Container>
    </>
  );
}
