import { Text, SafeAreaView, StyleSheet,View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MapView, {Marker} from 'react-native-maps'
import { AntDesign, Entypo,Ionicons,FontAwesome,FontAwesome5 } from '@expo/vector-icons'; 
import { Linking } from 'react-native';
import AppButton from '../components/AppButton';
import PeopleList from '../components/PeopleList';

//fonts
import {useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const ICON_SIZE = 30;
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const EventDetailsScreen = () =>  {
  const [isPressedO, setPressedO] = useState(false);
  const [isPressedB, setPressedB] = useState(false);

  const onPressO = () => {
    if (isPressedO) {
      setPressedO(false);
    } else {
      setPressedO(true);
      setPressedB(false);
    }
  }
  const onPressB = () => {
    if(isPressedB){
      setPressedB(false);
    } else {
      setPressedB(true);
      setPressedO(false);
    }
  }

  let [fonts] = useFonts({
    "Lobster": require('../assets/fonts/Lobster-Regular.ttf'),
    "Oleo" : require('../assets/fonts/OleoScriptSwashCaps-Regular.ttf'),
    "OleoBold" : require('../assets/fonts/OleoScriptSwashCaps-Bold.ttf'),
    "Titan": require('../assets/fonts/TitanOne-Regular.ttf'),
    "Perm": require('../assets/fonts/PermanentMarker.ttf'),
    "Racing": require('../assets/fonts/RacingSansOne.ttf'),
    "Futura": require('../assets/fonts/Futura.otf')
  })
  
  if(!fonts){
    return <AppLoading />;
  }

  return (
      <View style={styles.container}>
        <View style={styles.card}>
          <AntDesign style={styles.icon} name="back" size={25} color="black" />
          <Text style={styles.title}>Basketball 5v5 @ OHill</Text>
          <View style={styles.content}>
                <MapView style={styles.map} initialRegion={{
                latitude: 42.3899, // lat and long come from back-end, same for map and pin
                longitude: -72.5281,
                latitudeDelta: 0.010, // these will remain constant
                longitudeDelta: 0.020
              }} 
              
              >
                <Marker coordinate={{
                  latitude: 42.3899,
                  longitude: -72.5281
                  }}
                  />
              </MapView>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.iconTextContainer}>
              <AntDesign name="clockcircle" size={ICON_SIZE} color="orange" />
              <Text style={styles.iconText}>8:00PM-10:00PM</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <Ionicons name="people-sharp" size={ICON_SIZE} color="orange" />
              <Text style={styles.iconText}>6/10</Text><Text style={styles.comingText}>   (3 People On The Way)</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <Entypo name="bar-graph" size={ICON_SIZE} color="orange" />
              <Text style={styles.iconText}>Advanced</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <Entypo name="location" size={ICON_SIZE} color="orange" />
              <Text style={styles.addressText}
              onPress={() => Linking.openURL('http://maps.google.com')}
              >100 Commerce Way, Woburn, MA</Text>
            </View>
            <View style={styles.buttons}>
              <AppButton onPressButton={onPressB} text={"Coming"} borderColor={"black"} textColor={isPressedB ? "white" : "black"} backgroundColor={isPressedB ? "black" : "white"}><FontAwesome5 name="running" size={28} color={isPressedB ? "white" : "black"} /></AppButton>
              <AppButton  onPressButton={onPressO} text={"Here"} borderColor={"orange"} textColor={isPressedO ? "white": "orange"} backgroundColor={isPressedO ? "orange" : "white"}><FontAwesome name="plus-circle" size={28} color={isPressedO ? "white" : "orange"} /></AppButton>
            </View>
         </View>
        </View>
        <View style={styles.peopleContainer}>
          <PeopleList></PeopleList>
        </View>
      </View>
    )
}

export default EventDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#E8E8E8",
    },
    card: {
      shadowColor: "black",
      shadowOffset:{width: 1, height: 1},
      shadowOpacity: 0.4,
      shadowRadius: 2,
      borderRadius: 20,
      backgroundColor: "white",
      width:"100%",
      height: "65%",
      alignItems:"center" ,
    },
    content: {
      width: SCREEN_WIDTH/1.1,
      height:SCREEN_HEIGHT/4
    },
    icon: {
      position: "absolute",
      top: 20,
      left: 20,
      alignSelf: "flex-start",
    },
    title: {
      fontSize: 30,
      fontFamily:"Racing",
      width:"90%",
      marginTop: SCREEN_HEIGHT/15,
      marginLeft: 10
    },
    map: {
      height:"100%",
      width:"100%",
      borderRadius: 10
    },
    infoContainer: {
      marginTop: SCREEN_HEIGHT/100,
      width: "90%",
    },
    iconTextContainer:{
      flexDirection: "row",
      alignItems:"center",
      marginTop: SCREEN_HEIGHT/97
    },
    iconText:{
      fontFamily: "Racing",
      marginLeft: 20,
      fontSize: 20,
    },
    comingText: {
      color:"gray",
      fontFamily:"Racing",
      fontSize: 18
    },
    addressText: {
      fontFamily: "Racing",
      fontSize:20,
      marginLeft: 20,
      marginTop: SCREEN_HEIGHT/100,
      color: "#7CB9E8",
      textDecorationLine: "underline"
    },
    buttons: {
      marginTop: SCREEN_HEIGHT/40,
      flexDirection:"row",
      justifyContent:"space-between",
      height: "15%"
    },
    orangeButtonPressed: {
      color: "white",
    },
    peopleContainer: {
      flex: 1,
      position:"absolute",
      top: "68%",
      width: "90%",
    }
})