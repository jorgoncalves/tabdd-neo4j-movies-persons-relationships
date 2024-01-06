import React, { useState } from 'react';
import PersonsList from '../components/Persons/PersonsList';
import SearchBar from '../components/util/SearchBar/SearchBar';

const PersonsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <h1>Persons</h1>
            <PersonsList searchTerm={searchTerm} />
        </>
    );
};

export default PersonsPage;