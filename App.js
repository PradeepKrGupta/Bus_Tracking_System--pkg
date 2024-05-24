// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Auth } from './src/screens/AuthScreen/Auth';
// import { Home } from './src/screens/HomeScreen/Home';
// import { ClientLogin } from './src/screens/AuthScreen/ClientLogin';
// import { ClientSignup } from './src/screens/AuthScreen/ClientSignup';
// import { DriverLogin } from './src/screens/AuthScreen/DriverLogin';
// import { DriverSignup } from './src/screens/AuthScreen/DriverSignup';
// import { Bottom_navigation_driver } from './Bottom_navigation_driver';
// import { Bottom_navigation_client } from './Bottom_navigation_client';
// import { View, Text, StyleSheet } from 'react-native';
// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "./firebaseConfig"; // Import your Firebase configuration

// const Stack = createStackNavigator();

// const App = () => {
//   const headerTitleStyle = {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   };

//   const headerStyle = {
//     backgroundColor: '#a0c5e9',
//   };

//   const CustomHeaderTitle = ({ title }) => {
//     return (
//       <View style={styles.customHeader}>
//         <Text style={headerTitleStyle}>{title}</Text>
//       </View>
//     );
//   };

//   // Initialize Firebase
//   initializeApp(firebaseConfig);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerShown: true,
//           headerStyle: headerStyle,
//           headerTitle: (props) => <CustomHeaderTitle {...props} />,
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{headerShown: false }}
//         />
//         <Stack.Screen name="Auth" component={Auth} />
//         <Stack.Screen
//           name="ClientSignup"
//           component={ClientSignup}
//           options={{ headerTitle: 'Client Signup' }}
//         />
//         <Stack.Screen
//           name="DriverSignup"
//           component={DriverSignup}
//           options={{ headerTitle: 'Driver Signup' }}
//         />
//         <Stack.Screen
//           name="ClientLogin"
//           component={ClientLogin}
//           options={{ headerTitle: 'Client Login' }}
//         />
//         <Stack.Screen
//           name="DriverLogin"
//           component={DriverLogin}
//           options={{ headerTitle: 'Driver Login' }}
//         />
//         <Stack.Screen
//           name="Bottom_navigation_driver"
//           component={Bottom_navigation_driver}
//           options={{ headerTitle: 'Welcome Driver' ,headerShown:true }}
//         />
//         <Stack.Screen
//           name="Bottom_navigation_client"
//           component={Bottom_navigation_client}
//           options={{headerTitle: 'Welcome Client' , headerShown:true }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   customHeader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;






// ================Testing the app===================
import { registerRootComponent } from 'expo';
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