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
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 25%;
    max-width: 250px;
  }

  #avatar {
    justify-content: space-between;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  #avatar > div > div > div > span > span {
    font-size: 16px;
    font-weight: bold;
  }

  #actions > div > div {
    top: calc(100% + 20px);
    left: -67px;
    height: 60px;
  }

  #actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > button {
      border: none;
      color: #c6c6c6;
      font-size: 16px;
      margin-right: 15px;

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

    strong {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .border {
      border-bottom: 1px solid #dddd;
      padding-bottom: 8px;
    }

    #dates,
    #signature {
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
  }
`;
