import React, { useState } from 'react';
import MoviesList from '../components/Movies/MoviesList';
import SearchBar from '../components/util/SearchBar/SearchBar';

const MoviesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <h1>Movies</h1>
            <MoviesList searchTerm={searchTerm} />
        </>
    );
};

export default MoviesPage;