import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StatusBar} from 'react-native';

import format from 'date-fns/format';
import pt from 'date-fns/locale/pt-BR';

import UserAvatar from 'react-native-user-avatar';

import {signOut} from '~/store/modules/auth/actions';

import {
  Container,
  AvatarImage,
  InfoView,
  NameView,
  NameLabel,
  Name,
  EmailView,
  EmailLabel,
  Email,
  DateView,
  DateLabel,
  CreatedDate,
  LogoutButton,
  LogoutButtonText,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const delivererInfo = useSelector((state) => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Container>
        {delivererInfo?.avatar?.url ? (
          <AvatarImage source={{uri: delivererInfo.avatar.url}} />
        ) : (
          <UserAvatar
            size="136"
            name={delivererInfo?.name}
            color="#E3DCF5"
            textColor="#A28FD0"
            style={{marginTop: 60}}
          />
        )}

        <InfoView>
          <NameView>
            <NameLabel>Nome Completo</NameLabel>
            <Name>{delivererInfo?.name}</Name>
          </NameView>

          <EmailView>
            <EmailLabel>Email</EmailLabel>
            <Email>{delivererInfo?.email}</Email>
          </EmailView>

          <DateView>
            <DateLabel>Data de Cadastro</DateLabel>
            <CreatedDate>
              {format(new Date(delivererInfo.createdAt), 'dd/MM/yyyy', {
                locale: pt,
              })}
            </CreatedDate>
          </DateView>

          <LogoutButton onPress={handleLogout}>
            <LogoutButtonText>Logout</LogoutButtonText>
          </LogoutButton>
        </InfoView>
      </Container>
    </>
  );
}
