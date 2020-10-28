import React from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';



const SearchBar = ({term, onSearchChange, onTermSubmit}) =>{
    return (<View style = {styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput style={styles.Inpustyle} placeholder="Search" 
        autoCapitalize="none"
        autoCorrect={false}
        value = {term }
        onChangeText = {newterm => onSearchChange(newterm)}
        onEndEditing = {()=>onTermSubmit()}
        />
    </View>);
};


const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginBottom:10,
        backgroundColor: '#dedcdc',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    Inpustyle: {
        fontSize: 18,
        flex:1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }

});
export default SearchBar;