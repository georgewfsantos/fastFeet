import styled from 'styled-components/native';

export const Container = styled.View`
  height: 16px;
  width: 16px;
  border: 1px solid #7d40e7;
  border-radius: 9px;
  background-color: ${(props) => (props.filled ? '#7d40e7' : '#fff')};
`;
