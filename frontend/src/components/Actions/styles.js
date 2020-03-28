import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 150px;
  display: flex;
  position: relative;
  margin-left: 50px;
  border-radius: 4px;
  background: #fff;
`;
export const ActionList = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 90px;
  left: calc(50% - 75px);
  background: #fff;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #eee;
    top: 5px;
  }

  button:first-of-type {
    border-bottom: 1px solid #eee;
  }

  button {
    padding: 5px;
    background: none;
    border: none;

    svg {
      margin-right: 10px;
    }
  }
`;
