import React from "react";
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Button, View, Text } from "react-native";
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import axios from "axios";
import { server } from "../configs/configs"

 
WebBrowser.maybeCompleteAuthSession();

const LogInScreen = () => {
    const [idToken, setIdToken] = React.useState();
    const [userInfo, setUserInfo] = React.useState();

    const[request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "352608050675-rf29klrfj4edlraicag2ta1bbumtgf15.apps.googleusercontent.com",
        iosClientId: "352608050675-44rdabun6cfpr6obrviq3bgr5g0b9asu.apps.googleusercontent.com",
        expoClientId: "352608050675-i1c6te97b5qoa8rbdpu9n1d3g5ooa1p3.apps.googleusercontent.com"
    });

    React.useEffect(() => {
        if (response?.type === "success"){ 
            setIdToken(response.authentication.idToken);
        }
    }, [response]);

    const getUserData  = () => { axios.get(`${server}/user`, {token: idToken}).then( (result) => { console.log(result) }).catch((err) => console.log(err)) };

    getUserData();
    return (
    // Ensures that user keyboard does not block input fields
        <ImageBackground style={styles.background} source={require("../assets/LogInScreen.jpg")}>
            <Button 
            title={idToken ? "Get User Data" : "Login"}
            onPress={idToken ? getUserData : () => { promptAsync({showInRecents: true})}}
            />
                
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center"
    }
});

export default LogInScreen;