import React, {useState} from 'react';
import {Image, ActivityIndicator, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import logo from '~/assets/logo.png';

import {signInRequest} from '~/store/modules/auth/actions';

import {Container, FormInput, Form, SubmitButton, ButtonText} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            name="id"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEdidting={handleSubmit}
            value={id}
            onChangeText={setId}
          />
          <SubmitButton onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size="smal" color="#fff" />
            ) : (
              <ButtonText>Entrar no sistema</ButtonText>
            )}
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}
