import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/busImage.jpeg')} style={styles.backgroundImage} />
      
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo1.png')} style={styles.logo} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginTop:10,

  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    marginBottom: -90,
    borderColor:'orange',
    borderWidth:3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
