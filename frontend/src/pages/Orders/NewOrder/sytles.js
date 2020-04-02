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
  max-width: 900px;

  .underTitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 15px;

    button {
      display: flex;
      background: none;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #7d40e7;
      height: 36px;
      width: 112px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      padding: 4px;
      color: #fff;

      svg {
        margin-right: 4px;
      }
    }

    #backButton {
      background-color: #cccccc;
      margin-right: 10px;
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
