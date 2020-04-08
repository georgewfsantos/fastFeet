import styled from 'styled-components';

export const Container = styled.div`
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
    strong {
      font-size: 14px;
      margin-bottom: 5px;
    }

    #zip {
      border-bottom: 1px solid #dddd;
      padding-bottom: 8px;
    }

    #dates {
      margin-top: 8px;
    }

    > button {
      border: none;
      color: #c6c6c6;
      font-size: 16px;

      svg {
        margin-right: 5px;
      }
      &:hover {
        z-index: 2;
        font-weight: bold;
        font-size: 18px;
        color: #999;
      }
    }

    #actions > div > div > button {
      border-bottom: 1px solid #eee;
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
