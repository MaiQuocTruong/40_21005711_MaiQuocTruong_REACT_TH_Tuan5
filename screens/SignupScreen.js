import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Image, ScrollView } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userNameFocused, setUserNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [users, setUsers] = useState([]);

    const handleSignup = () => {
        if (userName && email && password && agreeTerms) {
            const newUser = { userName, email, password };
            setUsers([...users, newUser]);
            alert('Đăng ký thành công!');
            navigation.navigate('Welcome', { users: [...users, newUser] });
        } else {
            alert('Vui lòng tích vào ô');
        }
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image source={require('../assets/DATA/Image19.png')} style={styles.image} />
                <Text style={styles.title}>Nice to see you!</Text>
                <Text style={styles.subtitle}>Create your account</Text>

                {/* User Name Input */}
                <View style={[styles.inputContainer, userNameFocused && styles.inputFocused]}>
                    <Image source={require('../assets/DATA/codicon_account.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your user name"
                        placeholderTextColor="#aaa"
                        keyboardType="default"
                        onFocus={() => setUserNameFocused(true)}
                        onBlur={() => setUserNameFocused(false)}
                        onChangeText={(text) => setUserName(text)}
                    />
                </View>

                {/* Email Input */}
                <View style={[styles.inputContainer, emailFocused && styles.inputFocused]}>
                    <Image source={require('../assets/DATA/Vector.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email address"
                        placeholderTextColor="#aaa"
                        keyboardType="email-address"
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                {/* Password Input */}
                <View style={[styles.inputContainer, passwordFocused && styles.inputFocused]}>
                    <Image source={require('../assets/DATA/lock.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                {/* Terms and Conditions */}
                <View style={styles.checkboxContainer}>
                    <CheckBox value={agreeTerms} onValueChange={setAgreeTerms} />
                    <Text style={styles.checkboxLabel}>I agree to the Terms and Conditions</Text>
                </View>

                {/* Signup Button */}
                <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Login Link */}
                <Text style={styles.loginLink} onPress={() => navigation.navigate('Home')}>
                    Already have an account? Login
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        marginBottom: 15,
    },
    inputFocused: {
        borderColor: '#00bdd6',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        color: '#000',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 10,
        color: '#000',
    },
    signupButton: {
        backgroundColor: '#00bdd6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        width: '100%',
    },
    signupButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    loginLink: {
        marginTop: 20,
        color: '#00bdd6',
    },
});

export default SignupScreen;
