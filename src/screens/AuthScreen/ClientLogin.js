// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Auth } from './Auth';

// export const ClientLogin = ({ navigation }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const handleLogin = async () => {
//         // Validate input fields
//         if (!validateEmail() || !validatePassword()) {
//             return;
//         }

//         // Authentication logic (you can replace it with your AWS authentication)
//         const isAuthenticated = await Auth.authenticate(email, password);

//         if (isAuthenticated) {
//             // Navigate to the BottomNavigation page upon successful login
//             navigation.navigate('Bottom_navigation');
//         } else {
//             // Show error message if authentication fails
//             alert('Invalid email or password');
//         }
//     };

//     const validateEmail = () => {
//         if (!email.endsWith('@gmail.com')) {
//             setEmailError('* Incorrect email format');
//             return false;
//         }
//         setEmailError('');
//         return true;
//     };

//     const validatePassword = () => {
//         if (password.length < 6 || password.length > 15) {
//             setPasswordError('* Password must be 6-15 characters');
//             return false;
//         }
//         setPasswordError('');
//         return true;
//     };

//     return (
//         <KeyboardAvoidingView
//             style={styles.container}
//             behavior={Platform.OS === 'ios' ? 'padding' : null}
//         >
//             <Image source={require('../../../assets/ClientSignupBackground.jpeg')} style={styles.backgroundImage} />
//             <View style={styles.logoContainer}>
//                 <Image source={require('../../../assets/logo1.png')} style={styles.logo} />
//             </View>
//             <Text style={styles.heading}>Client Login</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="example@gmail.com"
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//                 onFocus={() => {}}
//                 onBlur={() => {}}
//             />
//             {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//             <View style={styles.passwordContainer}>
//                 <TextInput
//                     style={styles.passwordInput}
//                     placeholder="Password"
//                     secureTextEntry={true}
//                     value={password}
//                     onChangeText={text => setPassword(text)}
//                     onFocus={() => {}}
//                     onBlur={() => {}}
//                 />
//                 <TouchableOpacity style={styles.eyeIcon}>
//                     <MaterialCommunityIcons name="eye-off" size={20} color="black" />
//                 </TouchableOpacity>
//             </View>
//             {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

//             <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                 <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>
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
//     button: {
//         width: '76%',
//         paddingVertical: 12,
//         borderRadius: 10,
//         backgroundColor: 'black',
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'white',
//     },
//     errorText: {
//         color: 'red',
//         marginBottom: 8,
//         marginLeft: 10,
//     },
// });

// export default ClientLogin;







import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// =======Adding the Firebase Login to this====
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { app } from './FirebaseConfig'; // Import Firebase app instance

const auth = getAuth(app);




export const ClientLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // const handleLogin = async () => {
    //     // Validate input fields
    //     if (!validateEmail() || !validatePassword()) {
    //         return;
    //     }

    //     // Authentication logic (you can replace it with your AWS authentication)
    //     const isAuthenticated = await Auth.authenticate(email, password);

    //     if (isAuthenticated) {
    //         // Navigate to the BottomNavigation page upon successful login
    //         navigation.navigate('Bottom_navigation');
    //     } else {
    //         // Show error message if authentication fails
    //         alert('Invalid email or password');
    //     }
    // };




    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            navigation.navigate('Bottom_navigation_client');
        } catch (error) {
            // console.error('Login error:', error.message);
            alert('Invalid email or password');
        }
    };




    // const validateEmail = () => {
    //     if (!email.endsWith('@gmail.com')) {
    //         setEmailError('* Incorrect email format');
    //         return false;
    //     }
    //     setEmailError('');
    //     return true;
    // };

    // const validatePassword = () => {
    //     if (password.length < 6 || password.length > 15) {
    //         setPasswordError('* Password must be 6-15 characters');
    //         return false;
    //     }
    //     setPasswordError('');
    //     return true;
    // };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <Image source={require('../../../assets/ClientSignupBackground.jpeg')} style={styles.backgroundImage} />
            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logo1.png')} style={styles.logo} />
            </View>
            <Text style={styles.heading}>Client Login</Text>
            <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                value={email}
                onChangeText={text => setEmail(text)}
                onFocus={() => {}}
                onBlur={() => {}}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onFocus={() => {}}
                    onBlur={() => {}}
                />
                <TouchableOpacity style={styles.eyeIcon}>
                    <MaterialCommunityIcons name="eye-off" size={20} color="black" />
                </TouchableOpacity>
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
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
    button: {
        width: '76%',
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
        marginLeft: 10,
    },
});

export default ClientLogin;
