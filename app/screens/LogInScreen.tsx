import React from "react";
import { ImageBackground, KeyboardAvoidingView, StyleSheet } from "react-native";


const LogInScreen = () => {
    return (
    // Ensures that user keyboard does not block input fields
    <KeyboardAvoidingView style={styles.background}> 
        <ImageBackground style={styles.background} source={require("../assets/LogInScreen.jpg")}>
            
        </ImageBackground>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
});

export default LogInScreen;