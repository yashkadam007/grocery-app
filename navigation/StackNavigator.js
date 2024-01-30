import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabNavigator">
         <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{  
         headerShown: false,
        }}/>
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{  
         headerShown: false,
        }}/>
         <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} options={{  
         headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
