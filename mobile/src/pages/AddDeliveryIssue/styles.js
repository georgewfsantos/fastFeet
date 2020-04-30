import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  padding: 20px;
`;

export const IssueInput = styled.TextInput`
  margin-bottom: 15px;
  border: 1px solid #d5d5d5;
  padding: 13px;
  background: #fff;
  border-radius: 4px;
  margin-top: -65px;
  height: 380px;
  font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  background: #7d40e7;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
