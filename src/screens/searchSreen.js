import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsLists from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = ( ) =>{
    const [term, setTerm] = useState('');
    const [searchApi, results,errorMessage] = useResults(); 

    const filterResultsByPrice = (price) =>{
        //price  === '$' || '$$' || '$$$'
        return results.filter(result =>{
            return result.price === price;
        });
    };
    return (
    <View style={{flex: 1}}>
        <SearchBar
         term = {term}
          onSearchChange ={setTerm}
          onTermSubmit = {()=>searchApi(term)}
          />
          {errorMessage ? <Text>{errorMessage}</Text>: null}
        
       <ScrollView>
        <ResultsLists 
        
        result={filterResultsByPrice('$') } 
        title="Cost Effective"/>
        <ResultsLists 
        result={filterResultsByPrice('$$') } 
         title="Bit Pricier "
         
         />
        <ResultsLists 
        result={filterResultsByPrice('$$$') }
         title="Big Spender"
        
         />
        </ScrollView>
    </View>);
};


const styles = StyleSheet.create({
    
});
export default SearchScreen;