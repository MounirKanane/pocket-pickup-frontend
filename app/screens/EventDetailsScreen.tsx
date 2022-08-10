import { Text, SafeAreaView, StyleSheet,View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import { AntDesign, Entypo,Ionicons } from '@expo/vector-icons'; 
import { Linking } from 'react-native';


const EventDetailsScreen = () =>  {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Basketball @ OHill</Text>
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
          <AntDesign name="clockcircle" size={40} color="orange" />
          <Text style={styles.iconText}>Started @ 8:00PM</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Ionicons name="people-sharp" size={40} color="orange" />
          <Text style={styles.iconText}>6/10</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Entypo name="location" size={40} color="orange" />
          <Text style={styles.addressText}
          onPress={() => Linking.openURL('http://maps.google.com')}
          >100 Commerce Way, Woburn, MA</Text>
        </View>
       </View>
    </SafeAreaView>
    )
}

export default EventDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    content:{
      width:"90%",
      height:"40%"
    },
    title: {
      fontSize: 30,
      width:"90%"
    },
    map: {
      ...StyleSheet.absoluteFillObject
    },
    infoContainer:{
      marginTop: 20,
      width: "90%",
    },
    iconTextContainer:{
      flexDirection: "row",
      alignItems:"center",
      marginTop: 15
    },
    iconText:{
      marginLeft: 20,
      fontSize: 20,
    },
    addressText:{
      fontSize:20,
      marginLeft: 20,
      marginTop: 8,
      color: "#7CB9E8",
      textDecorationLine: "underline"
    }
})