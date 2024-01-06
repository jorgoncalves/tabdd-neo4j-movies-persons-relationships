import React, { useState, useEffect } from 'react';
import { PersonsAPI } from '../../api/service/PersonsAPI';
import { Spin } from 'antd';
import Person from './Person';
import './PersonsList.css';


const PersonsList = ({ searchTerm }) => {
    const [loading, setLoading] = useState(false);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        setLoading(true);
        if (!searchTerm)
            PersonsAPI.getAll()
                .then(response => {
                    setPersons(response);
                })
                .catch(error => {
                    console.error(error);
                }).finally(() => {
                    setLoading(false);
                });
        else
            PersonsAPI.search(searchTerm)
                .then(response => {
                    setPersons(response);
                })
                .catch(error => {
                    console.error(error);
                }).finally(() => {
                    setLoading(false);
                });
    }, [searchTerm]);
    return (
        <div>
            Persons count: {persons.length}
            <Spin spinning={loading} className="persons-list">
                {persons && persons.map((person) => (
                    <Person person={person} />
                ))}
            </Spin>
        </div>
    );
};

export default PersonsList;