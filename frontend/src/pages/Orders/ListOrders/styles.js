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

  input {
    align-self: flex-start;
    margin-top: 20px;
    height: 36px;
    width: 250px;
    margin-bottom: 15px;
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
    width: 14%;
  }

  .addressee,
  .deliverer {
    width: 25%;
  }

  .actions {
    justify-self: flex-end;

    text-align: end;
  }
`;
export const OrderList = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
`;
export const ListItem = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 20px;
  margin-top: 10px;
  height: 64px;
  border-radius: 4px;
  font-size: 16px;
  color: #666666;

  > div {
    width: 14%;
    padding: 4px;
  }

  > div > span {
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.color && props.color};
    background: ${props => props.colorOpacity && props.colorOpacity};
    padding: 0 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  #actions {
    > button {
      border: none;
      color: #c6c6c6;
      font-size: 16px;
      &:hover {
        z-index: 2;
        font-weight: bold;
        font-size: 18px;
        color: #999;
      }
    }
  }

  #addressee,
  #deliverer {
    width: 25%;
  }

  #deliverer > div > div > div > span > span {
    font-weight: bold;
    font-size: 16px;
  }

  #actions {
    justify-self: flex-end;

    text-align: end;
    margin-right: 5px;
  }
`;
