import React from "react";
import { ImageBackground, StyleSheet } from "react-native";


const LogInScreen = () => {
    return (
    <ImageBackground style={styles.background} source={require("../assets/LogInScreen.jpg")}>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
});

export default LogInScreen;