import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Auth } from './src/screens/AuthScreen/Auth';
import { Map } from './src/screens/MapScreen/Map';
import { Profile } from './src/screens/ProfileScreen/Profile';
import { Book } from './src/screens/BookingScreen/Book';

const Tab = createBottomTabNavigator();

export const Bottom_navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Auth') {
            iconName = focused ? 'login' : 'login-variant';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map-marker-radius' : 'map-marker';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          } else if (route.name === 'Book') {
            iconName = focused ? 'ticket-confirmation' : 'ticket-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontSize: 10
        },
        tabBarStyle: {
          paddingVertical: 5,
          height: 60
        },
      })}
    >
      <Tab.Screen name="Auth" component={Auth} options={{ headerShown: false, title: 'Login/Signup' }} />
      <Tab.Screen name="Map" component={Map} options={{ headerShown: false, title: 'Map View' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, title: 'Profile' }} />
      <Tab.Screen name="Book" component={Book} options={{ headerShown: false, title: 'Book Ticket' }} />
    </Tab.Navigator>
  );
}
