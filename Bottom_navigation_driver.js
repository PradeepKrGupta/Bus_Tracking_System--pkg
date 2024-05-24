import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DriverApp } from './src/screens/MapScreen/DriverApp';
import { Profile } from './src/screens/ProfileScreen/Profile';

const Tab = createBottomTabNavigator();

export const Bottom_navigation_driver = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'DriverApp') {
            iconName = focused ? 'map-marker-radius' : 'map-marker';
          }
          else if (route.name === 'Profile') {
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
      <Tab.Screen name="DriverApp" component={DriverApp} options={{ headerShown: false, title: 'Map View' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, title: 'Profile' }} />
    </Tab.Navigator>
  );
}
