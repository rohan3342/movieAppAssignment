import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MoreScreen from '../screens/MoreScreen';


const Tabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          style: { height: '10%' },
          labelStyle: { fontSize: 14 },
          tabStyle: { paddingVertical: 5, backgroundColor: '#191919' },
          activeTintColor: '#954B4D',
          inactiveTintColor: 'gray',
        }}
        initialRouteName={HomeScreen}>
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesignIcon size={30} name="home" color="#954B4D" />
              ) : (
                <AntDesignIcon size={30} name="home" color="grey" />
              ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesignIcon size={30} name="search1" color="#954B4D" />
              ) : (
                <AntDesignIcon size={30} name="search1" color="grey" />
              ),
          }}
          name="Search"
          component={SearchScreen}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FeatherIcon size={30} name="menu" color="#954B4D" />
              ) : (
                <FeatherIcon size={30} name="menu" color="grey" />
              ),
          }}
          name="More"
          component={MoreScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Routes;