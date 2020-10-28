import React,{useState,useEffect} from 'react'
import {Text, View,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) =>{
const id  = navigation.getParam('id');
const [result,setResult] = useState(null); 


const getresults = async (id) =>{
   const response = await yelp.get(`/${id}`);
   setResult(response.data);
};
useEffect(()=>{
    getresults(id);
}, []);

if(!result){
    return null;
}
    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
            data = {result.photos}
            keyExtractor={(photo)=> photo}
            renderItem={({item})=>{
                return <Image style={styles.image} source = {{ uri: item}}/>
            }}
            />
        </View>
    );
}; 


const styles = StyleSheet.create({
    image:{
        height:200,
        width: 300
    }
});

export default ResultShowScreen;
