import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {RestaurantItem, SearchBar} from '../components';

let copyList = [];
const RestaurantList = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [restaurantList, setRestaurantList] = useState([]);
  const {selectedCity} = props.route.params;

  function fetcRestaurant() {
    setLoading(true);
    axios
      .get('https://opentable.herokuapp.com/api/restaurants', {
        params: {
          city: selectedCity,
        },
      })
      .then((response) => {
        setRestaurantList(response.data.restaurants);
        copyList = [...response.data.restaurants];
      });
    setLoading(false);
  }
  useEffect(() => {
    fetcRestaurant();
  }, []);

  const renderRestaurant = ({item}) => {
    return (
      <RestaurantItem
        restaurant={item}
        onSelect={() =>
          props.navigation.navigate('Details', {selectedRestaurant: item})
        }
      />
    );
  };

  function restaurantSearch(search) {
    const filteredList = copyList.filter((item) => {
      const text = search.toUpperCase();
      const restaurantName = item.name.toUpperCase();
      return restaurantName.indexOf(text) > -1;
    });
    setRestaurantList(filteredList);
  }

  return (
    <View style={{flex:1}}>
      <Text style={styles.header}>{selectedCity}</Text>
      <SearchBar
        placeholder="Search a restaurant.."
        onSearch={(value) => restaurantSearch(value)}
      />

      {isLoading ? (
        <View style={{flex:1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color="red" />
        </View>
      ) : (
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={restaurantList}
          renderItem={renderRestaurant}
        />
      )}
    </View>
  );
};

export {RestaurantList};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    margin: 5,
  },
});
