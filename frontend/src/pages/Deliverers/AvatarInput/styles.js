import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    .holder {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border: 1px dashed #dddddd;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }

      span {
        color: #ddd;
        text-align: center;
      }
    }

    input {
      display: none;
    }
  }
`;
