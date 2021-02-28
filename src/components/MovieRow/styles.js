import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  h2 {
    margin: 0px 0px 0px 30px;
  }

  .leftIcon, .rightIcon{
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    opacity: 0;

    transition: opacity .2s;
  }

  &:hover .rightIcon, &:hover .leftIcon{
    opacity: 1
  }

  @media (max-width: 760px){
    .rightIcon, .leftIcon {
      opacity: 1;
    }
  }

`;

export const MovieRowListArea = styled.div`
  overflow-x: scroll;
  padding-left: 30px;

  ::-webkit-scrollbar {
    display: none;
  }

`;

export const MovieRowList = styled.div`
  transition: margin .35s;
`;

export const MovieRowItem = styled.div`
  display: inline-block;
  width: 150px;

  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
  
    transition: transform .2s ease;

    &:hover{
      transform: scale(1);
    }
  }
`;

export const MovieRowLeftIcon = styled.div`
  left: 0;
`;

export const MovieRowRightIcon = styled.div`
  right: 0;

  overflow: hidden;
`;
