// =====================Working Code====================

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
// import { app } from './FirebaseConfig'; // Import Firebase app instance

// const auth = getAuth(app);

// export const DriverSignup = ({ navigation }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [nameError, setNameError] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [confirmPasswordError, setConfirmPasswordError] = useState('');

//     useEffect(() => {
//         const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
//         const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

//         return () => {
//             keyboardDidShowListener.remove();
//             keyboardDidHideListener.remove();
//         };
//     }, []);

//     const handleKeyboardDidShow = () => {
//         setIsKeyboardOpen(true);
//     };

//     const handleKeyboardDidHide = () => {
//         setIsKeyboardOpen(false);
//     };

//     const handleReset = () => {
//         setName('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setNameError('');
//         setEmailError('');
//         setPasswordError('');
//         setConfirmPasswordError('');
//     };

//     const validateInputs = () => {
//         let isValid = true;
//         if (name.trim().length < 3) {
//             setNameError('* Name must be at least 3 characters');
//             isValid = false;
//         } else {
//             setNameError('');
//         }

//         if (!email.endsWith('@gmail.com')) {
//             setEmailError('* Incorrect email format');
//             isValid = false;
//         } else {
//             setEmailError('');
//         }

//         if (password.length < 6 || password.length > 15) {
//             setPasswordError('* Password must be 6-15 characters');
//             isValid = false;
//         } else {
//             setPasswordError('');
//         }

//         if (confirmPassword !== password) {
//             setConfirmPasswordError('* Passwords do not match');
//             isValid = false;
//         } else {
//             setConfirmPasswordError('');
//         }

//         return isValid;
//     };

//     const handleSignup = async () => {
//         try {
//             if (validateInputs()) {
//                 await createUserWithEmailAndPassword(auth, email, password);
//                 Alert.alert("You registered Successfully!");
//                 navigation.navigate('DriverLogin');
//             }
//         } catch (error) {
//             // console.error('Signup error:', error.message);
//             Alert.alert("Email Id is Already Registered!, Please try again");
//         }
//     };

//     return (
//         <KeyboardAvoidingView
//             style={styles.container}
//             behavior={Platform.OS === 'ios' ? 'padding' : null}
//         >
//             <Image source={require('../../../assets/DriverSignupBackground.jpeg')} style={styles.backgroundImage} />
//             {!isKeyboardOpen && (
//                 <View style={styles.logoContainer}>
//                     <Image source={require('../../../assets/logo1.png')} style={styles.logo} />
//                 </View>
//             )}
//             <Text style={styles.heading}>Enter Your Details</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Name"
//                 value={name}
//                 onChangeText={text => setName(text)}
//                 onFocus={handleKeyboardDidShow}
//                 onBlur={handleKeyboardDidHide}
//             />
//             {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
//             <TextInput
//                 style={styles.input}
//                 placeholder="example@gmail.com"
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//                 onFocus={handleKeyboardDidShow}
//                 onBlur={handleKeyboardDidHide}
//             />
//             {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//             <View style={styles.passwordContainer}>
//                 <TextInput
//                     style={styles.passwordInput}
//                     placeholder="Password"
//                     secureTextEntry={!showPassword}
//                     value={password}
//                     onChangeText={text => setPassword(text)}
//                     onFocus={handleKeyboardDidShow}
//                     onBlur={handleKeyboardDidHide}
//                 />
//                 <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
//                     <MaterialCommunityIcons name={showPassword ? 'eye-off' : 'eye'} size={20} color="black" />
//                 </TouchableOpacity>
//             </View>
//             {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
//             <View style={styles.passwordContainer}>
//                 <TextInput
//                     style={styles.passwordInput}
//                     placeholder="Confirm Password"
//                     secureTextEntry={!showConfirmPassword}
//                     value={confirmPassword}
//                     onChangeText={text => setConfirmPassword(text)}
//                     onFocus={handleKeyboardDidShow}
//                     onBlur={handleKeyboardDidHide}
//                 />
//                 <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
//                     <MaterialCommunityIcons name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="black" />
//                 </TouchableOpacity>
//             </View>
//             {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

//             <View style={styles.buttonContainer}>
//                 <TouchableOpacity style={styles.button} onPress={handleSignup}>
//                     <Text style={styles.buttonText}>Register</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button} onPress={handleReset}>
//                     <Text style={styles.buttonText}>Reset</Text>
//                 </TouchableOpacity>
//             </View>
//         </KeyboardAvoidingView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover',
//     },
//     logoContainer: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     logo: {
//         width: 80,
//         height: 80,
//         resizeMode: 'contain',
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         color: 'black',
//     },
//     input: {
//         width: '76%',
//         height: 45,
//         borderColor: 'black',
//         borderWidth: 2,
//         borderRadius: 8,
//         paddingHorizontal: 10,
//         marginBottom: 18,
//         backgroundColor: 'transparent',
//         fontWeight: 'bold',
//     },
//     passwordContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: '76%',
//         marginBottom: 18,
//         position: 'relative',
//     },
//     passwordInput: {
//         flex: 1,
//         height: 45,
//         borderColor: 'black',
//         borderWidth: 2,
//         borderRadius: 8,
//         paddingHorizontal: 10,
//         backgroundColor: 'transparent',
//         fontWeight: 'bold',
//     },
//     eyeIcon: {
//         position: 'absolute',
//         right: 10,
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '80%',
//     },
//     button: {
//         paddingHorizontal: 30,
//         paddingVertical: 10,
//         borderRadius: 10,
//         marginHorizontal: 10,
//         backgroundColor: 'black',
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'white',
//     },
//     errorText: {
//         color: 'red',
//         marginBottom: 8,
//     },
// });

// export default DriverSignup;







// =================================Testing code==================================

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, Keyboard,Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { app } from './FirebaseConfig'; // Import Firebase app instance

const auth = getAuth(app);

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

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleKeyboardDidShow = () => {
        setIsKeyboardOpen(true);
    };

    const handleKeyboardDidHide = () => {
        setIsKeyboardOpen(false);
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
    };

    const validateInputs = () => {
        let isValid = true;
        if (name.trim().length < 3) {
            setNameError('* Name must be at least 3 characters');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!email.endsWith('@gmail.com')) {
            setEmailError('* Incorrect email format');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (password.length < 6 || password.length > 15) {
            setPasswordError('* Password must be 6-15 characters');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (confirmPassword !== password) {
            setConfirmPasswordError('* Passwords do not match');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        return isValid;
    };

    const handleSignup = async () => {
        try {
            if (validateInputs()) {
                await createUserWithEmailAndPassword(auth, email, password);
                Alert.alert("You registered Successfully!");
                navigation.navigate('DriverLogin');
            }
        } catch (error) {
            // console.error('Signup error:', error.message);
            Alert.alert("Email Id is Already Registered!, Please try again");
        }
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
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Register</Text>
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
