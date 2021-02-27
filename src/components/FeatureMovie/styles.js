import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;

  background-size: cover;
  background-position: center;
  background-image: url('https://image.tmdb.org/t/p/original${props => props.backdropPath}');
`;

export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;

  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;

  background: linear-gradient(to right, #111 30%, transparent 70%);

  display:flex;

  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;
`;

export const FeaturedName = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  div {
    display: inline-block;
    margin-right: 15px;
  }

  div:first-child{
    color: #46d369;
  }
`;

export const FeaturedDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
`;

export const FeaturedButtons = styled.div`
  margin-top: 15px;

  .featuredWatchButton, .featuredAddButton {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;

    transition: opacity .2s;

    &:hover {
      opacity: 0.7;
    }
  }

  .featuredWatchButton {
    background-color: #fff;
    color: #000;
  }

  .featuredAddButton {
    background-color: #333;
    color: #fff;
  }
`;

export const FeaturedGenres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;
`;
