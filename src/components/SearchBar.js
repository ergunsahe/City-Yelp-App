import React from "react";
import {View, TextInput, StyleSheet} from "react-native";

const SearchBar =(props) =>{
    return(
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={(value) =>props.onSearch(value)}
            
            />
        </View>
    )
}

export {SearchBar}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#e0e0e0",
        padding:2,
        margin:10,
        borderRadius:10
    }
})