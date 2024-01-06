import { Spin } from 'antd';
import ActedIn from './ActedIn';
import './Person.css';
import { useEffect, useState } from 'react';
import { PersonsAPI } from '../../api/service/PersonsAPI';

const Person = ({ person }) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies.length === 0) {
            setLoading(true);
            PersonsAPI.actedIn(person.name)
                .then(response => {
                    setMovies(response);
                })
                .catch(error => {
                    console.error(error);
                }).finally(() => {
                    setLoading(false);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Spin spinning={loading}>

            <div key={person.elementId} className="person">
                <h2>{person.name}</h2>
                <p>Born: {person.born}</p>
                <ActedIn movies={movies} />
            </div>
        </Spin>
    );
}

export default Person;