import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const IssueList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    paddingVertical: 40,
    paddingHorizontal: 10,
    marginTop: -30,
    alignSelf: 'stretch',
  },
})``;

export const ListContainer = styled.View`
  width: 100%;
  align-self: center;
  margin-top: -72px;
`;
