import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

    export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
        const searchAPI = async (searchTerm) => {
            try {
            const response = await yelp.get('/search', {
                params: {
                   limit: 50,
                   term: searchTerm,
                   location: 'san jose' 
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setError('Something went wrong');
        }
        };
    
        useEffect(() => {
            searchAPI('pasta');
        }, []);

        return [searchAPI, results, error];
    };
    