import React, { useEffect, useState } from 'react';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import GlobalStyle from './GlobalStyles';

import Tmdb from './services/Tmdb';

export default function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomIndex = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let featureMovie = originals[0].items.results[randomIndex];

      let featureMovieData = await Tmdb.getTvData(featureMovie.id, 'tv');

      setFeatureData(featureMovieData);
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <>
      <div className="page">
        <Header isBlack={blackHeader}/>

        {featureData && 
          <FeatureMovie item={featureData}/>
        }

        <section className="lists">
          {movieList.map((item, key) => (
            <div key={key}>
                <MovieRow key={key} title={item.title} movies={item.items} />
            </div>
          ))}
        </section>
      </div>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://i.gifer.com/EXfm.gif" alt="Carregando..."/>
        </div>
      }
      <GlobalStyle />
    </>
  );
}