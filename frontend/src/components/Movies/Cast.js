import './Cast.css';

const Cast = ({ cast }) => {
    return (
        <>
            <h4>Cast</h4>
            <ul>
                {cast && cast.map(person => (
                    <li key={person.elementId}>
                        {person.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Cast;