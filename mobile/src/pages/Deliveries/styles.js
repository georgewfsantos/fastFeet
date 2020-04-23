import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const InfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const WelcomeView = styled.View`
  margin-left: 10px;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  color: #666666;
`;
export const Name = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 22px;
`;

export const ViewProfileButton = styled.TouchableOpacity`
  border: none;
`;
