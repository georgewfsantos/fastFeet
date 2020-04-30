import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #fff;
`;

export const AvatarImage = styled.Image`
  margin-top: 60px;
  width: 136px;
  height: 136px;
  border-radius: 68px;
`;

export const InfoView = styled.View`
  width: 100%;
  padding: 30px;
  margin-top: 30px;
`;
export const NameView = styled.View`
  margin-bottom: 10px;
`;
export const NameLabel = styled.Text`
  color: #666666;
  font-size: 16px;
`;
export const Name = styled.Text`
  color: #444444;
  font-size: 21px;
  font-weight: bold;
`;
export const EmailView = styled.View`
  margin-bottom: 10px;
`;
export const EmailLabel = styled.Text`
  color: #666666;
  font-size: 16px;
`;
export const Email = styled.Text`
  color: #444444;
  font-size: 21px;
  font-weight: bold;
`;
export const DateView = styled.View`
  margin-bottom: 10px;
`;
export const DateLabel = styled.Text`
  color: #666666;
  font-size: 16px;
`;
export const CreatedDate = styled.Text`
  color: #444444;
  font-size: 20px;
  font-weight: bold;
`;
export const LogoutButton = styled.TouchableOpacity`
  margin-top: 10px;
  background: #e74040;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
export const LogoutButtonText = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`;
