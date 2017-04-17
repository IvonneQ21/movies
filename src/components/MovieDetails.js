import React from 'react';
import './MovieDetails.css';

function MovieDetails({ movie }) {
  return (<div className="movie-details">
    <div className="movie-details__section movie-details-header">
      <div className="movie-details-header__title">{movie.title}</div>
      <div className="movie-details-header__sub-title">{movie.rating} {movie.genres.join(' / ')}</div>
    </div>

    <div className="movie-details__section">
      <a href={movie.trailer} target="_blank">Play trailer</a>
    </div>

    <div className="movie-details__section movie-reactions">
      <div>Like</div>
      <div>Dislike</div>
    </div>

    <div className="movie-details__section movie-scores">
      {movie.scores.map(score => <div className="movie-scores__item movie-score" key={score.source}>
        <div className="movie-score__source">{score.source}</div>
        <div className="movie-score__score">{score.score}</div>
      </div>)}
    </div>

  </div>);
}

export default MovieDetails;