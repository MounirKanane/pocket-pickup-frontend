import React from "react";
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text } from "react-native";


const LogInScreen = () => {
    return (
    // Ensures that user keyboard does not block input fields
    <KeyboardAvoidingView style={styles.background}> 
        <Text>
            Hello Zaid
        </Text>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LogInScreen;