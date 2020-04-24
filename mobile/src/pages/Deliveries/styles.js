import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  background: #fff;
  margin-top: 25px;
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
    padding: 30,
  },
})``;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #444444;
`;
export const Options = styled.View`
  flex-direction: row;
`;
export const PendingButton = styled.TouchableOpacity`
  border: none;
  margin-right: 8px;
`;
export const PendingButtonText = styled.Text`
  color: #7d40e7;
  font-size: 16px;
  font-weight: 500;
`;
export const DeliveredButton = styled.TouchableOpacity`
  color: #7d40e7;
  border: none;
`;
export const DeliveredButtonText = styled.Text`
  color: #7d40e7;
  font-size: 16px;
  font-weight: 500;
`;
