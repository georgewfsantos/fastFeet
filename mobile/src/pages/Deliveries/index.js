import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserAvatar from 'react-native-user-avatar';

import {
  Container,
  InfoView,
  UserInfo,
  WelcomeView,
  WelcomeText,
  Name,
  ViewProfileButton,
} from './styles';

export default function Deliveries() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Container>
        <SafeAreaView>
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
        </SafeAreaView>
      </Container>
    </>
  );
}
