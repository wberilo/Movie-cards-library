// implement MovieCard component here
import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (<div>
      <h4>{movie.title}</h4>
      <h5>{movie.subtitle}</h5>
      <p>{movie.storyline}</p>
      <Rating rating={movie.rating} />
      <img src={movie.imagePath} alt="Movie" />
    </div>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
