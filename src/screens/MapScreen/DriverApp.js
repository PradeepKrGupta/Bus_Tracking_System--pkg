import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import {io}  from 'socket.io-client';
import SocketIOClient from 'socket.io-client';
import MapView, { Marker } from 'react-native-maps';
import { Button, View } from 'react-native';

export const DriverApp = ({ driverId=0 }) => {
  const [location, setLocation] = useState(null);
  const socket = io('http://75.101.216.81:3000');
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      socket.on('connect_attempt', () => {
        console.log('Attempting to connect to server...');
      });

      socket.on('connect', () => {
        console.log('Connected to server');
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from server');
      });

      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 0, timeInterval: 1000 },
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          socket.emit('locationUpdate', { driverId, latitude, longitude });
        }
      );
    })();
  }, []);


  return (
    <View style={{ flex: 1, margin:20,
      justifyContent: 'flex-end',}}>
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: location ? location.latitude : 0,
        longitude: location ? location.longitude : 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {location && (
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="Driver Location"
        />
      )}
    </MapView>
    <View style={{  marginBottom: 20, }}>
    {/* <Button title="Send Data" onPress={sendDataToServer} /> */}
  </View>
  </View>
  );
};

// export default DriverApp;
