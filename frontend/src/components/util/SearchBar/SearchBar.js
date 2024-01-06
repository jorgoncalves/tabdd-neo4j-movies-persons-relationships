import React, { useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const inputRef = useRef(null);

    const handleChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    };

    const debouncedHandleChange = debounce((event) => {
        console.log('Search term:', event.target.value);
    }, 500);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="search-bar">
            <input
                type="text"
                ref={inputRef}
                placeholder="Search..."
                onChange={handleChange}
                onKeyDown={debouncedHandleChange}
                value={searchTerm}
            />
        </div>
    );
};

export default SearchBar;
