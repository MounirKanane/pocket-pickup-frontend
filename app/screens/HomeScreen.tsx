import { StyleSheet, Text, View, Dimensions, Button, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import BottomSheetApp from '../components/BottomSheet';

const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const HomeScreen = () => {
  
  
  return (
    <View style= {styles.container}>
      <Button title="Create event" onPress = { () => console.log("awesome")} />
      <MapView style={styles.map} initialRegion={{
        latitude: 42.3899,
        longitude: -72.5281,
        latitudeDelta: 0.010,
        longitudeDelta: 0.020
      }}
      >
        <Marker coordinate={{
          latitude: 42.3899,
          longitude: -72.5281
          }}
          pinColor="#ff8c00" 
          />
      </MapView> 
    <BottomSheetApp></BottomSheetApp>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: SCREEN_HEIGHT,
    width: Dimensions.get('screen').width,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  eventCard: {
     margin: 20
  }
});