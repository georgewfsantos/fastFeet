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

  form {
    width: 100%;

    .underTitle {
      width: 100%;
      display: flex;
      justify-content: flex-end;

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

    .white-wrapper {
      display: flex;
      flex-direction: column;
      background: #fff;
      padding: 0 40px;
      margin-top: 15px;
      border-radius: 4px;
      padding-bottom: 20px;

      label {
        color: #444444;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        margin-left: 4px;
        margin-bottom: 15px;
        margin-top: 15px;
      }

      input {
        width: 100%;
        max-width: 840px;
        align-self: center;
        height: 45px;
        border-radius: 4px;
        border: 1px solid #dddddd;
        padding: 10px;
        margin-bottom: 15px;
      }

      .three-inputs {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .group {
          display: flex;
          flex-direction: column;
        }

        #street-input {
          width: 100%;
          max-width: 400px;
        }
      }

      .three-inputs-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;

        #city-input {
          width: 100%;
          max-width: 400px;
        }

        .group {
          display: flex;
          flex-direction: column;
        }
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
