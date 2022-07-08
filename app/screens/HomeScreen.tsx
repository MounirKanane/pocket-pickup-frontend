import { StyleSheet, Text, View, Dimensions, Button, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';
import BottomSheet from '../components/BottomSheet';
// import CircleButton from 'react-native-circle-button';
import GooglePlacesInput from '../components/GooglePlacesInput'

const HomeScreen = () => {
  return (
    <View style= {styles.container}>
      <MapView style={styles.map}/>
      <Button title="Create event" onPress = { () => console.log("awesome")} />
      {/* <View style={{ flex: 1 }}>
                <CircleButton size={45} />
      </View> */}

      <BottomSheet>
        <ScrollView>
          
        </ScrollView>
      </BottomSheet>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
});