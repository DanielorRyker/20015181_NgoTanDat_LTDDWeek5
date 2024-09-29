import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <Image source={require("./assets/DATA/Image 20.png")} style={styles.imageLogin} />
            <Text style={styles.title}>Welcome!</Text>

            <View style={styles.inputContainer}>
                <Image source={require("./assets/DATA/Vector.png")} style={styles.icon} />
                <TextInput
                    placeholder="Enter your email address"
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputContainer}>
                <Image source={require("./assets/DATA/lock.png")} style={styles.icon} />
                <TextInput
                    placeholder="Enter your password"
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Image source={require("./assets/DATA/eye.png")} style={styles.icon} />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Product")}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginTop: 30,
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 16,
        paddingBottom: 50,
    },
    inputContainer: {
        flexDirection: "row",
        margin: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        color: "gray",
        fontWeight: "bold",
    },
    icon: {
        marginRight: 10,
    },
    button: {
        margin: 20,
        padding: 15,
        alignItems: "center",
        backgroundColor: "#4630EB",
        borderRadius: 50,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    imageLogin: {
        width: "100%",
        height: 200,
        justifyContent: 'flex-start',
    },
});

export default Login;
