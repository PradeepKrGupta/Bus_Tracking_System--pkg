// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// // import { Auth } from './src/screens/AuthScreen/Auth';
// // import { ClientApp } from './src/screens/MapScreen/ClientApp';
// import { ClientApp } from './src/screens/MapScreen/ClientApp';
// import { Profile } from './src/screens/ProfileScreen/Profile';
// import { Book } from './src/screens/BookingScreen/Book';

// const Tab = createBottomTabNavigator();

// export const Bottom_navigation_client = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           // if (route.name === 'Auth') {
//           //   iconName = focused ? 'login' : 'login-variant';}
//           if (route.name === 'ClientApp') {
//             iconName = focused ? 'map-marker-radius' : 'map-marker';
//           } else if (route.name === 'Book') {
//             iconName = focused ? 'ticket-confirmation' : 'ticket-outline';
//           }
//           else if (route.name === 'Profile') {
//             iconName = focused ? 'account-circle' : 'account-circle-outline';
//           }
//           return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'purple',
//         tabBarInactiveTintColor: 'gray',
//         tabBarLabelStyle: {
//           paddingBottom: 5,
//           fontSize: 10
//         },
//         tabBarStyle: {
//           paddingVertical: 5,
//           height: 60
//         },
//       })}
//     >
//       {/* <Tab.Screen name="Auth" component={Auth} options={{ headerShown: false, title: 'Login/Signup' }} /> */}
//       <Tab.Screen name="ClientApp" component={ClientApp} options={{ headerShown: false, title: 'Map View' }} />
//       <Tab.Screen name="Book" component={Book} options={{ headerShown: false, title: 'Book Ticket' }} />
//       <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, title: 'Profile' }} />
//     </Tab.Navigator>
//   );
// }







// =============testing the code=====================
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ClientApp } from './src/screens/MapScreen/ClientApp';
import { Profile } from './src/screens/ProfileScreen/Profile';
import { Book } from './src/screens/BookingScreen/Book';

const Tab = createBottomTabNavigator();

export const Bottom_navigation_client = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // if (route.name === 'Auth') {
          //   iconName = focused ? 'login' : 'login-variant';}
          if (route.name === 'ClientApp') {
            iconName = focused ? 'map-marker-radius' : 'map-marker';
          } else if (route.name === 'Book') {
            iconName = focused ? 'ticket-confirmation' : 'ticket-outline';
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
      {/* <Tab.Screen name="Auth" component={Auth} options={{ headerShown: false, title: 'Login/Signup' }} /> */}
      <Tab.Screen name="ClientApp" component={ClientApp} options={{ headerShown: false, title: 'Map View' }} />
      <Tab.Screen name="Book" component={Book} options={{ headerShown: false, title: 'Book Ticket' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, title: 'Profile' }} />
    </Tab.Navigator>
  );
}





// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { ClientApp } from './ClientApp';
// import { SearchScreen } from './SearchScreen'; // Assume you have a component for search screen

// const Tab = createBottomTabNavigator();

// const Bottom_navigation_client = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Map" component={ClientApp} />
//       <Tab.Screen name="Search" component={SearchScreen} />
//     </Tab.Navigator>
//   );
// };

// export default Bottom_navigation_client;
