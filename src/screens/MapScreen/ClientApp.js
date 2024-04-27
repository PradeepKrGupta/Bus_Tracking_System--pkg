// import React, { useEffect, useState } from 'react';
// import MapView, { Marker } from 'react-native-maps';
// import { io } from 'socket.io-client';

// export const ClientApp = () => {
//   const [locations, setLocations] = useState({});

//   useEffect(() => {
//     const socket = io('http://75.101.216.81:3000');

//     socket.on('connect', () => {
//       console.log('Connected to server');
//     });

//     socket.on('disconnect', () => {
//       console.log('Disconnected from server');
//     });

//     // Check for location updates every 3 seconds
//     const intervalId = setInterval(() => {
//       socket.on('locationsUpdate', setLocations);
//       console.log(locations);
//     }, 1000);

//     // Cleanup interval on component unmount
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <MapView style={{ flex: 1,margin:20,
//       justifyContent: 'flex-end' }}>
//    {Object.values(locations).map((location, index) => (
//   location && 'latitude' in location && 'longitude' in location ?
//     <Marker key={index} 
//       coordinate={{ latitude: location["latitude"], longitude: location["longitude"] }}
//       title={`Driver ${index}`}/>
//   : <Marker key={index} 
//   coordinate={{ latitude: 10.0, longitude: 10.0 }}
//   title={`Driver ${index}`}/>
// ))}

//     </MapView>
//   );
// };

// // export default ClientApp;











// =========================Testing code============================
import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { io } from 'socket.io-client';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const ClientApp = () => {
  const [locations, setLocations] = useState({});
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);

  useEffect(() => {
    const socket = io('http://75.101.216.81:3000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Check for location updates every 3 seconds
    const intervalId = setInterval(() => {
      socket.on('locationsUpdate', setLocations);
    }, 3000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleSearch = (data, type) => {
    if (type === 'from') {
      setFromLocation(data);
    } else {
      setToLocation(data);
    }
  };

  return (
    <MapView style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="From"
        onPress={(data) => handleSearch(data, 'from')}
        fetchDetails={true}
        styles={{
          container: {
            position: 'absolute',
            top: 10,
            width: '100%',
          },
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="To"
        onPress={(data) => handleSearch(data, 'to')}
        fetchDetails={true}
        styles={{
          container: {
            position: 'absolute',
            top: 50,
            width: '100%',
          },
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
        }}
      />
      {fromLocation && toLocation && (
        <Polyline
          coordinates={[
            { latitude: fromLocation.geometry.location.lat, longitude: fromLocation.geometry.location.lng },
            { latitude: toLocation.geometry.location.lat, longitude: toLocation.geometry.location.lng },
          ]}
          strokeWidth={4}
          strokeColor="#4287f5"
        />
      )}
      {Object.values(locations).map((location, index) => (
        location && 'latitude' in location && 'longitude' in location ? (
          <Marker
            key={index}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={`Driver ${index}`}
          />
        ) : null
      ))}
    </MapView>
  );
};
