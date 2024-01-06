import Cast from './Cast';
import './Movie.css';

const Movie = ({ movie }) => {

    return (
        <div key={movie.elementId} className="movie">
            <h2>{movie.title}</h2>
            <h3>{movie.tagline}</h3>
            <p>Release year: {movie.released}</p>
            <Cast cast={movie.cast} />
        </div>
    );
}

export default Movie;