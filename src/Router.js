import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {CityList, RestaurantList, RestaurantDetail} from "./pages"

const Stack= createStackNavigator()
const Router = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Cities" component={CityList} options={{headerShown:false}} />
                <Stack.Screen name="Restaurants" component={RestaurantList}/>
                <Stack.Screen name="Details" component={RestaurantDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router