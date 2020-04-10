import styled from 'styled-components';
import logo from '~/assets/search.svg';

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

  .underTitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;

    input {
      height: 36px;
      width: 250px;

      padding: 20px 32px;
      border: #dddddd;
      border-radius: 4px;
      font-size: 16px;
      background: #fff url(${logo}) no-repeat 10px center;
      color: #666;

      &::placeholder {
        color: #999;
        padding: 8px;
      }
    }

    button {
      display: flex;
      background: none;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #7d40e7;
      height: 36px;
      width: 142px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      padding: 4px;
      color: #fff;

      svg {
        margin-right: 4px;
      }
    }
  }
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

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    max-width: 250px;
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
