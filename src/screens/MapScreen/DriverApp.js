// =====================Below is the Testing code 2 for different features(main code which is working 100% and this is the main don't delete it)=========



import React, { useEffect, useState } from 'react';
import { View, Switch, Image} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { io } from 'socket.io-client';
import * as Location from 'expo-location';

export const DriverApp = () => {
  const [location, setLocation] = useState(null);
  const [satelliteEnabled, setSatelliteEnabled] = useState(false);
  const socket = io('http://54.91.83.65:3000');

  const driverId = Math.floor(Math.random() * 10);

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

  const toggleSatellite = () => {
    setSatelliteEnabled(!satelliteEnabled);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType={satelliteEnabled ? 'satellite' : 'standard'}
      >
        {location && (
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="My Location"
          >
          <Image
              source={require('../../../assets/driver_icon.png')}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          </Marker>
        )}
      </MapView>
      <View style={{ position: 'absolute', top: 20, right: 20 }}>
        <Switch
          value={satelliteEnabled}
          onValueChange={toggleSatellite}
        />
      </View>
    </View>
  );
};





