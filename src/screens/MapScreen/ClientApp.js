// ========================Working code(100 % working with multiple Drivers never delete it)=======================




import React, { useEffect, useState, useRef } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { io } from 'socket.io-client';
import { View, Image, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert, Button, Animated, Switch } from 'react-native';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import Modal from 'react-native-modal';

const DumyLocation = {
  "342-F (Kempegowda Bus Station → Sarjapura Bus Stand)": { 
    name: "342-F", 
    route: "Kempegowda Bus Station -> Sarjapura Bus Stand", 
    latitude: 12.922552, 
    longitude: 77.618765,
    timings: "4:26 AM to 6:07 AM"
}, 
"500-EB (Baiyappanahalli Metro Station → Electronic City Wipro Main Gate)": { 
    name: "500-EB", 
    route: "Baiyappanahalli Metro Station -> Electronic City Wipro Main Gate", 
    latitude: 13.079141, 
    longitude: 77.736554,
    timings: "5:00 AM to 7:30 AM"
},
"365 (Majestic Bus Station → Bannerghatta National Park)": { 
    name: "365", 
    route: "Majestic Bus Station -> Bannerghatta National Park", 
    latitude: 12.943192, 
    longitude: 77.533267,
    timings: "6:15 AM to 8:45 AM"
},
"201 (Marathahalli Bridge → Banashankari)": { 
    name: "201", 
    route: "Marathahalli Bridge -> Banashankari", 
    latitude: 12.959172, 
    longitude: 77.701194,
    timings: "7:30 AM to 10:00 AM"
},
"215 (Kempegowda Bus Station → Yelahanka Satellite Town)": { 
    name: "215", 
    route: "Kempegowda Bus Station -> Yelahanka Satellite Town", 
    latitude: 13.098172, 
    longitude: 77.574354,
    timings: "8:45 AM to 11:15 AM"
},
"270 (Hebbal → Silk Board Junction)": { 
    name: "270", 
    route: "Hebbal -> Silk Board Junction", 
    latitude: 12.917232, 
    longitude: 77.623456,
    timings: "9:30 AM to 12:00 PM"
},
"335E (Kempegowda International Airport → HSR Layout)": { 
    name: "335E", 
    route: "Kempegowda International Airport -> HSR Layout", 
    latitude: 12.908136, 
    longitude: 77.646391,
    timings: "10:15 AM to 12:45 PM"
},
"500K (K.R. Market → Whitefield)": { 
    name: "500K", 
    route: "K.R. Market -> Whitefield", 
    latitude: 12.969801, 
    longitude: 77.749955,
    timings: "11:00 AM to 1:30 PM"
},
"600 (Mysore Road Satellite Bus Station → ITPL)": { 
    name: "600", 
    route: "Mysore Road Satellite Bus Station -> ITPL", 
    latitude: 12.987347, 
    longitude: 77.737318,
    timings: "12:00 PM to 2:30 PM"
},
"411G (Jayanagar 4th Block → Kengeri Satellite Town)": { 
    name: "411G", 
    route: "Jayanagar 4th Block -> Kengeri Satellite Town", 
    latitude: 12.938164, 
    longitude: 77.533509,
    timings: "1:00 PM to 3:30 PM"
},
"7 (Shivajinagar Bus Station → Vijayanagar)": { 
    name: "7", 
    route: "Shivajinagar Bus Station -> Vijayanagar", 
    latitude: 12.966575, 
    longitude: 77.576309,
    timings: "2:00 PM to 4:30 PM"
},
"171 (Banashankari → J.P. Nagar)": { 
    name: "171", 
    route: "Banashankari -> J.P. Nagar", 
    latitude: 12.925009, 
    longitude: 77.589613,
    timings: "3:00 PM to 5:30 PM"
},
"273 (Koramangala → Kalyan Nagar)": { 
    name: "273", 
    route: "Koramangala -> Kalyan Nagar", 
    latitude: 13.019567, 
    longitude: 77.635978,
    timings: "4:00 PM to 6:30 PM"
},
"500D (Electronic City Phase II → K.R. Puram)": { 
    name: "500D", 
    route: "Electronic City Phase II -> K.R. Puram", 
    latitude: 13.019224, 
    longitude: 77.660569,
    timings: "5:00 PM to 7:30 PM"
},
"215A (Majestic Bus Station → Yelahanka New Town)": { 
    name: "215A", 
    route: "Majestic Bus Station -> Yelahanka New Town", 
    latitude: 13.101984, 
    longitude: 77.596320,
    timings: "6:00 PM to 8:30 PM"
},
"411 (Jayanagar 4th Block → Kengeri)": { 
    name: "411", 
    route: "Jayanagar 4th Block -> Kengeri", 
    latitude: 12.938164, 
    longitude: 77.533509,
    timings: "7:00 PM to 9:30 PM"
},
"402 (Shivajinagar Bus Station → Hebbal)": { 
    name: "402", 
    route: "Shivajinagar Bus Station -> Hebbal", 
    latitude: 13.029203, 
    longitude: 77.591348,
    timings: "8:00 PM to 10:30 PM"
},
"500C (Baiyappanahalli Metro Station → Whitefield)": { 
    name: "500C", 
    route: "Baiyappanahalli Metro Station -> Whitefield", 
    latitude: 12.990520, 
    longitude: 77.728213,
    timings: "9:00 PM to 11:30 PM"
},
"340 (Banashankari → Whitefield)": { 
    name: "340", 
    route: "Banashankari -> Whitefield", 
    latitude: 12.924276, 
    longitude: 77.571823,
    timings: "10:00 PM to 12:30 AM"
},
"356C (Majestic Bus Station → BTM Layout 2nd Stage)": { 
    name: "356C", 
    route: "Majestic Bus Station -> BTM Layout 2nd Stage", 
    latitude: 12.916575, 
    longitude: 77.610116,
    timings: "11:00 PM to 1:30 AM"
},
"291 (Kempegowda Bus Station → Rajarajeshwari Nagar)": { 
    name: "291", 
    route: "Kempegowda Bus Station -> Rajarajeshwari Nagar", 
    latitude: 12.935518, 
    longitude: 77.491963,
    timings: "12:00 AM to 2:30 AM"
}
};

export const ClientApp = () => {
  const [locations, setLocations] = useState({});
  const [search, setSearch] = useState('');
  const [myLocation, setMyLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [mapType, setMapType] = useState('standard');

  const markerRefs = useRef({});
  const mapRef = useRef(null);

  const [travelTime, setTravelTime] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-100)).current;

  const slideUp = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slideAnim, {
      toValue: -100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const onSearch = (searchText) => {
    setSearch(searchText);
    if (searchText.length > 0) {
      const searchResults = Object.keys(DumyLocation).filter(l =>
        l.toLowerCase().includes(searchText.toLowerCase())
      );
      setSuggestions(searchResults);
    } else {
      setSuggestions([]);
    }
  };

  const onMarkerPress = (locationName) => {
    setSelectedLocation(DumyLocation[locationName]);
    markerRefs.current[locationName].showCallout();
    setPopupVisible(true);
    slideUp();
  };

  const onDirectionReady = (result) => {
    setTravelTime(parseInt(result.duration));
    setPopupVisible(true);
    slideUp();
  };

  const onSelectSuggestion = (locationName) => {
    setSelectedLocation(DumyLocation[locationName]);
    setSearch('');
    setSuggestions([]);
    mapRef.current.animateToRegion({
      latitude: DumyLocation[locationName].latitude,
      longitude: DumyLocation[locationName].longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    markerRefs.current[locationName].showCallout();
  };

  useEffect(() => {
    const getLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setMyLocation(location.coords);
    };
    getLocationPermission();

    const socket = io('http://54.91.83.65:3000');

    socket.on('connect', () => {
      console.log('Connected to the server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from the server');
    });

    const intervalId = setInterval(() => {
      socket.on('locationsUpdate', setLocations);
      console.log(locations);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      socket.disconnect();
    };
  }, []);

  const toggleMapType = () => {
    setMapType(mapType === 'standard' ? 'satellite' : 'standard');
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 12.9716,
          longitude: 77.5946,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        mapType={mapType}
      >
        {myLocation && (
          <Marker
            coordinate={myLocation}
            title="My Location"
            pinColor="blue"
          >
            <Image
              source={require('../../../assets/boy_face.png')}
              style={{ width: 30, height: 30 }}
            />
          </Marker>
        )}

        {Object.keys(DumyLocation).map((key) => (
          <Marker
            key={key}
            ref={ref => markerRefs.current[key] = ref}
            coordinate={{
              latitude: DumyLocation[key].latitude,
              longitude: DumyLocation[key].longitude,
            }}
            title={DumyLocation[key].name}
            description={DumyLocation[key].route}
            onPress={() => onMarkerPress(key)}
          >
            <Image
              source={require('../../../assets/bus_icon.png')}
              style={{ width: 30, height: 30 }}
            />
            <Callout tooltip={true} style={styles.calloutBucket}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{DumyLocation[key].name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}

        {Object.values(locations).map((location, index) => (
          location && 'latitude' in location && 'longitude' in location ?
            <Marker key={index} 
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title={`Driver ${index}`} />
            : <Marker key={index} 
              coordinate={{ latitude: 10.0, longitude: 10.0 }}
              title={`Driver ${index}`} />
        ))}

        {selectedLocation && myLocation && (
          <MapViewDirections
            origin={myLocation}
            destination={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            apikey="Your API KEY" //API KEY
            strokeWidth={4}
            strokeColor="purple"
            onReady={onDirectionReady}
          />
        )}
      </MapView>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a bus"
          value={search}
          onChangeText={onSearch}
        />
        {suggestions.length > 0 && (
          <FlatList
            data={suggestions}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onSelectSuggestion(item)}>
                <View style={styles.suggestionItem}>
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            style={styles.suggestionsList}
          />
        )}
      </View>

      <Modal
        isVisible={isPopupVisible}
        onBackdropPress={() => {
          setPopupVisible(false);
          slideDown();
        }}
        style={styles.modal}
      >
        <View style={styles.popup}>
          <Text style={styles.popupText}>Selected Bus: {selectedLocation?.name}</Text>
          <Text style={styles.popupText}>Route: {selectedLocation?.route}</Text>
          <Text style={styles.popupText}>Timings: {selectedLocation?.timings}</Text>
          <Text style={styles.popupText}>Reached to me in: {travelTime} mins</Text>
          <Button title="Close"
            onPress={() => {
              setPopupVisible(false);
              slideDown();
            }}
          />
        </View>
      </Modal>

      <View style={styles.toggleContainer}>
        <Text style={{ marginRight: 10, color: 'white', paddingVertical: 4, paddingHorizontal: 10, fontWeight: 'bold', borderWidth: 2, borderColor: 'purple', borderRadius: 20, backgroundColor: 'purple' }}>Standard</Text>
        <Switch
          value={mapType === 'satellite'}
          onValueChange={toggleMapType}
        />
        <Text style={{ marginLeft: 10, color: 'white', paddingVertical: 4, paddingHorizontal: 10, fontWeight: 'bold', borderWidth: 2, borderColor: 'purple', borderRadius: 20, backgroundColor: 'purple' }}>Satellite</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    top: 5,
    left: 40,
    right: 52,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 2,
    elevation: 10,
    zIndex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  suggestionsList: {
    marginTop: 3,
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  popup: {
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  calloutContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 10,
  },
  calloutTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
});


