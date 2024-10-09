import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* background with rounded corners */}
            <View style={styles.imageBackground}>
                <Image source={require('../assets/DATA/Image18.png')} style={styles.image} resizeMode="contain" />
            </View>
            <Text style={styles.title}>Boost Productivity</Text>
            <Text style={styles.subtitle}>Simplify tasks, boost productivity</Text>
            <View style={styles.buttonContainer}>
                {/* Sign Up Button */}
                <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                {/* Three dots below the buttons */}
                <View style={styles.dotContainer}>
                    <View style={styles.dot} />
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: '5%', 
    },
    imageBackground: {
        backgroundColor: '#a64ca6',  
        width: width * 0.9,          
        height: height * 0.59,     
        alignItems: 'center',        
        justifyContent: 'center',   
        borderRadius: 20,         
        marginBottom: 20,
    },
    image: {
        width: '105%',                
        height: '105%',             
    },
    title: {
        fontSize: width * 0.07,      
        fontWeight: 'bold',         
        textAlign: 'left',           
        width: '90%',                
        marginBottom: 10,
        marginRight: 33,
    },
    subtitle: {
        fontSize: width * 0.04,      
        color: '#777',
        textAlign: 'left',           
        width: '90%',                
        marginBottom: 10,
        marginRight: 33,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    signUpButton: {
        backgroundColor: '#00bdd6', 
        paddingVertical: height * 0.02,  
        paddingHorizontal: width * 0.05, 
        borderRadius: 20,           
        width: '100%',
        marginBottom: 4,             
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: width * 0.045,     
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#fff',     
        borderWidth: 0,
        paddingVertical: height * 0.02,  
        paddingHorizontal: width * 0.05, 
        borderRadius: 20,            
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#777',            
        fontSize: width * 0.045,     
        fontWeight: 'bold',
    },
    dotContainer: {
        flexDirection: 'row',        
        justifyContent: 'center',
        marginTop: 20,               
    },
    dot: {
        width: 10,                   
        height: 10,
        borderRadius: 5,             
        borderWidth: 1,              
        borderColor: '#00bdd6',      
        marginHorizontal: 5,         
    },
    activeDot: {
        backgroundColor: '#00bdd6',     
    },
});

export default HomeScreen;
