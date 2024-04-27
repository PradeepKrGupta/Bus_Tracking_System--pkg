import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const DriverSignup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleKeyboardDidShow = () => {
        setIsKeyboardOpen(true);
    };

    const handleKeyboardDidHide = () => {
        setIsKeyboardOpen(false);
    };

    const handleSubmit = () => {
        // Validate input fields
        if (!validateName() || !validateEmail() || !validatePassword() || !validateConfirmPassword()) {
            return;
        }

        // Data to be sent to the database (you can send it to an API endpoint)
        const clientData = {
            name,
            email,
            password
        };

        // Here you would send clientData to your database (AWS or any other)
        // For now, I'm just logging it
        console.log(clientData);

        // Navigate back to Auth page after successful signup
        navigation.navigate('Bottom_navigation_driver');
    };

    const handleReset = () => {
        // Reset all input fields and errors
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
    };

    const validateName = () => {
        if (name.trim().length < 3) {
            setNameError('* Name must be at least 3 characters');
            return false;
        }
        if (!/^[a-zA-Z]+$/.test(name)) {
            setNameError('* Invalid Name');
            return false;
        }
        setNameError('');
        return true;
    };

    const validateEmail = () => {
        if (!email.endsWith('@gmail.com')) {
            setEmailError('* incorrect mail id');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = () => {
        if (password.length < 6 || password.length > 15) {
            setPasswordError('* password must be 6-15 characters');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const validateConfirmPassword = () => {
        if (confirmPassword !== password) {
            setConfirmPasswordError('* passwords do not match');
            return false;
        }
        setConfirmPasswordError('');
        return true;
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <Image source={require('../../../assets/DriverSignupBackground.jpeg')} style={styles.backgroundImage} />
            {!isKeyboardOpen && (
                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/logo1.png')} style={styles.logo} />
                </View>
            )}
            <Text style={styles.heading}>Enter Your Details</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
                onFocus={handleKeyboardDidShow}
                onBlur={handleKeyboardDidHide}
            />
            {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                value={email}
                onChangeText={text => setEmail(text)}
                onFocus={handleKeyboardDidShow}
                onBlur={handleKeyboardDidHide}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onFocus={handleKeyboardDidShow}
                    onBlur={handleKeyboardDidHide}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <MaterialCommunityIcons name={showPassword ? 'eye-off' : 'eye'} size={20} color="black" />
                </TouchableOpacity>
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Confirm Password"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    onFocus={handleKeyboardDidShow}
                    onBlur={handleKeyboardDidHide}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
                    <MaterialCommunityIcons name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="black" />
                </TouchableOpacity>
            </View>
            {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleReset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    input: {
        width: '76%',
        height: 45,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 18,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '76%',
        marginBottom: 18,
        position: 'relative',
    },
    passwordInput: {
        flex: 1,
        height: 45,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    },
});

export default DriverSignup;
