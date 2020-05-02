import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  padding: 20px;
`;

export const DeliveryInfo = styled.View`
  margin-bottom: 15px;
  border: 1px solid #d5d5d5;
  padding: 13px;
  background: #fff;
  border-radius: 4px;
  margin-top: -120px;
`;

export const TitleView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const TitleText = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;
`;
export const AddresseView = styled.View`
  width: 100%;
  margin-bottom: 5px;
`;

export const AddreseeTitle = styled.Text`
  color: #999999;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const AddresseeName = styled.Text`
  color: #666666;
  font-size: 14px;
`;
export const AddressView = styled.View`
  width: 100%;
  justify-content: center;
  margin-bottom: 5px;
`;

export const AddressTitle = styled.Text`
  color: #999999;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 8px;
`;
export const Address = styled.Text`
  color: #666666;
  font-size: 14px;
`;

export const ProductView = styled.View`
  width: 100%;
  justify-content: center;
`;

export const ProductTitleText = styled.Text`
  color: #999999;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Product = styled.Text`
  color: #666666;
  font-size: 14px;
`;
export const DeliveryStatusView = styled.View`
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #d5d5d5;
  padding: 13px;
  background: #fff;
  border-radius: 4px;
`;

export const StatusTitle = styled.Text`
  color: #999999;
  font-weight: bold;
  font-size: 14px;
  margin-top: 10px;
`;
export const Status = styled.Text`
  color: #666666;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const DatesView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const StartDateView = styled.View`
  width: 50%;
`;

export const StartDateTitle = styled.Text`
  color: #999999;
  font-weight: bold;
  font-size: 14px;
`;

export const StartDate = styled.Text`
  color: #666666;
  font-size: 14px;

  margin-top: 10px;
`;
export const DeliveredDateView = styled.View`
  width: 100%;
`;
export const DeliveredDateTitle = styled.Text`
  color: #999999;
  font-weight: bold;
  font-size: 14px;
`;
export const DeliveredDate = styled.Text`
  color: #666666;
  font-size: 14px;
  margin-top: 10px;
`;
export const OptionView = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background: #f8f9fd;
  height: 100px;
`;
export const ProblemView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 33.33%;
  padding: 10px;
`;
export const Option = styled.Text`
  text-align: center;
  margin-top: 2px;
`;
export const ProblemDetailView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 33.33%;
  border-right-width: 3px;
  border-left-width: 3px;
  border-color: #f5f5f5;
  line-height: 10px;
  height: 100%;
`;

export const ConfirmView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 33.33%;
  padding: 10px;
`;
