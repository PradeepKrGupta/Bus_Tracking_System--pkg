import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Auth = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSignup = () => {
        if (selectedOption === 'client') {
            navigation.navigate('ClientSignup');
        } else if (selectedOption === 'driver') {
            navigation.navigate('DriverSignup');
        }
    };

    const handleLogin = () => {
        if (selectedOption === 'client') {
            navigation.navigate('ClientLogin');
        } else if (selectedOption === 'driver') {
            navigation.navigate('DriverLogin');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/AuthBackground.jpg')} style={styles.backgroundImage} />
            <View style={styles.logo}>
                <Image source={require('../../../assets/logo1.png')} style={styles.logo} />
            </View>
            <View style={styles.header}>
                <Text style={styles.heading}>User Authentication</Text>
            </View>
            <View style={styles.options}>
                <Text style={styles.optionText}>Are you?</Text>
                <TouchableOpacity
                    style={[styles.optionButton, selectedOption === 'client' && styles.selectedOption]}
                    onPress={() => setSelectedOption('client')}
                >
                    <Text style={[styles.optionText, selectedOption === 'client' && styles.selectedText]}>Client</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.optionButton, selectedOption === 'driver' && styles.selectedOption]}
                    onPress={() => setSelectedOption('driver')}
                >
                    <Text style={[styles.optionText, selectedOption === 'driver' && styles.selectedText]}>Driver</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    header: {
        marginTop: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        // marginTop:10
    },
    options: {
        alignItems: 'center',
        marginVertical: 20,
    },
    optionButton: {
        paddingHorizontal: 75,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    selectedOption: {
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    optionText: {
        fontSize: 16,
        color: 'white',
        fontWeight:'bold'
    },
    selectedText: {
        fontWeight: 'bold',
        color:'black'
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});
