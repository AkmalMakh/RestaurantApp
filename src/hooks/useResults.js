import {useEffect, useState} from 'react';

import yelp from '../api/yelp';

export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setError] = useState('');


    const searchApi = async(searchTerm) =>{
        console.log('hi there')
      try {const response = await yelp.get('/search',{
           params:{
               limit: 50,
               term: searchTerm,
               location: 'new york'
           }
       });
       setResults(response.data.businesses);
    }
    catch (err) {
        setError('Ups Somthing went wrong ');
    }
    };
    useEffect (()=>{
        searchApi()
    },[]);
    return [searchApi,results,errorMessage];
};