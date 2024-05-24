import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Profile } from './src/screens/ProfileScreen/Profile';
import { Book } from './src/screens/BookingScreen/Book';
import { ClientApp } from './src/screens/MapScreen/ClientApp';

const Tab = createBottomTabNavigator();

export const Bottom_navigation_client = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'ClientApp') {
            iconName = focused ? 'map-marker-radius' : 'map-marker';
          } else if (route.name === 'Book') {
            iconName = focused ? 'ticket-confirmation' : 'ticket-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
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
      <Tab.Screen name="ClientApp" component={ClientAppScreen} options={{ headerShown: false, title: 'Map View' }} />
      <Tab.Screen name="Book" component={Book} options={{ headerShown: false, title: 'Book Ticket' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, title: 'Profile' }} />
    </Tab.Navigator>
  );
};

const ClientAppScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ClientApp />
    </View>
  );
};








