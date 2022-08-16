import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps {
  text: string;
  borderColor: string;
  children?:React.ReactNode;
  textColor: string;
  backgroundColor: string;
  onPressButton: () => void;
}

const AppButton = (props : ButtonProps) => {

  return (
      <TouchableOpacity activeOpacity={.5} onPress={props.onPressButton} style={[styles.button, {borderColor:props.borderColor}, {backgroundColor: props.backgroundColor}]}>
        <View style={styles.bView}>
          {props.children}
          <Text style={[styles.text, {color: props.textColor}, {}]}>{props.text}</Text>
        </View>
      </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    borderRadius: 8,
    width:"40%",
    height:"100%",
    borderWidth: 1,
    justifyContent:"center",
  },
  text: {
    textAlign:"center",
    fontSize: 20,
    marginLeft: 10,
    fontFamily:"Futura"
  },
  bView: {
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  }
})