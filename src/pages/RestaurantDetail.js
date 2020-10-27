import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const RestaurantDetail = (props) => {
  const {selectedRestaurant} = props.route.params;
  return (
    <View>
      <Text style={styles.city}>{selectedRestaurant.city}</Text>
      <View style={styles.container}>
        <Image
          source={{uri: selectedRestaurant.image_url}}
          style={styles.image}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.text}> {selectedRestaurant.name}</Text>
          <Text
            style={[
              styles.price,
              {color: selectedRestaurant.price > 2 ? 'red' : 'green'},
            ]}>
            $
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infotext}>{selectedRestaurant.address}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infotext}>{selectedRestaurant.area}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infotext}>{selectedRestaurant.postal_code}</Text>
      </View>
    </View>
  );
};

export {RestaurantDetail};

const styles = StyleSheet.create({
  container: {
    borderColor: '#e8eaf6',
    borderWidth: 10,
    margin: 10,
    padding: 5,
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 30,
    margin: 5,
  },
  infoContainer: {
    backgroundColor: '#26c6da',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  infotext: {
    fontSize: 18,
    color: 'white',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
