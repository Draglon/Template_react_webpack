import React, { Component } from 'react';

class MovieItemComponent extends Component {
  componentDidMount() {
    const { setMovie, movieId } = this.props;
    setMovie(movieId);
  }

  render() {
    const { translate: t, reviewMovie } = this.props;
    const review = Object.assign({}, reviewMovie);

    return (
      <section className="section">
        <div className="wrapper">
          <h2 className="section__title">{t.title}</h2>

          <div className="movie">
            <figure className="movie__figure">
              <img
                className="movie__image"
                src={`https://image.tmdb.org/t/p/w500/${review.poster_path}`}
                alt={review.title}
              />
            </figure>
            <div className="movie__content">
              <h2 className="movie__title">{review.title}</h2>
              <p className="movie__overview">{review.overview}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieItemComponent;
