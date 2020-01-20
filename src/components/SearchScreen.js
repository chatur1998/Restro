import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from './ResultsList';
//import { ScrollView } from 'react-native-gesture-handler';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, error] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost effective" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Pricier" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Spender" 
                />
            </ScrollView>
        </View>        
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;