import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;

  background: transparent;
  
  .logo {
    height: 30px;
    img {
      height: 100%;
    }
  }
  .user {
    height: 50px;
    img {
      border-radius: 5px;
      height: 100%;
    }
  }

  transition: background-color .3s;

  background-color: ${props => props.isBlack ? '#111' : 'transparent'}
`;
