import React, {useRef} from 'react';
import {StatusBar} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {Container} from './styles';
import HeaderBackground from '~pages/Deliveries/Components/HeaderBackground';

export default function SetAsDelivered() {
  const cameraRef = useRef(null);

  async function takePicture() {
    const options = {quality: 0.5, base64: true};
    const data = cameraRef.takePictureAsync(options);

    console.tron.log(data.uri);
  }

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
