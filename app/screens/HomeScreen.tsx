import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style= {styles.container}>
      <MapView style = {styles.map}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});