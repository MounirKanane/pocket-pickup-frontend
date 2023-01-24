import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import React, {useState,useEffect,useRef} from 'react'
import * as Location from 'expo-location'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'


const PlaceEventScreen = () => {
  const [pin, setPin] = useState({
    latitude: 42.3868, // Needs to be current coordinate of screen or current location
    longitude: -72.5301,
  });
  const [region, setRegion ] = useState({
    latitude: 42.3868,
    longitude: -72.5301,
    latitudeDelta: 0.010,
    longitudeDelta: 0.020
  })
  const [address, setAddress] = useState("");
  const ref = useRef();

  // When address or pin change, update the address text and reverseGeo
  useEffect(() => {
    reverseGeocode();
    ref.current?.setAddressText(address);
  }, [address,pin]); // When pin,address change addressText should change

  // Cleaning Address Object returned by expo Location 
  const constructAddress = (addressObject) => {
    if(addressObject.city == null) {
      return "";
    }
    if(addressObject.street == null) {
      return addressObject.city;
    } else if(addressObject.streetNumber == null) {
      return addressObject.street + " "  + addressObject.city;
    } else {
      return addressObject.streetNumber + " " + addressObject.street + " "  + addressObject.city;
    }
  }

   const reverseGeocode = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync(pin);
    const addressObject = reverseGeocodedAddress[0];
    const cleanAddress = constructAddress(addressObject);
    setAddress(cleanAddress);
   }
   const regionChangeHandler = async (e) => {
    setRegion(e);
  };

  return (
    <View style={styles.container}>
       <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 42.3899, // lat and long come from back-end, same for map and pin
          longitude: -72.5281,
          latitudeDelta: 0.010, // these will remain constant
          longitudeDelta: 0.020
        }} 
        region={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta
        }}
        onRegionChangeComplete = {regionChangeHandler}
      >
        <Marker
         draggable
         coordinate={pin}
         onDragEnd={e => {
           setPin(e.nativeEvent.coordinate);
         }}
        />
      </MapView>

      <GooglePlacesAutocomplete
        ref={ref}
        placeholder= {'Search'}
        fetchDetails= {true}
        GooglePlacesSearchQuery= {{
          rankby: "distance"
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.010,
            longitudeDelta: 0.020
          });
          setPin(
            {latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
          });
        }}
        query={{
          key: "AIzaSyCWonk3s7DIuS20bICmmitwYlNr43xREOs",
          language: 'en',
          components: "country:us",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`
        }}
        styles = {{
          container: {flex: 0, position: "absolute", width: "92%", top: "8%", zIndex: 1},
          listView: { backgroundColor: "white" },
        }}
      />

      <Text style={styles.instruct}>Hold & Drag Pin to Event Location</Text>
      <TouchableOpacity style={styles.pinButton} 
        onPress={() => {
          setPin(region);
        }}>
        <Image style={styles.pin} source={require("../assets/images/pin.png")}></Image>        
      </TouchableOpacity>
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    height:"100%",
    width:"100%",
    borderRadius: 10
  },
  instruct: {
    top: "15%",
    position:"absolute",
    fontSize: 20,
    color: "black",
    textShadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    textShadowRadius: 3,
  },
  pinLocation: {
    top:"20%",
    position:"absolute",
    fontSize: 20,
    color: "black",
    textShadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    textShadowRadius: 3,
  },
  location: {
    top: "20%",
    position:"absolute",
    fontSize: 30,
    color: "black",
    textShadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    textShadowRadius: 3,
  },
  address: {
    top: "10%",
    position: "absolute",
    fontSize: 20,
    color: "black"
  }, 
  pinButton : {
    position: "absolute",
    bottom:"12%",
    right:"13%",
  },
  pin: {
    height: 50,
    width: 50,
    position:"absolute"
  },
  doneButton: {
    justifyContent:"center",
    alignItems:"center",
    position: "absolute",
    bottom:"5%",
    borderRadius: 10,
    backgroundColor:"orange",
    width: "30%",
    height: "5%"
  },
  doneText: {
    color:"white",
    fontSize: 25,
  }
})

export default PlaceEventScreen