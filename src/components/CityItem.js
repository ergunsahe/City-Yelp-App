import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CityItem = (props) => {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={props.onSelect}
    
    >
      <Text style={styles.text}>{props.data}</Text>
    </TouchableOpacity>
  );
};

export {CityItem};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8eaf6',
    margin: 15,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
