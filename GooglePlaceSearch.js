// GooglePlacesSearch.js

import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesSearch = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data);
        console.log(details);
      }}
      query={{
        key: 'YOUR_API_KEY',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesSearch;
