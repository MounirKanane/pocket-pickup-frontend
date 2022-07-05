import { StyleSheet, Text, View, Dimensions, Button, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';
import BottomSheet from '../components/BottomSheet';

const HomeScreen = () => {
  return (
    <View style= {styles.container}>
      <Button title="Create event" onPress = { () => console.log("awesome")} />
      <MapView style={styles.map}/>

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
    height: Dimensions.get('window').height,
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