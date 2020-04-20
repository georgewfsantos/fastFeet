import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  margin-top: 15px;

  width: 100%;
  max-width: 1000px;
`;

export const Title = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 24px;
  font-weight: bold;
  color: #444444;
`;
export const ListHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  align-content: center;
  justify-content: space-between;

  padding: 0 20px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
  color: #444444;

  .description {
    width: 60%;
    margin-left: 5px;
  }

  .actions {
    justify-content: flex-end;
    text-align: end;
  }
`;
export const OrderList = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
`;
