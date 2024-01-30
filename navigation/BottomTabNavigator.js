import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import MoreScreen from '../screens/MoreScreen';
import { theme } from '../themes/theme';
//Icons
import HomeOutline from '../assets/images/HomeOutline.svg';
import HomeBold from '../assets/images/HomeBold.svg';
import CategoryOutline from '../assets/images/CategoryOutline.svg';
import CategoryBold from '../assets/images/CategoryBold.svg';
import HeartOutline from '../assets/images/HeartOutline.svg';
import MoreVertical from '../assets/images/MoreVertical.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
    <Tab.Navigator initialRouteName="Home" backBehavior='history'
    screenOptions={{
      tabBarActiveTintColor: theme.colors.primary, // Change the color of active tab label and icon
      tabBarInactiveTintColor: theme.colors.grey400, // Change the color of inactive tab label and icon
      tabBarLabelStyle: {
        fontFamily: theme.textVariants.medium,
        fontSize: 10, // Change the font size of tab labels
      },
      tabBarStyle: {
        backgroundColor: theme.colors.background, // Change the background color of the tab bar
        borderRadius:30,
        borderColor: theme.colors.grey100,
        paddingHorizontal:24,
        paddingTop:10,
      },
    }}
    >
        <Tab.Screen name="Home" component={HomeScreen} options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) =>(
          focused ? <HomeBold/> : <HomeOutline/>
        ),
        }}/>
        <Tab.Screen name="Categories" component={CategoriesScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({focused}) =>(
            <CategoryOutline/>
          ),
          }}/>
        <Tab.Screen name="Favourite" component={FavouriteScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({focused}) =>(
            <HeartOutline/>
          ),
          }}/>
        <Tab.Screen name="More" component={MoreScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({focused}) =>(
            <MoreVertical/>
          ),
          }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;