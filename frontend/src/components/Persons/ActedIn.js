const ActedIn = ({ movies }) => {

    return (
        <div>
            <h3>Acted In</h3>
            <ul>
                {movies.map(movie => (
                    <li key={movie.elementId}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default ActedIn;