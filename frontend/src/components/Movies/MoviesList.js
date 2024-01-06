import React, { useState, useEffect } from 'react';
import { MoviesAPI } from '../../api/service/MoviesAPI';
import { Spin } from 'antd';
import Movie from './Movie';
import './MoviesList.css';


const MoviesList = ({ searchTerm }) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setLoading(true);
        if (!searchTerm)
            MoviesAPI.getAll()
                .then(response => {
                    setMovies(response);
                })
                .catch(error => {
                    console.error(error);
                }).finally(() => {
                    setLoading(false);
                });
        else
            MoviesAPI.search(searchTerm)
                .then(response => {
                    setMovies(response);
                })
                .catch(error => {
                    console.error(error);
                }).finally(() => {
                    setLoading(false);
                });
    }, [searchTerm]);
    return (
        <div>
            Movies count: {movies.length}
            <Spin spinning={loading} className="movies-list">
                {movies && movies.map((movie) => (
                    <Movie movie={movie} />
                ))}
            </Spin>
        </div>
    );
};

export default MoviesList;