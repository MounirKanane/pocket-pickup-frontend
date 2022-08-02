import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Text, Image, View, StatusBar  } from "react-native";
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import axios from "axios";
import { server } from "../configs/configs"

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

WebBrowser.maybeCompleteAuthSession();

const LogInScreen = () => {
    
    
    const [idToken, setIdToken] = React.useState();
    
    const[request, response, promptAsync] = Google.useIdTokenAuthRequest({
        androidClientId: "352608050675-rf29klrfj4edlraicag2ta1bbumtgf15.apps.googleusercontent.com",
        iosClientId: "352608050675-44rdabun6cfpr6obrviq3bgr5g0b9asu.apps.googleusercontent.com",
        expoClientId: "352608050675-i1c6te97b5qoa8rbdpu9n1d3g5ooa1p3.apps.googleusercontent.com"
    });

    React.useEffect(() => {
        if (response?.type === "success"){ 
            console.log(response)
            setIdToken(response.params.id_token);
        }
    }, [response]);

    
    let [fonts] = useFonts({
        "Lobster": require('../assets/fonts/Lobster-Regular.ttf'),
        "Oleo" : require('../assets/fonts/OleoScriptSwashCaps-Regular.ttf'),
        "OleoBold" : require('../assets/fonts/OleoScriptSwashCaps-Bold.ttf'),
        "Titan": require('../assets/fonts/TitanOne-Regular.ttf'),
        "Perm": require('../assets/fonts/PermanentMarker.ttf'),
        "Racing": require('../assets/fonts/RacingSansOne.ttf'),
        "Futura": require('../assets/fonts/Futura.otf')
    })

    


    const getUserData = () => { axios.get(`${server}/user`, {token: idToken}).then( (result) => { console.log(result) }).catch((err) => console.error(err)) };
    
    if(!fonts){
        return <AppLoading />;
    }

    return (
        <ImageBackground style={styles.background} source={require("../assets/images/LogInScreen.jpg")}>
            <StatusBar hidden />
            <SafeAreaView style={styles.container}>

                <View style={styles.overlay} />
                    <View style={styles.header}>
                    <Text style={styles.title}> POCKET<Text style={styles.orange}> PICK-UP </Text></Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.logos}>
                        <TouchableOpacity 
                        onPress={idToken ? getUserData : () => { promptAsync({useProxy: false, showInRecents: true})}}>
                            <Image style={styles.image} source={require('../assets/images/Google3x.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={idToken ? getUserData : () => { promptAsync({useProxy: false, showInRecents: true})}}>
                            <Image style={styles.apple} source={require('../assets/images/AppleWhite3x.png')} />
                        </TouchableOpacity>
                    </View>
                <TouchableOpacity><Text style={styles.guest}>Continue as guest</Text></TouchableOpacity>
                </View>
                
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container:{
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
    },
    header: {
        alignItems:"center",
        justifyContent: "space-between",
        position: "relative",
        top: "1%",
        width:"80%",
    },
    title: {
        fontSize: 60,
        color: "white",
        fontFamily: "Racing",
        textShadowColor:'white',
        textShadowOffset:{width: .1, height: .1},
        textShadowRadius:3,
    },
    caption: {
        position:"relative",
        bottom:10,
        color:"white", 
        fontSize: 28, 
        fontFamily:"Oleo",   
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:5
    },
    logos: {
        flexDirection: "row",
        alignItems: "center",
        width: "40%",
        justifyContent: "space-between"
    },
    image:{
        width: 80,
        height: 80
    },
    apple:{
        width: 68,
        height: 68,
        borderRadius: 5
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      orange: {
        color: "#ff8c00",
        textShadowRadius: .5
      },
      footer: {
        alignItems: "center"
      },
      guest: {
        color: "#E8E8E8",
        fontFamily: "Futura",
        marginTop: 15,
        fontSize: 20
      }
});

export default LogInScreen;