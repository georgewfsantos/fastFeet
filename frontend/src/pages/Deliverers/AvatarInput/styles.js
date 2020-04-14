import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px dashed #dddddd;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    input {
      display: none;
    }
  }
`;
