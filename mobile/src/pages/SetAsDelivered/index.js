import React, {useRef} from 'react';
import {StatusBar} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {Container} from './styles';
import HeaderBackground from '~pages/Deliveries/Components/HeaderBackground';

export default function SetAsDelivered() {
  const cameraRef = useRef(null);
  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <HeaderBackground />
      <Container>
        <RNCamera ref={cameraRef} />
      </Container>
    </>
  );
}
