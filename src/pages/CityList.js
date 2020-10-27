import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {CityItem, SearchBar} from '../components';

let copyList = [];
const CityList = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [cityList, setCityList] = useState([]);

  const fetchRestaurant = async () => {
    setLoading(true);
    const {data} = await axios.get(
      'https://opentable.herokuapp.com/api/cities',
    );
    setCityList(data.cities);
    copyList = [...data.cities];
    setLoading(false);
  };
  //   const renderCity = ({item}) => {
  //     return (
  //       <>
  //         {isLoading ?
  //         <ActivityIndicator color="red" size={"large"}/>
  //         :
  //         <CityItem
  //           data={item}
  //           onSelect={() =>
  //             props.navigation.navigate('Restaurants', {selectedCity: item})
  //           }
  //         />
  //         }
  //       </>
  //     );
  //   };

  const renderCity = ({item}) => {
    return (
      <CityItem
        data={item}
        onSelect={() =>
          props.navigation.navigate('Restaurants', {selectedCity: item})
        }
      />
    )

  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const citySearch = (search) => {
    const filteredCities = copyList.filter((city) => {
      const text = search.toUpperCase();
      const cityName = city.toUpperCase();

      return cityName.indexOf(text) > -1;
    });
    setCityList(filteredCities);
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={styles.header}>Cities</Text>
        <SearchBar
          placeholder="Search a city"
          onSearch={(value) => citySearch(value)}
        />
      </View>

      {
          isLoading ?
            <View style={{flex:1, justifyContent:"center"}}>
                <ActivityIndicator size={"large"} color="red"/>
            </View>
            :
            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={cityList}
                renderItem={renderCity}
                ItemSeparatorComponent={renderSeparator}
            />
      }

    </View>
  );
};

export {CityList};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    alignSelf: 'center',
  },
  separator: {
    borderWidth: 1,
    borderColor: '#ede7f6',
  },
});
