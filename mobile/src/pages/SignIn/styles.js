import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #7d40e7;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  align-items: center;
`;

export const FormInput = styled.TextInput`
  margin-bottom: 10px;
  color: #999999;
  width: 100%;
  max-width: 340px;
  background: #fff;
  height: 50px;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 20px;
  &::placeholder {
    color: #999999;
  }
`;
export const SubmitButton = styled(TouchableOpacity)`
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 50px;
  width: 100%;
  max-width: 340px;
  background: #82bf18;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
