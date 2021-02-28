import React from 'react';

import { 
  Container, 
  FeaturedVertical, 
  FeaturedHorizontal, 
  FeaturedName, 
  FeaturedInfo, 
  FeaturedDescription,
  FeaturedButtons,
  FeaturedGenres
} from './styles';


function FeatureMovie({ item: movie }) {
  let firstDate = new Date(movie.first_air_date);

  let genres = [];

  for(let i in movie.genres){
    genres.push(movie.genres[i].name);
  }

  let description = movie.overview;

  if(description.length > 200){
    description = description.substring(0, 200)+'...';
  }

  return (
    <Container backdropPath={movie.backdrop_path}>
      <FeaturedVertical>
        <FeaturedHorizontal>
          <FeaturedName>{movie.name}</FeaturedName>
          <FeaturedInfo>
            <div>{movie.vote_average} pontos</div>
            <div>{firstDate.getFullYear()}</div>
            <div>{movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 ? 's' : ''}</div>
          </FeaturedInfo>
          <FeaturedDescription>{description}</FeaturedDescription>
          <FeaturedButtons>
            <a href={`/watch/${movie.id}`} className="featuredWatchButton">► Assistir</a>
            <a href={`/wishlist/add/${movie.id}`} className="featuredAddButton">+ Minha Lista</a>
          </FeaturedButtons>
          <FeaturedGenres>
            <strong>Gêneros: </strong> {genres.join(', ')}
          </FeaturedGenres>
        </FeaturedHorizontal>
      </FeaturedVertical>

    </Container>
  );
}

export default FeatureMovie;