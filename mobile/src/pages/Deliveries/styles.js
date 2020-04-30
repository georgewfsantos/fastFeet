import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 20px;
  background: #fff;
  margin-top: 35px;
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

export const AvatarImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
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

export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  padding: 5px 0;
`;

export const DeliveryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginTop: 15,
  },
})``;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #444444;
`;
export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;
