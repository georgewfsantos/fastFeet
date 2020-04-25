import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 46px;

  border: none;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) => (props.active ? '#7D40E7' : '#999999')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  text-decoration-color: #7d40e7;
  font-weight: bold;
  font-size: 16px;
`;
