import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border-radius: 4px;
`;
export const ActionList = styled.div`
  width: 100px;
  position: absolute;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  padding: 5px;
  text-align: left;
  height: 90px;
  left: 46%;
  top: calc(100% + 10px);
  background: #fff;
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid #f5f5f5;
    z-index: 5;
  }

  button {
    display: flex;
    width: 100%;
    padding: 4px;
    align-items: center;

    border: none;

    &:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }

    svg {
      margin-right: 6px;
    }
  }

  /* button {
    border-bottom: 1px solid #eee;
  }

  button {
    padding: 7px;
    background: none;
    border: none;

    svg {
      margin-right: 10px;
    }
  } */
`;
