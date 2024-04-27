// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Provider as PaperProvider } from 'react-native-paper';

// import {Auth} from './src/screens/AuthScreen/Auth';
// import {Map} from './src/screens/MapScreen/Map';
// import {Profile} from './src/screens/ProfileScreen/Profile';
// import {Book} from './src/screens/BookingScreen/Book';

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
//               if (route.name === 'Auth') {
//                 iconName = focused ? 'login' : 'login-variant';
//               } else if (route.name === 'Map') {
//                 iconName = focused ? 'map-marker-radius' : 'map-marker';
//               } else if (route.name === 'Profile') {
//                 iconName = focused ? 'account-circle' : 'account-circle-outline';
//               } else if (route.name === 'Book') {
//                 iconName = focused ? 'ticket-confirmation' : 'ticket-outline';
//               }
//               return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: 'tomato',
//             tabBarInactiveTintColor: 'gray',
//             tabBarLabelStyle: {
//               paddingBottom: 5,
//               fontSize: 10
//             },
//             tabBarStyle: {
//               paddingVertical: 5,
//               height: 60
//             },
//           })}
//         >
//           <Tab.Screen name="Auth" component={Auth} options={{ headerShown: false, title: 'Login/Signup' }} />
//           <Tab.Screen name="Map" component={Map} options={{ headerShown: false, title: 'Map View' }} />
//           <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, title: 'Profile' }} />
//           <Tab.Screen name="Book" component={Book} options={{ headerShown: false, title: 'Book Ticket' }} />
//         </Tab.Navigator>
//         <StatusBar style="auto" />
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }

// export default App;













// App.js
// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { Auth } from './src/screens/AuthScreen/Auth';
// import { Home } from './src/screens/HomeScreen/Home';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
//         <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
//       </Stack.Navigator>
//       <StatusBar style="auto" />
//     </NavigationContainer>
//   );
// }

// export default App;





// -----------Navigation setup==========================
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from './src/screens/AuthScreen/Auth';
import { Home } from './src/screens/HomeScreen/Home';
import { ClientLogin } from './src/screens/AuthScreen/ClientLogin';
import { ClientSignup } from './src/screens/AuthScreen/ClientSignup';
import { DriverLogin } from './src/screens/AuthScreen/DriverLogin';
import { DriverSignup } from './src/screens/AuthScreen/DriverSignup';
import { Bottom_navigation_driver } from './Bottom_navigation_driver';
import { Bottom_navigation_client } from './Bottom_navigation_client';
import { View, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const headerTitleStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  };

  const headerStyle = {
    backgroundColor: '#a0c5e9',
  };

  const CustomHeaderTitle = ({ title }) => {
    return (
      <View style={styles.customHeader}>
        <Text style={headerTitleStyle}>{title}</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: headerStyle,
          headerTitle: (props) => <CustomHeaderTitle {...props} />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false }}
        />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen
          name="ClientSignup"
          component={ClientSignup}
          options={{ headerTitle: 'Client Signup' }}
        />
        <Stack.Screen
          name="DriverSignup"
          component={DriverSignup}
          options={{ headerTitle: 'Driver Signup' }}
        />
        <Stack.Screen
          name="ClientLogin"
          component={ClientLogin}
          options={{ headerTitle: 'Client Login' }}
        />
        <Stack.Screen
          name="DriverLogin"
          component={DriverLogin}
          options={{ headerTitle: 'Driver Login' }}
        />
        <Stack.Screen
          name="Bottom_navigation_driver"
          component={Bottom_navigation_driver}
          options={{ headerTitle: 'Welcome Driver' ,headerShown:true }}
        />
        <Stack.Screen
          name="Bottom_navigation_client"
          component={Bottom_navigation_client}
          options={{headerTitle: 'Welcome Client' , headerShown:true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  customHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;



