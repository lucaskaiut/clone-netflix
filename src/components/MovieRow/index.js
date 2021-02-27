import React, { useState } from 'react';

import  NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import  NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { 
  Container, 
  MovieRowListArea, 
  MovieRowList, 
  MovieRowItem,
  MovieRowLeftIcon,
  MovieRowRightIcon
} from './styles';

export default function MovieRow({ title, movies }) {

  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 3);
    if(x > 0){
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 3);
    let listWidth = movies.results.length * 150;

    if((window.innerWidth - listWidth) > x){
      x = window.innerWidth - listWidth - 60;
    }

    setScrollX(x);
  }

  return (
    <Container>
      <h2>{title}</h2>
      <MovieRowLeftIcon className="leftIcon" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}}/>
      </MovieRowLeftIcon>

      <MovieRowRightIcon className="rightIcon" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}}/>
      </MovieRowRightIcon>

      <MovieRowListArea>
        <MovieRowList style={{
          marginLeft: scrollX,
          width: movies.results.length * 150
          }}>
          {movies.results.map((movie, key) => movie.poster_path && (
              <MovieRowItem key={key}>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title}/>
              </MovieRowItem>
          ))}
        </MovieRowList>
      </MovieRowListArea>
    </Container>
  );
}