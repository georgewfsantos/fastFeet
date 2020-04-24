import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* max-width: 340px; */
  border: 1px solid #dddddd;
  justify-content: center;
  align-items: center;
  padding: 2px;
  background: #fff;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 15px;
`;

export const Name = styled.Text`
  color: #7d40e7;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;

export const FlowBar = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 10px;
`;

export const Circle = styled.View`
  height: 16px;
  width: 16px;
  border: 1px solid #7d40e7;
  border-radius: 9px;
`;

export const Line = styled.View`
  width: 42%;
  height: 1.5px;
  background-color: #7d40e7;
`;

export const StatusDescription = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;
export const StatusText = styled.Text`
  font-size: 12px;
  text-align: center;
  width: 100%;
  max-width: 118px;
  color: #999999;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fd;
  margin-top: 20px;
  padding: 12px;
  height: 64px;
`;
export const DateView = styled.View`
  padding: 5px;
`;
export const DateText = styled.Text`
  color: #999999;
`;
export const Date = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 16px;
`;
export const CityView = styled.View`
  padding: 5px;
`;
export const CityText = styled.Text`
  color: #999999;
`;
export const City = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 16px;
`;
export const DetailButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 2.5px;
`;
export const DetailButtonText = styled.Text`
  color: #7d40e7;
  font-size: 16px;
  font-weight: bold;
`;
